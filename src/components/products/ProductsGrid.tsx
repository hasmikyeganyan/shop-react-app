import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategoryProducts } from "../../services/products";
import { setProducts } from "../../store/products/reducer";
import { RootState, useAppSelector } from "../../store/store";

export const ProductsGrid = () => {
  const { data } = useAppSelector((state: RootState) => state.products);
  const { data: categories } = useAppSelector(
    (state: RootState) => state.categories
  );

  const dispatch = useDispatch();

  const onClick = (title: string) => {
    fetchCategoryProducts(title).then((products) =>
      dispatch(setProducts(products))
    );
  };

  return (
    <div className="container">
      <h3 className="d-flex justify-content-center mt-3 ">Products</h3>
      <div className="d-flex justify-content-between align-items-center">
        <ul className="d-flex list-style-none">
          {categories.map((item, i) => (
            <li
              className="p-1 text-capitalize cursor-pointer mx-3 my-2"
              onClick={() => onClick(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <i className="fa-solid fa-filter "></i>
      </div>

      <div className="row justify-content-between my-5">
        {data.map((item) => (
          <div className="card d-flex flex-column justify-content-between border col-12 col-md-6 col-lg-3 p-5 border-0 border-bottom">
            <Link key={item.id} to={`/${item.id}`} className="text-dark">
              <img className="card-img-top" src={item.image} alt={item.title} />
              <div className="card-body px-0">
                <h6 className="card-title pt-5">{item.title}</h6>
                <p className="card-text">
                  <small className="text-muted">${item.price}</small>
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
