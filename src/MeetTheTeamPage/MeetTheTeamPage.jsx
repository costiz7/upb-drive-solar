import "./MeetTheTeamPage.css";
import DepartmentSection from "../Atoms/DepartmentSection/DepartmentSection";

const MeetTheTeamPage = () => {
    return (
        <>
            <div className="mtt-wrapper">
                <DepartmentSection
                    imgPath="/images/IMG_16.webp"
                    title="The UPB DRIVE Solar Team"
                    titleColor="var(--vibrant-rose)"
                    isInverse={false}
                >
                    Our team is composed of 38 students from various faculties and specializations, bringing together a diverse set of skills and perspectives. This multidisciplinary structure allows us to approach the project from both a strong technical and organizational standpoint.<br /><br /> The team is divided into two main branches: Technical and Operational, each playing a critical role in the development and success of the project.
                </DepartmentSection>

            </div>
        </>
    );
}

export default MeetTheTeamPage;