import { Link } from 'react-router-dom';
import Paper_Plane from './assets/Paper_Plane.svg';
import Play_Circle from './assets/Play_Circle.png';
import backnd from './assets/backgro.jpg';
import { motion } from 'framer-motion';


const Hero = () => {
    return ( 
        <>
        <div className="  mt-28 md:mt-40 pb-8 md:pb-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" w-full flex flex-col lg:flex-row items-center justify-between">
                <div className=" w-full items-center justify-center flex flex-col">
                    <motion.span
                    initial={{ y: 44, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className=" rounded-[50px] w-[210px]  flex bg-[#b7984365] py-[6px] px-3 space-x-3 items-center">
                        <button className=" w-2 h-2 rounded-[50%]  bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330]"></button>
                        <p className=" text-sm text-[#fefefe] font-medium">Cool Designs, Hot results.</p>
                    </motion.span>
                    <motion.p 
                    initial={{ y: 44, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className=" mt-4 text-3xl md:text-5xl text-center text-white md:leading-[62px] font-medium">Web Development for Real Estate Professionals</motion.p>
                    <motion.p 
                    initial={{ y: 44, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay:1 }} // Conditionally set the delay
                    className=" mt-5 text-base md:px-[15%] text-center font-normal text-[#c6c4c4]">We specialize in creating customized websites that cater to the unique needs of the real-estate industry. Our team is passionate about crafting stunning digital spaces that showcase your offerings and help you stand out from the competition. Let us work together to bring your real estate visions to life and help you establish a captivating online presence.</motion.p>
                    <motion.div 
                    initial={{ opacity: 0, y: 44 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }} // Conditionally set the delay
                    className=" mt-4 flex space-x-4 md:justify-normal md:space-x-6 items-center">
                        <Link to='/contact'><button className=" custom-button">
                            <p>Let's Talk</p>
                            <img src={ Paper_Plane } className=' ml-2 w-5' alt="" />
                        </button></Link>
                        <Link to='/examples'><button className=" px-4 md:px-6 py-3 border-2 border-[#B79843] hover:bg-[#b7984365] hover:bg-opacity-30 transition-all font-Outfit flex items-center space-x-2 font-medium text-[#B79843] rounded-[50px]">
                            <p>View Examples</p>
                            <img src={ Play_Circle } className=' w-6' alt="" />
                        </button></Link>
                    </motion.div>
                </div>
            </div>
        </div>
        <div style={{backgroundImage:`url(${backnd})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" h-[372px] w-full bg-[#f5f5f5]"></div>
        </>
     );
}
 
export default Hero;