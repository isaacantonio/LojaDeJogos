import { useContext, useState } from "react";
import "./style.css";
import { ApiContext } from "../../context/Api";
import {
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const plataforma = ["PC", "Xbox", "Playstation"];

function AddProduct() {
  const { createProduct } = useContext(ApiContext);
  const [chipData, setChipData] = useState([]);
  const [tag, setTag] = useState("");
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", e.target[4].files[0]);
    let values = {
      titulo: e.target[0].value,
      descricao: e.target[1].value,
      valor: e.target[2].value,
      categoria: e.target[3].value,
      fotos: formData,
    };
    let resp = await createProduct(values);

    // if (resp === "success") {
    //   successNotification("Conta criada com sucesso!");
    //   navigate(0);
    // } else {
    //   errorNotification("Erro ao criar conta!", "Por favor, tente novamente.");
    // }
  };
  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const addTag = (e) => {
    e.preventDefault();
    let data = [...chipData];
    let key = data.length + 1;
    if (tag !== "") {
      data.push({ key, label: tag });
      setChipData(data);
      setTag("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formAddProductContainer">
        <div className="inputAddProductContainer">
          <label>Título</label>
          <input name="titulo" required type="text" />
        </div>
        <div className="inputAddProductContainer">
          <label>Descrição</label>
          <input name="descricao" required type="text" />
        </div>
        <div className="inputAddProductContainer">
          <label>Valor (R$)</label>
          <input name="valor" required type="number" />
        </div>
        <div className="inputAddProductContainer">
          <label>Categoria</label>
          <input name="categoria" required type="text" />
        </div>
        <div className="inputAddProductContainer">
          <label>Foto</label>
          <input name="fotos" required type="file" accept="image/*" />
        </div>
        <div>
          <FormControl sx={{ width: 300, color: "#fff" }}>
            <InputLabel
              sx={{ color: "#fff" }}
              id="demo-multiple-checkbox-label"
            >
              Plataforma
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Plataforma" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              sx={{ color: "#fff" }}
            >
              {plataforma.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <div
            className="inputAddProductContainer"
            style={{ marginBottom: "8px" }}
          >
            <label>Tags</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <input
                name="tags"
                required
                type="text"
                onChange={(e) => setTag(e.target.value)}
                value={tag}
              />
              <button style={{ fontSize: "8pt" }} onClick={(e) => addTag(e)}>
                Adicionar
              </button>
            </div>
          </div>
          {chipData.length > 0 && (
            <Paper
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
                minHeight: "44px",
                backgroundColor: "#384657",
                p: 0.5,
                m: 0,
              }}
              component="ul"
            >
              {chipData.map((data, idx) => {
                return (
                  <ListItem key={data.label + idx}>
                    <Chip
                      sx={{ backgroundColor: "#fff" }}
                      label={data.label}
                      onDelete={handleDelete(data)}
                    />
                  </ListItem>
                );
              })}
            </Paper>
          )}
        </div>
        <button>Criar</button>
      </form>
    </div>
  );
}

export default AddProduct;
