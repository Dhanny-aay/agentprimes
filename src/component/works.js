import katie from './assets/Frame_1-3.png';
import liz from './assets/Frame_1-4.png';
import stephens from './assets/Team_Stephens.png';
import webdev from './assets/pexels-lukas-574071.jpg';
import dsign from './assets/pexels-tranmautritam-326514.jpg';
import lead from './assets/pexels-pixabay-265087.jpg';

const Works = () => {
    return ( 
        <>
         <div className=" py-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" w-full flex flex-col justify-center items-center">
                <span className=" rounded-[50px] flex bg-[#b7984365] py-[6px] px-3 space-x-3 items-center">
                    <button className=" w-2 h-2 rounded-[50%] bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330]"></button>
                    <p className=" text-sm text-[#1e1e1e] font-medium">Crafting Digital Excellence</p>
                </span>
                <p className=" mt-2 font-medium text-2xl md:text-4xl">Examples</p>
                <p className=" mt-3 text-center text-base md:text-lg text-[#4d4d4d] md:px-[15%]">Explore our diverse portfolio showcasing cutting-edge web design, development, and tailored digital strategies</p>
                <div className=" w-full mt-8 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                    <div className=" w-full lg:w-[32%] rounded-3xl bg-[#f5f5f5] h-[380px]">
                        <div style={{backgroundImage:`url(${webdev})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div>
                        <div className=" p-6">
                        <p className=' mt-2 font-medium text-lg'>Web Development</p>
                        <p className=' text-[#4d4d4d] text-base mt-2'>
                            We create visually appealing and functional websites that reflect your brand and engage your audience.
                        </p>
                        </div>
                    </div>
                    <div  className=" w-full lg:w-[32%] rounded-3xl bg-[#f5f5f5] h-[380px]">
                        <div style={{backgroundImage:`url(${dsign})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div>
                        <div className=" p-6">
                            <p className=' mt-2 font-medium text-lg'>Graphic Design</p>
                            <p className=' text-[#4d4d4d] text-base mt-2'>
                                Our team of graphic designers crafts unique and compelling designs to capture the essence of your business.
                            </p>
                        </div>
                    </div>
                    <div className=" w-full lg:w-[32%] rounded-3xl bg-[#f5f5f5] h-[380px]">
                        <div style={{backgroundImage:`url(${lead})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[200px] bg-[#717272] rounded-t-3xl"></div>
                       <div className="p-6">
                            <p className=' mt-2 font-medium text-lg'>Lead Generation</p>
                            <p className=' text-[#4d4d4d] text-base mt-2'>We Develop effective forms to capture potential client inquiries and leads.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Works;