import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Products = () => {
    // fetch wigs data
    const [wigs, setWigs] = useState([])
    useEffect(() =>{
            fetch('wigs.json')
            .then(res => res.json())
            .then(data => setWigs(data))
    }, [setWigs]);

    return (
        <div className='mt-16 px-6 md:px-14 lg:px-28'>
            <div className='text-center text-4xl font-medium pb-14 text-[#2A0134]'>
                <h1>All WIGS</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 p-2'>
            {
                wigs.map(wig => (
                    <div key={wig.id}>
                        <Link to={`/wigs/${wig.id}`} className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden h-full">
                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                <img src={wig.main_image} alt="Card" className="h-full w-full object-cover" />
                                <h1 className='absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded'>NEW</h1>
                            </div>
                            <div className="p-4 w-full flex flex-col items-center justify-between flex-grow gap-2">
                                <h3 className="text-base text-center text-[#2A0134] font-semibold mb-2">{wig.name}</h3>
                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3"><FaStar /><FaStar /><FaStar /><FaStar /></h3>
                                <div className='flex justify-between w-full items-center'>
                                    <div className='flex justify-evenly gap-1'>
                                        {wig.color.includes("black") && <div className='h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125'></div>}
                                        {wig.color.includes("brunette") && <div className='h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125'></div>}
                                        {wig.color.includes("blonde") && <div className='h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125'></div>}
                                        {wig.color.includes("redhead") && <div className='h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125'></div>}
                                        {wig.color.includes("silver") && <div className='h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125'></div>}
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2"><strike className="text-sm text-zinc-600">$100</strike> ${wig.price}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
                }
            </div>
            {/* card end */}
        </div>
    );
};

export default Products;