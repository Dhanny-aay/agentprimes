import { useState } from "react";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import load from './assets/load.gif';
import checked from './assets/checked.png';
import warning from './assets/warning.png';
import { motion } from "framer-motion";

const Contact = () => {

    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState('No');
    const [formErrors, setFormErrors] = useState({
        fullName: '',
        number: '',
        email: '',
        message: '',
    });

    const validateForm = () => {
        let isValid = true;

        const newErrors = {
            fullName: '',
            number: '',
            email: '',
            message: '',
        };

        if (!fullName.trim()) {
            newErrors.fullName = 'Full name is required';
            isValid = false;
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (!number.trim()) {
            newErrors.number = 'Phone number is required';
            isValid = false;
        }

        if (!message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setFormErrors(newErrors);
        return isValid;
    };


    //function to submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading('Yes');

        if (!validateForm()) {
            // Form validation failed
            setLoading('No');
            return;
        }
    
        // Construct the payload for Formspree
        const payload = {
          name: fullName,
          number: number,
          mail: email,
          message: message,
        };
    
        try {
          // Make a POST request to the Formspree endpoint
          const response = await fetch('https://formspree.io/f/mjvnyezl', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          if (response.ok) {
            // Handle successful form submission, e.g., show a success message
            setLoading('No');
            console.log('Form submitted successfully');
            setSuccessMessage(true);
          } else {
            setLoading('No');
            // Handle form submission error
            console.error('Form submission error');
            setErrorMessage(true);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          setLoading('No');
        }
    };

    return ( 
        <>
        <Navbar/>
        <div className=" mt-28 md:mt-40 pb-8 md:pb-16 px-4 md:px-16 lg:px-24 w-full font-Outfit">
            <div className="mt-12 md:px-8 lg:px-16 px-3 ">
                <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className=" w-full text-[24px] md:text-[32px] text-white text-center font-semibold">Contact Prime Agent Sites</motion.p>
                <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className=" w-full text-[16px] md:text-[18px] text-center text-[#c6c4c4] font-normal">We’d love to hear from you. Please fill out this form.</motion.p>
            </div>

            <div className=" my-8 w-full md:px-10 lg:px-20 text-white">
                <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type:'tween' }}
                className=" w-full p-3 md:p-8 md:border rounded-[8px] border-[#DAE0E6]">
                    <div className=" w-full flex flex-col md:flex-row justify-between mb-6">
                        <span className=" w-full md:w-[48%]">
                            <label className=" text-base font-medium" for="first-name">Full name</label>
                            <input type="text" onInput={(e)=>{setFullName(e.target.value)}} id="first-name" placeholder="John Doe" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] text-white font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            {formErrors.fullName && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>
                            )}
                        </span>
                        <span className=" w-full md:w-[48%]">
                            <label className=" text-base font-medium" for="first-name">Email Address</label>
                            <input type="text" id="mail"  onInput={(e)=>{setEmail(e.target.value)}} placeholder="Johndoe@mail.com" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] text-white font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                            {formErrors.email && (
                                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                            )}
                        </span>
                    </div>
                    <label className=" text-base font-medium" for="first-name">Phone Number</label>
                    <input type="text" id="phone"  onInput={(e)=>{setNumber(e.target.value)}} placeholder="+1" class=" h-[45px] bg-transparent mt-2 border border-[#DAE0E6] mb-6 text-white font-normal placeholder text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    {formErrors.number && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.number}</p>
                    )}

                    <label className=" text-base font-medium" for="Message">Message</label>
                    <textarea id="message"  onInput={(e)=>{setMessage(e.target.value)}} rows={6} placeholder="Hi! We are Agent Prime Sites..." class="border-[#DAE0E6] border mb-4 bg-transparent font-normal placeholder text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
                    {formErrors.message && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}

                    {/* <label className="flex items-center">
                        <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <span className="ml-2 text-base font-medium">
                        I agree with Prime Agent Sites Policy
                        </span>
                    </label> */}

                    <button onClick={handleSubmit} className=" w-full flex h-[45px] mt-6 rounded-[8px] bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] hover:bg-opacity-75 transition-all justify-center items-center">
                        { loading === 'No' && <p className=" font-Outfit text-base text-white">Send Message</p> }
                        { loading === 'Yes' && <img src={ load } className=' w-6 h-6' alt="" />}
                    </button>
                </motion.div>
            </div>
        </div>
        { successMessage && <div className=" w-full h-[100vh] fixed top-0 left-0 bg-[#00000057] flex justify-center items-center z-[99999] px-5 md:px-0">
            <div className="w-full md:w-[450px] rounded-[30px] h-[250px] flex flex-col justify-center items-center bg-[#050504] relative">
                <img src={ checked } className=" w-[64px]" alt="" />
                <p className=" text-2xl font-medium font-Outfit text-[#ffffff] mt-3">Thank You</p>
                <p className=" text-base font-normal font-Outfit text-[#f4f4f4]">Your Message has been submitted</p>
                <button onClick={()=>{setSuccessMessage(false)}} className=" bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] mt-6 hover:bg-opacity-75 px-3 py-1 rounded-md text-white text-sm font-Outfit">Okay!</button>
            </div>
        </div>}

        { errorMessage && <div className=" w-full h-[100vh] fixed top-0 left-0 bg-[#00000057] flex justify-center items-center z-[99999] px-5 md:px-0">
            <div className="w-full md:w-[450px] rounded-[30px] h-[300px] flex text-center flex-col justify-center items-center bg-[#050504] relative">
                <img src={ warning } className=" w-[64px]" alt="" />
                <p className=" text-xl font-medium font-Outfit text-[#ffffff] mt-3">There was an error submitting your Message.</p>
                <p className=" text-base font-normal font-Outfit text-[#f4f4f4]">Please try again</p>
                <button onClick={()=>{setErrorMessage(false)}} className=" bg-gradient-to-r from-[#B79843] to-[#82620F] via-[#a18330] mt-6 hover:bg-opacity-75 px-3 py-1 rounded-md text-white text-sm font-Outfit">Okay!</button>
            </div>
        </div>}
        <Footer/>
        </>
     );
}
 
export default Contact;