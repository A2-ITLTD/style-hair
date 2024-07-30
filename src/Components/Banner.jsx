import hairbg from '../Images/hairbg.jpg';
import bg2 from '../Images/bg2.jpg';
import bg3 from '../Images/bg3.jpg';
import bg4 from '../Images/b4.jpg';
import bg6 from '../Images/b6.jpg';
import bg7 from '../Images/b7.jpg';
import orangebg from '../Images/orangebg.jpg';
import '../../src/index.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { AiOutlineAlibaba } from "react-icons/ai";

import s1 from '../Images/Styles/s1.png';
import s2 from '../Images/Styles/s2.png';
import s3 from '../Images/Styles/s3.png';
import s4 from '../Images/Styles/s4.png';
import s5 from '../Images/Styles/s5.png';
import s6 from '../Images/Styles/s6.png';
import s7 from '../Images/Styles/s7.png';
import s8 from '../Images/Styles/s8.png';
import s9 from '../Images/Styles/s9.png';


import hp1 from '../Images/Styles/hp1.png';
import hp2 from '../Images/Styles/hp2.png';
import hp3 from '../Images/Styles/hp3.png';
import hp4 from '../Images/Styles/hp4.png';
import hp5 from '../Images/Styles/hp5.png';
import hp6 from '../Images/Styles/hp6.png';
import hp7 from '../Images/Styles/hp7.png';
import hp8 from '../Images/Styles/hp8.png';


import br1 from '../Images/Styles/br1.png';
import br2 from '../Images/Styles/br2.png';
import br3 from '../Images/Styles/br3.png';
import br4 from '../Images/Styles/br4.png';
import br5 from '../Images/Styles/br5.png';
import br6 from '../Images/Styles/br6.png';
import br7 from '../Images/Styles/br7.png';
import br8 from '../Images/Styles/br8.png';


import p1 from '../Images/People/p1.png';
import p2 from '../Images/People/p2.png';
import p3 from '../Images/People/p3.png';
import p4 from '../Images/People/p4.png';
import p5 from '../Images/People/p5.png';
import p6 from '../Images/People/p6.png';
import p7 from '../Images/People/p7.png';
import p8 from '../Images/People/p8.png';
import p9 from '../Images/People/p9.png';
import p10 from '../Images/People/p10.png';

