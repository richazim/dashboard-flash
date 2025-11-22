'use client';
import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
  return (
    <Box sx={{ pt: 6, textAlign: "center" }}>
      <Typography>
        © {new Date().getFullYear()} All rights reserved by{" "}
        <Link href="https://azim7.vercel.app/">
          <Typography color='primary.main' component='span'>
          Azim7.vercel.app
          </Typography>
        </Link>{" "}
      </Typography>
    </Box>
  );
};

export default Footer;
