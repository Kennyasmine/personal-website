import Footer from "../footer/Footer"
import "./WorkDetails.css"
import design from '../../../assets/Rectangle 4@2x.png';
import headboard from '../../../assets/Rectangle 5.png';
import react from '../../../assets/Rectangle 6.png';


function WorkDetails() {
    
    return (
        <div className="blogPostContainer">
        <h1 className="postTitle">Designing Dashboards with usability in mind</h1>
        <div className="postMeta">
            <span className="postTag">2020</span>
            <span className="postCategory">Dashboard, User Experience Design</span>
        </div>
        <p className="postDescription">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet.
        </p>
        <img
            src={design}
            alt="Dashboard Example"
            className="postImage"
        />
        <h2 className="sectionHeading">Heading 1</h2>
        <h3 className="sectionSubheading">Heading 2</h3>
        <p className="postDescription">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet.
        </p>
        <img
            src={headboard}
            alt="Car Example"
            className="postImage"
        />
        <img
            src={react}
            alt="Order Example"
            className="postImage"
        />
        <Footer />
        </div>

    )
}

export default WorkDetails