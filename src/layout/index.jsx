/* eslint-disable react/prop-types */
import Navbar from "../components/navbar"

function Layout({children}) {
  return (
    <div className="bg-black h-full">
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default Layout