import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import bg from "../Images/bg8.jpg";

const ContactUs = () => {

    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //     .sendForm('service_vmgx6vh', 'template_eyckv8h', form.current, {
    //         // publicKey: 'faA8fkwyy5d-F62S3',
    //     })
    //     .then(
    //         () => {
    //         console.log('SUCCESS!');
    //         toast.success("Your Message was sent");
    //         },
    //         (error) => {
    //         console.log('FAILED...', error.text);
    //         },
    //     );
    // };

    return (
        <div className="mt-24 px-5 md:px-14 lg:px-24 flex flex-col-reverse md:flex-row gap-16 text-[#2A0134]">
           <div className="w-full md:w-1/2 rounded-2xl h-auto">
                <img src={bg} className='rounded-2xl h-full object-cover' />
           </div>
           <div className="w-full md:w-1/2 p-10 border-y-2 border-black rounded-2xl">
            <h1 className='text-4xl font-semibold'>Contact Us</h1>
            <p className='text-base font-medium opacity-70 py-4'>Kindly fill the form and our team will get in touch with you shortly.</p>
            <form className='flex flex-col w-full gap-7' >
                <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black' />
                <input 
                type="tel" 
                required 
                name="user_phone"  
                placeholder="WhatsApp Number" 
                className="py-2 px-5 border-2 border-black rounded-md text-lg text-black" 
                onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                    }
                }}
                />
                <input type="email" name="user_email" placeholder='Email' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black' />
                <textarea type="text" name="address" placeholder='Write Your Address' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black textarea textarea-bordered textarea-2xl w-full'></textarea>
                <select name="wig" className='py-3 px-5 border-2 border-black rounded-md text-base text-black textarea textarea-bordered textarea-2xl w-full'>
                    <option value="">Select Product</option>
                    <option value="2022 Hot Selling Brazilian Human Hair Lace Front Wig">2022 Hot Selling Brazilian Human Hair Lace Front Wig</option>
                    <option value="Virgin Hair Vendors Deep Wave Glueless Wig">Virgin Hair Vendors Deep Wave Glueless Wig</option>
                    <option value="Peruvian Deep Wave Lace Front Wig">Peruvian Deep Wave Lace Front Wig</option>
                    <option value="Indian Remy Human Hair Short Bob Wig">Indian Remy Human Hair Short Bob Wig</option>
                    <option value="Malaysian Straight Human Hair Wig">Malaysian Straight Human Hair Wig</option>
                    <option value="Brazilian Loose Wave Lace Front Wig">Brazilian Loose Wave Lace Front Wig</option>
                    <option value="Cambodian Kinky Curly Human Hair Wig">Cambodian Kinky Curly Human Hair Wig</option>
                    <option value="European Silky Straight Human Hair Wig">European Silky Straight Human Hair Wig</option>
                    <option value="High quality European virgin Jewish hair wigs with 4x4''silk top">High quality European virgin Jewish hair wigs with 4x4''silk top</option>
                    <option value="Wholesale Perruque Brazilian Hair Kinky Straight Cuticle Aligned Human Hair Transparent Lace Front Wigs For Women">Wholesale Perruque Brazilian Hair Kinky Straight Cuticle Aligned Human Hair Transparent Lace Front Wigs For Women</option>
                    <option value="Women's Gray Short Bob Wig Natural Fluffy Style Soft Mild Fiber High Temperature Silk Heat Resistant for Daily Use">Women's Gray Short Bob Wig Natural Fluffy Style Soft Mild Fiber High Temperature Silk Heat Resistant for Daily Use</option>
                    <option value="Women's 6-Inch Short Bob Wig Natural Fluffy Style High-Temperature Silk Heat Resistant Soft Synthetic Hair Fiber Daily Use">Women's 6-Inch Short Bob Wig Natural Fluffy Style High-Temperature Silk Heat Resistant Soft Synthetic Hair Fiber Daily Use</option>
                    <option value="European Virgin Hair Balayage Color Monofilament Wig 16 Inches Wave Texture 5x6 Mono Top Human Hair Wig WIth PU">European Virgin Hair Balayage Color Monofilament Wig 16 Inches Wave Texture 5x6 Mono Top Human Hair Wig WIth PU</option>
                    <option value="38-Inch Black Front Women's Synthetic Hair Wig Thick Long Straight Heat Resistant Fiber">38-Inch Black Front Women's Synthetic Hair Wig Thick Long Straight Heat Resistant Fiber</option>
                    <option value="Fashion gradient dyeing big wave long hair head covering forehead lace 13 * 4 chemical fiber wig female Xuchang factory price">Fashion gradient dyeing big wave long hair head covering forehead lace 13 * 4 chemical fiber wig female Xuchang factory price</option>
                    <option value="Brown Balayage Color European Human Hair Full Monofilament Wigs Hand Tied BOB Cut 130% Density Mono Wig">Brown Balayage Color European Human Hair Full Monofilament Wigs Hand Tied BOB Cut 130% Density Mono Wig</option>
                </select>
                <input type="number" name="quantity" placeholder='Quantity ( min 100 )' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black' />
                <input type="number" name="samplequantity" placeholder='Sample Quantity ( min 50 )' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black' />
                <textarea type="text" name="address" placeholder='Any Message or change about product ?' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black textarea textarea-bordered textarea-2xl w-full'></textarea>
                <button type="submit" value="Send" className='bg-[#2A0134]  text-white font-semibold p-5 rounded-lg hover:bg-slate-700' >Send</button>
            </form>
           </div>
        </div>
    );
};

export default ContactUs;