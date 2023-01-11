import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not_found">
      <div className="not_found_content">
        <p>
          404
          <br />
          Page not Found
          <br />
        </p>
        <Link to="/">Go to Homepage</Link>
      </div>
    </div>
  );
}

export default NotFound;
