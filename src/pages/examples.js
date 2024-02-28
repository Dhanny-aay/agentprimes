import Footer from "../component/footer";
import Navbar from "../component/navbar";
import beverly from './assets/Frame_1-2.png';
import chelsea from './assets/Frame_1-1.png';
import katie from './assets/Frame_1-3.png';
import liz from './assets/Frame_1-4.png';
import stephens from './assets/Team_Stephens.png';
import { motion } from "framer-motion";

const Examples = () => {
    return ( 
        <>
        <Navbar/>
        <div className="mt-28 md:mt-40 pb-8 md:pb-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <motion.p
            initial={{ y: 44, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay:0.2 }}
            className=" text-center text-2xl md:text-4xl text-white font-medium">Our Examples</motion.p>
            <motion.p 
            initial={{ y: 44, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className=" text-center text-[#c6c4c4] font-normal px-[15%] mt-4 text-base md:text-lg capitalize">What you can expect from us</motion.p>
            <div className=" mt-8 md:mt-16">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">

                    <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween', delay:0.7 }}
                    className=" ">
                     <div style={{backgroundImage:`url(${chelsea})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2 text-white">Chelsea L Team</p>
                     <a href="https://www.chelsealteam.ca/" target="blank" className=" mt-3 text-[#c6c4c4] text-base underline hover:text-[#b79843]">View Site</a>
                    </motion.div>  

                    <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween', delay:0.5 }}
                    className=" ">
                     <div style={{backgroundImage:`url(${katie})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2 text-white">Katie Isenor Real Estate</p>
                     <a href="https://katiesellshalifax.com/" target="blank" className=" mt-3 text-[#c6c4c4] text-base underline hover:text-[#b79843]">View Site</a>
                    </motion.div>  
                    <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween', delay:0.5 }}
                    className=" ">
                     <div style={{backgroundImage:`url(${stephens})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2 text-white">Team Stephens With Exit Realty</p>
                     <a href="https://www.teamstephens.ca/" target="blank" className=" mt-3 text-[#c6c4c4] text-base underline hover:text-[#b79843]">View Site</a>
                    </motion.div>  
                    <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween', delay:0.5 }}
                    className=" ">
                     <div style={{backgroundImage:`url(${liz})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2 text-white">LIZ MARTIN</p>
                     <a href="https://lizmartin.ca/" target="blank" className=" mt-3 text-[#c6c4c4] text-base underline hover:text-[#b79843]">View Site</a>
                    </motion.div>  
                    <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, type:'tween', delay:0.5 }}
                    className=" ">
                     <div style={{backgroundImage:`url(${beverly})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2 text-white">Beverly Hills real estate agent</p>
                     <a href="https://jademillsestates.com/" target="blank" className=" mt-3 text-[#c6c4c4] text-base underline hover:text-[#b79843]">View Site</a>
                    </motion.div>  
                    
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Examples; 