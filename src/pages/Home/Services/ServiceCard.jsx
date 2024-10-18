import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const { title, img, price } = service;
  return (
    <div className="card bg-base-100 w-96 border-2 my-4  ">
      <figure className="px-10 pt-10">
        <img
          src={img}
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-500 font-bold flex items-center">Price:{price} <Link to={''}><FaArrowRight className="ml-52" /></Link></p>
        <div className="card-actions">
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
