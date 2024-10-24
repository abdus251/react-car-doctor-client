import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import pic from "../../assets/images/checkout/checkout.png";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const {user} = useContext(AuthContext);

const handleBookService = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
        customerName: name,
        email,
        img,
        date,
        service: title,
        service_id: _id,
        price: price
    }

    // console.log(booking);

fetch('http://localhost:5000/bookings', {
    method:'POST',
    headers: {
    'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
})
.then(res =>res.json())
.then(data => {
    console.log(data);
    if(data.insertedId){
        alert('service booked successfully')
    }
})

}

  return (
    <div>
       <div className="relative items-center justify-center">
        <img src={pic} alt="Service" className="w-full rounded-xl" />
        <h3 className="absolute top-1/4 left-16 text-5xl  text-white bg-black bg-opacity-5 p-2 rounded">
         Check Out
        </h3>
      </div>
      <h2 className="text-center text-3xl mt-6">Book Service: {title} </h2>
      <form onSubmit={handleBookService} className="card-body bg-base-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              defaultValue={'$'+ price}
              placeholder="Due amount"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-red-600 btn-block uppercase oranem text-white"
            type="submit"
            value="Order Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default BookService;
