import ContainerMain from "../containermain/ContainerMain"
import FeaturePage from "../featurepage/FeaturePage"
import Footer from "../footer/Footer"
import RecentFile from "../recentfile/RecentFile"

function Home() {
    return (
        <div>
            <ContainerMain />
            <RecentFile />
            <FeaturePage />
            <Footer />
        </div>
    )
}

export default Home