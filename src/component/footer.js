import Chat_Conversation_Circle from './assets/Chat_Conversation_Circle.svg';
import Paper_Plane from './assets/Paper_Plane.svg';
import logo from './assets/log.png';
import { Link } from 'react-router-dom';
import call from './assets/call.png';
import email from './assets/email.png'; 

const Footer = () => {
    return ( 
        <>
        <div className="  bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] font-Outfit mt-16">
            <div className=" py-16 px-4 md:px-16 lg:px-24 bg-[#121212] flex flex-col lg:flex-row items-center justify-between">
                <div className=' flex items-center space-x-8'>
                    <img src={ Chat_Conversation_Circle } className=' w-12' alt="Talk to us" />
                    <span className=' flex flex-col space-y-4'>
                        <p className=' text-2xl md:text-4xl font-medium text-[#ffffff]'>Let's talk about your project</p>
                        <p className=' text-base font-normal text-[#ffffffc3]'>Discover how we can bring innovation to your ideas, together.</p>
                    </span>
                </div>
                <Link to='/contact'>
                <button className=" custom-button mt-6 md:mt-0">
                    <p>Let's Talk</p>
                    <img src={ Paper_Plane } className=' ml-2 w-5' alt="" />
                </button>
                </Link>
            </div>
             
            <div className=" py-16 px-4 md:px-16 lg:px-24 text-[#f5f5f5d3]">
                <div className=" flex flex-col lg:flex-row items-start justify-between space-y-5 md:space-y-0">

                <div className=" space-y-2">
                    <span className=" flex items-center">
                        <img 
                        src={ logo } 
                        className=' w-[200px]'
                        alt="Agent Prime Sites" />
                    </span>
                    <p className=' font-normal text-base w-[250px]'>Prime Agent Sites is an innovative digital agency that specializes in creating high-quality website</p>
                    <span className=' flex space-x-2 text-white'>
                        <img src={ call } alt="" />
                        <p>(902) 536-3356</p>
                    </span>
                    <span className=' flex space-x-2 text-white'>
                        <img src={ email } alt="" />
                        <p>Info@primeagentsites.com</p>
                    </span>
                </div>

                <div className=' text-base '>
                    <p className=' font-semibold mb-5'>Contact</p>
                    <span className=' font-normal space-y-3 text-[#ffffffc3]'>
                        <Link to='/contact'><p>Contact Us</p></Link>
                    </span>
                </div>

                <div className=' text-base '>
                    <p className=' font-semibold mb-5'>Legal</p>
                    <span className=' font-normal space-y-3 text-[#ffffffc3]'>
                        <Link to='/Policies'><p>Policies</p></Link>
                    </span>
                </div>

                <div className=' text-base '>
                    <p className=' font-semibold mb-5'>Company</p>
                    <span className=' font-normal space-y-3 text-[#ffffffc3]'>
                        <Link to='about'><p>About Us</p></Link>
                    </span>
                </div>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default Footer;