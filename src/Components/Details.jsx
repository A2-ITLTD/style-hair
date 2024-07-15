import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// getting hair color
import bl1 from '../Images/haircolor/bl1.png';
import bl2 from '../Images/haircolor/bl2.png';
import bl3 from '../Images/haircolor/bl3.png';
import bl4 from '../Images/haircolor/bl4.png';
import bl5 from '../Images/haircolor/bl5.png';
import bl6 from '../Images/haircolor/bl6.png';
import bl7 from '../Images/haircolor/bl7.png';

import br1 from '../Images/haircolor/br1.png';
import br2 from '../Images/haircolor/br2.png';
import br3 from '../Images/haircolor/br3.png';
import br4 from '../Images/haircolor/br4.png';
import br5 from '../Images/haircolor/br5.png';
import br6 from '../Images/haircolor/br6.png';
import br7 from '../Images/haircolor/br7.png';
import br8 from '../Images/haircolor/br8.png';
import br9 from '../Images/haircolor/br9.png';

import r1 from '../Images/haircolor/r1.png';
import r2 from '../Images/haircolor/r2.png';
import r3 from '../Images/haircolor/r3.png';
import r4 from '../Images/haircolor/r4.png';
import r5 from '../Images/haircolor/r5.png';
import r6 from '../Images/haircolor/r6.png';

import g1 from '../Images/haircolor/g1.png';
import g2 from '../Images/haircolor/g2.png';
import g3 from '../Images/haircolor/g3.png';
import g4 from '../Images/haircolor/g4.png';
import g5 from '../Images/haircolor/g5.png';
import g6 from '../Images/haircolor/g6.png';
import g7 from '../Images/haircolor/g7.png';

