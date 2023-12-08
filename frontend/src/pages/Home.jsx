import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Header from "../components/header/Header";

import { useState } from "react";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
