import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { searchBooks } from "../../../helpers/api/searchBooks";
import { useAppDispatch, useAppSelector } from "../../../helpers/hooks/hooks";
import {
  setBooks,
  setIsBooksLoaded,
  setSearchQuery,
} from "../../redux/appSlice/appSlice";
import { SearchWrapper } from "./Search.styled";
import { URLSearchParamsInit, useNavigate } from "react-router-dom";

const Search = () => {
  const { searchQuery, selectedCategory, selectedSortingBy } = useAppSelector(
    (state) => state.app
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleBooksSearch = async () => {
    dispatch(setIsBooksLoaded(false));

    const queryParams: URLSearchParamsInit = {
      q: searchQuery,
      orderBy: selectedSortingBy,
    };
    if (selectedCategory) {
      queryParams.subject = selectedCategory;
    }

    navigate({
      pathname: "/",
      search: new URLSearchParams(queryParams as {}).toString(),
    });

    try {
      const booksRes = await searchBooks({
        q: searchQuery,
        orderBy: selectedSortingBy,
        subject: selectedCategory,
      });

      if (booksRes) {
        dispatch(setBooks(booksRes));
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }
    } finally {
      dispatch(setIsBooksLoaded(true));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <SearchWrapper>
      <TextField
        error={!!errorMessage}
        helperText={errorMessage ? errorMessage : null}
        fullWidth
        name="search"
        value={searchQuery}
        onChange={handleChange}
        label="Search book"
        variant="outlined"
        size="small"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleBooksSearch();
          }
        }}
      />
      <IconButton
        className="search-icon-btn"
        type="button"
        onClick={() => handleBooksSearch()}
      >
        <SearchIcon />
      </IconButton>
    </SearchWrapper>
  );
};

export default Search;
