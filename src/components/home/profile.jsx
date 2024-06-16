import hometalk from "../../assets/hometalk.svg";
import grad from "../../assets/grad.svg";

import { Link } from "react-router-dom";
function HomeProfile() {
  return (
    <div className="pt-[80px] bg-black pb-[40px]">
      <div className="px-[20px] lg:px-[40px]">
        <div className="flex items-center space-x-[10px]">
          <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
          <div className="w-full">
            <p className=" text-white w-full text-center text-[25px] lg:text-[40px] font-[800] font-poppins">
              INSPIRING JOURNEY OF <span className="text-[#AE8625]">GBENGA</span>
            </p>
          </div>
          <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
        </div>

        <div className="mt-[30px] lg:mt-[81px] w-full ">
          <img
            src={hometalk}
            alt=""
            className="h-[200px] lg:h-[500px] object-cover  w-full"
          />
        </div>
        <div className="text-center lg:text-start text-white font-poppins text-[15px] lg:text-[20px] mt-[40px] lg:mt-[110px] space-y-[20px]">
          <p>
          Meet Gbenga, a visionary leader whose unconventional journey ignites inspiration. 
          As the founder who at different times, served as the Scrum Master, 
          Head of Business and Business Improvement Director at Titan Group, 
          a prominent conglomerate with interests in Financial Technology , 
          Agricultural Technology, and Real Estate Technology, Gbenga embodies
           resilience and unyielding determination.
          </p>
          <p>
          Hailing from Osogbo but spending his early years in Ile-Ife, Nigeria, Gbenga's
           origins starkly contrast with his current stature. His transformative journey 
           began at 13 when he embraced entrepreneurship, navigating the bustling streets 
           as a trader and hawker. Bridging the gap between wholesale herbal merchants and local retailers, 
          he quickly earned the nickname "Baba-Leku," the herbal maestro, across the region.
          </p>
          <p>
           Gbenga's path wasn't a straightforward rags-to-riches narrative but one marked by
            consistent challenges, learning, and tenacity. Embracing failure as a growth 
            opportunity, he integrated each setback into his learning curve, evolving from a 
            young boy with a tray to a respected professional in corporate boardrooms while 
            consulting for state governments, traditional institutions and becoming a regular
            go-to person in Agritech for governors, ministers and royalty. 
           This evolution was underpinned by personal sacrifices and relentless perseverance.
          </p>
          <p>
            His trajectory transformed him from a young boy shouldering a tray
            through Ile Ife's streets to a poised individual commanding respect
            in the presence of royalty, ministers, and governors. This evolution
            was underpinned by unwavering personal sacrifices and relentless
            perseverance.
          </p>
           </div>
      </div>
      <div>
        <div className="flex flex-col lg:flex-row mt-[49px] gap-[29px] lg:gap-[49px] px-[20px]">
          <div className="  w-full lg:flex-1 border-[5px] border-[#AA8D1C] ">
            <div className="h-[500px] lg:h-full">
              <img src={grad} alt="" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="w-full lg:flex-1 text-white text-center lg:text-start flex flex-col space-y-[40px] font-poppins">
            <p> 
            As Gbenga's influence expanded, his commitment to societal well-being flourished. 
            A philanthropist dedicated to education, social welfare, and the environment,
            he sculpted a legacy of positive change. Recognized for his impact on local food 
            production, agriculture, and youth employment in Oyo State, Gbenga was honored
            with the title "Aare Kebimapalu of Ibadan Land" by the Olubadan of Ibadan, Oba Saliu Akanmu Adetunji.
            </p>
            <p>
            On an international platform, Gbenga was appointed an ECOWAS Youth Ambassador and 
            awarded the prestigious Nelson Mandela Leadership Award by the ECOWAS Youth Council. 
            His contributions to entrepreneurship and business improvement earned him an honorary 
            D.Sc. in Entrepreneurship and Agricultural Development from the European American University, 
            Commonwealth of Dominica.
            </p>
            <p>
            Gbenga's academic pursuits reflect his multifaceted expertise. He holds a Diploma in Business 
            and Management from the University of Liverpool and a Diploma in Sustainable Real Estate from
             the University of Cambridge. His academic journey began at Obafemi Awolowo University, where 
             he pursued Chemical Engineering and actively participated as a student member of the Nigerian 
             Society of Chemical Engineers (NSChE). He also holds a Bachelor's degree in Business Administration 
             from Gregory University, Uturu, Nigeria.
            </p>
            <p>
            Testament to his commitment to uplifting communities, Gbenga founded the Aare Gbenga Eyiolawi Foundation 
            (formerly Titan Foundation) in 2018. In four years, the foundation has awarded scholarships to over 457 
            primary school students, 125 secondary school students, and supports more than 100 students in Nigerian
            tertiary institutions. The foundation's annual scholarship competition in Ibadan underscores Gbenga's 
            dedication to education.{" "} 
            </p>
            <p>
              {" "}
              Gbenga's story transcends borders, captivating hearts worldwide and epitomizing triumph against all odds. 
              His inspirational journey was highlighted when he spoke at the United Nations Economic Commission for Africa
               in 2021, alongside notable African economic leaders
            </p>
          </div>
        </div>
        <div className="mt-[110px] flex items-center justify-center">
          <Link
            to="/about"
            className="bg-[#AE8625] p-[20px_32px] text-white font-poppins"
          >
            See more about myself
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeProfile;
