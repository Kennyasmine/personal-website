import "./Footer.css"

function Footer() {
    const facebook = "https://cdn-icons-png.flaticon.com/128/1051/1051309.png"
    const instagram = "https://cdn-icons-png.flaticon.com/128/717/717392.png"
    const twitter = "https://cdn-icons-png.flaticon.com/128/733/733635.png"
    const linkedin = "https://cdn-icons-png.flaticon.com/128/3536/3536569.png"
    return (
        <div className="footer">
            <div className="socialIcons">
                <a href="#" className="socialIcon">
                    <img src={facebook} alt="facebook" />
                </a>
                <a href="#" className="socialIcon">
                    <img src={instagram} alt="instagram" />
                </a>
                <a href="#" className="socialIcon">
                    <img src={twitter} alt="twitter" />
                </a>
                <a href="#" className="socialIcon">
                    <img src={linkedin} alt="linkedin" />
                </a>
            </div>
            <p className="copyright">Copyright ©2024 All rights reserved</p>
        </div>
    )
}

export default Footer