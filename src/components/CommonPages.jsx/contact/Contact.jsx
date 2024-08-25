import { useState } from "react";
import Footer from "../footer/Footer"
import "./Contact.css"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const submit = (e) => {
        e.preventDefault();
    }

    if (submitted) {
        return <p className="successMessage">We've received your message, thank you for contacting us!</p>;
    }
    
    return (
        <div>
            <div className="formContainer">
                <h2>Contact</h2>
                <div className="formHero">
                    <form onSubmit={submit}>
                        <div className="formGroup">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                onChange={(e) => setName(e.target.value)}
                                id="name" name="name" required 
                            />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                onChange={(e) => setEmail(e.target.value)}
                                id="email" name="email" required />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                className="textArea" 
                                onChange={(e) => setMessage(e.target.value)}
                                id="message" name="message" required>
                            </textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact