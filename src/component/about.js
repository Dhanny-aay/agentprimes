import Paper_Plane from './assets/Paper_Plane.svg';
import Arrow_Up_Right_MD from './assets/Arrow_Up_Right_MD.png';
import illus from './assets/illus.svg';


const About = () => {
    return ( 
        <>
        <div className="py-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" flex flex-col lg:flex-row items-center justify-between">
                <div className=" w-full lg:w-[47%]">
                    <img src={ illus } className='' alt="Woman demonstrating website building" />
                </div>
                <div className=" w-full lg:w-[47%] flex mt-12 lg:mt-0  items-start flex-col">
                    <span className=" rounded-[50px] w-[110px] flex bg-[#081e5c3b] py-[6px] px-3 space-x-3 items-center">
                        <button className=" w-2 h-2 rounded-[50%] bg-[#081f5c]"></button>
                        <p className=" text-sm text-[#1e1e1e] font-medium">About Us</p>
                    </span>
                    <p className=" mt-2 text-2xl md:text-4xl font-medium">Services Built Specifically for your Business</p>
                    <p className=" mt-2 text-base font-normal text-[#4d4d4d]">Agent Prime Sites is an innovative digital agency that specializes in creating high-quality websites and digital marketing strategies designed to drive engagement and increase conversions.<br/>The team, consisting of experienced developers, designers, and marketing experts, is dedicated to understanding their clients unique business needs and tailoring their solutions to achieve the desired outcome. Agent Prime Sites prides itself on its ability to deliver exceptional results on time and within budget.</p>
                    <div className=" mt-4 flex space-x-6 items-center">
                        <button className=" px-6 py-3 bg-[#081f5c] font-Outfit flex items-center space-x-2 font-medium text-[#f5f5f5] rounded-[50px]">
                            <p>Let's Talk</p>
                            <img src={ Paper_Plane } className=' w-5' alt="" />
                        </button>
                        <button className=" px-6 py-3 border-2 border-[#081f5c] font-Outfit flex items-center space-x-1 font-medium text-[#081f5c] rounded-[50px]">
                            <p>Read More</p>
                            <img src={ Arrow_Up_Right_MD } className=' w-6' alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;