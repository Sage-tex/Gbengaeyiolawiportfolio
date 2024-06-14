import GetInTouch from "../components/about/getInTouch"
import MyExperience from "../components/about/myExperience"
import HomeHero from "../components/home/hero"
import HomeProfile from "../components/home/profile"
import Testimonials from "../components/home/testimonials"
import Layout from "../layout"

function Home() {
  return (
    <Layout>
      <HomeHero/>
      <HomeProfile/>
      <MyExperience/>
      <Testimonials/>
      <GetInTouch/>
    </Layout>
  )
}

export default Home