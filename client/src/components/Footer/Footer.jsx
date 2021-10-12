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
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">guitars</a></li>
                            <li><a href="#">pianos</a></li>
                            <li><a href="#">harmonica</a></li>
                            <li><a href="#">bass</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/"><img src="https://www.seekpng.com/png/full/265-2657650_facebook-icon-png-facebook.png" /></a>
                            <a href="https://www.twitter.com/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z9eNuepcLQvNO13lEZB8kcXRgQI42Xd1Gw&usqp=CAU" /></a>
                            <a href="https://www.linkedin.com/"><img src="https://aux.iconspalace.com/uploads/linkedin-round-icon-256.png" /></a>
                            <a href="https://www.github.com/"><img src="data:image/png;base64,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" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;