import logo from './assets/smallest.png';
import Paper_Plane from './assets/Paper_Plane.svg';
import Hamburger_MD from './assets/Hamburger_MD.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
        <div className=" py-6 px-4 md:px-16 lg:px-24 flex items-center justify-between bg-[#ffffff] fixed top-0 left-0 w-full backdrop-blur-sm">
            <img src={ logo } className=' w-[150px] md:w-[250px]' alt="Agent Prime Sites" />
            <span className=' w-[(100%-250px)] hidden md:flex items-center text-[#212120] font-Outfit'>
                <Link to='/'><a className='hidden lg:block mx-4' href="">Home</a></Link>
                <a className='hidden lg:block mx-4' href="">About Us</a>
                <a className='hidden lg:block mx-4' href="">Portfolio</a>
                <a className='hidden lg:block mx-4' href="">Packages</a>
                <a className='hidden lg:block ml-4 mr-8' href="">Contact Us</a>
                <button className=" px-6 py-3 rounded-[50px] bg-[#081f5c] font-Outfit font-medium text-[#f5f5f5] flex items-center space-x-2">
                    <p>Let's Talk</p>
                    <img src={ Paper_Plane } className=' w-5' alt="" />
                </button>
                <img src={ Hamburger_MD } className=' hidden ml-8 md:block lg:hidden' alt="menu" />
            </span>
            <img src={ Hamburger_MD } className=' block md:hidden' alt="menu" />
        </div>
        </>
     );
}
 
export default Navbar;