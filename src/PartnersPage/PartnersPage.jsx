import './PartnersPage.css';
import PartnerLogo from '../IndividualComponents/PartnerLogo/PartnerLogo.jsx';

function PartnersPage() {
    return (
        <>
            <div className="partners-page-wrapper">
                <h2>We are grateful for the trust and support of our partners</h2>
                <p>Their contribution is essential in transforming our project from concept to reality and enabling us to compete at an international level.</p>
                <div className="partners-section main-partners">
                    <h1>MAIN PARTNERS</h1>
                    <div className="partners-logos">
                        <PartnerLogo imgSrc='/logos/POLITEHNICA.webp'/>
                        <PartnerLogo imgSrc='/logos/FIMM.webp'/>
                        <PartnerLogo imgSrc='/logos/elsa-industry.webp'/>
                        <PartnerLogo imgSrc='/logos/BCR.webp'/>
                        <PartnerLogo imgSrc='/logos/Imperial_Metal_SRL_logo.webp'/>
                        <PartnerLogo imgSrc='/logos/profi.webp'/>
                    </div>
                </div>
                <div className="partners-section premium-partners">
                    <h1>PREMIUM PARTNERS</h1>
                    <div className="partners-logos">
                        <PartnerLogo imgSrc='/logos/GRIMATEC_logo.webp'/>
                        <PartnerLogo imgSrc='/logos/helukabel.webp'/>
                        <PartnerLogo imgSrc='/logos/sass_technologies.webp'/>
                    </div>
                </div>
                <div className="partners-section partner">
                    <h1>PARTNER</h1>
                    <div className="partners-logos">
                        <PartnerLogo imgSrc='/logos/noark.webp'/>
                        <PartnerLogo imgSrc='/logos/eastern_biologix.webp'/>
                        <PartnerLogo imgSrc='/logos/FRIGO_logo.webp'/>
                        <PartnerLogo imgSrc='/logos/mafcom.webp'/>
                        <PartnerLogo imgSrc='/logos/norelem.webp'/>
                        <PartnerLogo imgSrc='/logos/alro.webp'/>
                        <PartnerLogo imgSrc='/logos/synevo.webp'/>
                        <PartnerLogo imgSrc='/logos/tp_link.webp'/>
                        <PartnerLogo imgSrc='/logos/holver_logo.webp'/>
                        <PartnerLogo imgSrc='/logos/ANSYS_logo.webp'/>
                        <PartnerLogo imgSrc='/logos/Dassault_systems_logo.webp'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PartnersPage;