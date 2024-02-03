import Paper_Plane from './assets/Paper_Plane.svg';
import Arrow_Up_Right_MD from './assets/Arrow_Up_Right_LG.svg';
import chriana from './assets/chriana.jpg';
import { Link } from 'react-router-dom';


const About = () => {
    return ( 
        <>
        <div className="py-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className=" flex flex-col lg:flex-row items-center justify-between">
                <div style={{backgroundImage:`url(${chriana})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[440px] rounded-3xl lg:w-[47%] bg-[#f3f3f3]">
                    
                </div>
                <div className=" w-full lg:w-[47%] flex mt-12 lg:mt-0  items-start flex-col">
                    <span className=" rounded-[50px] w-[110px] flex bg-[#b7984365] py-[6px] px-3 space-x-3 items-center">
                        <button className=" w-2 h-2 rounded-[50%] bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330]"></button>
                        <p className=" text-sm text-[#fefefe] font-medium">About Us</p>
                    </span>
                    <p className=" mt-2 text-2xl md:text-4xl text-white font-medium">Services Built Specifically for your Business</p>
                    <p className=" mt-2 text-base font-normal text-[#c6c4c4]">At Prime Agency Sites, we are fully committed to delivering unmatched value to our customers. We take immense pride in providing only the best products and services, and we are confident that our unwavering commitment to excellence is evident in everything we do.</p>
                    <div className=" mt-4 flex space-x-6 items-center">
                       <Link to='/contact'><button className=" px-6 py-3 bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] font-Outfit flex hover:bg-[#081e5ce9] transition-all items-center space-x-2 font-medium text-[#f5f5f5] rounded-[50px]">
                            <p>Let's Talk</p>
                            <img src={ Paper_Plane } className=' w-5' alt="" />
                        </button></Link>
                        <Link to='/about'><button className=" px-6 py-3 border-2 border-[#B79843] hover:bg-[#b7984365] hover:bg-opacity-30 transition-all font-Outfit flex items-center space-x-1 font-medium text-[#B79843] rounded-[50px]">
                            <p>Read More</p>
                            <img src={ Arrow_Up_Right_MD } className=' w-6' alt="" />
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default About;