import React, { PropsWithChildren, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/header/Navbar";
import { fetchCategories } from "../services/categories";
import { setCategories } from "../store/categories/reducer";
import { useAppDispatch } from "../store/store";

export const MainLayout = (props: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchCategories().then((categories) => dispatch(setCategories(categories)));
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};
