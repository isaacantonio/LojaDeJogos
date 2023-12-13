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
import { Link, Outlet } from "react-router-dom";

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
      <div className="footer">
        <Link to={"/"}>
          <p>Loja de Jogos</p>
        </Link>
        <Link to={"sobrenos"}>
          <p>Sobre Nós</p>
        </Link>
        <Link to={"contato"}>
          <p>Contato</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
