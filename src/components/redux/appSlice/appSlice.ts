/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CategoriesType } from "../../../helpers/models/categories";
import { SortingByType } from "../../../helpers/models/sortingByVariants";
import { IBooksRes } from "../../../helpers/models/booksRes";

interface appState {
  searchQuery: string;
  selectedCategory: CategoriesType;
  selectedSortingBy: SortingByType;
  isBooksLoad: boolean;
  books: IBooksRes | null;
  startIndex: number;
}

const initialState: appState = {
  searchQuery: "",
  selectedCategory: "",
  selectedSortingBy: "relevance",
  isBooksLoad: true,
  books: null,
  startIndex: 0,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<CategoriesType>) => {
      state.selectedCategory = action.payload;
    },
    setSelectedSortingBy: (state, action: PayloadAction<SortingByType>) => {
      state.selectedSortingBy = action.payload;
    },
    setIsBooksLoaded: (state, action: PayloadAction<boolean>) => {
      state.isBooksLoad = action.payload;
    },
    setBooks: (state, action: PayloadAction<IBooksRes>) => {
      state.books = action.payload;
      state.startIndex = 0;
    },
    loadMoreBooks: (state, action: PayloadAction<IBooksRes>) => {
      if (state.books) {
        state.books.items = [...state.books.items, ...action.payload.items];
      }
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex += action.payload;
    },
  },
});

export const {
  setSearchQuery,
  setSelectedCategory,
  setSelectedSortingBy,
  setIsBooksLoaded,
  setBooks,
  loadMoreBooks,
  setStartIndex,
} = appSlice.actions;

export default appSlice.reducer;