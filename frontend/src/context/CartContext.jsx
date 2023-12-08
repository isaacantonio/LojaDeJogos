import { createContext, useEffect, useState } from "react";

export const CartContex = createContext([]);

export function CartProvider({ children }) {
  const [cartStore, setCartStore] = useState([]);
  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart !== null) {
      setCartStore(JSON.parse(cart));
    }
  }, []);

  const saveCartItem = (value) => {
    let saveValue = cartStore;
    let flag = true;
    cartStore.forEach((item) => {
      if (item.id === value.id) {
        flag = false;
      }
    });
    if (flag) {
      saveValue.push({
        title: value.title,
        price: value.price,
        plataform: value.plataform,
        id: value.id,
        image: value.image,
      });
      setCartStore("");
      setTimeout(() => {
        setCartStore(saveValue);
      }, 10);
      localStorage.setItem("cart", JSON.stringify(saveValue));
    }
  };

  const removeCartItem = (value) => {
    let saveValue = cartStore;
    let flag = -1;
    cartStore.forEach((item, index) => {
      if (item.id === value.id) {
        flag = index;
      }
    });
    if (flag !== -1) {
      saveValue.pop(flag);
      setCartStore("");
      setTimeout(() => {
        setCartStore(saveValue);
      }, 10);
      localStorage.setItem("cart", JSON.stringify(saveValue));
    }
  };
  return (
    <CartContex.Provider value={{ cartStore, saveCartItem }}>
      {children}
    </CartContex.Provider>
  );
}
