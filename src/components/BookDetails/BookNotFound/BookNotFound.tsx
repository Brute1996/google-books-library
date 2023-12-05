import { Typography } from "@mui/material";
import React from "react";
import { BookNotFoundWrapper } from "./BookNotFound.styled";

const BookNotFound = () => {
  return (
    <BookNotFoundWrapper>
      <Typography variant="h3">Book not found</Typography>
    </BookNotFoundWrapper>
  );
};

export default BookNotFound;
