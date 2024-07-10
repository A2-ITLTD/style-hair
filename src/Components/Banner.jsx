import hairbg from '../Images/hairbg.jpg';
import bg2 from '../Images/bg2.jpg';
import bg3 from '../Images/bg3.jpg';
import bg4 from '../Images/b4.jpg';
import bg6 from '../Images/b6.jpg';
import bg7 from '../Images/b7.jpg';
import '../../src/index.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

import s1 from '../Images/Styles/s1.png';
import s2 from '../Images/Styles/s2.png';
import s3 from '../Images/Styles/s3.png';
import s4 from '../Images/Styles/s4.png';
import s5 from '../Images/Styles/s5.png';
import s6 from '../Images/Styles/s6.png';
import s7 from '../Images/Styles/s7.png';
import s8 from '../Images/Styles/s8.png';
import s9 from '../Images/Styles/s9.png';

import b1 from '../Images/Styles/b1.png';
import b2 from '../Images/Styles/b2.png';
import b3 from '../Images/Styles/b3.png';
import b4 from '../Images/Styles/b4.png';
import b5 from '../Images/Styles/b5.png';
import b6 from '../Images/Styles/b6.png';
import b7 from '../Images/Styles/b7.png';
import b8 from '../Images/Styles/b8.png';

import lw1 from '../Images/Styles/lw1.png';
import lw2 from '../Images/Styles/lw2.png';
import lw3 from '../Images/Styles/lw3.png';
import lw4 from '../Images/Styles/lw4.png';
import lw5 from '../Images/Styles/lw5.png';
import lw6 from '../Images/Styles/lw6.png';
import lw7 from '../Images/Styles/lw7.png';
import lw8 from '../Images/Styles/lw8.png';


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, [totalSlides]);

    return (
        <div>
          {/* banner */}
          <section className="relative w-full h-[700px]">
            <img src={hairbg} className='w-full h-full object-cover object-center' />
            <div className='absolute right-28 bottom-36 text-white flex flex-col gap-10'>
                <h1 className='text-8xl font-bold'>Style Hair</h1>
                <button className='border-2 border-white py-4 w-full font-semibold text-2xl hover:bg-white hover:text-black'>Shop Now</button>
            </div>
          </section>
          {/* wow seller */}
          <section className='mt-24 px-6 md:px-14 lg:px-28'>
                <div className='text-center text-4xl font-medium pb-14 text-[#2A0134]'>
                    <h1>WOW SELLER</h1>
                </div>
                <div>
                <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showThumbs={false}
                className='w-full'
                >
                    {/* 1st slide */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2'>
                        {/* Card 1 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s1} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s2} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s3} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s4} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                    </div>
                    {/* 2nd slide */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2'>
                        {/* Card 5 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s5} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s9} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 7 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s7} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 8 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s8} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                    </div>
                </Carousel>
                </div>
          </section>
          {/* shop by category */}
          <section className='mt-24 px-6 md:px-14 lg:px-28'>
            <div>
                <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showThumbs={false}
                className='w-full'
                >
                    {/* 1st */}
                    <div className='relative w-full flex justify-end'>
                    <div className='w-2/3 h-[470px]'>
                        <img src={bg2} className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='absolute left-0 top-20 bg-[#2A0134] text-white flex flex-col gap-5 p-10 justify-start text-start'>
                        <h1 className='text-lg font-light'># Shop By Category</h1>
                        <h1 className='text-4xl font-medium italic'>Shop Timeless Wigs</h1>
                        <p className='text-wrap font-light'>Empower Your Beauty with Flawless Hairstyles – Where Every Woman's Confidence Shines <br /> at Our Salon.</p>
                        <button className='border-2 border-white py-2 px-6 w-fit'>Shop Now</button>
                    </div>
                    </div>
                    {/* 2nd */}
                    <div className='relative w-full flex justify-end'>
                    <div className='w-2/3 h-[470px] justify-end'>
                        <img src={bg3} className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='absolute left-0 top-20 bg-[#2A0134] text-white flex flex-col gap-5 p-10 text-start'>
                        <h1 className='text-lg font-light'># Shop By Category</h1>
                        <h1 className='text-4xl font-medium italic'>Shop Easy Hairpieces</h1>
                        <p className='text-wrap font-light'>Empower Your Beauty with Flawless Hairstyles – Where Every Woman's Confidence Shines <br /> at Our Salon.</p>
                        <button className='border-2 border-white py-2 px-6 w-fit'>Shop Now</button>
                    </div>
                    </div>
                    {/* 3rd */}
                    <div className='relative w-full flex justify-end'>
                    <div className='w-2/3 h-[470px] justify-end'>
                        <img src={bg4} className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='absolute left-0 top-20 bg-[#2A0134] text-white flex flex-col gap-5 p-10 text-start'>
                        <h1 className='text-lg font-light'># Shop By Category</h1>
                        <h1 className='text-4xl font-medium italic'>Shop Lucious Extensions</h1>
                        <p className='text-wrap font-light'>Empower Your Beauty with Flawless Hairstyles – Where Every Woman's Confidence Shines <br /> at Our Salon.</p>
                        <button className='border-2 border-white py-2 px-6 w-fit'>Shop Now</button>
                    </div>
                    </div>
                </Carousel>
            </div>
          </section>
          {/* best selling hairpices */}
          <section className='mt-24 px-6 md:px-14 lg:px-28'>
            <div className='text-center text-4xl font-medium pb-14 text-[#2A0134]'>
                    <h1>BEST SELLING HAIRPIECES</h1>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2'>
                {/* Card 1 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={b1} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={b2} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={b3} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={b4} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={b5} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                    </div>
                </div>
                {/* Card 6 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={b6} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                    </div>
                </div>
                {/* Card 7 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={b7} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                    </div>
                </div>
                {/* Card 8 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={b8} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Name</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                    </div>
                </div>
            </div>
          </section>
          {/* Hair loss guide && color search tool */}
          <section className='mt-24 px-6 md:px-14 lg:px-28'>
            <div className='flex justify-between gap-3 items-center h-[500px]'>
                <div className='relative w-1/2'>
                    <img src={bg6} className='w-full h-full object-cover object-center' />
                    <div className='absolute w-3/4 left-20 -bottom-16 bg-[#2A0134] text-white flex flex-col gap-3 p-7 justify-center text-center items-center'>
                        <h1 className='text-xl font-normal'>Hair Loss Guide</h1>
                        <p className='text-wrap font-light italic'>Discover your perfect hairpiece for the natural look you've always dreamed of.</p>
                        <Link className='text-base font-light flex gap-1 items-center text-orange-400 hover:text-orange-700 '>Use Our Color Search Tool <IoMdArrowDropright className='text-2xl' /></Link>
                    </div>
                </div>
                <div className='relative w-1/2'>
                    <img src={bg7} className='w-full h-full object-cover object-center' />
                    <div className='absolute w-3/4 left-20 -bottom-16 bg-[#2A0134] text-white flex flex-col gap-3 p-7 justify-center text-center items-center'>
                        <h1 className='text-xl font-normal'>Color Search Tool</h1>
                        <p className='text-wrap font-light italic'>Simplify your shopping experience with a variety of styles in your favorite shade, just a few clicks away.</p>
                        <Link className='text-base font-light flex gap-1 items-center text-orange-400 hover:text-orange-700 '>Use Our Color Search Tool <IoMdArrowDropright className='text-2xl' /></Link>
                    </div>
                </div>
            </div>
          </section>
          {/* LACE Wigs */}
          <section className='mt-40 px-6 md:px-14 lg:px-28'>
                <div className='text-center text-4xl font-medium pb-14 text-[#2A0134]'>
                    <h1>LACE WIGS</h1>
                </div>
                <div>
                <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showThumbs={false}
                className='w-full'
                >
                    {/* 1st slide */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2'>
                        {/* Card 1 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={lw1} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Lace Wigs</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={lw2} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Lace Wigs</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={lw3} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Lace Wigs</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={lw4} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Lace Wigs</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                    </div>
                    {/* 2nd slide */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-2'>
                        {/* Card 5 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={lw5} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Lace Wigs</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={lw6} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Lace Wigs</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 7 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={lw7} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Lace Wigs</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                        {/* Card 8 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={lw8} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Lace Wigs</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                            </div>
                        </div>
                    </div>
                </Carousel>
                </div>
          </section>
        </div>
    );
};

export default Banner;