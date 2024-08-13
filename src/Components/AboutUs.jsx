import bg4 from '../Images/b4.jpg';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
const AboutUs = () => {
    return (
        <div className='mt-16 px-6 md:px-14 lg:px-28'>
            <div className="flex flex-col md:flex-row gap-16">
            <div className="w-full md:w-1/2 flex flex-col gap-12">
                <p className="text-xl font-semibold text-orange-400">#About Us</p>
                <p className="text-xl font-semibold text-[#2A0134]">Product name: Human Hair Wigs</p>
                <p className="text-4xl font-bold text-[#2A0134]">Your Personal Stylist: <br /> You’ll Love What You See. Also, see what we have to offer.</p>
                <p className="text-base font-semibold text-gray-700">Welcome to Stylist Hair, where beauty meets confidence! We’re more than just a wig and hair product store – we’re your trusted style companion. Here’s why you’ll love us:</p>
                <ul className="list-disc list-inside flex flex-col gap-5 text-justify pl-10">
                    <li><b>Expertise:</b> Our team of skilled stylists lives and breathes hair. Whether you’re looking for a natural wig, vibrant extensions, or nourishing hair care products, we’ve got you covered.</li>
                    <li><b>Variety:</b> Explore our extensive collection – from sleek bobs to cascading curls. Find your perfect match and express your unique style effortlessly.</li>
                    <li><b>Unique Experience:</b> Stylist Hair delivers a distinctive online shopping experience, setting us apart in the industry. We offer the finest wig brands and hair styles, backed by our experts' recommendations to ensure you get the best.</li>
                    <li><b>Expertise You Can Trust:</b> Our Wig Expert team boasts unparalleled knowledge in human hair and synthetic wigs and hair toppers, whether you're new or long-time wearer.</li>
                    <li><b>Tailored Excellence:</b> Expect the highest quality products, comprehensive education and exceptional customer service, all personalized to your needs.
                    </li>
                    <li><b>Decades of Dedication:</b> With over 2 years in the hair business, we're your trusted source for wigs, hairpieces, hair toppers, and extensions.
                    </li>
                    <li><b>Customer Friendly Returns:</b> We make returning simple with 30 Days from ship date, $0 restocking fees, speedy refunds, and prepaid shipping labels (or use your own).
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/2">
                <div className='flex flex-col gap-5 mb-8'>
                    <p className="text-xl font-semibold text-orange-400">#Company Profile Details:</p>
                    <div className='grid grid-cols-3 justify-evenly gap-5'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-4xl text-gray-800 font-semibold'><MdOutlineMailOutline /></h1>
                            <p className='text-sm text-gray-800 font-semibold'>info@stylistwigs.com</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-4xl text-gray-800 font-bold'><CiPhone /></h1>
                            <p className='text-sm text-gray-800 font-semibold'>+8801871733305</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-4xl text-gray-800 font-bold'><GoLocation /></h1>
                            <p className='text-sm text-gray-800 font-semibold'>329, Vadail, Uttar Para,
                                    Near Dhaka EPZ, Dhamsona, Ashulia, Savar,
                                    Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
                <img src={bg4} className='rounded-md h-96 w-full object-cover object-center' />
                <div className='grid grid-cols-2 justify-between gap-20 mt-10'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl text-gray-800 font-bold'>200+</h1>
                        <p className='text-xl text-gray-800 font-semibold'>Regular Clients</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl text-gray-800 font-bold'>90+</h1>
                        <p className='text-xl text-gray-800 font-semibold'>Wigs To Choose From</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl text-gray-800 font-bold'>100%</h1>
                        <p className='text-xl text-gray-800 font-semibold'>Genuine Products</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl text-gray-800 font-bold'>240+</h1>
                        <p className='text-xl text-gray-800 font-semibold'>Pack Shipped</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AboutUs;