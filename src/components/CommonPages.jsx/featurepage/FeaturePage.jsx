import "./FeaturePage.css"

function FeaturePage() {
    const dashboard = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnQlMjBkYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D"
    const portrait = "https://media.istockphoto.com/id/1479691532/photo/human-hands-holding-mobile-phone-with-hypnotic-screen-many-social-media-likes-popularity-and.webp?b=1&s=612x612&w=0&k=20&c=uwLgOhDgbzAsepdCijjD6TDLVc1qlDTVHq3WCMXLNrg="
    const malaylam = "https://media.istockphoto.com/id/1495819409/photo/digital-mind-brain-artificial-intelligence-concept.webp?b=1&s=612x612&w=0&k=20&c=1DEuZtQVuh5QSaGF97XdtdyrC8e-QxqYX9wthlIDVUo="
    return (
        <div className="featureContainer">
            <h2>Feature works</h2>
            <div className="featureWorks">
                <img src={dashboard} alt="" className="workImage"/>
                <div className="workDetails">
                    <h3>Designing Dashboards</h3>
                    <div className="workMeta">
                        <span className="workYear">2020</span>
                        <span className="workCategory">Dashboard</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!
                    </p>
                </div>
            </div>
            
            <div className="featureWorks">
                <img src={portrait} alt="" className="workImage"/>
                <div className="workDetails">
                    <h3>Vibrant Portraits of 2020</h3>
                    <div className="workMeta">
                        <span className="workYear">2018</span>
                        <span className="workCategory">Illustration</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!
                    </p>
                </div>
            </div>

            <div className="featureWorks">
                <img src={malaylam} alt="" className="workImage"/>
                <div className="workDetails">
                    <h3>36 Days of Malayalam type</h3>
                    <div className="workMeta">
                        <span className="workYear">2018</span>
                        <span className="workCategory">Typography</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturePage