import chart from './assets/chart.png';
import terminal from './assets/Window_Terminal.png';
import layer from './assets/Layers.svg';
import laptop from './assets/Laptop.png';
import mob from './assets/Mobile_Button.png';
import house from './assets/House_01.png';
import check from './assets/Check_All_Big.svg';
import { motion } from 'framer-motion';

const Services = () => {
    return ( 
        <>
        <div className=" my-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type:'tween' }}

            className=" w-full flex flex-col justify-center items-center">
                <span className=" rounded-[50px] flex bg-[#b7984365] py-[6px] px-3 space-x-3 items-center">
                    <button className=" w-2 h-2 rounded-[50%]  bg-gradient-to-r from-[#B79843] to-[#82620F]"></button>
                    <p className=" text-sm text-[#fefefe] font-medium">Crafting Digital Excellence</p>
                </span>
                <p className=" mt-2 font-medium text-white text-center text-2xl md:text-4xl">Top-tier Lead Generating Agency</p>
                <p className=" mt-3 text-center text-base md:text-lg text-[#c6c4c4] md:px-[15%]">Create Stunning websites that captivates audiences and effectively communicates your brand message</p>
                <div className=" w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] items-start">
                    
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className="  w-full rounded-3xl p-6 bg-[#121212] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ terminal } className='' alt="Web development" />
                        <p className=' mt-2 font-medium text-base text-white'>Website Design</p>
                        <p className=' text-[#c6c4c4] text-sm mt-2'>
                            We Craft tailor-made websites to suit the unique needs and branding of real estate companies.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full rounded-3xl p-6 bg-[#121212] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ check } className='' alt="Graphic design" />
                        <p className=' mt-2 font-medium text-base text-white'>Local SEO</p>
                        <p className=' text-[#c6c4c4] text-sm mt-2'>
                            Optimize local presence to rank higher on local search results, helping businesses attract more customers in the emvironment.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full rounded-3xl p-6 bg-[#121212] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ house } className='' alt="Digital Marketing" />
                        <p className=' mt-2 font-medium text-base text-white'>Website Development</p>
                        <p className=' text-[#c6c4c4] text-sm mt-2'>Build websites that are scalable, secure and optimized for speed and performance.</p>
                    </motion.div>
                    
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className="  w-full rounded-3xl p-6 bg-[#121212] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ chart } className='' alt="Web development" />
                        <p className=' mt-2 font-medium text-base text-white'>Organic SEO</p>
                        <p className=' text-[#c6c4c4] text-sm mt-2'>
                            Improve website visibility and rankings on search engines, driving more organic  traffic and leads to businesses website.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full rounded-3xl p-6 bg-[#121212] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ mob } className='' alt="Graphic design" />
                        <p className=' mt-2 font-medium text-base text-white'>Website Management</p>
                        <p className=' text-[#c6c4c4] text-sm mt-2'>
                            Ensure website run smoothly with hassle-free website management services. Features include timely updates, regular backups, robust security and more.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween' }}
                    className=" w-full rounded-3xl p-6 bg-[#121212] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ laptop } className='' alt="Digital Marketing" />
                        <p className=' mt-2 font-medium text-base text-white'>Consulting</p>
                        <p className=' text-[#c6c4c4] text-sm mt-2'>Provide expert guidance and insights to help businesses grow their online presence including strategy, analysis and optimization.</p>
                    </motion.div>
                    
                </div>
            </motion.div>
        </div>
        </>
     );
}
 
export default Services;