import React from "react";
import "./privacyContent.css";
const privacyContent = () => {
  return (
    <div className="privacyDiv">
      <p className="privacyHeaderTitle">
        Privacy Policy
      </p>
      <p className="privacyTitle">
        We at Glitzitech are committed to protecting the privacy of our users.<br></br>
        This Privacy Policy outlines the types of information we collect, how we
        use it, and how we protect it.
      </p>
      <p className="privacySubTitle">Information we collect:</p>
      <p className="privacyPara">
        When you visit our sports betting platform news website, we may collect
        certain information about you. This may include your IP address, browser
        type, operating system, and other technical information. We may also
        collect personal information such as your name, email address, and other
        contact details if you choose to sign up for our newsletter or other
        services.
      </p>
      <p className="privacySubTitle">How we use your information:</p>
      <p className="privacyPara">
        We use your information to improve our services and to provide you with
        relevant content. We may use your personal information to send you
        newsletters or promotional materials. We will never share your personal
        information with third parties unless required by law.
      </p>
      <p className="privacySubTitle">Security of your information:</p>
      <p className="privacyPara">
        We take reasonable measures to protect the information we collect from
        our users. We use industry-standard encryption technologies to secure
        our website and any information transmitted to us.
      </p>
    </div>
  );
};

export default privacyContent;
