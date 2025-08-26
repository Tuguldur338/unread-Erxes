import "@/components/layout/header.css"
import Image from "next/image"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
    return <div className="main-header-content">
                <div className="main-header-background"></div>


                <div className="header-image">
                    <Image 
                        src="/images/menu-icon.svg"
                        alt="Menu button" 
                        width={20} 
                        height={20}
                    />
                </div>

                <div className="header-logo" >
                    <Image src="/images/unread-logo.png"
                    alt="unread logo" 
                    width={130} 
                    height={18} 
                    className="unread-logo" />
                </div>

                <div className="header-search-button">
                    <Image src="/images/header-search-icon.png" alt="search button" width={50} height={50} className="search-button" />

                    <input type="text" placeholder="Хайлт хийх" className="header-input" />
                </div>

                <div className="next-article">
                    <p>
                        <span className="transparent"> Дараагийн нийтлэл: </span>
                        <span className="next-article-category"> TECHWORM </span>
                        <span className="chip">
                            Өнөөдөр орно
                            <span className="symbols"> â€¢ </span>
                        </span>
                    </p>
                </div>

                <div className="app-icons">
                    <nav>
                        <a href="https://www.facebook.com/UnreadToday/"><FaFacebookSquare size={16} className="facebook-icon" /></a>

                        <a href="https://www.instagram.com/UnreadToday"><CiInstagram size={16} className="instagram-icon" /></a>

                        <a href="https://x.com/UnreadToday"><FaTwitter size={16} className="twitter-icon" /></a>

                        <a href="https://www.linkedin.com/UnreadToday"><FaLinkedinIn size={16} className="linkedin-icon" /></a>
                    </nav>
                </div>
            </div>
}

export default Header