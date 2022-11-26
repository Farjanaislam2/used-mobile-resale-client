
import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";
import { Authcontext } from './../../../context/Authprovider';

const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const {signIn} = useContext(Authcontext)

  const [loginError, setLoginError] = useState('')
  const [loginUserEmail,setLoginUserEmail] =useState('')
  const [token] = useToken(loginUserEmail)
  const location =useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'

  if(token){
    navigate(from, {replace:true})
  }

  const { providerLogin } = useContext(Authcontext);
  const googleProvider =new GoogleAuthProvider()
  
    const handleGoogleSignIn = () => {
      providerLogin(googleProvider)
      .then(result =>{
        const user = result.user;
        console.log(user);
        navigate(from, {replace:true})
        
        
      })
      .catch(error => console.error(error))
  
    };

  const handleLogin = data =>{
    console.log(data)
    setLoginError('')

    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setLoginUserEmail(data.email)
     

    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message)
    })

  }
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 border rounded-md">
        <h2 className="text-4xl text-green-600 font-bold">Login</h2>
        <form onSubmit={handleSubmit((handleLogin))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required"})}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-400" role="alert">{errors.email?.message}</p>}
             
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text-alt">Password</span>
            </label>
            <input
              type="password"
              {...register("password",
                { required: "Password is required",
                
            })}
              className="input input-bordered w-full max-w-xs"
            />
              {errors.password && <p className="text-red-400" role="alert">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-success w-full mt-5" value='Login' type="submit" />
          <div>
            {loginError && <p className="text-red-400">{loginError}</p>}
          </div>
        </form>
        <p className="text-green-700 mt-3">New to resale market ? <Link to='/signup' className="text-blue-700">Create an account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
     
    </div>
  );
};

export default Login;
