import Navbar from "../components/Navbar";

function Contact() {
    return (  <div className="grid grid-cols-12">
    <Navbar active={2}/>
  <div className=" bg-gray-100 pr-2  col-span-12 lg:col-span-10">
    <div className="flex justify-center lg:justify-end gap-3 mt-3 mr-3 ">
        <a href="#" className="btn">Log in</a>
        <a href="#" className="btn">Sign up</a>
    </div>  
    <div className=" container height90 flex justify-center items-center ">
<div  className="px-10 py-4 rounded bg-white shadow-sm w-11/12 md:w-7/12  ">
  <h2 className="text-gray-500 text-2xl font-bold text-center mb-7">Contact Us </h2>
  <form action="" className="flex flex-col ">
  <label htmlFor="Name" className="text-gray-400 text-lg ml-5 mt-4" >Name:</label>
  <input type="text" className="inputs" />
  <label htmlFor="Name" className="text-gray-400 text-lg ml-5 mt-4" >Email:</label>
  <input type="text" className="inputs" />
  <label htmlFor="" className="text-gray-400 text-lg ml-5 mt-4" >Message:</label>
  <textarea   className="inputs" name="" id="" cols="30" rows="10"></textarea>
<div className="m-5 ">
<button className="btn">contact</button>
</div>
  </form>
</div>
    </div>

  </div>
</div>);

}
export default Contact;