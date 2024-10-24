import { FaQuoteRight } from "react-icons/fa";
import abdus from './abdus circle.png'
import tawlad from './tawlad.png'
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <>
      <div className="mt-16 text-center">
        <p className="text-orange-600 font-bold ">Testimonial </p>
        <h1 className="text-5xl font-bold mt-2 ">What Customer Says</h1>
        <p className="mt-3 mb-8">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className=" flex w-full px-20 gap-5">
        <div className=" w-1/2 border h-80">
          <div className="flex justify-between  pt-8 px-8">
            <div>
                <img src={abdus} alt="" className="h-10 w-10"  />
            </div> 
            <div>
               <h1 className="text-2xl font-bold"> Abdus Salam</h1>
               <p> Businessman</p>
            </div>
            <div>
                <FaQuoteRight className="text-orange-600 text-5xl opacity-30"/>
            </div>
          </div>
          <div className="px-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 

          <p className="card-title mt-4"><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /></p>
          </div>
        </div>
        <div className=" w-1/2 border h-80">
          <div className="flex justify-between  py-8 px-8">
            <div>
                <img src={tawlad} alt="" className="h-10 w-10"  />
            </div> 
            <div>
               <h1 className="text-2xl font-bold"> Awlad Hossain </h1>
               <p> Teacher</p>
            </div>
            <div>
                <FaQuoteRight className="text-orange-600 text-5xl opacity-30"/>
            </div>
          </div>
          <div className="px-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 

          <p className="card-title mt-4"><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
