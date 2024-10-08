import alibaba_info from '../Images/alibab.jpg';
import logo from '../Images/hairlogo-removebg.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineAlibaba } from "react-icons/ai";
const Navbar = () => {
    return (
        <div className="w-full">
            {/* 1st navbar */}
            <div className="flex justify-center"> 
                <img src={alibaba_info} alt="logo" className="w-60"/>
            </div>
            {/* 2nd navbar */}
            <div className="text-white bg-[#2A0134] font-light text-xs md:text-xs py-2 px-5 md:px-24 flex justify-between items-center">
               <div>
                 <img src={logo} alt="logo" className="w-28"/>
               </div>
               <div className="flex flex-col  md:flex-row gap-4 md:gap-7 text-sm font-light">
                    <h1 className="flex gap-3 items-center"><IoLogoWhatsapp className="text-lg" /> +880 1871 733 305</h1>
                    <h1 className="flex gap-3 items-center"><MdEmail  className="text-lg"/>  info@stylistwigs.com
                    </h1>
               </div>
            </div>
            {/* 3nd navbar */}
            <div className='bg-white w-full'>
                <ul className='text-[#2A0134] font-medium text-lg py-2 flex flex-wrap justify-center gap-3 md:gap-16'>
                    <Link to="/" className="hover:underline">Home</Link>
                    <details className="dropdown">
                    <summary className="">
                        <Link to={`/wigs`} className="hover:underline">Wigs</Link>
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded z-[1] w-52 p-2 shadow">
                        <Link to="/subwigs/long" className="hover:underline">Long</Link>
                        <Link to="/subwigs/medium" className="hover:underline">Medium</Link>
                        <Link to="/subwigs/short" className="hover:underline">Short</Link>
                    </ul>
                    </details>
                    {/* shop */}
                    <details className="dropdown">
                    <summary className="">
                        <Link to={`/wigs`} className="hover:underline">Shop</Link>
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded z-[1] w-52 p-2 shadow">
                        <Link to="/shop/women" className="hover:underline">Women's Wig</Link>
                        <Link to="/shop/men" className="hover:underline">Men's Wig</Link>
                        <Link to="/shop/kids" className="hover:underline">Kid's Wig</Link>
                    </ul>
                    </details>
                    <Link to="/contactus" className="hover:underline">Contact Us</Link>
                    <Link to="/aboutus" className="hover:underline">About Us</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;