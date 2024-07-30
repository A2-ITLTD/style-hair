import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import { FaNoteSticky } from "react-icons/fa6";
const SubProducts = () => {
    const [loading, setLoading] = useState(true);
    const [newWigs, setNewWigs] = useState([]); 
    const subwigs = useLoaderData();
    const { category } = useParams();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            if (subwigs) {
                const foundwigs = subwigs.filter(wig => wig.subcategory === category); 
                if (foundwigs.length > 0) {
                    setNewWigs(foundwigs);
                } else {
                    console.log(`No wigs found for category: ${category}`);
                }
            }
            setLoading(false);
        }, 1000);
    }, [subwigs, category]);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    return (
        <div className='mt-16 px-6 md:px-14 lg:px-28'>
            <div className='text-center text-4xl font-medium pb-14 text-[#2A0134]'>
                <h1>WIGS</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 p-2'>
                { newWigs.length > 0 ? newWigs.map(wig => (
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
                :
                 <div>No wigs available for this category.</div>
                 }
            </div>
            <div className="mt-16 mx-0 md:mx-12 flex items-start justify-start gap-5">
                <FaNoteSticky className="text-[#2A0134] h-auto w-28"/>
                <p className='text-sm font-normal text-zinc-600 text-justify '>When you select a style hair, you are choosing a product that uses some of the most technologically advanced hair fibers. Many of our style hairs are created with heat-resistant fiber, allowing you to use a curling iron whenever you want. One of the best traits of style hair is that you rarely have to worry about styling it. We offer a fabulous selection of the best styles, so you can get on with your day with ease while looking absolutely amazing. Find exactly what you're searching for in our online catalog of the latest styles, whether it's short curly styles or long straight styles, with a wide range of color choices. You owe it to yourself to look and feel your best, and our style hair is sure to help you achieve that. Start shopping for your style hair today and fall in love with your soon-to-be new look.</p>
            </div>
        </div>
    );
};

export default SubProducts;