import Footer from "../component/footer";
import Navbar from "../component/navbar";
import brian from './assets/Frame_1.png';
import beverly from './assets/Frame_1-2.png';
import chelsea from './assets/Frame_1-1.png';
import katie from './assets/Frame_1-3.png';
import liz from './assets/Frame_1-4.png';
import stephens from './assets/Team_Stephens.png';

const Examples = () => {
    return ( 
        <>
        <Navbar/>
        <div className="mt-28 md:mt-40 pb-8 md:pb-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <p className=" text-center text-2xl md:text-4xl font-medium">Our Works</p>
            <p className=" text-center text-[#4d4d4d] font-normal px-[15%] mt-4 text-base md:text-lg capitalize">What you can expect from us</p>
            <div className=" mt-8 md:mt-16">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                    <div className=" ">
                     <div style={{backgroundImage:`url(${chelsea})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2">Chelsea L Team</p>
                     <a href="https://www.chelsealteam.ca/" target="blank" className=" mt-3 text-[#4d4d4d] text-base underline">View Site</a>
                    </div>  
                    <div className=" ">
                     <div style={{backgroundImage:`url(${katie})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2">Katie Isenor Real Estate</p>
                     <a href="https://katiesellshalifax.com/" target="blank" className=" mt-3 text-[#4d4d4d] text-base underline">View Site</a>
                    </div>  
                    <div className=" ">
                     <div style={{backgroundImage:`url(${stephens})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2">Team Stephens With Exit Realty</p>
                     <a href="https://www.teamstephens.ca/" target="blank" className=" mt-3 text-[#4d4d4d] text-base underline">View Site</a>
                    </div>  
                    <div className=" ">
                     <div style={{backgroundImage:`url(${liz})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2">LIZ MARTIN</p>
                     <a href="https://lizmartin.ca/" target="blank" className=" mt-3 text-[#4d4d4d] text-base underline">View Site</a>
                    </div>  
                    <div className=" ">
                     <div style={{backgroundImage:`url(${beverly})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2">Beverly Hills real estate agent</p>
                     <a href="https://jademillsestates.com/" target="blank" className=" mt-3 text-[#4d4d4d] text-base underline">View Site</a>
                    </div>  
                    <div className=" ">
                     <div style={{backgroundImage:`url(${brian})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[300px] bg-[#f4f4f4] rounded-3xl"></div>
                     <p className=" font-medium text-lg mt-2">First Team Real Estate</p>
                     <a href="https://www.firstteam.com/agent/48321-Brian-Wilson/" target="blank" className=" mt-3 text-[#4d4d4d] text-base underline">View Site</a>
                    </div>  
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Examples; 