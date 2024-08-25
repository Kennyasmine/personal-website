import { Route, Routes } from "react-router-dom"
import { NavLink } from "react-router-dom"
import FeaturePage from "../featurepage/FeaturePage"
import Footer from "../footer/Footer"
import "./Work.css"
// import WorkDetails from "../workdetails/WorkDetails"

function Work() {

    const component = "https://images.unsplash.com/photo-1532188363366-3a1b2ac4a338?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvbXBvbmVudHN8ZW58MHx8MHx8fDA%3D"
    

    return (
        <div className="featureContainer">
            <FeaturePage />
            <NavLink className="details" to="details">
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