import chart from './assets/chart.png';
import terminal from './assets/Window_Terminal.png';
import layer from './assets/Layers.svg';
import laptop from './assets/Laptop.png';
import mob from './assets/Mobile_Button.png';
import house from './assets/House_01.png';
import check from './assets/Check_All_Big.png';

const Services = () => {
    return ( 
        <>
        <div className=" my-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" w-full flex flex-col justify-center items-center">
                <span className=" rounded-[50px] flex bg-[#b7984365] py-[6px] px-3 space-x-3 items-center">
                    <button className=" w-2 h-2 rounded-[50%]  bg-gradient-to-r from-[#B79843] to-[#82620F]"></button>
                    <p className=" text-sm text-[#1e1e1e] font-medium">Crafting Digital Excellence</p>
                </span>
                <p className=" mt-2 font-medium text-center text-2xl md:text-4xl">Top-tier Lead Generating Agency</p>
                <p className=" mt-3 text-center text-base md:text-lg text-[#4d4d4d] md:px-[15%]">Explore our diverse portfolio showcasing cutting-edge web design, development, and tailored digital strategies</p>
                <div className=" w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] items-start">
                    
                    <div className="  w-full rounded-3xl p-6 bg-[#f5f5f5] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ terminal } className='' alt="Web development" />
                        <p className=' mt-2 font-medium text-base'>Custom Website Development</p>
                        <p className=' text-[#4d4d4d] text-sm mt-2'>
                            We Craft tailor-made websites to suit the unique needs and branding of real estate companies.
                        </p>
                    </div>
                    <div className=" w-full rounded-3xl p-6 bg-[#f5f5f5] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ check } className='' alt="Graphic design" />
                        <p className=' mt-2 font-medium text-base'>Property Listings Integration</p>
                        <p className=' text-[#4d4d4d] text-sm mt-2'>
                            Our team Implements robust systems for seamless property listing management and updates.
                        </p>
                    </div>
                    <div className=" w-full rounded-3xl p-6 bg-[#f5f5f5] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ house } className='' alt="Digital Marketing" />
                        <p className=' mt-2 font-medium text-base'>Interactive Real-estate Maps</p>
                        <p className=' text-[#4d4d4d] text-sm mt-2'>Creating engaging maps to help users explore and locate real-estate easily.</p>
                    </div>
                    
                    <div className="  w-full rounded-3xl p-6 bg-[#f5f5f5] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ chart } className='' alt="Web development" />
                        <p className=' mt-2 font-medium text-base'>Lead Generation Forms</p>
                        <p className=' text-[#4d4d4d] text-sm mt-2'>
                            We Develop effective forms to capture potential client inquiries and leads.
                        </p>
                    </div>
                    <div className=" w-full rounded-3xl p-6 bg-[#f5f5f5] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ mob } className='' alt="Graphic design" />
                        <p className=' mt-2 font-medium text-base'>Mobile Optimization</p>
                        <p className=' text-[#4d4d4d] text-sm mt-2'>
                            Ensure your websites are optimized for a smooth experience on various devices.
                        </p>
                    </div>
                    <div className=" w-full rounded-3xl p-6 bg-[#f5f5f5] transition-all border-white/5 md:h-[280px] lg:h-[220px]">
                        <img src={ laptop } className='' alt="Digital Marketing" />
                        <p className=' mt-2 font-medium text-base'>Interactive Real-estate Maps</p>
                        <p className=' text-[#4d4d4d] text-sm mt-2'>Creating engaging maps to help users explore and locate real-estate easily.</p>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Services;