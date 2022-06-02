import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>Abot this project</h1>
        <p>This is a React app to leave feedback for a product of service</p>
      </div>
      <p>Version: 1.0.0</p>

      <p>
        <Link to="/">Back to home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
