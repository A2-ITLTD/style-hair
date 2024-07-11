import logo from '../Images/hairlogo.png';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import facebook from '../Images/facebook.png';
import instagram from '../Images/instagram.png';
import linkkedin from '../Images/linkedin.png';
import twitter from '../Images/twitter.png';
import whatsapp from '../Images/whatsapp.png';
import alibaba from '../Images/alibaba_logo.png';
const Footer = () => {
    return (
        <div className='mt-24'>
            <div className="px-5 md:px-14 lg:px-20 py-5 md:py-14 w-full flex flex-wrap justify-start md:justify-evenly items-start border-[1px] border-t-[#2A0134] gap-10">
                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold text-[#2A0134]'>CONTACT US</h1>
                    <p className='text-base font-normal flex items-center gap-2'><MdEmail />info@stylistwigs.com</p>
                    <p className='text-base font-normal flex items-center gap-2'><FaPhoneAlt />+880 1871 733 305</p>
                    <p className='text-base font-normal'>Factory Address: 329, Vadail, Uttar Para, <br /> Near Dhaka EPZ, Dhamsona, Ashulia, Savar, <br /> Dhaka, Bangladesh</p>
                    <p className='text-base font-normal '>Trade License: TRAD/DNCC/001127/2024</p>
                    <div className='flex items-center gap-3'>
                        <img src={facebook} className='w-12' />
                        <img src={whatsapp} className='w-12' />
                        <img src={twitter} className='w-12' />
                        <img src={alibaba} className='w-12' />
                        <img src={linkkedin} className='w-12' />
                        <img src={instagram} className='w-12' />
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold text-[#2A0134]'>ACCOUNTS</h1>
                    <p className='text-base font-normal flex items-center gap-2'>Track My Order</p>
                    <p className='text-base font-normal flex items-center gap-2'>My Wishlist</p>
                    <p className='text-base font-normal'>My Account</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold text-[#2A0134]'>TERMS OF SERVICE</h1>
                    <p className='text-base font-normal flex items-center gap-2'>Privacy Policy</p>
                    <p className='text-base font-normal flex items-center gap-2'>Shipping Policy</p>
                    <p className='text-base font-normal'>Return and Refund</p>
                    <p className='text-base font-normal'>Rewards</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-semibold text-[#2A0134]'>NEWSLETTER</h1>
                    <p className='text-SM font-normal flex items-center gap-2 italic'>Get exclusive deals, promos and giveaways!</p>
                    <div >
                        {/* ref={form} onSubmit={sendEmail} */}
                        <form  className="flex items-center">
                        <input 
                            type="email" 
                            name="user_email"
                            placeholder="Enter your email"
                            className='py-2 px-5 border-[1px] border-black rounded-l-sm w-full' 
                        />
                        <button type='submit' value="Send" className='py-2 px-7 bg-[#2A0134] text-white border-[1px] border-green-700 font-medium rounded-r-sm'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='px-10 md:px-20 lg:px-24 py-4 border-t-2 border-[#00000032] flex items-center justify-center gap-4 w-full'>
                <img src={logo} alt="Logo" className='w-12 rounded-full' />
                <h1 className='text-lg font-semibold text-[#2A0134]'>@ 2024 Style Hair</h1>
            </div>
        </div>
    );
};

export default Footer;