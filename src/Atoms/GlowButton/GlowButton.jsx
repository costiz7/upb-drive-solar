import "./GlowButton.css";

const GlowButton = ({ children, className='', handleClick }) => {
    return (
        <button className={`glow-btn ${className ? className : ''}`} onClick={handleClick}>
            {children}
        </button>
    );
}

export default GlowButton;