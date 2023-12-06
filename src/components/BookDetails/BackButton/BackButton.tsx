import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="back-button-wrapper">
      <Button
        variant="contained"
        onClick={() =>
          location.state?.comeFromPage ? navigate(-1) : navigate("/")
        }
      >
        Back
      </Button>
    </div>
  );
};

export default BackButton;
