import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../helpers/hooks/hooks";
import { searchBooks } from "../../../helpers/api/searchBooks";
import { loadMoreBooks, setStartIndex } from "../../redux/appSlice/appSlice";
import { LoadingButton } from "@mui/lab";
import { BOOKS_PER_PAGE } from "../../../helpers/constants/constants";

const LoadMoreButton = () => {
  const [loadMoreIsLoading, setLoadMoreIsLoading] = useState(false);
  const { searchQuery, selectedCategory, selectedSortingBy, startIndex } =
    useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const handleLoadMore = async () => {
    dispatch(setStartIndex(BOOKS_PER_PAGE));

    setLoadMoreIsLoading(true);

    (async () => {
      try {
        const booksRes = await searchBooks({
          q: searchQuery,
          subject: selectedCategory,
          orderBy: selectedSortingBy,
          startIndex: startIndex + BOOKS_PER_PAGE,
        });

        if (booksRes) {
          dispatch(loadMoreBooks(booksRes));
        }
      } catch (error) {
      } finally {
        setLoadMoreIsLoading(false);
      }
    })();
  };

  return (
    <LoadingButton
      onClick={() => handleLoadMore()}
      variant="contained"
      type="button"
      loading={loadMoreIsLoading}
    >
      Load more
    </LoadingButton>
  );
};

export default LoadMoreButton;
