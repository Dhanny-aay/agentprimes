import About from "../component/about";
import Footer from "../component/footer";
import Hero from "../component/hero";
import Navbar from "../component/navbar";
import Packages from "../component/packages";
import Services from "../component/services";
import Works from "../component/works";

const Landing = () => {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Services/>
        <About/>
        <Works/>
        {/* <Packages/> */}
        <Footer/>
        </>
     );
}
 
export default Landing;