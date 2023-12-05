import React, { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="xl">
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default MainLayout;
