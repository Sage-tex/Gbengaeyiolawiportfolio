import { Link,  useParams } from "react-router-dom"
import blog from '../../assets/blog.svg'
import {article} from '../../article'
import { useEffect, useState } from "react"

function Content() {
  const [singleBlog, setSingleBlog] = useState({})
  const {id}  = useParams()
    useEffect(()=> {
      window.scrollTo(0, 0)
      const singleBlog = article.find(post => post.id === parseInt(id));
      setSingleBlog(singleBlog)

    }, [id])
  return (
   <>
    {
      singleBlog ? (
        <div className="flex flex-col space-y-[50px] lg:space-y-[100px] p-[40px_20px] lg:p-[50px] bg-black">
        <div className="flex items-start justify-between">
            {/* <div className="hidden lg:flex h-[40px] lg:h-[60px] min-w-[40px] lg:w-[60px] bg-gray-800 cursor-pointer rounded-full" onClick={()=> navigate(-1) }></div> */}
            <div className="grow flex flex-col items-center justify-center font-poppins">
                <div className="flex  items-center space-x-[20px] text-[#FFFFFF]"><p>UI DESIGN</p> <p>{singleBlog?.date}</p></div>
                <p className="font-poppins mt-[23px] px-0 lg:px-[80px] text-white text-[20px] lg:text-[30px] font-[700] text-center">{singleBlog?.title}</p>
            </div>
        </div>
        <div className="w-full flex items-center justify-center">
        <div className="h-[300px] lg:h-[600px] w-full lg:w-[80%]  rounded-[30px] bg-white">
          <img src={singleBlog?.thumbnail || blog} alt="" className="h-full w-full object-cover rounded-[30px]" />
        </div>
        </div>
        <div className="text-white font-poppins w-full flex items-center justify-center">
          <div className="w-full lg:w-[80%]">
         {singleBlog?.content}
          </div>
        </div>
        <div></div>
    </div>
      ) : (
        <div className="h-[200px] lg:h-[300px] w-full flex flex-col items-center justify-center">
          <p className="text-white font-poppins">Post not found!</p>
          <Link to='/blog' className="text-white font-poppins border p-[5px_10px] mt-[20px] rounded-full" >Go Back</Link>
        </div>
      )
    }
   </>
  )
}

export default Content