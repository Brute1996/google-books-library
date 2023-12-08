import { useLocation } from "react-router-dom";
import {
  setBooks,
  setIsBooksLoaded,
} from "../../components/redux/appSlice/appSlice";
import { searchBooks } from "../api/searchBooks";

import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";

const useSearchBooks = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { books, selectedCategory, searchQuery, selectedSortingBy } =
    useAppSelector((state) => state.app);

  useEffect(() => {
    if (!location.search || books) {
      return;
    }

    dispatch(setIsBooksLoaded(false));

    (async () => {
      try {
        const booksRes = await searchBooks({
          q: searchQuery,
          orderBy: selectedSortingBy,
          subject: selectedCategory || "",
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
