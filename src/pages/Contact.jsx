import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">
      {/* <h1 className="contact-title">Hours</h1> */}
      <div className="hours">
        <p>Monday: Closed</p>
        <p>Tuesday: 3 PM - 10 PM</p>
        <p>Wednesday: 3 PM - 10 PM</p>
        <p>Thursday: 3 PM - 10 PM</p>
        <p>Friday: 3 PM - 11 PM</p>
        <p>Saturday: 3 PM - 11 PM</p>
        <p>Sunday: 3 PM - 11 PM</p>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13401 2 5 5.13401 5 9C5 11.8618 7.1687 15.6743 10.4874 19.6582C11.3281 20.691 12.6719 20.691 13.5126 19.6582C16.8313 15.6743 19 11.8618 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5C14 10.6046 13.1046 11.5 12 11.5Z" />
          </svg>
          <p>123 Main Street, Anytown, USA</p>
        </div>
        <div className="contact-item">
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.62 10.79C7.06 13.12 8.88 14.94 11.21 15.38L13.02 17.19C13.03 17.18 13.03 17.18 13.03 17.18C13.03 17.19 13.03 17.19 13.02 17.19L14.82 19.01C15.71 19.89 17.2 19.89 18.08 19.01L18.82 18.27C19.7 17.39 19.7 15.9 18.82 15.02L17.02 13.22C16.17 12.37 14.85 12.37 14 13.22L12.19 15.02C12.16 15.06 12.13 15.09 12.09 15.12C10.5 15.41 8.86 14.72 7.81 13.66C6.75 12.61 6.07 10.96 6.36 9.38C6.39 9.34 6.42 9.31 6.46 9.28L8.26 7.47C9.11 6.62 9.11 5.3 8.26 4.45L6.46 2.65C5.58 1.77 4.09 1.77 3.21 2.65L2.47 3.39C1.59 4.27 1.59 5.76 2.47 6.64L4.28 8.45C4.78 8.94 5.44 9.22 6.11 9.22C6.39 9.22 6.66 9.17 6.92 9.06L8.72 10.86C8.95 11.09 8.95 11.47 8.72 11.7L6.62 10.79Z" />
          </svg>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
