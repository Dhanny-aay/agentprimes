const Works = () => {
    return ( 
        <>
         <div className=" py-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" w-full flex flex-col justify-center items-center">
                <span className=" rounded-[50px] flex bg-[#081e5c3b] py-[6px] px-3 space-x-3 items-center">
                    <button className=" w-2 h-2 rounded-[50%] bg-[#081f5c]"></button>
                    <p className=" text-sm text-[#1e1e1e] font-medium">Crafting Digital Excellence</p>
                </span>
                <p className=" mt-2 font-medium text-2xl md:text-4xl">Our Works</p>
                <p className=" mt-3 text-center text-base md:text-lg text-[#4d4d4d] md:px-[15%]">Explore our diverse portfolio showcasing cutting-edge web design, development, and tailored digital strategies</p>
                <div className=" w-full mt-8 flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                    <div className=" w-full lg:w-[32%] rounded-3xl bg-[#b0a97984] h-[380px]">
                        <div className=" w-full h-[200px] bg-[#081f5c] rounded-t-3xl"></div>
                        <div className=" p-6">
                        <p className=' mt-2 font-medium text-lg'>Web Development</p>
                        <p className=' text-[#4d4d4d] text-base mt-2'>
                            We create visually appealing and functional websites that reflect your brand and engage your audience.
                        </p>
                        </div>
                    </div>
                    <div className=" w-full lg:w-[32%] rounded-3xl bg-[#b0a97984] h-[380px]">
                        <div className=" w-full h-[200px] bg-[#081f5c] rounded-t-3xl"></div>
                        <div className=" p-6">
                            <p className=' mt-2 font-medium text-lg'>Graphic Design</p>
                            <p className=' text-[#4d4d4d] text-base mt-2'>
                                Our team of graphic designers crafts unique and compelling designs to capture the essence of your business.
                            </p>
                        </div>
                    </div>
                    <div className=" w-full lg:w-[32%] rounded-3xl bg-[#b0a97984] h-[380px]">
                        <div className=" w-full h-[200px] bg-[#081f5c] rounded-t-3xl"></div>
                       <div className="p-6">
                            <p className=' mt-2 font-medium text-lg'>Digital Marketing</p>
                            <p className=' text-[#4d4d4d] text-base mt-2'>We devise effective digital marketing strategies to increase your online presence and drive conversions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Works;