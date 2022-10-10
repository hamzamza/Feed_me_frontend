import axios from "axios";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { URL } from "../URL";
import useFetch  from "../useFetch";
function Home() {
  const {data , loading} = useFetch(URL + 'numUsers')
  useEffect(()=>{
    const start = async()=>{
    try{
      const data = await  axios.get(URL+"vCoutners")
     
      console.log(data.data.msg);
  
    }
    catch(err){
      console.log(err);
    }
    
    
  }
  start()},[])
    return (        
      <div className="grid grid-cols-12">
     <Navbar active ={0}/>
    <div className=" bg-gray-100 pr-2  col-span-12 lg:col-span-10">
    <div className="flex justify-center lg:justify-end gap-3 mt-3 mr-3 ">
      <a href="#" className="btn">Log in</a>
      <a href="#" className="btn">Sign up</a>
    </div>  
    <header className="sm:flex  items-end gap-3 border-b-2 border-yellow-200 w-max ml-8 ">
      <h2 className="text-gray-700 text-5xl mt-3 lg:mt-0">Recipes</h2>
      <h3 className="text-2xl font-semilbold animate-bounce text-gray-400 mt-3 lg:mt-0"> fik jou3 FeeD-ME . ma</h3>
    </header>
    <div>
      <h4 className="font-bold text-gray-400 text-3xl mt-20 text-center xl:text-left xl:ml-10 xl:mb-4 mb-5">Latest Recipes</h4>
      <div className=" grid grid-cols-1 sm:grid-cols-2  gap-6 mx-10 xl:grid-cols-4 ">
      { // <!-- cards go here --> 
         }
           <div className="card">  
            <img src="./img/stew.jpg" alt="stew" className="w-full h-32 sm:45 object-cover" />
            <div className="p-2">
              <div className="font-bold text-xl text-gray-600 ">5 Bean Chili Stew</div>
              <div className="block text-gray-500 text-sm">Recipe by Mario</div> 
            </div>
            <div className="badge">
              <span>25 min</span>
            </div>
          </div>

          <div className="card">  
            <img src="./img/noodles.jpg" alt="stew" className="w-full h-32 sm:45 object-cover" />
            <div className="p-2">
              <div className="font-bold text-xl text-gray-600 ">5 Bean Chili noodles</div>
              <div className="block text-gray-500 text-sm">Recipe by Mario</div>
             
            </div>
            <div className="badge">
              <span>25 min</span>
            </div>
          </div> 

          <div className="card">  
            <img src="./img/curry.jpg" alt="stew" className="w-full h-32 sm:45 object-cover" />
            <div className="p-2">
              <div className="font-bold text-xl text-gray-600 ">5 Bean Chili curry</div>
              <div className="block text-gray-500 text-sm">Recipe by Mario</div>
             
            </div>
            <div className="badge">
              <span>25 min</span>
            </div>
          </div>
        </div>
      <h4 className="font-bold text-gray-400 text-3xl mt-20 text-center xl:text-left xl:ml-10 xl:mb-4 mb-5">Most Popular</h4>
      <div className=" grid grid-cols-1 sm:grid-cols-2  gap-6 mx-10 xl:grid-cols-4 ">

         { // <!-- cards go here --> 
         }
          <div className="card">  
            <img src="./img/curry.jpg" alt="stew" className="w-full h-32 sm:45 object-cover" />
            <div className="p-2">
              <div className="font-bold text-xl text-gray-600 ">5 Bean Chili curry</div>
              <div className="block text-gray-500 text-sm">Recipe by Mario</div>
             
            </div>
            <div className="badge">
              <span>25 min</span>
            </div>
          </div> <div className="card">  
            <img src="./img/curry.jpg" alt="stew" className="w-full h-32 sm:45 object-cover" />
            <div className="p-2">
              <div className="font-bold text-xl text-gray-600 ">5 Bean Chili curry</div>
              <div className="block text-gray-500 text-sm">Recipe by Mario</div>
             
            </div>
            <div className="badge">
              <span>25 min</span>
            </div>
          </div> <div className="card">  
            <img src="./img/curry.jpg" alt="stew" className="w-full h-32 sm:45 object-cover" />
            <div className="p-2">
              <div className="font-bold text-xl text-gray-600 ">5 Bean Chili curry</div>
              <div className="block text-gray-500 text-sm">Recipe by Mario</div>
             
            </div>
            <div className="badge">
              <span>25 min</span>
            </div>
          </div>
        </div>
    </div >
    <button className="btn  m-10">
      <div>Load more</div>
    </button>
<div className="flex justify-center mb-10">

    {!loading &&   <div className="  ml-4 max-w-fit p-3 rounded-xl bg-yellow-200 "> visiters are {data.number} </div>
       } 
       </div>
    </div>
  </div>);
}

export default Home;