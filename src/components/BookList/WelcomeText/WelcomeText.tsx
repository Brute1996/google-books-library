import { Typography } from "@mui/material";
import React from "react";
import { WelcomeTextWrapper } from "./WelcomeText.styled";

const WelcomeText = () => {
  return (
    <WelcomeTextWrapper>
      <Typography variant="h3">Welcome to the library!</Typography>
      <Typography variant="subtitle1">
        To search books use search input
      </Typography>
    </WelcomeTextWrapper>
  );
};

export default WelcomeText;
