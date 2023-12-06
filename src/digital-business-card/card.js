
import './card.css';
export default function Card(){
    return(
        <div className="card">
        <div className="card-leave">
            <div className="profile">
                <img src='../imgs/girl.jpg' alt="profile"></img>
            </div>
            <div className="info">
                <h3 className="name">Laura Smith</h3>
                <span className="job">Frontend Developer</span>
                <a href="" className="website">laurasmith.website</a>

            </div>
            
            <div className="contact">
                <button className="email-btn">
                <i class="fa-solid fa-envelope"></i>
                    <span>Email</span>
        
                    </button>
                <button className="linkdln-btn">
                <i class="fa-brands fa-linkedin"></i>
                   <span> Linkdln</span>
                    </button>
            </div>
            <div className="details">
                <div className="about">
                    <h4 className="about-head">About</h4>
                    <p className="about-paragraph">
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                </div>
                <div className="interests">
                    <h4 className="interest-head">interests</h4>
                    <p className="interest-paragraph">
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.                    </p>
                </div>
            </div>
            <div className="social-media">
                
                <i className="fa-brands fa-github "></i>
                <i className="fa-brands fa-twitter "></i>
                <i className="fa-brands fa-facebook "></i>
                <i className="fa-brands fa-instagram "></i>
            </div>
        </div>
    </div>
    )
}