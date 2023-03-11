import logo from "../../assets/images/logo.png";
import group from "../../assets/images/group.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-white mt-5">
        <div className="container p-4">
          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <Link
                  className="text-center d-flex align-items-center gap-2 justify-content-center"
                  to={"/"}
                >
                  <img className="store-header-logo" src={group} alt="decor" />
                  <img className="store-header-logo" src={logo} alt="logo" />
                  <img className="store-header-logo" src={group} alt="decor" />
                </Link>

                <ul className="list-unstyled mb-0">
                  <li className="mt-3">
                    <p className="text-dark ">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quam nisi reiciendis, ullam earum ipsum magni ratione
                      nesciunt cum totam dolores delectus? Quod odio ipsam
                      soluta assumenda delectus ratione libero nisi.
                    </p>
                  </li>
                </ul>

                <section className="mb-4">
                  {["facebook-f", "twitter", "google", "instagram"].map(
                    (item) => (
                      <a
                        key={item}
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                      >
                        <i className={`fab fa-${item}`}></i>
                      </a>
                    )
                  )}
                </section>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-dark">Catalog</h5>

                <ul className="list-unstyled mb-0">
                  <li className="mt-3">
                    <p className="text-dark">Necklaces</p>
                  </li>
                  <li>
                    <p className="text-dark">Hoodies</p>
                  </li>
                  <li>
                    <p className="text-dark">Jewerly Box</p>
                  </li>
                  <li>
                    <p className="text-dark">T-Shirts</p>
                  </li>
                  <li>
                    <p className="text-dark">Jacket</p>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-dark">About Us</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <p className="text-dark">Our Producers</p>
                  </li>
                  <li>
                    <p className="text-dark">FAQ</p>
                  </li>
                  <li>
                    <p className="text-dark">Sitemap</p>
                  </li>
                  <li>
                    <p className="text-dark">About us</p>
                  </li>
                  <li>
                    <p className="text-dark">Terms and Conditions</p>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase text-dark">Costumer Services</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <p className="text-dark">Contact Us</p>
                  </li>
                  <li>
                    <p className="text-dark">Track Your Order</p>
                  </li>
                  <li>
                    <p className="text-dark">Product Care and Repair</p>
                  </li>
                  <li>
                    <p className="text-dark">Book an appointment</p>
                  </li>
                  <li>
                    <p className="text-dark">Shipping and Returns</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};
export default Footer;
