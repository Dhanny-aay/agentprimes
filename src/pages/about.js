import Footer from "../component/footer";
import Navbar from "../component/navbar";
import chriana from './assets/chriana.jpg';

const About = () => {
    return ( 
        <>
        <Navbar/>
        <div className="   mt-28 md:mt-40 pb-8 md:pb-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <p className=" text-center text-2xl md:text-4xl text-white font-medium">About Us</p>
            <p className=" text-center text-[#c6c4c4] font-normal px-[15%] mt-4 text-base md:text-lg">We are a dynamic team comprised of talented designers, developers, and marketing experts.</p>

            <div className=" mt-16 md:mt-16 flex flex-col md:flex-row w-full justify-between items-center">
                <div style={{backgroundImage:`url(${chriana})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-full h-[390px] rounded-3xl lg:w-[47%] bg-[#f3f3f3]"></div>

                <div className=" w-full lg:w-[47%] flex mt-12 lg:mt-0  items-start flex-col">
                    <p className=" mt-2 text-base md:text-lg font-normal text-[#c6c4c4]">Agent Prime Sites is an innovative digital agency that specializes in creating high-quality websites and digital marketing strategies designed to drive engagement and increase conversions.<br/><br/>The team, consisting of experienced developers, designers, and marketing experts, is dedicated to understanding their clients unique business needs and tailoring their solutions to achieve the desired outcome. Agent Prime Sites prides itself on its ability to deliver exceptional results on time and within budget.</p>
                </div>

            </div>

            <div className=" mt-16">
                <p className=" text-2xl md:text-4xl text-center font-medium">In numbers</p>
                <div className=" mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className=" w-full h-[150px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className="text-[#B79843] text-3xl font-semibold">12+</p>
                        <p className=" text-[#c6c4c4] font-normal text-base">Completed Projects</p>
                    </div>
                    <div className=" w-full h-[150px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className="text-[#B79843] text-3xl font-semibold">15+</p>
                        <p className=" text-[#c6c4c4] font-normal text-base">Happy Clients</p>
                    </div>
                    <div className=" w-full h-[150px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className="text-[#B79843] text-3xl font-semibold">300+</p>
                        <p className=" text-[#c6c4c4] font-normal text-base">Coffee Cups</p>
                    </div>
                    <div className=" w-full h-[150px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className="text-[#B79843] text-3xl font-semibold">4+</p>
                        <p className=" text-[#c6c4c4] font-normal text-base">Years of experience</p>
                    </div>
                    <div className=" w-full h-[150px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className="text-[#B79843] text-3xl font-semibold">6+</p>
                        <p className=" text-[#c6c4c4] font-normal text-base">Team Members</p>
                    </div>
                </div>
            </div>

            <div className=" mt-16">
                <p className=" text-2xl text-white md:text-4xl text-center font-medium">Our Values</p>
                <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=" w-full h-[230px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className=" text-[#B79843] font-medium text-xl">01.</p>
                        <p className=" text-white mt-2 text-lg font-medium">We are specialized</p>
                        <p className=" mt-3 text-[#c6c4c4] text-base font-normal">We develop unique digital experiences based on user insights, our expertise and proved data. We study the market, your competitors, and more importantly, your customers. We do the heavy lifting for you.</p>
                    </div>

                    <div className=" w-full h-[230px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className=" text-[#B79843] font-medium text-xl">02.</p>
                        <p className=" text-white mt-2 text-lg font-medium">We are responsive</p>
                        <p className=" mt-3 text-[#c6c4c4] text-base font-normal">We always keep door open in communication both with client and teammates. Everyone’s feedback is valuable, and we're never too busy to hear it. This is more than listening and discussion. It is about finding the right way.</p>
                    </div>

                    <div className=" w-full h-[230px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className=" text-[#B79843] font-medium text-xl">03.</p>
                        <p className=" text-white mt-2 text-lg font-medium">We focus on results</p>
                        <p className=" mt-3 text-[#c6c4c4] text-base font-normal">We carefully consider every project we take on because when we commit, we always bring 100%, and even a bit more. We are driven by a desire to provide best experience which exceeds a client's expectation.</p>
                    </div>

                    <div className=" w-full h-[230px] border-white/5 bg-[#121212] rounded-3xl p-6 flex flex-col items-start space-y-2 justify-start">
                        <p className=" text-[#B79843] font-medium text-xl">04.</p>
                        <p className=" text-white mt-2 text-lg font-medium">We work smart</p>
                        <p className=" mt-3 text-[#c6c4c4] text-base font-normal">We approach every challenge with an open mind. We are not afraid to experiment, try something new or combine things that no one has done before. This keeps us sharp and brings unique solutions to our clients.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default About;