import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../services/products";
import { setProduct } from "../store/products/reducer";
import { RootState, useAppSelector } from "../store/store";
import { MainLayout } from "./MainLayout";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useAppSelector((state: RootState) => state.products);

  useEffect(() => {
    if (id)
      fetchProduct(+id).then(
        (product) => product && dispatch(setProduct(product))
      );
  }, [id]);

  return (
    <MainLayout>
      <div className="container my-5">
        {product ? (
          <div>
            <h3>{product.title}</h3>
            <div className="d-flex">
              <img className="mt-5 px-5" src={product.image} width={400} />
              <div className="mt-5">
                <h4>{product.title}</h4>

                <small className="text-secondary">{product.category}</small>
                <br />
                <small className="text-secondary">${product.price}</small>
                <br />
                <button className="btn btn-secondary ">Buy</button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </MainLayout>
  );
};

export default ProductPage;
