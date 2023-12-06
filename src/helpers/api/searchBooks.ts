import { AxiosError } from "axios";
import { BOOKS_PER_PAGE } from "../constants/constants";
import { IBooksRes } from "../models/booksRes";
import { CategoriesType } from "../models/categories";
import { SortingByType } from "../models/sortingByVariants";
import { googleBooksApi } from "./googleApiBooksInstance";

interface ISearchBooksParams {
  q: string;
  subject: CategoriesType;
  orderBy: SortingByType;
  startIndex?: number;
}

export const searchBooks = async ({
  q,
  subject,
  orderBy,
  startIndex,
}: ISearchBooksParams): Promise<IBooksRes | undefined> => {
  try {
    if (q) {
      const queryString = subject ? `${q}+subject:${subject}` : q;

      const { data } = await googleBooksApi.get("", {
        params: {
          q: queryString,
          orderBy,
          maxResults: BOOKS_PER_PAGE,
          startIndex,
        },
      });

      return data;
    } else {
      return { items: [], totalItems: 0 };
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.error.message || "Unknown error");
    }
  }
};
