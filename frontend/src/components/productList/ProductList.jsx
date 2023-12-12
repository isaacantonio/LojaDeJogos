import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ProductCard from "../productCard/ProductCard";
import { ApiContext } from "../../context/Api";

function ProductList() {
  const { getProducts, getFindProducts } = useContext(ApiContext);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [plataformaFilter, setPlataformaFiltro] = useState("");
  const handleChange = (event) => {
    setPlataformaFiltro(event.target.value);
  };
  const test = async () => {
    let resp = await getProducts();
    if (resp !== "error") {
      setProducts(resp);
    }
  };
  const getProductsbyFilter = async () => {
    let resp = await getFindProducts(plataformaFilter, filter);
    if (resp !== "error") {
      setProducts(resp);
    }
  };
  useEffect(() => test, []);
  useEffect(() => {
    getProductsbyFilter();
  }, [plataformaFilter, filter]);
  return (
    <>
      <div className="filters">
        <div className="search">
          <SearchIcon sx={{ color: "#fff", mr: 1, my: 0.5 }} />
          <input
            type="text"
            placeholder="Buscar"
            onChange={(e) => setFilter(e.target.value)}
          ></input>
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
        {products.length > 0 ? (
          products.map((value, index) => {
            return (
              <ProductCard
                key={index + value.id}
                image={value.imagem}
                price={value.valor}
                title={value.titulo}
                plataform={value.plataformas}
                description={value.descricao}
                id={value.id}
              />
            );
          })
        ) : (
          <div>Sem Produtos</div>
        )}
      </div>
    </>
  );
}
export default ProductList;
