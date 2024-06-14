import video from '../../assets/video.mp4'

function ProfessionalAff() {
  return (
    <div className='flex flex-col space-y-[40px] lg:space-y-[80px] bg-[#101013] py-[30px] lg:py-[70px]'>
     <div className="flex items-center space-x-[10px]">
          <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
          <div className="w-full">
            <p className=" text-white min-w-full text-center text-[25px] lg:text-[40px] font-[800] font-poppins">
              PROFESSIONAL <span className="text-[#AE8625]">AFFILIATIONS</span>
            </p>
          </div>
          <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
        </div>
      <div className="flex items-center justify-center py-[30px]">

        <ul className="flex items-center justify-center flex-col space-y-[10px] lg:list-disc px-[20px]">
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
            Fellow, Institute of Personality Development and Customer
            Relationship Management
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
            Fellow, Institute of Arts and Management Professional
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
            Fellow, Institute of Brand Management
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
            Fellow, Non-Academic Staff Union Hall of Fame
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
            Member, Ife chamber of Commerce, Industry Mines, and Agriculture
            (IFECCIMA)
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
            Member, Oodua Chamber of Commerce, Industry Mines and Agriculture
            (ODUACCIMA)
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
            Member, Ibadan Chamber of Commerce
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
            Member, ECOWAS Youth Council
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
          Member, Institute of Strategic Management of Nigeria
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
          Member, Royal court of Ife Kingdom
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
          Member, Real Estate Developers Association of Nigeria (REDAN)
          </li>
          <li className="text-white font-poppins text-[15px] text-center lg:text-[24px] font-[500]">
          Member, Global Socio-Economic and Financial Evolution 
          </li>
        </ul>
      </div>
      <div className='w-full px-[20px] lg:px-[100px]'>
        <video src={video} className='w-full' controls={true} ></video>
      </div>
    </div>
  );
}

export default ProfessionalAff;
