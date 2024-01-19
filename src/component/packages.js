import Arrow_Up_Right_MD from './assets/Arrow_Up_Right_MD.png';

const Packages = () => {
    return ( 
        <>
        <div className=" py-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" w-full flex flex-col justify-center items-center">
                <span className=" rounded-[50px] flex bg-[#081e5c3b] py-[6px] px-3 space-x-3 items-center">
                    <button className=" w-2 h-2 rounded-[50%] bg-[#081f5c]"></button>
                    <p className=" text-sm text-[#1e1e1e] font-medium">Irresistible Offers</p>
                </span>
                <p className=" mt-2 font-medium text-2xl md:text-4xl">Unbeatable Packages</p>
                <p className=" mt-3 text-center text-base md:text-lg text-[#4d4d4d] md:px-[15%]">Explore our Basic, Advanced, and Premium packages, featuring unbeatable packages on top-notch products and services. Act now to seize limited-time offers.</p>
                <div className=" w-full mt-8 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 items-start">
                    <div className=" w-full lg:w-[32%] rounded-3xl bg-[#b0a97984]">
                        <div className=" p-6">
                        <p className=' mt-2 font-medium text-lg'>Basic</p>
                        <span className=" flex items-center space-x-2">
                            <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                            <p className=' text-[#4d4d4d] text-base mt-3'> We create visually appealing</p></span>
                        <span className=" flex items-center space-x-2">
                            <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                            <p className=' text-[#4d4d4d] text-base mt-1'> We create visually appealing</p></span>
                        <span className=" flex items-center space-x-2">
                            <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                            <p className=' text-[#4d4d4d] text-base mt-1'> We create visually appealing</p></span>
                        <button className=" mt-4 py-3 rounded-[50px] bg-[#081f5c] text-white w-full text-base font-medium">Buy</button>
                        </div>
                    </div>
                    <div className=" w-full lg:w-[32%] rounded-3xl bg-[#b0a97984]">
                        <div className=" p-6">
                            <p className=' mt-2 font-medium text-lg'>Advanced</p>
                            <span className=" flex items-center space-x-2">
                                <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                                <p className=' text-[#4d4d4d] text-base mt-3'>Our team of graphic designers</p></span>
                            <span className=" flex items-center space-x-2">
                                <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                                <p className=' text-[#4d4d4d] text-base mt-1'>Our team of graphic designers</p></span>
                            <span className=" flex items-center space-x-2">
                                <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                                <p className=' text-[#4d4d4d] text-base mt-1'>Our team of graphic designers</p></span>
                            <button className=" mt-4 py-3 rounded-[50px] bg-[#081f5c] text-white w-full text-base font-medium">Buy</button>
                        </div>
                    </div>
                    <div className=" w-full lg:w-[32%] rounded-3xl bg-[#b0a97984]">
                       <div className="p-6">
                            <p className=' mt-2 font-medium text-lg'>Premium</p>
                            <span className=" flex items-center space-x-2">
                                <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                                <p className=' text-[#4d4d4d] text-base mt-3'>We devise effective</p></span>
                            <span className=" flex items-center space-x-2">
                                <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                                <p className=' text-[#4d4d4d] text-base mt-1'>We devise effective</p></span>
                            <span className=" flex items-center space-x-2">
                                <img src={ Arrow_Up_Right_MD } className=" w-4 mt-2" alt="" />
                                <p className=' text-[#4d4d4d] text-base mt-1'>We devise effective</p></span>
                            <button className=" mt-4 py-3 rounded-[50px] bg-[#081f5c] text-white w-full text-base font-medium">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Packages;