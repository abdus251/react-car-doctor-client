import React from "react";
import { FaBlenderPhone, FaCalendarAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const MoreServices = () => {
  return (
    <>
      <div className="text-center">
        <button className="btn btn-outline border-2 border-orange-500 mb-20"> <span className="text-orange-500 font-bold">More Services</span></button>
      </div>

      <div class="box-content h-40 w-8/10 justify-center p-4 rounded-md bg-black grid grid-cols-3 items-center ">
        <div className="flex items-center justify-center gap-5">
          <div>
            <FaCalendarAlt className="text-orange-700 h-8 w-8" />
          </div>
          <div>
            <p className="text-white"> We are open monday-friday </p>
            <p className="text-white text-xl font-bold"> 7:00 am- 9:00 pm</p>
          </div>
        </div>

        <div className="flex items-center justify-center   gap-5 ">
          <div>
            <FaBlenderPhone className="text-orange-700 h-8 w-8" />
          </div>
          <div>
            <p className="text-white"> Have a question? </p>
            <p className="text-white text-xl font-bold"> +2546 251 2658</p>
          </div>
        </div>
        <div className="flex items-center justify-center   gap-5">
          <div>
            <HiLocationMarker className=" h-8 w-8 text-orange-700" />
          </div>
          <div className="">
            <p className="text-white"> Need a repair? our address </p>
            <p className="text-white text-xl font-bold">
              {" "}
              Liza Street, New York
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreServices;
