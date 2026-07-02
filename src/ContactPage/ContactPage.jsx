import './ContactPage.css';
import PhoneIcon from '../Icons/PhoneIcon';
import MailIcon from '../Icons/MailIcon';
import InstagramIcon from '../Icons/InstagramIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import TikTokIcon from '../Icons/TikTokIcon';
import MapIcon from '../Icons/MapIcon';

function ContactPage() {
    return (
        <>
            <div className="contact-page-wrapper">
                <div className="contact-left-section">
                    <div className="call-section">
                        <h2 className='contact-h2'>Contact us</h2>
                        <div className="phone">
                            <PhoneIcon className="c-icon"/>
                            <p><span>+40 754 231 791</span><span>Team Captain</span></p>
                        </div>
                        <div className="phone">
                            <PhoneIcon className="c-icon" />
                            <p><span>+40 747 594 293</span><span>Technical Lead</span></p>
                        </div>
                        <div className="phone">
                            <PhoneIcon className="c-icon" />
                            <p><span>+40 756 391 662</span><span>Operational Lead</span></p>
                        </div>
                        <div className="mail">
                            <MailIcon className="c-icon" />
                            <p>office@upbdrivesolar.com</p>
                        </div>
                    </div>
                    <div className="follow-section">
                        <h2 className='contact-h2'>Follow us</h2>
                        <div className="social" onClick={() => window.open('https://www.instagram.com/upbdrive_solar/', '_blank')}>
                            <InstagramIcon className="c-icon" />
                            <span>Instagram</span>
                        </div>
                        <div className="social" onClick={() => window.open('https://www.tiktok.com/@upbdrive_solar', '_blank')}>
                            <TikTokIcon className="c-icon" />
                            <span>TikTok</span>
                        </div>
                        <div className="social" onClick={() => window.open('https://www.linkedin.com/company/upbdrive-solar/', '_blank')}>
                            <LinkedinIcon className="c-icon" />
                            <span>LinkedIn</span>
                        </div>
                    </div>
                </div>
                <div className="contact-right-section">
                    <h2 className='contact-h2'>Where to find us</h2>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1424.3193230704262!2d26.048455500932544!3d44.4405740914491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201ebafcdf7a3%3A0xbfae72d5a5a35e8b!2sFaculty%20of%20Mechanical%20Engineering%20and%20Mechatronics!5e0!3m2!1sen!2sro!4v1783006696787!5m2!1sen!2sro" 
                        className='map' 
                        style={{ border: '5px solid var(--eco-neon)', borderRadius: '8px' }}
                        loading="lazy" 
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Google Maps Location"
                    ></iframe>
                    <div className="address">
                        <p>Bucharest, Splaiul Independenței nr. 313, Facultatea de Inginerie Mecanică și Mecatronică, Departamentul Termotehnică, Motoare, Echipamente Termice și Frigorifice, Corp CG, Sala CG-125, Sector 6 cod postal 060042</p>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default ContactPage;