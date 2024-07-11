import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/Footer";
const Root = () => {
    return (
        <div className="w-full">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-center" />
            {/* <div className="fixed bottom-6 right-6">
                <a href="https://wa.me/+8801846937397?text=Hello how can I help you?" target="_blank">
                    <img src={whatsapp} className="w-20" title="Chat with Us" />
                </a>
            </div> */}
        </div>
    );
};

export default Root;