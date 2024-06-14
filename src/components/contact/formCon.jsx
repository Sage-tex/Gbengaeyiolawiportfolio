import React, { useState } from "react";
import axios from "axios";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import contactImg from "../../assets/contactImg.svg";
function FormCon() {
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
    <div>
      <div className="bg-black p-[15px] lg:p-[30px] grid lg:grid-cols-2 gap-[60px] mt-[100px]">
        <div className="border relative">
          <img src={contactImg} alt="" />
          <div className="absolute top-0 h-full w-full p-[20px]  flex items-end justify-end">
            <div className="font-poppins text-white flex flex-col items-center lg:items-start">
              <p className="font-[700] text-[25px] lg:text-[50px] ">
                Gbenga Eyiolawi
              </p>
              <p className="capitalize text-[11px] mt-[10px] lg:text-[16px] text-center lg:text-start font-[500]">
              Prepare to be amazed by the unstoppable force that is a Nigerian Serial Entrepreneur!
               A master of project management, Scrum master, a data enthusiast, and an analytical genius
              </p>
              <div className="mt-[40px] flex items-center space-x-[20px]">
                <div className="bg-[#00000099] flex items-center justify-center rounded-full h-[45px] w-[45px]">
                  <a
                    href="https://www.linkedin.com/in/gbenga-eyiolawi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin className="text-[25px]" />
                  </a>
                </div>
                <div className="bg-[#00000099] flex items-center justify-center rounded-full h-[45px] w-[45px]">
                  <a
                    href="https://instagram.com/thegbengaeyiolawi?igshid=MzNlNGNkZWQ4Mg=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillInstagram className="text-[25px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[80%]">
          <p className="uppercase font-poppins text-[40px] text-white font-[800]">
            get in touch
          </p>
          <div className="grid gap-[30px] mt-[30px]">
          <input
            type="text"
            className="bg-[#191A1E] h-[60px] px-[20px] w-full text-white font-poppins"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
        />
        <input
            type="email"
            className="bg-[#191A1E] h-[60px] px-[20px] w-full text-white font-poppins"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
        />
        <input
            type="text"
            className="bg-[#191A1E] h-[60px] px-[20px] w-full text-white font-poppins"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
        />
        <textarea
            type="text"
            className="bg-[#191A1E] h-[240px] p-[20px] w-full text-white font-poppins"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
        />

            <div>
              <button className="bg-[#AE8625] py-[10px] lg:py-[20px] font-[600] text-[16px] lg:text-[20px] text-white font-poppins w-full" onClick={sendEmail}>
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

export default FormCon;
