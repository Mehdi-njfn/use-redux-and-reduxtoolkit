import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";

import { login, logout } from "./Store";

const Login = () => {
  const [userName, setUserName] = useState("")
  const dispatch = useDispatch();
  const selector = useSelector((state)=>state.user)
  return (  
    <div>
      <h1>Login {selector.username}</h1>
      <input onChange={(e)=>setUserName(e.target.value)} />
      <button onClick={()=>dispatch(login({username :userName}))} style={{marginInline:'20px'}}>Log in</button>
      <button onClick={()=>dispatch(logout())}>Log out</button>
    </div>
  );
}
 
export default Login;
