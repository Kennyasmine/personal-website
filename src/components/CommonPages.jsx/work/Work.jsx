import { Route, Routes } from "react-router-dom"
import { NavLink } from "react-router-dom"
import FeaturePage from "../featurepage/FeaturePage"
import Footer from "../footer/Footer"
import component from '../../../assets/Rectangle 40.png';
import "./Work.css"
// import WorkDetails from "../workdetails/WorkDetails"

function Work() {

    return (
        <div className="featureContainer">
            <NavLink className="details" to="details">
                <FeaturePage />
                <div className="featureWorks">
                    <img src={component} alt="" className="workImage"/>
                    <div className="workDetails">
                        <h3>Components</h3>
                        <div className="workMeta">
                            <span className="workYear">2018</span>
                            <span className="workCategory">Components, Design</span>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!
                        </p>
                    </div>
                </div>
            </NavLink>
            <Footer />
            {/* <Routes>
                <Route path="details" element={<WorkDetails />} />
            </Routes>   */}
        </div>
    )
}

export default Work