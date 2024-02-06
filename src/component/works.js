import webdev from './assets/pexels-lukas-574071.jpg';
import dsign from './assets/pexels-tranmautritam-326514.jpg';
import lead from './assets/pexels-pixabay-265087.jpg';
import { motion } from 'framer-motion';

const Works = () => {
    return ( 
        <>
         <div className=" py-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type:'tween' }}
            className=" w-full flex flex-col justify-center items-center">
                <span className=" rounded-[50px] flex bg-[#b7984365] py-[6px] px-3 space-x-3 items-center">
                    <button className=" w-2 h-2 rounded-[50%] bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330]"></button>
                    <p className=" text-sm text-[#fefefe] font-medium">Crafting Digital Excellence</p>
                </span>
                <p className=" mt-2 font-medium text-2xl text-white md:text-4xl">Services</p>
                <p className=" mt-3 text-center text-base md:text-lg text-[#c6c4c4] md:px-[15%]">Explore our diverse portfolio showcasing cutting-edge web design, development, and tailored digital strategies</p>
                <div className=" w-full mt-8 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full lg:w-[32%] rounded-3xl bg-[#121212] h-[380px]">
                        <div style={{backgroundImage:`url(${webdev})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div>
                        <div className=" p-6">
                        <p className=' mt-2 font-medium text-white text-lg'>Web Development</p>
                        <p className=' text-[#c6c4c4] text-base mt-2'>
                            We create visually appealing and functional websites that reflect your brand and engage your audience.
                        </p>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full lg:w-[32%] rounded-3xl bg-[#121212] h-[380px]">
                        <div style={{backgroundImage:`url(${dsign})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div>
                        <div className=" p-6">
                            <p className=' mt-2 font-medium text-white text-lg'>Graphic Design</p>
                            <p className=' text-[#c6c4c4] text-base mt-2'>
                                Our team of graphic designers crafts unique and compelling designs to capture the essence of your business.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full lg:w-[32%] rounded-3xl bg-[#121212] h-[380px]">
                        <div style={{backgroundImage:`url(${lead})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div>
                       <div className="p-6">
                            <p className=' mt-2 font-medium text-white text-lg'>Blog Copywriting</p>
                            <p className=' text-[#c6c4c4] text-base mt-2'> We craft compelling content that elevates your brand and captivates your audience with impactful storytelling</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
        </>
     );
}
 
export default Works;