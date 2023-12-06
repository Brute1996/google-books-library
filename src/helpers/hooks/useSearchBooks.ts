import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import {
  setBooks,
  setIsBooksLoaded,
  setSearchQuery,
  setSelectedCategory,
  setSelectedSortingBy,
} from "../../components/redux/appSlice/appSlice";
import { searchBooks } from "../api/searchBooks";
import { CategoriesType } from "../models/categories";
import { SortingByType } from "../models/sortingByVariants";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import { categoriesList } from "../constants/categoriesList";
import { sortingByVariants } from "../constants/sortingByVariants";

const useSearchBooks = () => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQueryParam = searchParams.get("q") as string;
  const orderByParam = searchParams.get("orderBy") as SortingByType;
  const subjectParam = searchParams.get("subject") as CategoriesType;
  const { books, selectedCategory } = useAppSelector((state) => state.app);

  useEffect(() => {
    if ((!searchQueryParam && !orderByParam) || books) {
      return;
    }

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

    dispatch(setIsBooksLoaded(false));
    dispatch(setSearchQuery(searchQueryParam));
    dispatch(setSelectedCategory(validCategory));
    dispatch(setSelectedSortingBy(validSortBy));

    const queryParams: URLSearchParamsInit = {
      q: searchQueryParam,
      orderBy: validSortBy,
    };
    if (selectedCategory) {
      queryParams.subject = validCategory;
    }

    (async () => {
      try {
        const booksRes = await searchBooks({
          q: searchQueryParam,
          orderBy: validSortBy,
          subject: validCategory || "",
        });

        if (booksRes) {
          dispatch(setBooks(booksRes));
        }
      } catch (error) {
      } finally {
        dispatch(setIsBooksLoaded(true));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useSearchBooks;
