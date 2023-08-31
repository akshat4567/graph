import React from "react";
import "./Footer.css"
const Footer = () => {
    return (
        <section className="fff" id="footer">
            <div className="ff0">
                <div className="ff1">
                    <div className="ff2">
                        <p>Newslletter</p>
                        <p>Get news about articles and updates in your inbox.</p>
                    </div>
                    <div className="ff3">
                        <form>
                            <input type="text" name="username" placeholder="Name" className="op" />
                            <input type="email" name="Email" placeholder="Email" className="op" />
                            <textarea name="message" placeholder="Message" className="op" />
                            <button className="opo">Sent</button>
                        </form>
                    </div>
                </div>
                <div className="ff4">
                    <h1>GET</h1>
                    <h1>IN TOUCH</h1>
                </div>
            </div>
            <div className="fff0">
                <p>Copyrights 2022 All Rights Reserved</p>
            </div>
        </section>
    );
}
export default Footer;