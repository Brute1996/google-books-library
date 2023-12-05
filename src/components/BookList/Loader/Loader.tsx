import { CircularProgress } from "@mui/material";
import React from "react";
import { LoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrapper>
      <CircularProgress size={120} />
    </LoaderWrapper>
  );
};

export default Loader;
