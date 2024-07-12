import bg8 from '../Images/bg8.jpg';
const Policy = () => {
    return (
        <div className='mt-16 px-6 md:px-14 lg:px-28'>
          <div className='relative w-full h-96 mb-14'>
             <img src={bg8} className='w-full h-full object-cover object-center rounded' />
             <h1 className='absolute top-40 text-3xl font-bold text-white w-full bg-[#00000077] py-6 text-center'>PRIVACY POLICY</h1>
          </div>
          <div className='flex flex-col gap-6 '>
             <p className='text-base font-normal text-zinc-600'>Style Hair takes your privacy seriously. This privacy policy covers the treatment of personally identifiable information that Ebonyline.com collects when you are on the Style Hair site. By visiting US, you are accepting the practices described in this privacy policy.</p>
             <hr className='w-full border-[1px] border-[#2A013477] my-5'/>
             <h1 className='text-3xl font-bold text-[#2A0134]'>Information Collection and Use</h1>
             <p className='text-base font-normal text-zinc-600'>
             StyleHair.com collects your information when you make a purchase, visit the site, search, post, complete a questionnaire, or register for a StyleHair.com account. Through these actions, you may provide us with your name, address, phone number, email address, zip code, birth date, occupation, gender, credit card information, and personal interests. We use this information to respond to your requests, customize your future shopping experience, advertise, improve our stores, and communicate with you.
             </p>
             <h1 className='text-3xl font-bold text-[#2A0134]'>Security</h1>
             <p className='text-base font-normal text-zinc-600'>
             We use industry-standard Secure Sockets Layer (SSL) software to protect the security of your information during transmission. It is important for you to protect against unauthorized access to your password and to your computer.
             </p>
             <h1 className='text-3xl font-bold text-[#2A0134]'>Information Sharing and Disclosure</h1>
             <p className='text-base font-normal text-zinc-600'>
             StyleHair.com will not sell your information to anyone. StyleHair.com may share your information with other companies or individuals when: we have your consent to share the information; we need to share your information to provide the product or service you have requested; or we need to send the information to companies who work on behalf of StyleHair.com to provide a product or service to you.
             </p>
             <h1 className='text-3xl font-bold text-[#2A0134]'>Cookies</h1>
             <p className='text-base font-normal text-zinc-600'>Style Hair may set and access cookies on your computer.</p>
             <h1 className='text-3xl font-bold text-[#2A0134]'>Changes of Privacy Policy</h1>
             <p className='text-base font-normal text-zinc-600'>Style Hair may amend this policy from time to time. If we make any substantial changes in the way we use your personal information we will notify you by posting a prominent announcement on our pages.</p>
             <h1 className='text-3xl font-bold text-[#2A0134]'>Minors</h1>
             <p className='text-base font-normal text-zinc-600'>By using StyleHair.com, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your</p>
             <h1 className='text-3xl font-bold text-[#2A0134]'>Order Cancellation</h1>
             <p className='text-base font-normal text-zinc-600'>We retains the authority to void orders should a pricing discrepancy occur. Furthermore, the company reserves the right to annul orders linked to fraudulent activity, suspicious behavior, or policy misuse.</p>
             <h1 className='text-3xl font-bold text-[#2A0134]'>Questions or Suggestions</h1>
             <p className='text-base font-normal text-zinc-600'>If you have any questions or suggestions, please email at info@stylistwigs.com</p>
          </div>
        </div>
    );
};

export default Policy;