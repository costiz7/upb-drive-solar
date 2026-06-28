import './AboutUsPage.css';
import ImageCarousel from '../Atoms/ImageCarousel/ImageCarousel';

const imgSet1 = [
    "/images/IMG_1.webp", "/images/IMG_2.webp", "/images/IMG_3.webp",
    "/images/IMG_4.webp", "/images/IMG_5.webp", "/images/IMG_6.webp"
];

function AboutUsPage() {
    return (
        <>
            <div className="about-us-wrapper">
                <div className="who-are-we-section">
                    <h1>WHO ARE WE?</h1>
                    <ImageCarousel images={imgSet1}/>
                </div>
            </div>
        </>
    );
}

export default AboutUsPage;