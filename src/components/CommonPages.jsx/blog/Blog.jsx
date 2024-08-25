import Footer from "../footer/Footer"
import MiniBlog from "../miniblog/MiniBlog"
import "./Blog.css"

function Blog() {
    return (
        <div className="blogHero">
            <h2>Blog</h2>
            <MiniBlog />
            <MiniBlog />
            <MiniBlog />
            <MiniBlog />
            <Footer />
            </div>
    )
}

export default Blog