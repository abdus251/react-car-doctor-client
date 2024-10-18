import { HiStar } from 'react-icons/hi'
import img6 from '../../../assets/images/products/6.png'
import img5 from '../../../assets/images/products/5.png'
import img4 from '../../../assets/images/products/4.png'
import img3 from '../../../assets/images/products/3.png'
import img2 from '../../../assets/images/products/2.png'
import img1 from '../../../assets/images/products/1.png'

const PopularProducts = () => {
  return (
    <>
    <div className='mt-20 text-center'>
        <p className='text-orange-600 font-bold '>Popular Products</p>
<h1 className='text-5xl font-bold mt-2 '>Browse Our Products</h1>
<p className='mt-3 mb-10'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
    </div>
   <div className="grid grid-cols-3 gap-4">
   <div className="card w-12/12 border px-4 pt-4">
  <figure className="px-10 pt-10 bg-base-200 ">
    <img
      src={img6}
      alt="Shoes"
      className="rounded-xl h-20 w-20 " />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title"><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /></p>
    <h1 className='text-xl font-bold'>Car Engine Plug</h1>
    <div className="card-actions">
        <p className='text-orange-600 font-bold'>$20.00</p>
    </div>
  </div>
</div>
 <div className="card w-12/12 border px-4 pt-4">
  <figure className="px-10 pt-10 bg-base-200 ">
    <img
      src={img5}
      alt="Shoes"
      className="rounded-xl h-20 w-20 " />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title"><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /></p>
    <h1 className='text-xl font-bold'>Tyre Tube Fittings</h1>
    <div className="card-actions">
        <p className='text-orange-600 font-bold'>$20.00</p>
    </div>
  </div>
</div>
<div className="card w-12/12 border px-4 pt-4">
  <figure className="px-10 pt-10 bg-base-200 ">
    <img
      src={img4}
      alt="Shoes"
      className="rounded-xl h-20 w-20 " />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title"><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /></p>
    <h1 className='text-xl font-bold'>Battery repairing</h1>
    <div className="card-actions">
        <p className='text-orange-600 font-bold'>$20.00</p>
    </div>
  </div>
</div>
<div className="card w-12/12 border px-4 pt-4">
  <figure className="px-10 pt-10 bg-base-200 ">
    <img
      src={img3}
      alt="Shoes"
      className="rounded-xl h-20 w-20 " />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title"><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /></p>
    <h1 className='text-xl font-bold'>Cools Back Light</h1>
    <div className="card-actions">
        <p className='text-orange-600 font-bold'>$20.00</p>
    </div>
  </div>
</div>
<div className="card w-12/12 border px-4 pt-4">
  <figure className="px-10 pt-10 bg-base-200 ">
    <img
      src={img2}
      alt="Shoes"
      className="rounded-xl h-20 w-20 " />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title"><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /></p>
    <h1 className='text-xl font-bold'>Car Air Filter</h1>
    <div className="card-actions">
        <p className='text-orange-600 font-bold'>$20.00</p>
    </div>
  </div>
</div>
<div className="card w-12/12 border px-4 pt-4">
  <figure className="px-10 pt-10 bg-base-200 ">
    <img
      src={img1}
      alt="Shoes"
      className="rounded-xl h-20 w-20 " />
  </figure>
  <div className="card-body items-center text-center">
    <p className="card-title"><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /><HiStar className='text-orange-400' /></p>
    <h1 className='text-xl font-bold'>Cools Led Light </h1>
    <div className="card-actions">
        <p className='text-orange-600 font-bold'>$20.00</p>
    </div>
  </div>
</div>
   </div>
   <div className="flex items-center justify-center text-center mt-10">
        <button className="btn btn-outline border border-orange-500 mb-20"> <span className="text-orange-500 font-bold">More Services</span></button>
      </div>
    </>
  )
}

export default PopularProducts