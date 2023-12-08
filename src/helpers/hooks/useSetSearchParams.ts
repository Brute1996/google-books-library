import { useSearchParams } from "react-router-dom";
import {
  setSearchQuery,
  setSelectedCategory,
  setSelectedSortingBy,
} from "../../components/redux/appSlice/appSlice";
import { CategoriesType } from "../models/categories";
import { SortingByType } from "../models/sortingByVariants";
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { categoriesList } from "../constants/categoriesList";
import { sortingByVariants } from "../constants/sortingByVariants";

const useSetSearchParams = () => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQueryParam = searchParams.get("q") as string;
  const orderByParam = searchParams.get("orderBy") as SortingByType;
  const subjectParam = searchParams.get("subject") as CategoriesType;

  useEffect(() => {
    const validCategory = categoriesList.some(
      (category) => category === subjectParam
    )
      ? subjectParam
      : "";

    const validSortBy = sortingByVariants.some(
      (sortVariant) => sortVariant === orderByParam
    )
      ? orderByParam
      : "relevance";

    dispatch(setSearchQuery(searchQueryParam));
    dispatch(setSelectedCategory(validCategory));
    dispatch(setSelectedSortingBy(validSortBy));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useSetSearchParams;
