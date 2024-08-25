import "./RecentFile.css"


function RecentFile() {
    return (
        <div className="RecentContainer">
            <div className="header">
                <h2>Recent Posts</h2>
                <a href="#" className="viewAll">View all</a>
            </div>
            <div className="postGrids">
                <div className="postCard">
                    <h3>Making a design system from scratch</h3>
                    <div className="postMeta">
                        <span className="spanText">12 Feb 2020</span>
                        <span className="spanText">|</span>
                        <span className="spanText">Design, Pattern</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis id ullam, ipsa consectetur omnis minima voluptatibus deleniti! Voluptate, accusamus laborum?
                    </p>
                </div>
                <div className="postCard">
                    <h3>Creating pixel perfect icons in Figma</h3>
                    <div className="postMeta">
                        <span className="spanText">12 Feb 2020</span>
                        <span className="spanText">|</span>
                        <span className="spanText">Figma, Icon Design</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non libero quas iusto numquam consectetur nostrum facilis eaque adipisci veniam pariatur!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecentFile