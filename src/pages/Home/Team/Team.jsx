import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'


const Team = () => {
  return (
  <>
   <div className='mt- text-center'>
        <p className='text-orange-600 font-bold '>Team </p>
<h1 className='text-5xl font-bold mt-2 '>Meet Our Team</h1>
<p className='mt-3 mb-10'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
   <div className="card w-full border  ">
  <figure className="p-5">
    <img
      src={img1}
      alt="Shoes"
      className="rounded-xl h-50 w-50 " />
  </figure>
  <div className="card-body items-center text-center">
   
    <h1 className='text-xl font-bold'>Car Engine Plug</h1>
    <p>Engine Expert</p>
  <div className="flex gap-2">
  <FaFacebook className='text-blue-600 w-6 h-6' /> 
  <FaTwitter className=' w-6 h-6'/> 
  <FaLinkedin className='text-blue-600 w-6 h-6' />
  <FaInstagram className='text-orange-600 w-6 h-6 '/>
  </div>
  </div>
</div>
 <div className="card w-full border  ">
  <figure className=" p-5  ">
    <img
      src={img2}
      alt="Shoes"
      className="rounded-xl h-50 w-50 " />
  </figure>
  <div className="card-body items-center text-center">
   
    <h1 className='text-xl font-bold'>Car Engine Plug</h1>
    <p>Engine Expert</p>
    <div className="flex gap-2">
  <FaFacebook className='text-blue-600 w-6 h-6' /> 
  <FaTwitter className=' w-6 h-6 '/> 
  <FaLinkedin className='text-blue-600 w-6 h-6' />
  <FaInstagram className='text-orange-600 w-6 h-6 '/>
  </div>
  </div>
</div>
<div className="card w-full border  ">
  <figure className="p-5 ">
    <img
      src={img3}
      alt="Shoes"
      className="rounded-xl h-50 w-50 " />
  </figure>
  <div className="card-body items-center text-center">
   
    <h1 className='text-xl font-bold'>Car Engine Plug</h1>
    <p>Engine Expert</p>
    <div className="flex gap-2">
  <FaFacebook className='text-blue-600 w-6 h-6' /> 
  <FaTwitter className=' w-6 h-6'/> 
  <FaLinkedin className='text-blue-600 w-6 h-6' />
  <FaInstagram className='text-orange-600 w-6 h-6 '/>
  </div>
  </div>
</div>
   </div>
  </>
  )
}

export default Team