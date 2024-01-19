import terminal from './assets/Terminal.svg';
import layer from './assets/Layers.svg';
import laptop from './assets/Laptop.svg';

const Services = () => {
    return ( 
        <>
        <div className=" my-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" w-full flex flex-col justify-center items-center">
                <span className=" rounded-[50px] flex bg-[#081e5c3b] py-[6px] px-3 space-x-3 items-center">
                    <button className=" w-2 h-2 rounded-[50%] bg-[#081f5c]"></button>
                    <p className=" text-sm text-[#1e1e1e] font-medium">Crafting Digital Excellence</p>
                </span>
                <p className=" mt-2 font-medium text-center text-2xl md:text-4xl">Services Built Specifically for your Business</p>
                <p className=" mt-3 text-center text-base md:text-lg text-[#4d4d4d] md:px-[15%]">Explore our diverse portfolio showcasing cutting-edge web design, development, and tailored digital strategies</p>
                <div className=" w-full mt-8 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-start">
                    <div className=" w-full md:w-[32%] rounded-3xl p-6 bg-[#f5f5f5] md:h-[280px] lg:h-[220px]">
                        <img src={ terminal } className='' alt="Web development" />
                        <p className=' mt-2 font-medium text-lg'>Web Development</p>
                        <p className=' text-[#4d4d4d] text-base mt-2'>
                            We create visually appealing and functional websites that reflect your brand and engage your audience.
                        </p>
                    </div>
                    <div className=" w-full md:w-[32%] rounded-3xl p-6 bg-[#f5f5f5] h-[310px] lg:h-[250px]">
                        <img src={ layer } className='' alt="Graphic design" />
                        <p className=' mt-2 font-medium text-lg'>Graphic Design</p>
                        <p className=' text-[#4d4d4d] text-base mt-2'>
                            Our team of graphic designers crafts unique and compelling designs to capture the essence of your business.
                        </p>
                    </div>
                    <div className=" w-full md:w-[32%] rounded-3xl p-6 bg-[#f5f5f5] md:h-[280px] lg:h-[220px]">
                        <img src={ laptop } className='' alt="Digital Marketing" />
                        <p className=' mt-2 font-medium text-lg'>Digital Marketing</p>
                        <p className=' text-[#4d4d4d] text-base mt-2'>We devise effective digital marketing strategies to increase your online presence and drive conversions.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Services;