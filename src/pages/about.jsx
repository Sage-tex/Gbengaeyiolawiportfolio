import Layout from '../layout'
import AboutHero from '../components/about/hero'
import ProfessionalAff from '../components/about/professionalAff'
import GetInTouch from '../components/about/getInTouch'
import MyExperience from '../components/about/myExperience'

function About() {
  return (
    <Layout>
        <AboutHero/>
        <ProfessionalAff/>
        <MyExperience/>
        <GetInTouch/>
    </Layout>
  )
}

export default About