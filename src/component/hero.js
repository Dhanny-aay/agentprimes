import { Link } from 'react-router-dom';
import Paper_Plane from './assets/Paper_Plane.svg';
import Play_Circle from './assets/Play_Circle.png';
import backnd from './assets/backgro.jpg';


const Hero = () => {
    return ( 
        <>
        <div className="  mt-28 md:mt-40 pb-8 md:pb-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" w-full flex flex-col lg:flex-row items-center justify-between">
                <div className=" w-full items-center justify-center flex flex-col">
                    <span className=" rounded-[50px] w-[210px]  flex bg-[#b7984365] py-[6px] px-3 space-x-3 items-center">
                        <button className=" w-2 h-2 rounded-[50%]  bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330]"></button>
                        <p className=" text-sm text-[#1e1e1e] font-medium">Cool Designs, Hot results.</p>
                    </span>
                    <p className=" mt-4 text-3xl md:text-5xl text-center md:leading-[62px] font-medium">Welcome to Prime Agency Sites</p>
                    <p className=" mt-5 text-base md:px-[15%] text-center font-normal text-[#4d4d4d]">We specialize in creating customized websites that cater to the unique needs of the real-estate industry. Our team is passionate about crafting stunning digital spaces that showcase your offerings and help you stand out from the competition. Let us work together to bring your real estate visions to life and help you establish a captivating online presence.</p>
                    <div className=" mt-4 flex space-x-4 md:justify-normal md:space-x-6 items-center">
                        <Link to='/contact'><button className=" px-4 md:px-6 py-3  bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] transition-all font-Outfit flex items-center space-x-2 font-medium text-[#f5f5f5] rounded-[50px]">
                            <p>Let's Talk</p>
                            <img src={ Paper_Plane } className=' w-5' alt="" />
                        </button></Link>
                        <Link to='/examples'><button className=" px-4 md:px-6 py-3 border-2 border-[#B79843] hover:bg-[#b7984365] hover:bg-opacity-30 transition-all font-Outfit flex items-center space-x-2 font-medium text-[#B79843] rounded-[50px]">
                            <p>View Examples</p>
                            <img src={ Play_Circle } className=' w-6' alt="" />
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
        <div style={{backgroundImage:`url(${backnd})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" h-[372px] w-full bg-[#f5f5f5]"></div>
        </>
     );
}
 
export default Hero;