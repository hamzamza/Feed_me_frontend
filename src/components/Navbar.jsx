import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar( {active}) {
    const [menuactive , setmenuactive ] = useState(false);
       
        const toggle =()=>{
        setmenuactive((old)=>!old)
        }
  
    const logo = "./img/Lovepik_com-402012642-c4d-3d-food-burger.png"
    const menu = "./img/Menu_icon_icon-icons.com_71858.png"
    return (  
         <div className=" col-span-12 lg:col-span-2">
    <nav className=" lg:min-h-screen   bg-gray-100 pb-10">
      <div className=" flex items-center justify-center ">
        <img src={logo} alt="Logo" className="w-20 xl:w-12 2xl:w-20" />
        <h1 >
          <Link to="/" className="text-yellow-300 font-hairline font-bold text-5xl xl:text-2xl 2xl:text-5xl">FeeD'ME</Link>
        </h1>
      </div>
      <div className="flex justify-end lg:hidden" >
        <button>
            
          <img src={menu} className="w-10 " alt="" onClick={toggle}/>
        </button>
      </div>
      <ul className={` mt-10 lg:flex flex-col ${!menuactive ? ' hidden' : "" } ` } id="menu">
        <li className={`flex  pr-2 lg:py-2 py-1 justify-center xl:justify-end ${active==0 && 'active'}`} >
          <Link to="/" className="text-gray-700 ">
            <span>Home</span>
          </Link>
        </li>
        <li className={`flex  pr-2 lg:py-2 py-1 justify-center xl:justify-end ${active==1 && 'active'}`} >
          <Link to="/about">
            <span>About</span>
          </Link>
        </li>
        <li className={`flex  pr-2 lg:py-2 py-1 justify-center xl:justify-end ${active==2 && 'active'}`} >
          <Link to={"/contact"}>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
     
    </nav>
  
  </div> );
}

export default Navbar;