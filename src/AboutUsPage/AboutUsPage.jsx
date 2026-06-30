import './AboutUsPage.css';
import ImageCarousel from '../Atoms/ImageCarousel/ImageCarousel';

const imgSet1 = [
    "/images/low_quality/IMG_1.webp", "/images/low_quality/IMG_2.webp", "/images/low_quality/IMG_3.webp",
    "/images/low_quality/IMG_4.webp", "/images/low_quality/IMG_5.webp", "/images/low_quality/IMG_6.webp"
];

const imgSet2 = [
    "/images/low_quality/IMG_7.webp", "/images/low_quality/IMG_8.webp", "/images/low_quality/IMG_9.webp",
    "/images/low_quality/IMG_10.webp", "/images/low_quality/IMG_11.webp", "/images/low_quality/IMG_12.webp",
    "/images/low_quality/IMG_13.webp", "/images/low_quality/IMG_14.webp", "/images/low_quality/IMG_15.webp",
]

function AboutUsPage() {
    return (
        <>
            <div className="about-us-wrapper">
                <div className="who-are-we-section">
                    <h1>WHO ARE WE?</h1>
                    <ImageCarousel images={imgSet1}/>
                    <p>UPB DRIVE Solar is a student-led engineering team dedicated to the design and development of a high-performance solar-powered vehicle. Based at the National University of Science and Technology POLITEHNICA Bucharest, our team brings together students from over 9 faculties and combines multiple disciplines, including mechanical, electrical, and aerospace engineering.</p>
                    <p>Founded in May 2025 by three students with a shared vision, the team has rapidly grown into a coordinated effort capable of delivering a fully functional solar race car. Our work is driven by innovation, hands-on engineering, and the ambition to contribute to the future of sustainable mobility.</p>
                </div>
                <div></div>
                <div className="what-are-we-doing-section">
                    <h1>WHAT ARE WE DOING?</h1>
                    <ImageCarousel images={imgSet2}/>
                    <p>We are developing a solar-powered vehicle from the ground up, covering every stage of the engineering process: from concept and design to manufacturing and testing. Our work integrates multiple technical domains, including aerodynamics, composite structures, electrical systems, energy management, and vehicle dynamics.</p>
                    <p>Beyond building the car itself, we are also developing the infrastructure, data systems, and operational strategies required to compete at an international level. This project allows us to apply theoretical knowledge in a real-world context while working under engineering constraints similar to those in industry.</p>
                </div>
                <div></div>
                <div className="season-goal-section">
                    <h1>THIS SEASON'S GOAL</h1>
                    <p>Our primary objective for this season is to complete the manufacturing and testing of our first solar car and successfully participate in our debut international competition in Belgium this September.</p>
                    <p>We aim not only to finish the race, but to validate our design, gather real-world performance data, and establish a strong foundation for future iterations of the vehicle. This season represents a critical transition from concept to reality.</p>
                </div>
                <div></div>
                <div className="how-competition-works-section">
                    <h1>HOW THE COMPETITION WORKS</h1>
                    <p>The competition is a 24-hour endurance race held on the Zolder Circuit in Belgium, where the team that completes the highest number of laps wins. However, performance is not judged solely by speed, the engineering quality behind the vehicle is also taken into consideration.</p>
                    <div className="stage-section">
                        <h2>STATIC SCRUTINEERING</h2>
                        <p>Before entering the race, each team must pass a series of technical inspections. These evaluate the safety, design, and engineering of the vehicle, ensuring it complies with all competition regulations. Teams must demonstrate that their car is reliable, efficient, and safe to operate.</p>
                    </div>
                    <div className="stage-section">
                        <h2>24-HOUR ENDURANCE RACE</h2>
                        <p>Once approved, teams compete in the endurance race, aiming to maximize the number of laps completed within 24 hours. Success depends not only on vehicle performance, but also on energy management, reliability, and race strategy under changing conditions.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUsPage;