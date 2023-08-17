import React, { createContext, useContext, useEffect, useState } from "react";
import cartService from "../services/cart.service";
import { useAuthContext } from "./auth";

const initialCartDetails = {
  cartData: [],
  updateCart: () => {
    console.log("sfuiuifurugrui"); //ayasudhi ave che cool ma nechenu main function nahi avtu
  },
  emptyCart: () => {},
};

const cartContext = createContext(initialCartDetails);

export const CartWrapper = ({ children }) => {
  const authContext = useAuthContext();
  const [cartData, setCartData] = useState([]);

  const emptyCart = () => {
    setCartData([]);
  };

  const updateCart = (updatedCartList) => {
    console.log("jhuirhuigr");
    if (updatedCartList) {
      setCartData(updatedCartList);
    } else if (authContext.user.id) {
      cartService.getList(authContext.user.id).then((res) => setCartData(res));
    }
  };

  useEffect(() => {
    updateCart();
  }, [authContext.user.id]);

  const value = {
    cartData,
    emptyCart,
    updateCart,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(cartContext);
};