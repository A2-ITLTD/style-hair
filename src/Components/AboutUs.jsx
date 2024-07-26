import bg4 from '../Images/b4.jpg';
const AboutUs = () => {
    return (
        <div className='mt-16 px-6 md:px-14 lg:px-28'>
            <div className="flex gap-16">
            <div className="w-1/2 flex flex-col gap-16">
                <p className="text-xl font-semibold text-orange-400">#About Us</p>
                <p className="text-4xl font-bold text-[#2A0134]">Your Personal Stylist: <br /> You’ll Love What You See. Also, see what we have to offer.</p>
                <p className="text-base font-semibold text-gray-700">Welcome to Style Hair, where beauty meets confidence! We’re more than just a wig and hair product store – we’re your trusted style companion. Here’s why you’ll love us:</p>
                <ul className="list-disc list-inside flex flex-col gap-5 text-justify pl-10">
                    <li><b>Expertise:</b> Our team of skilled stylists lives and breathes hair. Whether you’re looking for a natural wig, vibrant extensions, or nourishing hair care products, we’ve got you covered.</li>
                    <li><b>Quality:</b> We believe in top-notch quality. Our wigs are meticulously crafted, and our products are handpicked to enhance your beauty routine.</li>
                    <li><b>Variety:</b> Explore our extensive collection – from sleek bobs to cascading curls. Find your perfect match and express your unique style effortlessly.</li>
                </ul>
            </div>
            <div className="w-1/2">
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