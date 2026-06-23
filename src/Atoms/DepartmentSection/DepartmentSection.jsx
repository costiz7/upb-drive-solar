import './DepartmentSection.css';

const DepartmentSection = ({ className, imgPath, imgAlt, title, children }) => {
    return (
        <>
        <div className={`department-wrapper ${className}`}>
          <div className="department-image">
            <img src={imgPath} alt={imgAlt} />
          </div>
          <div className="department-content">
            <h1>{title}</h1>
            <p className="text-content">
              {children}
            </p>
          </div>
        </div>
        </>
    );
}

export default DepartmentSection;