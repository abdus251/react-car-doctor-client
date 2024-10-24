import React from "react";
import { FaArrowRight, FaDownload, FaFileAlt } from "react-icons/fa";
import UniqueCard from "./UniqueCard";

const UniqueCar = () => {
  return (
    <div>
      <div className="flex">
        <div className="my-12 w-2/3 ">
          <h1 className="font-bold text-5xl mb-10">
            {" "}
            Unique Car Engine Service
          </h1>
          <p className="pr-3 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.{" "}
          </p>
        </div>
        <div className=" bg-black box-content w-1/3 h-auto mt-4 rounded-lg">
          <h1 className=" text-white text-2xl font-bold ml-8 mt-8 ">Download</h1>
          <div className=" flex text-white items-center gap-5 my-10">
            <p><FaFileAlt className="w-6 h-6 ml-8" />
            </p>
            <p>
              <h1 className="font-bold">Our Brochure</h1>
              <p className="opacity-55">Download</p>
            </p>
            <p className="mx-8 box-content h-12 w-12 rounded-md bg-red-500 items-center justify-center">
              <FaArrowRight className=" ml-4 mt-4" />
            </p>
          </div>
          <div className=" flex text-white items-center gap-5 my-10">
            <p>
              <FaFileAlt className="w-6 h-6 ml-8" />
            </p>
            <p>
              <h1 className="font-bold">Our Brochure</h1>
              <p className="opacity-55">Download</p>
            </p>
            <p className="mx-8 box-content h-12 w-12 rounded-md bg-red-500 items-center justify-center">
              <FaArrowRight className=" ml-4 mt-4" />
            </p>
          </div>
        </div>
      </div>
      <UniqueCard/>
    </div>
  );
};

export default UniqueCar;
