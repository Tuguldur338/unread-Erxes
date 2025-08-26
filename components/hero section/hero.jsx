import Image from "next/image"
import "@/components/hero section/hero.css" 

const Hero = () => {
    return <div className="main-hero-content">
                <div className="hero-image-container">
                    <a href="https://unread.today/c/chuluut-people-in-need">
                        <Image src="/images/hero-image.jpg" alt="Hero image" width={446.4} height={446.4} className="hero-image" />
                    </a>
                </div>

                <div className="hero-section-description">
                    <div className="lead">
                        <h5>Шинэ</h5>
                    </div>
                    
                    <div className="category">
                        <h1>Чөлөөт</h1>
                    </div>

                    <div className="title">
                        <h1>“БОНЗ-ын үнэлгээний цахим платформын нээлтийн арга хэмжээ”-г тоймлох нь</h1>
                    </div>
                </div>
            </div>
}

export default Hero