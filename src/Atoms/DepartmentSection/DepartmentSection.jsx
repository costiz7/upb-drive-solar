import './DepartmentSection.css';

const DepartmentSection = ({ className, imgPath, imgAlt, title, titleColor, isInverse, children }) => {
    return (
        <>
        <div className={`department-wrapper ${className} ${isInverse ? 'inverse' : ''}`}>
          <div className="department-image">
            <img src={imgPath} alt={imgAlt} />
          </div>
          <div className="department-content">
            <h1 style={ { color: titleColor } }>{title}</h1>
            <p className="text-content">
              {children}
            </p>
          </div>
        </div>
        </>
    );
}

export default DepartmentSection;