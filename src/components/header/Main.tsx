import brand from "../../assets/images/brand.png";

const Main = () => {
  return (
    <div className="store jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div className="text-wrapper col-md-6 ">
        <img className="display-1 " src={brand} alt="brand" />
        <p className="lead my-6 mt-4">
          Lustrous yet understated. The new evening wear collection exclusively
          offered at the reopened Giorgio Armani boutique in Los Angeles.
        </p>

        <p className="lead mb-6">
          <button
            className="buy btn  
          btn-secondary"
          >
            See all
          </button>
        </p>
      </div>
    </div>
  );
};

export default Main;
