import "./FeaturePage.css"
import dashboard from '../../../assets/Rectangle 30.png';
import portrait from '../../../assets/Rectangle 32.png';
import malaylam from '../../../assets/Rectangle 34.png';
import FeatureWork from "../FeatureWork/FeatureWork";

function FeaturePage() {
    const works = [
        {
            id: 1,
            image: dashboard,
            title: 'Designing Dashboards',
            year: '2020',
            category: 'Dashboard',
            description: 'Lorem ipsum dolor sit amet lorem, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!'
        },
        {
            id: 2,
            image: portrait,
            title: 'Vibrant Portraits of 2020',
            year: '2018',
            category: 'Illustration',
            description: 'Lorem ipsum dolor sit amet lorem, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!'
        },
        {
            id: 3,
            image: malaylam,
            title: '36 Days of Malayalam type',
            year: '2018',
            category: 'Typography',
            description: 'Lorem ipsum dolor sit amet lorem, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!'
        }
    ];
    
    return (
        <div className="featureContainer">
            <h2>Feature Works</h2>
            {works.map((work, index) => (
            <FeatureWork 
                key={work.id}
                image={work.image}
                title={work.title}
                year={work.year}
                category={work.category}
                description={work.description}
            />
        ))}
        </div>
    )

    // return (
    //     <div className="featureContainer">
    //         <h2>Feature works</h2>
    //         <div className="featureWorks">
    //             <img src={dashboard} alt="" className="workImage"/>
    //             <div className="workDetails">
    //                 <h3>Designing Dashboards</h3>
    //                 <div className="workMeta">
    //                     <span className="workYear">2020</span>
    //                     <span className="workCategory">Dashboard</span>
    //                 </div>
    //                 <p>
    //                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!
    //                 </p>
    //             </div>
    //         </div>
            
    //         <div className="featureWorks">
    //             <img src={portrait} alt="" className="workImage"/>
    //             <div className="workDetails">
    //                 <h3>Vibrant Portraits of 2020</h3>
    //                 <div className="workMeta">
    //                     <span className="workYear">2018</span>
    //                     <span className="workCategory">Illustration</span>
    //                 </div>
    //                 <p>
    //                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!
    //                 </p>
    //             </div>
    //         </div>

    //         <div className="featureWorks">
    //             <img src={malaylam} alt="" className="workImage"/>
    //             <div className="workDetails">
    //                 <h3>36 Days of Malayalam type</h3>
    //                 <div className="workMeta">
    //                     <span className="workYear">2018</span>
    //                     <span className="workCategory">Typography</span>
    //                 </div>
    //                 <p>
    //                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita veniam cumque quia voluptatum vitae modi, quae facilis ipsum consequuntur illo autem laboriosam placeat architecto consectetur quod ipsam recusandae deserunt praesentium sed facere. Vero itaque ut magnam error aperiam laboriosam laudantium iste, distinctio numquam minus consectetur natus obcaecati tempore recusandae quam!
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default FeaturePage