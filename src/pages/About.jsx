import Navbar from "../components/Navbar";

function About() {
    return (  <div className="grid grid-cols-12">
    <Navbar active = {1}/>
  <div className=" bg-gray-100 pr-2  col-span-12 lg:col-span-10">
    <div className="flex justify-center lg:justify-end gap-3 mt-3 mr-3 ">
        <a href="#" className="btn">Log in</a>
        <a href="#" className="btn">Sign up</a>
    </div>  
    <div className=" text-4xl text-yellow-300">about</div>

  </div>
</div>);
}

export default About;