const Banner = () => {
    // slideshow
    const [currentSlide, setCurrentSlide] = useState(1);
    const totalSlides = 3;

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
        }, 1000);

        return () => clearInterval(interval); 
    }, [totalSlides]);

    // fetch wigs data
    const [wigs, setWigs] = useState([])
    useEffect(() =>{
            fetch('wigs.json')
            .then(res => res.json())
            .then(data => {
                const WigsData = data.filter(wig => wig.category === "wigs");
                setWigs(WigsData);
            });
    }, [setWigs]);

    // fetch lace wigs
    const [lacewigs, setLacewigs] = useState([])
    useEffect(() => {
        fetch('wigs.json')
            .then(res => res.json())
            .then(data => {
                const laceWigsData = data.filter(wig => wig.category === "lacewigs");
                setLacewigs(laceWigsData);
            });
    }, [setLacewigs]);

    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
          chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
      };
    
      const wigsGroups = chunkArray(wigs, 4);
      const lacewigsGroups = chunkArray(lacewigs, 4);

    return (
        <div>
          {/* banner */}
          <section className="relative w-full h-[700px]">
            <img src={hairbg} className='w-full h-full object-cover object-left md:object-center' />
            <div className='absolute right-28 bottom-20 md:right-28 md:bottom-36 text-white flex flex-col gap-10'>
                <h1 className='text-6xl md:text-8xl font-bold'>Style Hair</h1>
                <button className='border-2 border-white py-4 w-full font-semibold text-2xl hover:bg-white hover:text-black'>Shop Now</button>
            </div>
          </section>
          {/* alibab button */}
          <section className="my-16 relative w-full h-32 rounded-md flex items-center justify-center">
            <img src={orangebg} className='absolute inset-0 w-full h-full object-cover object-left md:object-center rounded-md' />
            <div className='relative z-10'>
                <Link to="/" className='flex gap-2 items-center bg-white hover:bg-slate-200 text-[#FF6701] text-sm md:text-2xl font-bold py-2 px-3 md:px-8 rounded-md'>
                Get In Touch With Alibaba <AiOutlineAlibaba className='text-base md:text-5xl' />
                </Link>
            </div>
          </section>
          {/* wow seller */}
          <section className='mt-16 px-6 md:px-14 lg:px-28'>
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
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2'>
                        {/* Card 1 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s1} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Choppy Bob</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s2} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Bouncy Curls</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s3} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Sleek Shoulder Cut</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s4} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Wavy Chop</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd slide */}
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2'>
                        {/* Card 5 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s5} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Pixie Cut</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s9} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">French Bob</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 7 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s7} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Messy Bun</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 8 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={s8} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>SALE</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Sleek Shoulder Cut </h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
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
                    <div className='relative w-full flex flex-col md:flex-row justify-end'>
                    <div className='w-2/3 h-[470px]'>
                        <img src={bg2} className='w-full h-full object-cover object-center' />
                    </div>
                    <div className='absolute left-0 top-20 bg-[#2A0134] text-white flex flex-col gap-5 p-10 justify-start text-start '>
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
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-2'>
                {/* Card 1 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={hp1} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Stright Cut</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <div className='flex justify-between w-full items-center'>
                            <div className='flex justify-evenly gap-1'>
                                <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                            </div>
                            <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={hp2} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Chignon</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={hp3} alt="Card" className="h-full w-full object-cover object-top" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Layered</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={hp4} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Layered</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={hp5} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Side Swept Bangs</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                    </div>
                </div>
                {/* Card 6 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={hp6} alt="Card" className="h-full w-full object-cover object-top" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Shag</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                    </div>
                </div>
                {/* Card 7 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={hp7} alt="Card" className="h-full w-full object-cover object-center" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Pony</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                    </div>
                </div>
                {/* Card 8 */}
                <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                        <img src={hp8} alt="Card" className="h-full w-full object-cover" />
                        <h1 className='absolute top-4 left-4 text-2xl font-medium'><FaHeart className='text-[#2A0134]'/></h1>
                    </div>
                    <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                        <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Blunt Lob</h3>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                        <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                    </div>
                </div>
            </div>
          </section>
          {/* Hair loss guide && color search tool */}
          <section className='mt-24 px-6 md:px-14 lg:px-28'>
            <div className='flex flex-col md:flex-row justify-between gap-24 md:gap-3 items-center h-[500px]'>
                <div className='relative w-full md:w-1/2'>
                    <img src={bg6} className='w-full h-full object-cover object-center' />
                    <div className='absolute w-11/12 md:w-3/4 left-5 md:left-20 -bottom-16 bg-[#2A0134] text-white flex flex-col gap-3 p-7 justify-center text-center items-center'>
                        <h1 className='text-xl font-normal'>Hair Loss Guide</h1>
                        <p className='text-wrap font-light italic'>Discover your perfect hairpiece for the natural look you've always dreamed of.</p>
                        <Link className='text-base font-light flex gap-1 items-center text-orange-400 hover:text-orange-700 '>Use Our Color Search Tool <IoMdArrowDropright className='text-2xl' /></Link>
                    </div>
                </div>
                <div className='relative w-full md:w-1/2'>
                    <img src={bg7} className='w-full h-full object-cover object-center' />
                    <div className='absolute w-11/12 md:w-3/4 left-5 md:left-20 -bottom-16 bg-[#2A0134] text-white flex flex-col gap-3 p-7 justify-center text-center items-center'>
                        <h1 className='text-xl font-normal'>Color Search Tool</h1>
                        <p className='text-wrap font-light italic'>Simplify your shopping experience with a variety of styles in your favorite shade, just a few clicks away.</p>
                        <Link className='text-base font-light flex gap-1 items-center text-orange-400 hover:text-orange-700 '>Use Our Color Search Tool <IoMdArrowDropright className='text-2xl' /></Link>
                    </div>
                </div>
            </div>
          </section>
          {/* LACE Wigs */}
          <section className='mt-64 md:mt-40 px-6 md:px-14 lg:px-28'>
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
                    {
                        lacewigsGroups.map((group, index) => (
                            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2'>
                                {
                                    group.map((wigs, idx) => (
                                        <Link to={`/wigs/${wigs.id}`} className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                                <img src={wigs.main_image} alt="Card" className="h-full w-full object-cover" />
                                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                                            </div>
                                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                            <h3 className="text-base text-center text-[#2A0134] font-semibold mb-2">{wigs.name}</h3>
                                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                                <div className='flex justify-between w-full items-center'>
                                                    <div className='flex justify-evenly gap-1'>
                                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> ${wigs.price}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </Carousel>
                </div>
          </section>
          {/*Wigs */}
          <section className='mt-24 px-6 md:px-14 lg:px-28'>
                <div className='text-center text-4xl font-medium pb-14 text-[#2A0134]'>
                    <h1>WIGS</h1>
                </div>
                <div>
                <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showThumbs={false}
                className='w-full'
                >
                    {
                        wigsGroups.map((group, index) => (
                            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2'>
                                {
                                    group.map((wigs, idx) => (
                                        <Link to={`/wigs/${wigs.id}`} className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                                <img src={wigs.main_image} alt="Card" className="h-full w-full object-cover" />
                                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                                            </div>
                                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                            <h3 className="text-base text-center text-[#2A0134] font-semibold mb-2">{wigs.name}</h3>
                                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                                <div className='flex justify-between w-full items-center'>
                                                    <div className='flex justify-evenly gap-1'>
                                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> ${wigs.price}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        ))
                    }
                </Carousel>
                </div>
          </section> 
          {/*Braids */}
          <section className='mt-24 px-6 md:px-14 lg:px-28'>
                <div className='text-center text-4xl font-medium pb-14 text-[#2A0134]'>
                    <h1>Braids</h1>
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
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2'>
                        {/* Card 1 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={br1} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Stitch Braids</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={br2} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Box Braids</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={br3} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">French Braid</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={br4} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">French Braid</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd slide */}
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-2'>
                        {/* Card 5 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={br5} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">3 Strand Braid</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 6 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={br6} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Braided Bob</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 7 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={br7} alt="Card" className="h-full w-full object-cover object-top" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Ghana Braids</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                        {/* Card 8 */}
                        <div className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={br8} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                <h3 className="text-2xl text-[#2A0134] font-semibold mb-2">Havana Twist</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>
                                        <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$120</strike> $100</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                </div>
          </section>
          {/* customer revies */}
          <section className='mt-24 px-6 md:px-14 lg:px-28'>
                <div className='text-center text-4xl font-medium pb-14 text-[#2A0134] flex flex-col gap-10'>
                    <h1>CUSTOMER REVIEWS</h1>
                    <div className='flex flex-col gap-4'>
                        <h1>4.8</h1>
                        <h1 className='flex items-center justify-center gap-2 text-3xl'>< FaStar /> < FaStar /> < FaStar />< FaStar /><FaStarHalfAlt /></h1>
                        <p className='text-sm italic'>Based On 19,000 Customer Reviews</p>
                    </div>
                </div>
                <div>
                <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showThumbs={false}
                className='w-full'
                >
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2'>
                        {/* Card 1 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p1} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p2} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p3} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p4} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                        {/* Card 5 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p5} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                    </div>


                     {/* 2nd slide */}
                     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-2'>
                         {/* Card 6 */}
                         <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p6} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                        {/* Card 7 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p7} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                        {/* Card 8 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p8} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                        {/* Card 9 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p9} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
                            </div>
                        </div>
                        {/* Card 10 */}
                        <div className="relative flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={p10} alt="Card" className="h-full w-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 bg-glass p-2 w-full flex flex-col items-center justify-center gap-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3 text-yellow-400">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </h3>
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