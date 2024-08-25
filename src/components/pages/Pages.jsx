import { Route, Routes } from "react-router-dom"
import Navbar from "../CommonPages.jsx/navbar/Navbar"
import Work from "../CommonPages.jsx/work/Work"
import Contact from "../CommonPages.jsx/contact/Contact"
import Blog from "../CommonPages.jsx/blog/Blog"
import Home from "../CommonPages.jsx/home/Home"
import WorkDetails from "../CommonPages.jsx/workdetails/WorkDetails"

function Pages() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Work/*" element={<Work />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="Work/details" element={<WorkDetails />} />
            </Routes>
        </div>
    )
}

export default Pages