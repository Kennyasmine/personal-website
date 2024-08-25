import "./ContainerMain.css"
import profile_p from '../../../assets/profile_p.jpg';



function ContainerMain() {
    // const img = "https://media.istockphoto.com/id/1485052530/photo/portrait-fashion-and-braids-with-a-black-woman-on-an-orange-background-outdoor-for-style-or.webp?b=1&s=612x612&w=0&k=20&c=nnnQ8OczstGhlEpL3cBwcaCstRZY4g0s3pDsbXyZs7M="
    return (
        <div className="heroContainer">
            <div className="heroLeft">
                <h1>Hi, I am Waliyat,</h1>
                <h1>Creative Technologist</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione sunt ea deleniti minima quia.    
                </p>
                <p className="resume">Download Resume</p>
            </div>
            <div className="heroRight">
                <img className="img" src={profile_p} alt="my photo" />
            </div>
        </div>
    )
}

export default ContainerMain