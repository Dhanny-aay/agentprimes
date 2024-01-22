import Footer from "../component/footer";
import Navbar from "../component/navbar";

const Contact = () => {
    return ( 
        <>
        <Navbar/>
        <div className=" mt-28 md:mt-40 pb-8 md:pb-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className="mt-12 md:px-8 lg:px-16 px-3 ">
                <p className=" w-full text-[24px] md:text-[32px] text-center font-semibold">Contact Prime Agent Sites</p>
                <p className=" w-full text-[16px] md:text-[18px] text-center font-normal">We’d love to hear from you. Please fill out this form.</p>
            </div>

            <div className=" my-8 w-full md:px-10 lg:px-20">
                <div className=" w-full p-3 md:p-8 md:border rounded-[8px] border-[#DAE0E6]">
                    <div className=" w-full flex flex-col md:flex-row justify-between mb-6">
                        <span className=" w-full md:w-[48%]">
                            <label className=" text-base font-medium" for="first-name">First name</label>
                            <input type="text" id="first-name" placeholder="John Doe" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] text-gray-900 font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </span>
                        <span className=" w-full md:w-[48%]">
                            <label className=" text-base font-medium" for="first-name">Email Address</label>
                            <input type="text" id="mail" placeholder="Johndoe@mail.com" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] text-gray-900 font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </span>
                    </div>
                    <label className=" text-base font-medium" for="first-name">Phone Number</label>
                    <input type="text" id="phone" placeholder="+1" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] mb-6 text-gray-900 font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>

                    <label className=" text-base font-medium" for="Message">Message</label>
                    <textarea id="message" rows={6} placeholder="Hi! We are Azba group..." class="border-[#DAE0E6] border mb-4 bg-transparent font-normal placeholder text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>

                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-base font-medium">
                        I agree with Prime Agent Sites Policy
                        </span>
                    </label>

                    <button className=" w-full flex h-[45px] mt-6 rounded-[8px] bg-[#081f5c] hover:bg-opacity-75 transition-all justify-center items-center">
                        <p className=" text-base text-white">Send Message</p>
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Contact;