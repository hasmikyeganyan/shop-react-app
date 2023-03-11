import { useEffect } from "react";
import Main from "../components/header/Main";
import { ProductsGrid } from "../components/products/ProductsGrid";
import { fetchProducts } from "../services/products";
import { setProducts } from "../store/products/reducer";
import { useAppDispatch } from "../store/store";
import { MainLayout } from "./MainLayout";

const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchProducts().then((products) => dispatch(setProducts(products)));
  }, []);

  return (
    <MainLayout>
      <Main />
      <ProductsGrid />
    </MainLayout>
  );
};

export default HomePage;
