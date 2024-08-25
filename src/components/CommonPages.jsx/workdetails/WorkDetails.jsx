import Footer from "../footer/Footer"
import "./WorkDetails.css"


function WorkDetails() {
    const design = "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.webp?b=1&s=612x612&w=0&k=20&c=9mHYdWeiReHhmicdUf5FH2JICVPk3Uiks3MIn1Fkaz8="
    const headboard = "https://media.istockphoto.com/id/1488294036/photo/businessman-using-tablet-analyze-sales-data-and-economic-growth-graph-chart-and-report-with.webp?b=1&s=612x612&w=0&k=20&c=A-YiLN4KVq8NcFj8PCvXR3T-2HpDnGEDRUPe9_lzHP4="
    const react = "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmclMjByZWFjdHxlbnwwfHwwfHx8MA%3D%3D"

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