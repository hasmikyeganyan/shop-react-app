import logo from "../../assets/images/logo.png";
import group from "../../assets/images/group.png";
import "../../assets/styles/style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="store-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <i className="fa fa-search"></i>
          </div>
          <Link
            className="col-4 text-center d-flex align-items-center gap-2 justify-content-center"
            to={"/"}
          >
            <img className="store-header-logo" src={group} alt="decor" />
            <img className="store-header-logo" src={logo} alt="logo" />
            <img className="store-header-logo" src={group} alt="decor" />
          </Link>
          <div className="gap-3 col-4 d-flex justify-content-end align-items-center">
            <p className="mb-0">
              <i className="fa fa-user px-2"></i>Account
            </p>
            <p className="mb-0">
              <i className="fa fa-shopping-cart px-2"></i>Shopping
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
