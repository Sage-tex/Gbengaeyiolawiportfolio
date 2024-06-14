import GetInTouch from "../components/about/getInTouch"
import BlogList from "../components/blog/blogList"
import BlogHero from "../components/blog/hero"
import Layout from "../layout"

function Blog() {
  return (
    <Layout>
        <BlogHero/>
        <BlogList/>
        <GetInTouch/>
    </Layout>
  )
}

export default Blog