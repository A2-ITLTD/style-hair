import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

    // get color for wigs
    function getColorBackground(color) {
        switch(color) {
            case "black":
                return "#000000";
            case "brunette":
                return "#6f4e37"; // Brown color
            case "blonde":
                return "#f5dd29"; // Light yellow color
            case "redhead":
                return "#ff6347"; // Tomato color
            case "silver":
                return "#c0c0c0"; // Silver color
            default:
                return "#ffffff"; // Default to white if color is not recognized
        }
    }
    

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
                <div className="w-full md:w-1/2 bg-[#581b6719] p-10 shadow-md text-right flex flex-col gap-5">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold">For 50 - 199 pieces</p>
                        <h1 className='text-left text-4xl font-medium text-[#2A0134]'>{newWigs.price} $</h1>
                    </div>
                    <h1 className='text-right text-xl font-medium text-[#2A0134]'>{newWigs.subcategory} 
                        <span className="text-lg font-semibold"> : Type </span></h1>
                    <p className="text-lg font-semibold">Available Colors</p>
                    <div className="flex justify-evenly">
                    {newWigs.color.map(color => (
                            <button 
                                className="p-5 rounded font-medium text-white"
                                key={color} 
                                style={{ backgroundColor: getColorBackground(color) }}>
                                {/* {color} */}
                            </button>
                        ))}
                    </div>

                    <p className="text-lg font-semibold">Availabe Length</p>
                    <div className="flex justify-evenly">
                        {
                            newWigs.length.map(length => (
                                <button
                                    className="py-2 px-6 bg-[#2A0134] text-white font-medium rounded" 
                                    key={length}>
                                    {length}
                                </button>
                        ))
                        }
                    </div>
                    <hr className="w-full border-2" />
                    
                    <div className="flex justify-between">
                        <button className="py-2 px-6 font-medium bg-white">Contact Supplier</button>
                        <button className="py-2 px-6 font-medium bg-[#2A0134] text-white">Start Order</button>
                    </div>
                    <hr className="w-full border-2" />
                    <h1 className="text-lg font-semibold">Shipping</h1>
                    <p>Shipping solutions for the selected quantity are currently unavailable</p>
                    <h1 className="text-lg font-semibold">Secure payments</h1>
                    <p>Every payment you make on Alibaba.com is secured with strict SSL encryption and PCI DSS data protection protocols</p>
                    <h1 className="text-lg font-semibold">Refund policy</h1>
                    <p>Claim a refund if your order doesn't ship, is missing, or arrives with product issues</p>
                </div>
            </div>
        </div>
    );
};

export default Details;