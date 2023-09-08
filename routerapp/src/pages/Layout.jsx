import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";
import dashboard from '.././assets/img/dashboard.svg'
import Footer from "../components/footer";
// import '.././assets/style.css'

const Layout = () => {
  return (
    <>
    <Navbar/>
    {/* <Link to="/">Home</Link> */}
    <div class="grid grid-cols-12">
    <div className="col-span-2 bg-[#FBFFFF] pt-[39px] px-5 pb-[100px]">
            <div className=" flex flex-col gap-12">
                <div className="flex gap-4">
                    <img src={dashboard} alt=""/>
                    <Link to="/">Dashboard</Link>
                </div>
                <div className="flex gap-4">
                    <img src={dashboard} alt=""/>
                    <Link to="/enrolled">Enrolled Courses</Link>
                </div>
                <div className="flex gap-4">
                    <img src={dashboard} alt=""/>
                    <Link to="/library">Course Library</Link>
                </div>
                <div className="flex gap-4">
                    <img src={dashboard} alt=""/>
                    <Link to="/books">E-books</Link>
                </div>
                <div className="flex gap-4">
                    <img src={dashboard} alt=""/>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
    </div>
    
      <Outlet class="ml-[46px] col-span-10" />
      
      </div>
      <Footer/>
    
    </>
   
  )
};

export default Layout;