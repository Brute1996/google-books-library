import axios from "axios";

export const googleBooksApi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

googleBooksApi.defaults.params = {
  key: "AIzaSyBBA37PHb5UjrZfGBvNsHUF8xct7TRybJ8",
};
