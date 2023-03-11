import { useDispatch } from "react-redux";
import "../../assets/styles/style.css";
import { fetchCategoryProducts } from "../../services/products";
import { setProducts } from "../../store/products/reducer";
import { RootState, useAppSelector } from "../../store/store";

const Navbar = () => {
  const { data } = useAppSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  const onClick = (title: string) => {
    fetchCategoryProducts(title).then((products) =>
      dispatch(setProducts(products))
    );
  };

  return (
    <div className="nav-scroller py-1 container ">
      <nav className="nav d-flex justify-content-between ">
        {data.map((item, i) => (
          <li
            className="p-1 text-capitalize cursor-pointer "
            onClick={() => onClick(item.title)}
          >
            {item.title}
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
