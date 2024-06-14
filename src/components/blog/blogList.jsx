import blog from '../../assets/blog.svg'
import {article} from '../../article'
function BlogList() {
  return (  
    <div className='flex flex-col space-y-[40px] lg:space-y-[80px] bg-[#101013] p-[20px] lg:p-[70px_60px]'>
        <div className="flex items-center space-x-[10px]">
          <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
          <div className="w-full">
            <p className=" text-white w-full text-center text-[25px] lg:text-[40px] font-[800] font-poppins">
              FROM MY <span className="text-[#AE8625]">HEART</span>
            </p>
          </div>
          <div className="hidden lg:flex h-[3px] bg-[#FFFFFF] w-full"></div>
        </div>

        <div>
           
            <div className="grid lg:grid-cols-3 gap-[42px] mt-[70px]">
              {
                article.map(({title, id, content, thumbnail, date, link }) => (
                  <div  className="text-white  rounded-[15px] " key={id}>
                  <div className="w-full  h-[250px] rounded-[15px]">
                  <img src={thumbnail || blog} alt="" className="h-full w-full object-cover rounded-[15px]" />
                  </div>
                  <div className="space-y-[10px] flex flex-col mt-[10px] p-[10px]">
                    <div className="flex items-center space-x-[20px] text-[#FFFFFF99] font-poppins">
                      <p>AGRITECH</p>
                      <p>{date}</p>
                    </div>
                    <p className="text-[#FFFFFF] font-poppins text-[18px] leading-[25px]">{title}</p>
                    <p className="text-[#FFFFFF99] font-[400] text-[13px] font-poppins">
                    {content.substring(0, 150)}
                    </p>
                    <div className="mt-[20px]">
                    <a  href={link} rel="noreferrer" target="_blank" className="text-white  ">Read More</a>
                  </div>
                  </div>
                  
                  </div>
                ))
              }
                
                
                
            </div>
        </div>
    </div>
  )
}

export default BlogList