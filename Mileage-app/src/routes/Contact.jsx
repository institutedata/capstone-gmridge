import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import './ContactStyles.css';

const ContactPage = () => {

  const [email, setEmail] = React.useState('');
  const [query, setQuery] = React.useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Email: ${email}, Query: ${query}`);

    setEmail('');
    setQuery('');
  };

  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://static.vecteezy.com/system/resources/thumbnails/003/127/954/small/abstract-template-blue-background-white-squares-free-vector.jpg"
        title="Contact Us"
      />
      <div className="contact-container">
        <h1>Contact Us</h1>
        
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Query:</label>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
<br></br><br></br><br></br>
      
        <div className="faq-section">
          <h2>FAQ</h2>
          <div>
            <h3>How do I download the Mileage Tracker App?</h3>
            <p>The app is available on the Google Play Store and the Apple Apps Store. You can find the link and instructions for download here.</p>
          </div><br></br><br></br>
          <div>
            <h3>What format does the Mileage Tracker App export my data in?</h3>
            <p>Your mileage reports can be exported in PDF, CSV and XLS.</p>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
