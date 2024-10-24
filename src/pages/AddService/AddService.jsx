import Swal from "sweetalert2";

import pic from "../../assets/images/checkout/checkout.png";
const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const type = form.type.value;
    const description = form.description.value;



    const newService = {name, date, price, type, description}
    
    console.log(newService);

//  send data to the server
fetch('http://localhost:5000/bookings', {
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(newService)
})
.then(res=> res.json())
.then(data=> {
  console.log(data);
  if(data.insertedId){
    Swal.fire({
      title: 'Success!',
      text: 'Service Added Successfully',
      icon: 'success',
      confirmButtonText: 'cool!'
    })
  }
})
  };

  return (
    <div>
      <div className="relative items-center justify-center mb-20">
        <img src={pic} alt="Service" className="w-full rounded-xl" />
        <h3 className="absolute top-1/4 left-16 text-5xl  text-white bg-black bg-opacity-5 p-2 rounded">
          Check Out
        </h3>
      </div>
      <form
        onSubmit={handleAddService}
        className="card-body bg-base-200 rounded-md"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <input
              type="name"
              placeholder="Service Name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control">
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Service Price"
              name="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Service Type "
              className="input input-bordered"
              required
              name="type"
            />
          </div>
        </div>

        <textarea
          placeholder="Product Description"
          className="textarea textarea-bordered textarea-lg w-full h-60 mt-8"
          name="description"
        ></textarea>
        <div className="form-control mt-6">
          <input
            className="btn bg-red-600 btn-block uppercase oranem text-white"
            type="submit"
            value="Submit "
          />
        </div>
      </form>
    </div>
  );
};

export default AddService;
