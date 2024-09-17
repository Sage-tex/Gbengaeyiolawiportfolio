 import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


function MyExperience() {
  const [esp, setEsp] = useState(null);
  const toggle = (i) => {
    if (esp === i) {
      return setEsp(null);
    }
    setEsp(i);
  };
  return (
  /*  <div className="p-[20px] lg:p-[60px]">
      <div className="flex items-center space-x-[10px]">
        <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
        <div className="w-full">
          <p className=" text-white w-full text-center text-[25px] lg:text-[40px] font-[800] font-poppins">
            MY<span className="text-[#AE8625]"> EXPERIENCE</span>
          </p>
        </div>
        <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
      </div>
      <div className="hidden lg:flex items-center justify-between lg:space-x-[50px] mt-[30px] lg:mt-[120px]">
        <p className="text-[#BFBFBF] text-[20px] font-poppins font-[500]">
          EXPERIENCE
        </p>
        <p className="flex-1 text-[#FFFFFF] text-[15px] lg:text-[30px] font-poppins font-[700]">
          SOME OF MY PAST AFFILATIONS{" "}
        </p>
        <p className="text-[#BFBFBF] text-[20px] font-poppins font-[500]">
          2007 - Date
        </p>
      </div>

      <div className="mt-[50px] flex flex-col space-y-[20px]">
        {experienceArr.map((item, i) => (
          <div key={item.id} onClick={()=> toggle(i)} className="cursor-pointer">
            <div className="border p-[20px] border-[#AE8625] flex items-center justify-between space-x-[20px] ">
              {esp === i ? <AiOutlinePlus  className="text-[#AE8625] text-[10px] lg:text-[20px]" /> : <AiOutlineMinus className="text-[#AE8625] text-[15px] lg:text-[20px]" />}
              <p className="text-[rgb(174,134,37)] flex-1 font-poppins font-[500] lg:font-[700] text-[9px] lg:text-[25px]">{item.title}</p>
              <p className={`${ esp === i ? 'hidden': 'block'} text-[#AE8625] font-[500] text-[10px] lg:text-[20px]`}>{item.date}</p>
            </div>
            <div className={`${esp === i ? 'h-full p-[15px] lg:p-[20px_30px] border border-[#AE8625]' : 'h-0 p-0'} overflow-hidden transition-all break-words space-y-[10px]`}>
              {item.content.map((items, index)=> (
                <li key={index} className="text-white text-[12px] lg:text-[16px] font-poppins">{items}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

const experienceArr = [
  {
    id: 1,
    title: "SENIOR PROJECT CONSULTANT: OPULENCE CITY PROJECT ",
    date: "January 2021-Date",
    content: [
      "Negotiates acquisition of lands and handles due diligence",
      "In charge of documentation and compliance together with the Legal Head",
      "Develops business model for the business as a Prop-Tech enterprise",
      "In charge of the conversion and transformation of the business from a conventional real estate marketing company to a Prop-Tech enterprise",
      "Develops marketing models and strategies and supervises the implementation of the same",
      "Manages the clientele database and their asset till hand over stage",
      "Responsible for sales proposal draft and training of sales reps.",
    ],
  },
  {
    id: 2,
    title: "ECOWAS YOUTH AMBASSADOR: WAYC",
    date: "June 2021-Date",
    content: [
      "Represent the interests and concerns of West African youth on regional platforms, advocating for policies and initiatives that promote their well-being, development, and engagement.",
      "Serve as a spokesperson for youth-related matters, communicating with diverse audiences through speeches, press releases, social media, and other channels to raise awareness and generate support.",
      "Build and maintain relationships with youth leaders, organizations, and stakeholders across West Africa to foster collaboration, share best practices, and amplify youth voices.",
      "Organize training sessions, workshops, and seminars to empower young people with skills, knowledge, and resources that enhance their participation in social, economic, and political spheres.",
      "Work closely with local communities to identify challenges and opportunities for youth development, initiating projects and activities that promote positive change.",
      " Develop and implement initiatives that promote entrepreneurship, education, health, gender equality, and other areas that contribute to the well-rounded development of West African youth.",
      "Conduct research and gather data on issues affecting youth, using evidence to inform decision-making processes and shape effective policies.",
      "Organize events, conferences, and forums that bring together young people, experts, and policymakers to exchange ideas, showcase achievements, and address key concerns.",
      "Play a role in addressing emergencies, conflicts, or crises that affect young people, collaborating with relevant authorities to ensure their needs are met.",
      " Foster understanding and collaboration among diverse cultures within the West African region, promoting unity and cooperation among youth from different backgrounds.",
      " Engage in public speaking, media interviews, and outreach efforts to raise awareness about the importance of youth participation in regional development and decision-making.",
      "Attend regional and international meetings, conferences, and events as a representative of West African youth, sharing insights and advocating for their interests on a broader stage.",
      "Provide regular updates to WAYC leadership on the progress of youth-related initiatives, highlighting achievements, challenges, and recommendations for improvement.",
    ],
  },
  {
    id: 3,
    title: "EXECUTIVE DIRECTOR: Aare Gbenga Eyiolawi Foundation",
    date: "Jan 2018- Date",
    content: [
      "Aare Gbenga Eyiolawi Foundation is a Non-government, Non-profit organisation that supports indigent students and out of school children.",
      "Our core focus is to get out-of-school children back to classrooms as we belive every child has a right to education regardless of age, race, sex or class. ",
      "Develops business model for the business as a Prop-Tech enterprise",
      "Our secondary goal is to keep other indigent children in school by offering scholarships to them to support their basic needs like books, shoes, uniforms and daily snacks.",
      "While we do this, we also support indigent students in secondary school and university on merit basis through our annual scholarship program Annual Aare Gbenga Eyiolawi Bursary",
     
    ],
  },
  {
    id: 4,
    title: "FOUNDER: TITAN FARMS LIMITED",
    date: "March 2018 - January 2022",
    content: [
      "Coordinated the sales and marketing activities through the marketing consultants and our in-house marketing team",
      "Worked hand-in-hand with the CTO to ensure correct interpretation and delivery of business goals through our centralised Tech management system and portal",
      "Oversaw onboarding of farmers and partnerships",
      "Managed the relationship managers that Oversees the onboarding of partners for advance purchase.",
      "Liaise with foreign and local investors",
      "Led the development of the company's short and long-term strategy",
      "Created and implemented the company's vision and mission",
      "Created and implemented the company's vision and mission",
      " Worked with the finance team to develop a solid cash flow projection and reporting mechanism, which included setting a minimum cash threshold to meet operating needs.",
      "Planned, developed, implemented and directed the organization’s operational and fiscal function and performance.",
      " Acted as a strategic advisor and consultant offering expert advice on contracts, negotiations or business deals that the corporation may enter into.",
      " Evaluated company’s financial, operational, and sales and marketing structures to plan for continual improvements and a continual increase of operating efficiencies",
      "Provided expert financial guidance and advice to others within executive leadership",
      " Led the transition committee when the company transitioned into a data-reliant full-fledged food processing company and we had to phase out some roles"
    ],
  },
  {
    id: 5,
    title: "MANAGING PARTNER & PROJECT MANAGER: PEG N RED CASUALS",
    date: "April 2017 - September 2018",
    content: [
      "Developed and executed a comprehensive sales strategy aligned with the company's overall business objectives.",
      "Stayed updated on industry trends, market dynamics, and competitive landscape within the fashion industry.",
      " Identified and pursued new sales opportunities and partnerships to expand the company's market reach.",
      "Worked closely with the finance team to develop sales budgets, track sales performance, and manage pricing and margins.",
      "Built and maintained a strong network of industry contacts, attend trade shows, fashion events, and networking forums to establish connections, gain market insights, and explore potential business collaborations.",
      "Built and led a sales team responsible for driving revenue growth. Recruit, train, and manage sales representatives, set sales targets, provide ongoing coaching and support, and evaluate their performance.",
      "Identified and established distribution channels for the company's ready-made fashion products.",
      "Developed and maintained strong relationships with key customers, including retailers, fashion boutiques, department stores, and other potential sales channels. Understand their needs, negotiate agreements, address concerns, and provide exceptional customer service to foster long-term partnerships.",
      "Collaborated with the marketing team to align sales efforts with marketing campaigns and branding initiatives through our online sales platform. ",
      "Monitored and analyzed sales data, market trends, and customer feedback to identify opportunities for growth and optimize sales strategies.",
    ],
  },
  {
    id: 6,
    title: "CO FOUNDER & PROJECT LEAD: KNACK INTERNATIONAL LIMITED",
    date: "March 2007 - June 2011",
    content: [
      "Handled budgeting and forecasting of business models.",
      "Built a strong network of industry contacts, potential customers, partners, and investors.",
      " Collaborated with the finance team to develop and monitor budgets, financial forecasts, and key performance indicators (KPIs). ",
      "Provided leadership and guidance to the commercial team, which include sales, marketing, business development, and customer support.",
      "Developed and implemented strategies to generate revenue for the company.",
      "Conducted market research and customer analysis to understand customer needs, preferences, and behavior. ",
      " Identified and nurtured strategic partnerships and alliances with other businesses or organizations that could benefit the company.",
      "Led the sales and marketing efforts to drive customer acquisition, revenue growth, and market expansion",
      "Collaborated with my partner and co-founder and key stakeholders to develop and refine the company's overall business strategy.",
      "Product launch coordination",
      "Market entry strategy formulation and implementation in the popular computer village, Lagos",
      "Tracking and analysing sales performance",
    ],
  },
];

export default MyExperience; *\
