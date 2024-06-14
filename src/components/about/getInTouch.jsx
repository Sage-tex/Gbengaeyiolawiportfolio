import "../style.css";
import React, { useState } from "react";
import axios from "axios";
import {BsArrowUpRight} from 'react-icons/bs'
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
function GetInTouch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = async () => {


    try {
        const response = await axios.post(
            "https://send-mail-flask.onrender.com/send_email",
            {
                name: name,
                email: email,
                message: message,
                subject: subject
            }
        );
        setEmail("");
        setName("");
        setMessage("");
        setSubject("");
        console.log(response.data); // Display the response from the API
    } catch (error) {
        console.error("Error sending email:", error);
        setEmail("");
        setName("");
        setMessage("");
        setSubject("");

    }
};
  return (
    <div className=" getintouch h-full mt-[50px] ">
      <div className="relative">
      <div className="absolute h-full top-0 w-full bg-black opacity-10"></div>
      <div className="relative z-20 p-[50px_15px] lg:p-[50px]">
        <div className="flex items-center space-x-[10px]">
          <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
          <div className="w-full">
            <p className=" text-white w-full text-center text-[25px] lg:text-[40px] font-[800] font-poppins">
              GET IN <span className="text-[#AE8625]">TOUCH</span>
            </p>
          </div>
          <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
        </div>
        <div className="mt-[30px] lg:mt-[90px] flex flex-col space-y-[30px]">
          <div className="grid lg:grid-cols-2 gap-[30px]">
            <input
              type="text"
              className="w-full h-[60px]  bg-[#000000CC] placeholder:text-white text-white font-poppins placeholder:font-poppins px-[20px]"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="w-full h-[60px] text-white bg-[#000000CC] placeholder:text-white font-poppins placeholder:font-poppins px-[20px]"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full h-[60px] text-white bg-[#000000CC] placeholder:text-white font-poppins placeholder:font-poppins px-[20px]"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}

            />
          </div>
          <div>
            <textarea
              type="text"
              className="w-full h-[200px] text-white bg-[#000000CC] placeholder:text-white font-poppins placeholder:font-poppins p-[20px]"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <button className="bg-[#AE8625] text-white font-poppins font-[600] text-[20px] w-full p-[10px] lg:p-[20px]" onClick={sendEmail}>
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-[#101013] z-40 p-[20px] lg:p-[50px]">
      <div className="flex items-center "><a href="mailto:gbenga@gbengaeyiolawi.com" className="text-white text-[20px] lg:text-[50px] font-poppins font-[800]">gbenga@gbengaeyiolawi.com</a> <BsArrowUpRight className="text-white font-[800] text-[30px]"/></div>
        <div className="mt-[20px] lg:mt-[40px] flex flex-col lg:flex-row items-start lg:items-center lg:space-x-[92px]">
            <div className="flex flex-col space-y-[10px]">
                <p className="text-[#BFBFBF] font-poppins">SOCIALS</p>
                <div className="flex flex-row items-start lg:items-center space-x-[20px] text-white font-poppins">
                <p>
                  <a
                    href="https://www.linkedin.com/in/gbenga-eyiolawi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="text-[25px] text-[#ae8625]" />
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    href="https://instagram.com/thegbengaeyiolawi?igshid=MzNlNGNkZWQ4Mg=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram className="text-[25px] text-[#ae8625]" />
                  </a>
                  </p>
                </div>
            </div>
            
        </div>
       
      </div>
    </div>
  );
}

export default GetInTouch;
