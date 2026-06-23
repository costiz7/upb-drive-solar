import "./MeetTheTeamPage.css";
import DepartmentSection from "../Atoms/DepartmentSection/DepartmentSection";

const MeetTheTeamPage = () => {
    return (
        <>
            <div className="mtt-wrapper">
                <div className="upb-team-wrapper">
                    <h1>The UPB DRIVE Solar Team</h1>
                    <div className="img-wrapper">
                        <img src="/images/IMG_16.JPG" alt="The UPb DRIVE Solar Team Photo" />
                    </div>
                    <div className="paragraphs">
                        <p>Our team is composed of 38 students from various faculties and specializations, bringing together a diverse set of skills and perspectives. This multidisciplinary structure allows us to approach the project from both a strong technical and organizational standpoint.</p>
                        <p>The team is divided into two main branches: <span>Technical</span> and <span>Operational</span>, each playing a critical role in the development and success of the project.</p>
                    </div>
                </div>
                <DepartmentSection imgPath="/images/IMG_16.JPG" title="The UPB DRIVE Solar Team">Our team is composed of 38 students from various faculties and specializations, bringing together a diverse set of skills and perspectives. This multidisciplinary structure allows us to approach the project from both a strong technical and organizational standpoint.</DepartmentSection>

            </div>
        </>
    );
}

export default MeetTheTeamPage;