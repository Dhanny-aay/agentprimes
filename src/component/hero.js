import Paper_Plane from './assets/Paper_Plane.svg';
import Play_Circle from './assets/Play_Circle.svg';
import backnd from './assets/backgro.jpg';

const Hero = () => {
    return ( 
        <>
        <div className="  mt-28 md:mt-40 pb-8 md:pb-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" w-full flex flex-col lg:flex-row items-center justify-between">
                <div className=" w-full items-center justify-center flex flex-col">
                    <span className=" rounded-[50px] w-[210px]  flex bg-[#081e5c3b] py-[6px] px-3 space-x-3 items-center">
                        <button className=" w-2 h-2 rounded-[50%] bg-[#081f5c]"></button>
                        <p className=" text-sm text-[#1e1e1e] font-medium">Cool Designs, Hot results.</p>
                    </span>
                    <p className=" mt-4 text-3xl md:text-5xl text-center md:leading-[62px] font-medium">We are a Digital Creative Web Agency</p>
                    <p className=" mt-5 text-base md:px-[15%] text-center font-normal text-[#4d4d4d]">Innovative digital agency that specializes in creating high-quality websites and digital marketing strategies designed to drive engagement and increase conversions.</p>
                    <div className=" mt-4 flex space-x-4 md:justify-normal md:space-x-6 items-center">
                        <button className=" px-4 md:px-6 py-3 bg-[#081f5c] font-Outfit flex items-center space-x-2 font-medium text-[#f5f5f5] rounded-[50px]">
                            <p>Let's Talk</p>
                            <img src={ Paper_Plane } className=' w-5' alt="" />
                        </button>
                        <button className=" px-4 md:px-6 py-3 border-2 border-[#081f5c] font-Outfit flex items-center space-x-2 font-medium text-[#081f5c] rounded-[50px]">
                            <p>View Portfolio</p>
                            <img src={ Play_Circle } className=' w-6' alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div style={{backgroundImage:`url(${backnd})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" h-[372px] w-full bg-[#f5f5f5]"></div>
        </>
     );
}
 
export default Hero;