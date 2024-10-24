import pic from "../../assets/images/checkout/checkout.png";
import service from "../../assets/images/banner/3.jpg";
import {  FaArrowRight } from "react-icons/fa";
import UniqueCar from "../UniqueCar/UniqueCar";
const ServiceDetails = () => {
  return (
    <div>
      <div className="relative items-center justify-center">
        <img src={pic} alt="Service" className="w-full rounded-xl" />
        <h3 className="absolute top-1/4 left-16 text-5xl  text-white bg-black bg-opacity-5 p-2 rounded">
          Service Details
        </h3>
      </div>
      {/* Services */}
      <div className="mt-20 flex gap-5">
        <div className="w-full">
          <img src={service} alt="" className="rounded-md" />
        </div>
        <div className="w-1/3 bg-base-200 rounded-md">
          <h1 className="text-3xl font-bold my-8 pl-10">Services</h1>
          <div className=" w-96 ml-10">
            <p className="bg-red-500 w-64 p-5 items-center gap-20 flex text-white text-xl font-bold box-content h-6 rounded-md my-6">
              Full Car Repair <FaArrowRight className="" />
            </p>
            <p className="bg-base-100 w-64 p-5 items-center gap-20 flex text-xl font-bold box-content h-6 rounded-md my-6">
            Engine Repair <FaArrowRight className=" ml-2" />
            </p>
            <p className="bg-base-100 w-64 p-5 items-center  flex text-xl font-bold box-content h-6 rounded-md my-6">
            Automatic Services <FaArrowRight className=" ml-10" />
            </p>
            <p className="bg-base-100 w-64 p-5 items-center flex text-xl font-bold box-content h-6 rounded-md my-6">
            Engine Oil Change <FaArrowRight className=" ml-10" />
            </p>
            <p className="bg-base-100 w-64 p-5 items-center flex text-xl font-bold box-content h-6 rounded-md my-6">
            Battery Charge <FaArrowRight className="ml-20" />
            </p>
          </div>
        </div>
      </div>
      <UniqueCar/>
    </div>
  );
};

export default ServiceDetails;
