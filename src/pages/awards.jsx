import GetInTouch from "../components/about/getInTouch"
import AwardsHero from "../components/awards/hero"
import Recognitions from "../components/awards/recognitions"
import Layout from "../layout"

function Awards() {
  return (
    <Layout>
        <AwardsHero/>
        <Recognitions/> 
        <GetInTouch/>
    </Layout>
  )
}

export default Awards