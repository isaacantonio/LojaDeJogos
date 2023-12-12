import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TocIcon from "@mui/icons-material/Toc";
import Logout from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { useContext, useState } from "react";
import { ApiContext } from "../../context/Api";
import { useNavigate } from "react-router-dom";
import { CartContex } from "../../context/CartContext";

function DropDownMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { user } = useContext(ApiContext);
  const { removeAllCartItem } = useContext(CartContex);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    let value = e.target.value;
    if (value === 2) {
      localStorage.removeItem("user");
      navigate(0);
      removeAllCartItem();
    } else if (value === 1) {
      navigate("/meuspedidos");
    } else if (value === 3) {
      navigate("/dashboard/allproduct");
    }
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>{user.nome[0]}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem value={1} onClick={handleClose}>
          Meus Pedidos
        </MenuItem>
        {user.papel === "ADMINISTRADOR" && (
          <MenuItem value={3} onClick={handleClose}>
            Gerenciar produtos
          </MenuItem>
        )}
        <Divider />
        <MenuItem value={2} onClick={handleClose} style={{ color: "#d94949" }}>
          <ListItemIcon>
            <Logout color="error" fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </Menu>
    </>
  );
}

export default DropDownMenu;
