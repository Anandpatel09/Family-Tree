import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
      
   

    
    toast.success("Logging out....")
    // Redirect to login page
    setTimeout(()=>{
 // Remove stored auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Optional: clear everything
    // localStorage.clear();

    // redirect
      navigate("/");
    },2000)
  

  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* <h2 className="text-lg font-semibold">Logging out...</h2> */}
    </div>
  );
};

export default Logout;