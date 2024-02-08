import logo from './assets/log.png';
import Paper_Plane from './assets/Paper_Plane.svg';
import Hamburger_MD from './assets/Hamburger_MD.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {

    function overlay(){
        //check classlist
        const overlayDiv = document.getElementById('overlay');
        if(overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.remove('-translate-y-[500px]')
        }
        else if(!overlayDiv.classList.contains('-translate-y-[500px]')){
            overlayDiv.classList.add('-translate-y-[500px]')
        }
    };


    return ( 
        <>
        <div id="overlay" className=" w-full bg-[#000000] backdrop-blur-xl h-[300px] p-6 flex justify-center items-center -translate-y-[500px] shadow transition-all duration-700 top-[78px] fixed z-[99]">
            <div className="w-full flex flex-col justify-center items-center space-y-5">
                
                <Link to='/'><p className=" font-normal hover:text-[#b79843] transition-all cursor-pointer text-base text-[#fff] font-Outfit ">Home</p></Link>
                <Link to='/examples'><p className=" font-normal hover:text-[#b79843] transition-all cursor-pointer text-base text-[#fff] font-Outfit ">Examples</p></Link>
                <Link to='/about'><p className=" font-normal hover:text-[#b79843] transition-all cursor-pointer text-base text-[#fff] font-Outfit ">About us</p></Link>
                <Link to='/contact'><p className=" font-normal hover:text-[#b79843] transition-all cursor-pointer text-base text-[#fff] font-Outfit ">Contact us</p></Link>
            </div>
        </div>
        <div className=" py-6 px-4 md:px-16 z-[9999] lg:px-24 flex items-center justify-between bg-[#000000] fixed top-0 left-0 w-full backdrop-blur-sm">
            <img src={ logo } className=' w-[150px] md:w-[250px]' alt="Agent Prime Sites" />
            <span className=' w-[(100%-250px)] hidden md:flex items-center text-[#f5f5f5] font-Outfit'>
                <Link to='/'><a className='hidden hover:text-[#b79843] transition-all lg:block mx-4' href="">Home</a></Link>
                <Link to='/about'><a className='hidden hover:text-[#b79843] transition-all lg:block mx-4' href="">About Us</a></Link>
                <Link to='/examples'><a className='hidden hover:text-[#b79843] transition-all lg:block mx-4' href="">Examples</a></Link>
                {/* <a className='hidden lg:block mx-4' href="">Packages</a> */}
                <Link className=' hover' to='/contact'><button className=" custom-button">
                    <p>Let's Talk</p>
                    <img src={ Paper_Plane } className=' ml-2 w-5' alt="" />
                </button>
                </Link>
                <img src={ Hamburger_MD } onClick={ overlay } className=' hidden ml-8 md:block lg:hidden' alt="menu" />
            </span>
            <img src={ Hamburger_MD } onClick={ overlay } className=' block md:hidden' alt="menu" />
        </div>
        </>
     );
}
 
export default Navbar;