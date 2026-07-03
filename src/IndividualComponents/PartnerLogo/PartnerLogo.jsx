import './PartnerLogo.css';
import { useNavigate } from 'react-router-dom';

function PartnerLogo({ imgSrc='', urlPath='', imgAlt='' }) {
    const navigate = useNavigate();

    return (
        <>
            <div onClick={() => navigate(urlPath)} className="partner-logo-image-wrapper">
                <img src={imgSrc} alt={imgAlt} />
            </div>
        </>
    );
}

export default PartnerLogo;