import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "../productCard/ProductCard";
import { ApiContext } from "../../context/Api";

function ProductList() {
  const { getProducts } = useContext(ApiContext);
  const [teste, setTESTE] = useState("");
  const [plataformaFilter, setPlataformaFiltro] = useState("");
  const handleChange = (event) => {
    setPlataformaFiltro(event.target.value);
  };
  const test = async () => {
    let resp = await getProducts();
    setTESTE(resp[0].fotos[0]);
    console.log(resp);
  };
  useEffect(() => test, []);
  return (
    <>
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
            value={plataformaFilter}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            <MenuItem value={"PC"}>Pc</MenuItem>
            <MenuItem value={"XBOX"}>Xbox</MenuItem>
            <MenuItem value={"PLAYSTATION"}>Playstation</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="containercards">
        <ProductCard
          image={teste}
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
    </>
  );
}
export default ProductList;
