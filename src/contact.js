import { useSelector } from "react-redux";



const Contact = () => {
  const selector = useSelector((state)=>state.user)
  return ( 
    <h2>contact page -- username is :{selector.username}</h2>
   );
}
 
export default Contact;