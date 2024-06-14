import { Link, useMatch } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './style.css'
import { useState } from 'react';
import {HiBars3} from 'react-icons/hi2'
import {AiOutlinePlus} from 'react-icons/ai'
function Navbar() {
    const [open, setOpen] = useState(false)
    // eslint-disable-next-line react/prop-types
    function CustomLink  ({ children, to,  ...props}){
        const match = useMatch(to !== "" ? `/` + to : "/");
        return(
            <Link 
            className={`${match ? 'lg:text-[#FFFFFF] ':' text-[#64666A]'} font-poppins text-[18px] fonnt-[500] uppercase`}
            to={to}
        {...props}
            >
                {children}
            </Link>
        )
    }
  return (
    <div className='  bg-black  sticky top-0 z-40   lg:p-[14px_50px] navbar flex flex-col lg:flex-row items-start lg:items-center justify-between'>
        <div className='p-[15px] flex items-center w-full lg:w-fit justify-between lg:justify-start'>
            <Link to='/'><img src={logo} alt="" className='h-[60px] w-[100px]' /></Link>
            <div className='lg:hidden'>
                {open ? <AiOutlinePlus onClick={()=>setOpen(!open)} className='text-[#FFFFFF] rotate-45 text-[35px] cursor-pointer' /> : <HiBars3 onClick={()=>setOpen(!open)} className='text-[#FFFFFF] text-[30px] cursor-pointer' />}
            </div>
        </div>
        <div className={`${open ? 'left-0 ':'left-[-100%] lg:left-0' } pt-[70px]  transition-all fixed z-40 top-0 w-[80%] bg-white lg:bg-transparent  h-screen lg:h-fit lg:relative flex flex-col lg:flex-row items-start p-[10px_20px] lg:p-0 space-y-[20px] lg:space-y-0 lg:justify-center lg:items-center lg:space-x-[50px]`}>
            <CustomLink to='/'>HOME</CustomLink>
            <CustomLink to='/about'>PROFESSIONAL AFFILIATIONS</CustomLink>
            <CustomLink to='/awards'>AWARDS AND RECOGNITIONS</CustomLink>
            <CustomLink to='/blog'>BLOG</CustomLink>
            <CustomLink to='/contact'>CONTACT ME</CustomLink>
        </div>
        <div className='hidden lg:block'>loll</div>
    </div>
  )
}

// bg-[#00000033]

export default Navbar