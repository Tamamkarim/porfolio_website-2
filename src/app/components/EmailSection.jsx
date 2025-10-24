"use client";
import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const EmailSection = () => {
  const { isDarkMode } = useTheme();
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className={`py-24 ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-b from-blue-100 to-white'}`}
    >
      <div className="container mx-auto px-4">
        {/* Contact Me Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
            Contact Me
          </h2>
        </div>
        
        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          {/* Email Button */}
          <a 
            href="mailto:tamamkarim88@gmail.com"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px] justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="font-semibold">Email</span>
          </a>

          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/t-karim-a20226301/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px] justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">LinkedIn</span>
          </a>
          
          {/* GitHub Button */}
          <a 
            href="https://github.com/Tamamkarim"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-[200px] justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">GitHub</span>
          </a>
        </div>
        
        {/* Optional: Contact form can be added below if needed */}
        <div className="mt-16 max-w-2xl mx-auto">
          {emailSubmitted ? (
            <div className="text-center">
              <p className="text-green-500 text-lg font-semibold">
                Thank you for reaching out! I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                Feel free to reach out through any of the platforms above, or send me an email directly!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
