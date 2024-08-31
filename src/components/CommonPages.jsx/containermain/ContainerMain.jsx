import "./ContainerMain.css"
import profile_p from '../../../assets/Ellipse 1.png';



function ContainerMain() {
    
    return (
        <div className="heroContainer">
            <div className="heroLeft">
                <h1>Hi, I am John,</h1>
                <h1>Creative Technologist</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repudiandae quasi earum.
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