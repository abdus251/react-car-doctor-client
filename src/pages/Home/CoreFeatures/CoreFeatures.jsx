import { HiOutlineUserGroup } from 'react-icons/hi'
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import { BsStopwatchFill } from 'react-icons/bs'
import { FcOnlineSupport, FcSupport } from 'react-icons/fc'
import guarantee from '../../../assets/images/guarantee.jpg'
// C:\projects\react-car-doctor-client\src\assets\images\guarantee.jpg

const CoreFeatures = () => {
    return (
        <>
         <div className='mt- text-center mt-16'>
              <p className='text-orange-600 font-bold '>Core Features </p>
      <h1 className='text-5xl font-bold mt-2 '>Why Choose Us</h1>
      <p className='mt-3 mb-10'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
         <div className="card w-full border  ">

       <figure className="p-5">
            <HiOutlineUserGroup className="h-20 w-20 text-gray-700" />  
        </figure>
        <div className=" items-center text-center">
          <h1 className='text-xl font-bold pb-2'>Car Engine Plug</h1>
        </div>
      </div>
       <div className="card w-full border bg-orange-600 ">
       <figure className="p-5  rounded-md">
            <BsStopwatchFill className="h-20 w-20 text-white" />  
        </figure>
        <h1 className='text-xl font-bold text-center text-white'>Timely Delivery</h1>
        <div className=" items-center text-center">
        </div>
      </div>
      <div className="card w-full border  ">
      <figure className="p-5">
            <FcOnlineSupport className="h-20 w-20 text-gray-700" />  
        </figure>
        <div className=" items-center text-center">
          <h1 className='text-xl font-bold'>24/7 Support</h1>
        </div>
      </div>

      <div className="card w-full border  ">
      <figure className="p-5">
            <FcSupport className="h-20 w-20 text-gray-700" />  
        </figure>
        <div className=" items-center text-center">
          <h1 className='text-xl font-bold'>Best Equipment </h1>
        </div>
      </div>

      <div className="card w-full border items-center justify-center pl-16 ">
        <div className="text-center ">
            <img src={guarantee} alt="" className='h-20 w-20 ' />
          <h1 className='text-xl font-bold'>100% Guarantee</h1>
        </div>
      </div>
      <div className="card w-full border  ">
      <figure className="p-5">
            <FcOnlineSupport className="h-20 w-20 text-gray-700" />  
        </figure>
        <div className=" items-center text-center">
         
          <h1 className='text-xl font-bold'>24/7 Support</h1>
          
         
        </div>
      </div>
         </div>
        </>
        )
}

export default CoreFeatures