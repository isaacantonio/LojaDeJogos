import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Header from "../components/header/Header";
import ProductCard from "../components/productCard/ProductCard";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Home() {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
        <div className="filters">
          <div className="search">
            <SearchIcon sx={{ color: "#fff", mr: 1, my: 0.5 }} />
            <input type="text" placeholder="Buscar"></input>
          </div>
          <FormControl
            variant="filled"
            sx={{ m: 1, minWidth: 130 }}
            style={{ background: "#202b39", borderRadius: "6px" }}
          >
            <InputLabel id="demo-simple-select-filled-label">
              Plataforma
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={10}>Windows</MenuItem>
              <MenuItem value={20}>Xbox</MenuItem>
              <MenuItem value={30}>Playstation</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="containercards">
          <ProductCard
            image="https://upload.wikimedia.org/wikipedia/pt/8/80/Grand_Theft_Auto_V_capa.png"
            price={"99,99"}
            title="Grand Theft Auto V"
            plataform={["ps", "windows", "xbox"]}
            id={1}
          />
          <ProductCard
            image="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
            price={"199,99"}
            title="Red Dead Redemption 2"
            plataform={["ps", "windows", "xbox"]}
            id={2}
          />
          <ProductCard
            image="https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000014724/72ce0a17215521a167c3da579db4cc48a2f7a52eacc81ad985ba20fd6817fdc2"
            price={"249,99"}
            title="Hogwarts Legacy"
            plataform={["ps", "windows", "xbox"]}
            id={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
