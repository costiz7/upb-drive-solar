import "./MeetTheTeamPage.css";
import DepartmentSection from "../Atoms/DepartmentSection/DepartmentSection";

const MeetTheTeamPage = () => {
    return (
        <>
            <div className="mtt-wrapper">
                <h1 className="mtt-header">MEET THE TEAM</h1>
                <DepartmentSection
                    imgPath="/images/low_quality/IMG_16.webp"
                    imgAlt="IMG_16 - Group Photo"
                    title="The UPB DRIVE Solar Team"
                    titleColor="var(--eco-neon)"
                    isInverse={false}
                >
                    Our team is composed of 38 students from various faculties and specializations, bringing together a diverse set of skills and perspectives. This multidisciplinary structure allows us to approach the project from both a strong technical and organizational standpoint.<br /><br /> The team is divided into two main branches: Technical and Operational, each playing a critical role in the development and success of the project.
                </DepartmentSection>

                <h1 className="mtt-header">TECHNICAL TEAM</h1>
                <DepartmentSection
                    imgPath="/images/low_quality/IMG_18.webp"
                    imgAlt="IMG_18 - Aerodynamics department"
                    title="The Aerodynamics department"
                    titleColor="var(--vibrant-rose)"
                    isInverse={true}
                >
                    The Aerodynamics department is responsible for optimizing the shape of the vehicle to minimize drag and maximize efficiency. Through simulations, CFD analysis, and design iterations, the team ensures that the car performs efficiently under real race conditions.                </DepartmentSection>

                <DepartmentSection
                    imgPath="/images/low_quality/IMG_19.webp"
                    imgAlt="IMG_19 - The Mechanical & Chassis department"
                    title="The Mechanical & Chassis department"
                    titleColor="var(--eco-neon)"
                    isInverse={false}
                >
                    This department focuses on the structural design and integrity of the vehicle. It is responsible for the chassis, suspension, and overall mechanical assembly, ensuring strength, safety, and weight optimization.
                </DepartmentSection>

                <DepartmentSection
                    imgPath="/images/low_quality/IMG_20.webp"
                    imgAlt="IMG_20 - The Low Voltage department"
                    title="The Low Voltage department"
                    titleColor="var(--vibrant-rose)"
                    isInverse={true}
                >
                    The Low Voltage team develops and manages all low-power electronic systems, including sensors, data acquisition, telemetry, and control systems. They ensure reliable communication and monitoring throughout the vehicle.
                </DepartmentSection>

                <DepartmentSection
                    imgPath="/images/low_quality/IMG_21.webp"
                    imgAlt="IMG_21 - The High Voltage department"
                    title="The High Voltage department"
                    titleColor="var(--eco-neon)"
                    isInverse={false}
                >
                    The High Voltage department handles the powertrain, including the battery pack, solar array integration, and energy distribution. Their main goal is to maximize energy efficiency while maintaining safety and system reliability.
                </DepartmentSection>

                <h1 className="mtt-header">OPERATIONAL TEAM</h1>
                <DepartmentSection
                    imgPath="/images/low_quality/IMG_23.webp"
                    imgAlt="IMG_23 - The Sponsorship department"
                    title="The Sponsorship department"
                    titleColor="var(--vibrant-rose)"
                    isInverse={true}
                >
                    The Sponsorship team builds and maintains relationships with partners and supporters. They are responsible for securing funding, managing collaborations, and ensuring mutual value between the team and its partners.
                </DepartmentSection>

                <DepartmentSection
                    imgPath="/images/low_quality/IMG_24.webp"
                    imgAlt="IMG_24 - The Logistics department"
                    title="The Logistics department"
                    titleColor="var(--eco-neon)"
                    isInverse={false}
                >
                    The Logistics department coordinates all operational aspects of the project, including materials procurement, transportation, event planning, and overall organization needed to keep the team running smoothly.
                </DepartmentSection>

                <DepartmentSection
                    imgPath="/images/low_quality/IMG_25.webp"
                    imgAlt="IMG_25 - The Social Media department"
                    title="The Social Media department"
                    titleColor="var(--vibrant-rose)"
                    isInverse={true}
                >
                    The Social Media team manages the team’s public image and communication. They create content, document the project’s progress, and engage with the community to increase visibility and support.
                </DepartmentSection>
            </div>
        </>
    );
}

export default MeetTheTeamPage;