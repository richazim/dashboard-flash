"use client";
import { styled, Container, Box } from "@mui/material";
import React from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";
import Footer from "./layout/footer/page";
import Topbar from "./layout/header/Topbar";
import baselightTheme from "@/utils/theme/theme.mui";

const MainWrapper = styled("div")(() => ({
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  paddingBottom: "25px",
}));



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <MainWrapper>
      <PageWrapper>

        {/* <Topbar /> */}

        <Sidebar/>

        <Box
          sx={{
            [baselightTheme.breakpoints.up("lg")]: {
              marginLeft: '270px',
            },
          }}
        >

          <Header />

          <Container
            sx={{
              paddingTop: "20px",
              maxWidth: "1200px",
              minHeight: 'calc(100vh - 240px)'
            }}
          >
            <Box>{children}</Box>
          </Container>

          <Footer />
          
        </Box>
        
      </PageWrapper>
    </MainWrapper>
  );
}

