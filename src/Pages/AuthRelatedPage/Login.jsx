import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const onSubmit = ( data ) =>{
        console.log(data)
      }
    
    return (
        <div>
            {/* <Helmet>
            <title>Tech Spot | Login/Register</title>
            </Helmet> */}
            <div className="hero-content flex-col md:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl  font-bold">SignUp now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500 text-xs mt-2">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                {...register("password", { required: true,
                    minLength:6,
                     maxLength: 16,
                     pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}/
                     })}
              />
              {errors.password?.type === 'required' && <span className="text-red-500 text-xs mt-2">Password is required</span>}
              {errors.password?.type === 'minLength' && <span className="text-red-500 text-xs mt-2">Password must be longer than 6 character </span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-500 text-xs mt-2">Password should not be longer than 16 character </span>}
              {errors.password?.type === 'pattern' && <span className="text-red-500 text-xs mt-2">Password must have one uppercase, one lowercase , one number and one special character </span>}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className="text-center mb-4">
            <small className="text-sky-900">
              Already have an account? <Link to="/login">Login</Link>
            </small>
          </p>
          <div className="divider"></div>
            <div className="flex justify-center items-center mb-8">
            <FaGoogle className="text-red-700"></FaGoogle>
            </div>
        </div>
      </div>
        </div>
    );
};

export default Login;