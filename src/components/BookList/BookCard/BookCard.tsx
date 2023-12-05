import { Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { IBooksItem } from "../../../helpers/models/booksRes";
import { BookCardWrapper } from "./BookCard.styled";
import { Link, useLocation } from "react-router-dom";
import { NOT_FOUND_IMG } from "../../../helpers/constants/constants";

interface BookCardProps {
  book: IBooksItem;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { imageLinks, title, categories, authors } = book.volumeInfo;
  const { pathname, search } = useLocation();

  return (
    <BookCardWrapper>
      <Link
        to={`/book/${book.id}`}
        state={{ comeFromPage: pathname + search, book }}
      >
        <Paper className="paper" elevation={4}>
          <div className="img-wrapper">
            <img
              loading="lazy"
              src={imageLinks?.thumbnail || NOT_FOUND_IMG}
              alt={title || "Title not found"}
            />
          </div>
          <div className="info">
            <div>
              <Typography className="categories">
                {categories?.length > 0 ? categories[0] : ""}
              </Typography>
              <Typography className="title" component="h3" variant="h6">
                {title || " "}
              </Typography>
            </div>
            <Divider sx={{ margin: "6px 0" }} />

            {authors?.length > 0 && (
              <Typography color="gray">{authors.join(", ")}</Typography>
            )}
          </div>
        </Paper>
      </Link>
    </BookCardWrapper>
  );
};

export default BookCard;
