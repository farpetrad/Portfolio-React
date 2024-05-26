import React, { useState} from 'react';
import emailjs from "@emailjs/browser";
import './ContactContainer.scss';

export const ContactContainer: React.FC = (): JSX.Element => {
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [errorMsg, setErrorMessage] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setSuccess(false);
        setError(false);
        setErrorMessage("");

        if(email.length > 0 && name.length > 0 && message.length > 0) {
            emailjs.send("service_6u53oyk", "template_1afiqxa", {
                to_name: "Neal",
                from_name: name,
                from_email: email,
                message: message,
            }).then((response) => {
                setSuccess(true);
            },(error) => {
                setSuccess(false);
                setError(true);
                setErrorMessage(JSON.stringify(error))
            });
        }
        
    }
    return <div className="container-fluid" id="contact">
        <div className="row contact-me-container">
            <div className="col-10 offset-1 offset-xxl-2 col-xxl-4 text-start">
                <div className="mb-3">
                    <h3>CONTACT&nbsp;ME</h3>
                </div>
                <form noValidate onSubmit={e => handleSubmit(e)}>
                    <div className='mb-3'>
                        <label htmlFor="name-input" className="form-label">Name:</label>
                        <input
                            id="name-input"
                            value={name}
                            type="text"
                            className="form-control"
                            required
                            tabIndex={0}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email-input" className="form-label">Email Address:</label>
                        <input
                            id="email-input"
                            value={email}
                            type="email"
                            className="form-control"
                            required
                            tabIndex={0}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="message-input" className="form-label">Message:</label>
                        <textarea
                            id="message-input"
                            value={message}
                            className="form-control"
                            required
                            tabIndex={0}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                    <button
                        className="form-control btn btn-primary"
                        type="submit"
                        id="sendBtn"
                        tabIndex={0}
                        >
                        Send Message
                        </button>
                    </div>
                </form>
                {success && <div className="mb-3">Message successfully sent.</div>}
                {error && <div className="mb-3">Message failed to send. { errorMsg }</div>}
            </div>
            <div className="col-10 offset-1 offset-xxl-0 col-xxl-5 p-0 mb-5">
                <div className="code-container row mx-auto text-start mb-3">
                <span
            ><span className="number">1.</span>&emsp;const&nbsp;
            <span className="highlight">button</span> =&nbsp;
            <span className="highlight">document.querySelector</span>(<span
              className="text"
              >"#sendBtn"</span
            >);</span
          >
          <span><span className="number">2.</span></span>
          <span
            ><span className="number">3.</span>&emsp;const&nbsp;
            <span className="highlight">message</span> = 	&#123;</span
          >
          <span
            ><span className="number">4.</span>&emsp;&emsp;<span className="highlight"
              >name</span
            >: <span className="text">"Jon Doe"</span></span
          >
          <span
            ><span className="number">5.</span>&emsp;&emsp;<span className="highlight"
              >email</span
            >: <span className="text">""</span></span
          >
          <span
            ><span className="number">6.</span>&emsp;&emsp;<span className="highlight"
              >message</span
            >: <span className="text">""</span></span
          >
          <span
            ><span className="number">7.</span>&emsp;&emsp;<span className="highlight"
              >date</span
            >: <span className="text">"Thu 21 Apr"</span></span
          >
          <span><span className="number">8.</span>&emsp;&#125;;</span>
          <span><span className="number">9.</span></span>
          <span
            ><span className="number">10.</span>&emsp;<span className="highlight"
              >button.addEventListener</span
            >(<span className="text">"click"</span>, () =&gt; 	&#123; </span>
          <span
            ><span className="number">11.</span>&emsp;&emsp;<span className="highlight"
              >form.send(message)</span
            >;</span
          >
          <span><span className="number">12.</span>&emsp;&#125;);</span>
                </div>
            </div>
        </div>
    </div>;
}
