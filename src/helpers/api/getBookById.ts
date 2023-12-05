import { IBooksItem } from "../models/booksRes";
import { googleBooksApi } from "./googleApiBooksInstance";

export const getBookById = async (id: string) => {
  try {
    const { data } = await googleBooksApi.get(`/${id}`);

    return data as IBooksItem;
  } catch (error) {}
};
