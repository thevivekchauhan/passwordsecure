import React from "react";
import "../styles/Cards.css";

const Tips = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>Tips for Better Password Protection</h2>
        <ul>
          <li>
            <strong>Use Long Passwords:</strong> The longer the password, the harder it is to crack. Aim for at least 12 characters.
          </li>
          <li>
            <strong>Use Unique Passwords:</strong> Avoid reusing passwords across different accounts. Use a password manager to keep track of them.
          </li>
          <li>
            <strong>Enable Two-Factor Authentication (2FA):</strong> Add an extra layer of security by requiring a second form of identification.
          </li>
          <li>
            <strong>Use Complex Passwords:</strong> Mix uppercase and lowercase letters, numbers, and special characters to make your password harder to guess.
          </li>
          <li>
            <strong>Avoid Personal Information:</strong> Don't use easily guessable information like your name, birthday, or pet's name.
          </li>
          <li>
            <strong>Regularly Update Your Passwords:</strong> Change your passwords periodically, especially for important accounts.
          </li>
        </ul>
        <p>
          Following these tips can significantly improve the security of your accounts and personal information. 
          Consider using a password manager to securely store and generate complex passwords.
        </p>
      </div>
    </div>
  );
};

export default Tips;
