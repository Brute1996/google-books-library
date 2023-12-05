import { Typography } from "@mui/material";
import React from "react";

interface FoundResultProps {
  totalItems: number;
}

const FoundResult: React.FC<FoundResultProps> = ({ totalItems }) => {
  return (
    <Typography className="found-result" textAlign="center" variant="h6">
      Found {totalItems} results
    </Typography>
  );
};

export default FoundResult;
