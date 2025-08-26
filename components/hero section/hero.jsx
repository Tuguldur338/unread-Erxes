import Image from "next/image"
import "@/components/hero section/hero.css"

const Hero = () => {
    return <div className="main-hero-content">
                <div className="hero-image-container">
                    <Image src="/images/hero-image.jpg" alt="Hero image" width={446.4} height={446.4} className="hero-image" />
                </div>

                <div className="hero-section-description">
                    <div>
                        <h5>Шинэ</h5>
                    </div>
                    
                    <div>
                        <h1>Чөлөөт</h1>
                    </div>

                    <div>
                        <h1>“БОНЗ-ын үнэлгээний цахим платформын нээлтийн арга хэмжээ”-г тоймлох нь</h1>
                    </div>
                </div>
            </div>
}

export default Hero