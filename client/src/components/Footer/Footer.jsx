import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="/home">about us</a></li>
                            <li><a href="/home">our services</a></li>
                            <li><a href="/home">privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="/home">FAQ</a></li>
                            <li><a href="/home">shipping</a></li>
                            <li><a href="/home">returns</a></li>
                            <li><a href="/home">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="/home">guitars</a></li>
                            <li><a href="/home">pianos</a></li>
                            <li><a href="/home">harmonica</a></li>
                            <li><a href="/home">bass</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/"><img src="https://www.seekpng.com/png/full/265-2657650_facebook-icon-png-facebook.png" alt="img not found"/></a>
                            <a href="https://www.twitter.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z9eNuepcLQvNO13lEZB8kcXRgQI42Xd1Gw&usqp=CAU" alt="img not found"/></a>
                            <a href="https://www.linkedin.com/"><img src="https://aux.iconspalace.com/uploads/linkedin-round-icon-256.png" alt="img not found"/></a>
                            <a href="https://www.github.com/"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="img not found"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;