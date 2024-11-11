import coperate from "../../assets/man1.jpg";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function HomeHero() {
  return (
    <div className="relative background ">
      <div className=" text-white p-[20px] lg:p-[40px] mt-[30px] lg:mt-0">
        <p className="text-[30px] lg:text-[100px] leading-[28px] lg:leading-[140px] font-[800] font-poppins text-center lg:text-start">
          <span className="text-[#AE8625]">GBENGA</span>{" "}
          <span className="text-[#FFFFFF]">EYIOLAWI</span>
        </p>
        <div className="flex justify-center lg:justify-start items-center mt-[10px]  w-full lg:w-fit">
          <p className="text-white font-poppins text-[10px] text-center lg:text-[22px]">
            SCRUM MASTER | PMP | DATA ANALYST BUSINESS ANALYST | CORE INTERESTS: FINTECH + AGRITECH
          </p>
         
        </div>

        <div className="flex items-center justify-center space-x-[20px] lg:space-x-[160px] mt-[70px] w-full lg:w-fit">
          <div className="flex flex-col space-y-[20px] text-white font-poppins">
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
          <div className="h-[250px] lg:h-[360px] w-[250px] lg:w-[360px] rounded-full border">
            <img
              src={coperate}
              className="h-[250px] object-cover lg:h-[360px] w-[250px] lg:w-[360px] rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="mt-[50px] flex flex-col items-center lg:items-start">
          {" "}
          <p className="text-[12px] lg:text-[16px] font-poppins text-center lg:text-start ">
            Prepare to be amazed by the unstoppable force that is a Nigerian
            Serial Entrepreneur! <br className="hidden lg:block" /> A master of project management, Scrum master, a
            data enthusiast, and an analytical genius. <br className="hidden lg:block" /> With a laser focus on
            revolutionizing the way young Nigerians handle payments and <br className="hidden lg:block" />
            transforming the agricultural value chain, this marketing
            professional is determined <br className="hidden lg:block" /> to make waves in FinTech, AgriTech, and
            PropTech. Brace yourself for a future where <br className="hidden lg:block" /> simplicity reigns
            supreme in payments, agriculture thrives like never before, and real
            estate <br className="hidden lg:block" /> becomes an innovative paradise. Get ready to
            witness greatness!
          </p>
        </div>
      </div>
      <div className="h-[10px] lg:h-[30px] about"></div>
    </div>
  );
}

export default HomeHero;
