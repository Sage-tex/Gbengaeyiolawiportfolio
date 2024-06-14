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
            Meet Gbenga, a visionary leader whose journey defies conventional
            paths and ignites inspiration. As the Chairman of Titan Group, an
            esteemed conglomerate with diverse interests in Finance,
            Agriculture, and Real Estate, Gbenga embodies a testament to
            resilience and unyielding determination.
          </p>
          <p>
            Hailing from Osogbo but having lived his early years in Ile-Ife,
            Nigeria, Gbenga's origins are a far cry from his current stature.
            His transformative journey commenced at the tender age of 13 when he
            embraced entrepreneurship as a trader and hawker. Navigating the
            bustling streets, he bridged the gap between wholesale herbal
            merchants and local retailers, infusing his sales with personal
            profit. This budding entrepreneur swiftly earned recognition as
            "Baba-Leku," the herbal maestro, across the region.
          </p>
          <p>
            However, Gbenga's path wasn't marked by a singular rags-to-riches
            narrative; it was a journey through consistent challenges, learning,
            and tenacity. Rather than being deterred by failure, Gbenga embraced
            it as an opportunity for growth, seamlessly integrating each setback
            into his learning curve.
          </p>
          <p>
            His trajectory transformed him from a young boy shouldering a tray
            through Ile Ife's streets to a poised individual commanding respect
            in the presence of royalty, ministers, and governors. This evolution
            was underpinned by unwavering personal sacrifices and relentless
            perseverance.
          </p>
          <p>
            Gbenga grew to become a philanthropist in education, social welfare
            and environment.
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
              As Gbenga's influence expanded, his commitment to societal
              well-being flourished. An unwavering philanthropist in education,
              social welfare, and the environment, he sculpted a legacy of
              positive change. In recognition of his monumental impact on local
              food production, agriculture, and youth employment in Oyo state,
              Gbenga was conferred the title "Aare Kebimapalu of Ibadan Land" by
              the esteemed Olubadan of Ibadan, Oba Saliu Akanmu Adetunji.
            </p>
            <p>
              Acknowledged on an international platform, Gbenga was appointed an
              ECOWAS Youth Ambassador and honored with the prestigious Nelson
              Mandela Leadership Award by the ECOWAS Youth Council. His
              contributions to entrepreneurship and agricultural development
              also led to the conferral of an honorary D.SC Entrepreneurship and
              Agricultural Development by the European American University,
              Commonwealth of Dominica.
            </p>
            <p>
              Gbenga's academic pursuits reflect his multifaceted expertise.
              Armed with a Diploma in Business and Management from the
              University of Liverpool, England, he honed his acumen further with
              a Diploma in Sustainable Real Estate from the University of
              Cambridge. Gbenga's academic journey began at the renowned Obafemi
              Awolowo University, where he pursued Chemical Engineering while
              actively participating as a student member of the Nigerian Society
              of Chemical Engineers (NSChE).
            </p>

            <p>
              He holds a Bachelors degree in Business Administration from the
              Gregory University, Uturu, Nigeria.{" "}
            </p>

            <p>
              {" "}
              Bearing testament to his enduring commitment to uplifting
              communities, Gbenga founded the Aare Gbenga Eyiolawi Foundation
              (previously Titan Foundation) in 2018. In the past four years
              alone, the foundation has awarded short and long-term scholarships
              to over 457 primary school students, 125 secondary school
              students, and currently supports more than 100 students across
              Nigerian tertiary institutions. The foundation's annual
              scholarship competition in Ibadan stands as a hallmark of Gbenga's
              enduring dedication to education.
            </p>
            <p>
            Gbenga's story transcends borders ,captivating hearts worldwide, and epitomizing the essence of triumph against all odds as he was a speaker at the United Nations Economic Commision for Africa in 2021 alongside notable economic bigwigs in Africa.
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
