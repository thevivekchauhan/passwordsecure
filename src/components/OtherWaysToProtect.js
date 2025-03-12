import React from "react";
import "../styles/Cards.css";

const OtherWaysToProtect = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h2>Other Ways to Protect Yourself Online</h2>
        <p>
          In addition to using strong passwords, there are several other practices you should follow to enhance your online security and protect your personal information:
        </p>
        <ul>
          <li>
            <strong>Enable Two-Factor Authentication (2FA):</strong> Adding an extra layer of protection ensures that even if your password is compromised, unauthorized users cannot access your account.
          </li>
          <li>
            <strong>Avoid Clicking on Suspicious Links:</strong> Be cautious with emails or messages that ask you to click on a link. They may be phishing attempts to steal your information.
          </li>
          <li>
            <strong>Keep Your Software and Apps Updated:</strong> Regular updates often include security patches to protect you from the latest threats. Enable automatic updates where possible.
          </li>
          <li>
            <strong>Use Secure Wi-Fi Connections:</strong> Avoid public Wi-Fi networks for sensitive activities, such as banking. If necessary, use a VPN (Virtual Private Network) to encrypt your connection.
          </li>
        </ul>
        <p>
          By following these additional tips, you can significantly improve your online safety and reduce the risk of cyber threats.
        </p>
      </div>
    </div>
  );
};

export default OtherWaysToProtect;