const Details = () => {
    const [loading, setLoading] = useState(true);
    const [newWigs, setNewWigs] = useState(null); 
    const wigs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    useEffect(() => {
        setLoading(true); 
        setTimeout(() => {
            if (wigs) {
                const foundwigs = wigs.find(wig => wig.id === intId);
                if (foundwigs) {
                    setNewWigs(foundwigs);
                } else {
                    console.log(`Wig with id ${intId} not found`);
                }
            }
            setLoading(false); 
        }, 1000); 
    }, [wigs, intId]);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>;
    }

    // cutting down wigs json to 4 data in each slideshow
    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
          chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
      };
    
      const wigsGroups = chunkArray(wigs, 4);

    

    return (
        <div className='mt-16 px-6 md:px-14 lg:px-28'>
            <div className='text-left text-4xl font-medium pb-14 text-[#2A0134]'>
                <h1>{newWigs.name}</h1>
            </div>
            <div className="mt-2 flex flex-col md:flex-row gap-10">
                {/* images */}
                <div className="w-full md:w-1/2 p-5 rounded-md">
                    <Carousel
                    autoPlay
                    interval={1000}
                    infiniteLoop
                    showThumbs={false}
                    className='w-full'
                    >
                        <div>
                            <img src={newWigs.main_image} className="rounded-md" />
                        </div>
                        <div>
                            <img src={newWigs.image2} className="rounded-md" />
                        </div>
                        <div>
                            <img src={newWigs.image3} className="rounded-md" />
                        </div>
                    </Carousel>
                </div>
                {/* details */}
                <div className="w-full md:w-1/2 bg-gray-100 p-5 md:p-10 shadow-md text-left flex flex-col gap-5">
                    <div className="flex flex-wrap gap-4 justify-between">
                        <p className="text-lg font-semibold">Minimum Oder Piece: 100</p>
                        <h1 className='text-left text-4xl font-medium text-[#2A0134]'>{newWigs.price} $</h1>
                    </div>

                    <h1 className='text-left text-xl font-medium text-[#2A0134]'>Type : 
                        <span className="text-lg font-semibold"> {newWigs.subcategory} </span></h1>

                    <h1 className='text-left text-xl font-medium text-[#2A0134] flex gap-2'>Rating : 
                    <span className="text-lg font-semibold flex gap-2 items-center"> <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /> </span></h1>

                    <p className="text-lg font-semibold">Availabe Length</p>
                    <div className="flex flex-wrap gap-2 justify-evenly">
                        {
                            newWigs.length.map(length => (
                                <button
                                    className="py-2 md:px-3 lg:px-6 text-[#2A0134] bg-gray-300 font-semibold rounded" 
                                    key={length}>
                                    {length}
                                </button>
                        ))
                        }
                    </div>
                    <hr className="w-full border-2 mt-10" />
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contactus" className="py-2 px-6 text-xl font-medium bg-[#2A0134] text-white rounded">Contact Supplier</Link>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <Tabs>
                    <TabList className="flex flex-wrap gap-2">
                    <Tab className="border-2 border-violet-900 py-2 px-3 rounded font-medium">All</Tab>
                    <Tab className="border-2 border-violet-900 py-2 px-3 rounded font-medium">Blonde</Tab>
                    <Tab className="border-2 border-violet-900 py-2 px-3 rounded font-medium" >Brunette</Tab>
                    <Tab className="border-2 border-violet-900 py-2 px-3 rounded font-medium">Grey</Tab>
                    <Tab className="border-2 border-violet-900 py-2 px-3 rounded font-medium">Red</Tab>
                    </TabList>

                    {/* All */}
                    <TabPanel className="mt-6">
                        <div className="">
                        <div className="grid  grid-cols-4 md:grid-cols-8 gap-3 md:gap-5 ld:gap-10">
                        <img src={bl1} className="w-full h-full rounded" title="Almond Mist" />
                        <img src={bl2} className="w-full h-full rounded" title="Buttered Toast Mist"/>
                        <img src={bl3} className="w-full h-full rounded" title="Honey Mist"/>
                        <img src={bl4} className="w-full h-full rounded" title="Vanlla Mist"/>
                        <img src={bl5} className="w-full h-full rounded" title="Butterscotch Mist"/>
                        <img src={bl6} className="w-full h-full rounded" title="Praline Mist"/>
                        <img src={bl7} className="w-full h-full rounded" title="Wheat Mist"/>
                        <img src={br1} className="w-full h-full rounded" title="Nutmeg Mist"/>
                        <img src={br2} className="w-full h-full rounded" title="Mocha Mist"/>
                        <img src={br3} className="w-full h-full rounded" title="Pecan Mist"/>
                        <img src={br4} className="w-full h-full rounded" title="Cappuccino Mist"/>
                        <img src={br5} className="w-full h-full rounded" title="Coffee Mist"/>
                        <img src={br6} className="w-full h-full rounded" title="Licorice Mist" />
                        <img src={br7} className="w-full h-full rounded" title="Dark Chocolate Mist"/>
                        <img src={br8} className="w-full h-full rounded" title="Chestnut Mist"/>
                        <img src={br9} className="w-full h-full rounded" title="Mahogany Mist"/>
                        <img src={g1} className="w-full h-full rounded" title="Sugared Smoke"/>
                        <img src={g2} className="w-full h-full rounded" title="Sugared Charcoal"/>
                        <img src={g3} className="w-full h-full rounded" title="Platinum Mist"/>
                        <img src={g4} className="w-full h-full rounded" title="Sugared Silver"/>
                        <img src={g5} className="w-full h-full rounded" title="Sugared Almond"/>
                        <img src={g6} className="w-full h-full rounded" title="Sugared Walnut"/>
                        <img src={g7} className="w-full h-full rounded" title="Sugared Pecan"/>
                        <img src={r1} className="w-full h-full rounded" title="Ginger Mist"/>
                        <img src={r2} className="w-full h-full rounded" title="Cayenne Mist"/>
                        <img src={r3} className="w-full h-full rounded" title="Paprika Mist"/>
                        <img src={r4} className="w-full h-full rounded" title="Mango Mist"/>
                        <img src={r5} className="w-full h-full rounded" title="Chocolate Copper Mist"/>
                        <img src={r6} className="w-full h-full rounded" title="Dark Cinnamon Mist"/>
                        </div>
                        </div>
                    </TabPanel>
                    {/* blonde */}
                    <TabPanel className="mt-6">
                        <div className="grid grid-cols-3 md:grid-cols-8 gap-10 rounded">
                        <img src={bl1} className="w-full h-full rounded" title="Almond Mist" />
                        <img src={bl2} className="w-full h-full rounded" title="Buttered Toast Mist"/>
                        <img src={bl3} className="w-full h-full rounded" title="Honey Mist"/>
                        <img src={bl4} className="w-full h-full rounded" title="Vanlla Mist"/>
                        <img src={bl5} className="w-full h-full rounded" title="Butterscotch Mist"/>
                        <img src={bl6} className="w-full h-full rounded" title="Praline Mist"/>
                        <img src={bl7} className="w-full h-full rounded" title="Wheat Mist"/>
                        </div>
                    </TabPanel>
                    {/* brunette */}
                    <TabPanel className="mt-6">
                        <div className="grid grid-cols-3 md:grid-cols-8 gap-10 rounded">
                        <img src={br1} className="w-full h-full rounded" title="Nutmeg Mist"/>
                        <img src={br2} className="w-full h-full rounded" title="Mocha Mist"/>
                        <img src={br3} className="w-full h-full rounded" title="Pecan Mist"/>
                        <img src={br4} className="w-full h-full rounded" title="Cappuccino Mist"/>
                        <img src={br5} className="w-full h-full rounded" title="Coffee Mist"/>
                        <img src={br6} className="w-full h-full rounded" title="Licorice Mist" />
                        <img src={br7} className="w-full h-full rounded" title="Dark Chocolate Mist"/>
                        <img src={br8} className="w-full h-full rounded" title="Chestnut Mist"/>
                        <img src={br9} className="w-full h-full rounded" title="Mahogany Mist"/>
                        </div>
                    </TabPanel>
                    {/* grey */}
                    <TabPanel className="mt-6">
                        <div className="grid grid-cols-3 md:grid-cols-8 gap-10 rounded">
                        <img src={g1} className="w-full h-full rounded" title="Sugared Smoke"/>
                        <img src={g2} className="w-full h-full rounded" title="Sugared Charcoal"/>
                        <img src={g3} className="w-full h-full rounded" title="Platinum Mist"/>
                        <img src={g4} className="w-full h-full rounded" title="Sugared Silver"/>
                        <img src={g5} className="w-full h-full rounded" title="Sugared Almond"/>
                        <img src={g6} className="w-full h-full rounded" title="Sugared Walnut"/>
                        <img src={g7} className="w-full h-full rounded" title="Sugared Pecan"/>
                        </div>
                    </TabPanel>
                    {/* red */}
                    <TabPanel className="mt-6">
                        <div className="grid grid-cols-3 md:grid-cols-8 gap-10 rounded">
                        <img src={r1} className="w-full h-full rounded" title="Ginger Mist"/>
                        <img src={r2} className="w-full h-full rounded" title="Cayenne Mist"/>
                        <img src={r3} className="w-full h-full rounded" title="Paprika Mist"/>
                        <img src={r4} className="w-full h-full rounded" title="Mango Mist"/>
                        <img src={r5} className="w-full h-full rounded" title="Chocolate Copper Mist"/>
                        <img src={r6} className="w-full h-full rounded" title="Dark Cinnamon Mist"/>
                        </div>
                    </TabPanel>
                    
                </Tabs>
            </div>
            <div className="flex flex-col gap-6 mt-14">
                <h1 className="text-3xl font-semibold">Description</h1>
                <p>The Instinct Synthetic Wig by Gabor is a short shag silhouette featuring slightly waved all over layers that fall to a collar length nape. Instinct is also available in a average-large cap size.</p>
                <ul className="list-disc list-inside">
                    <li>Inside "hidden" weft for a natural hairline</li>
                    <li>Open ear tabs</li>
                    <li>Open extended nape</li>
                </ul>
                <h1 className="text-3xl font-semibold">Specifications</h1>
                <table className="border-2 ">
                    <tbody className="">
                        <tr  className="flex gap-8 items-center font-semibold border-2 p-3">
                            <td>roduct Weight:</td>
                            <td>{newWigs.product_weight}</td>
                        </tr>
                        <tr  className="flex gap-8 items-center font-semibold border-2 p-3">
                            <td>Hair Fiber:</td>
                            <td>{newWigs.hair_fiber}</td>
                        </tr>
                        <tr  className="flex gap-8 items-center font-semibold border-2 p-3">
                            <td>Hair Length:</td>
                            <td>{newWigs.hair_length}</td>
                        </tr>
                        <tr  className="flex gap-8 items-center font-semibold border-2 p-3">
                            <td>Hair Texture:</td>
                            <td>{newWigs.hair_texture}</td>
                        </tr>
                        <tr  className="flex gap-8 items-center font-semibold border-2 p-3">
                            <td>Hair Style:</td>
                            <td>{newWigs.hair_style}</td>
                        </tr>
                        <tr  className="flex gap-8 items-center font-semibold border-2 p-3">
                            <td>Cap Size:</td>
                            <td>{newWigs.cap_size}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* suggestions */}
            <div className='mt-20'>
                <div className='text-center text-4xl font-medium pb-14 text-[#2A0134]'>
                    <h1>YOU MAY ALSO LIKE</h1>
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
                                        <Link to={`/wigs/${wigs.id}`} className="flex flex-col items-start bg-white shadow-md rounded-lg ">
                                            <div className="relative h-72 w-full bg-gray-200 flex items-center justify-center">
                                                <img src={wigs.main_image} alt="Card" className="h-full w-full object-cover" />
                                                <h1 className="absolute top-4 left-4 text-xs font-medium text-white bg-[#2A0134] py-2 px-3 rounded">NEW</h1>
                                            </div>
                                            <div className="p-4 w-full flex flex-col items-center justify-center gap-2">
                                                <h3 className="text-base text-center text-[#2A0134] font-semibold mb-2">{wigs.name}</h3>
                                                <h3 className="text-lg font-semibold mb-2 flex items-center gap-3">
                                                    <FaStar /><FaStar /><FaStar /><FaStar />
                                                </h3>
                                               <div className="">
                                               <div className="w-full flex justify-between items-center gap-4">
                                                    <div className="flex justify-evenly gap-1">
                                                        <div className="h-5 w-5 rounded bg-[#000000] transform transition-transform duration-300 hover:scale-125"></div>
                                                        <div className="h-5 w-5 rounded bg-[#4B3621] transform transition-transform duration-300 hover:scale-125"></div>
                                                        <div className="h-5 w-5 rounded bg-[#FAF0BE] transform transition-transform duration-300 hover:scale-125"></div>
                                                        <div className="h-5 w-5 rounded bg-[#B44C43] transform transition-transform duration-300 hover:scale-125"></div>
                                                        <div className="h-5 w-5 rounded bg-[#C0C0C0] transform transition-transform duration-300 hover:scale-125"></div>
                                                    </div>
                                                    <h3 className="text-lg font-semibold text-[#2A0134] mb-2">
                                                        <strike className="text-sm text-zinc-600">$120</strike> ${wigs.price}
                                                    </h3>
                                                </div>
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
          </div> 
        </div>
    );
};

export default Details;