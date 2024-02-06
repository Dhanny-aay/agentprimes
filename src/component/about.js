import { motion } from 'framer-motion';
import user from './assets/user.svg';

const About = () => {
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
                <p className=" mt-2 font-medium text-2xl text-white md:text-4xl">Testimonials</p>
                <p className=" mt-3 text-center text-base md:text-lg text-[#c6c4c4] md:px-[15%]">What our Clients Says?</p>
                <div className=" w-full mt-8 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full lg:w-[32%] rounded-3xl bg-[#121212] h-[200px]">
                        {/* <div style={{backgroundImage:`url(${webdev})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div> */}
                        <div className=" p-6">
                            <div className=' flex flex-row items-center space-x-4'>
                                <span className=' h-[46px] w-[46px] bg-[#f5f5f5] flex justify-center items-center rounded-[50%]'><img src={ user } alt="" /></span>
                                <p className=' mt-2 font-medium text-white text-lg'>Jack Floss</p>
                            </div>
                            <p className=' text-[#c6c4c4] text-base mt-2'>
                                With my old website I struggled to get leads, but you guys "My website is a lead magnet! Appointments fill my calendar.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div  
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full lg:w-[32%] rounded-3xl bg-[#121212] h-[200px]">
                        {/* <div style={{backgroundImage:`url(${dsign})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div> */}
                        <div className=" p-6">
                            <div className=' flex flex-row items-center space-x-4'>
                                <span className=' h-[46px] w-[46px] bg-[#f5f5f5] flex justify-center items-center rounded-[50%]'><img src={ user } alt="" /></span>
                                <p className=' mt-2 font-medium text-white text-lg'>Jim Bergling</p>
                            </div>
                            <p className=' text-[#c6c4c4] text-base mt-2'>
                                With the follow-up system on my website, "Clients adore me - they say I'm the best they've ever worked with."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full lg:w-[32%] rounded-3xl bg-[#121212] h-[200px]">
                        {/* <div style={{backgroundImage:`url(${lead})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div> */}
                       <div className="p-6">
                            <div className=' flex flex-row items-center space-x-4'>
                                <span className=' h-[46px] w-[46px] bg-[#f5f5f5] flex justify-center items-center rounded-[50%]'><img src={ user } alt="" /></span>
                                <p className=' mt-2 font-medium text-white text-lg'>Maya</p>
                            </div>
                            <p className=' text-[#c6c4c4] text-base mt-2'>Finally, I can focus on what I love - closing deals, not chasing them. Thanks, Prime Agents Sites</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
        </>
     );
}
 
export default About;