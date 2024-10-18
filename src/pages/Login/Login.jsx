import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.email.password;
        console.log(name, email, password)
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error));
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row mt-10">
        <div className="text-center lg:text-left w-1/2">
        <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border ml-12">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-5xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name='email'
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name='password'
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <input className="btn btn-primary uppercase" type="submit" value="Submit" />
            </div>
          </form>
          <p className='text-center mb-4'>New to Car Doctor? <Link to='/signup'> <span className='text-orange-500 font-bold'>Sign Up</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
