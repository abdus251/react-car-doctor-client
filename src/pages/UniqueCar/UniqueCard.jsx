import step from '../../assets/images/homeCarousel/2.jpg'

const UniqueCard = () => {
  return (
   <div>
     <div className="flex">
      <div className="w-2/3">
        <div className="flex gap-8 mr-6">
          <div className="bg-base-200 px-8 rounded-md py-8 border-t-4 border-orange-500  ">
            <h2 className="font-bold py-2">Instant Car Services</h2>
            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures. </p>
          </div>
          <div className="bg-base-200 px-8 rounded-md py-8 border-t-4 border-orange-500 ">
            <h2 className="font-bold py-2">24/7 Quality Service</h2>
            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures. </p>
          </div>
        </div>
        <div className="flex gap-8 mr-4 mt-8">
          <div className="bg-base-200 px-8 rounded-md py-8 border-t-4 border-orange-500 ">
            <h2 className="font-bold py-2">Easy Customer Service</h2>
            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures. </p>
          </div>
          <div className="bg-base-200 px-8 rounded-md py-8 border-t-4 border-orange-500 ">
            <h2 className="font-bold py-2">Quality Cost Service</h2>
            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures. </p>
          </div>
        </div>
        <p className="leading-8 mt-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
      </div>
    </div>
    <div className="w-2/3">
   <h1 className="text-4xl font-bold my-8">3 Simple Steps to Process </h1>
   <p className='mb-6'>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
    </div>
    <div className="flex gap-4 w-2/3">
    <div className="w-1/3 h-64 border flex flex-col items-center justify-center">
        <p className="text-xl box-content h-8 w-8 bg-red-500 rounded-full text-white text-center py-3 px-3 font-bold border-8 border-red-200">01
        </p> 
        <h1 className="font-bold text-xl my-5">STEP ONE</h1>
        <p className="">It uses a dictionary <br />of over 200 .</p>
    </div>
    <div className="w-1/3 h-64 border flex flex-col items-center justify-center">
        <p className="text-xl box-content h-8 w-8 bg-red-500 rounded-full text-white text-center py-3 px-3 font-bold border-8 border-red-200">02
        </p> 
        <h1 className="font-bold text-xl my-5">STEP TWO</h1>
        <p className="">It uses a dictionary <br />of over 200 .</p>
    </div>
    <div className="w-1/3 h-64 border flex flex-col items-center justify-center">
        <p className="text-xl box-content h-8 w-8 bg-red-500 rounded-full text-white text-center py-3 px-3 font-bold border-8 border-red-200">03
        </p> 
        <h1 className="font-bold text-xl my-5">STEP THREE</h1>
        <p className="">It uses a dictionary <br />of over 200 .</p>
    </div>
    </div>
<div className=" w-2/3 my-10">
   <img src={step}alt="" />
   </div>
   </div>
  );
};

export default UniqueCard;
