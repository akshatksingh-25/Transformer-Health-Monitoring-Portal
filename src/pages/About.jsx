import Navbar from "../components/Navbar";
import React from "react";

const About = () => {
  return (
    <>
    <Navbar />
    <div style={styles.container}>

      <section style={styles.section}>
        <h2 style={styles.subheading}>🔷 What is this Project?</h2>
        <p style={styles.text}>
          The Transformer Health Monitoring Portal is a web application developed to track and analyse the health parameters of electrical transformers, including temperature, oil level, and load. It allows engineers to enter data, view it in graphical formats, and receive alerts when safety thresholds are exceeded. This enhances operational efficiency, transformer life, and proactive maintenance decisions in the power sector.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>🔷 Advantages</h2>
        <ul style={styles.list}>
          <li>Centralized digital platform for transformer health data management.</li>
          <li>Real-time monitoring and alerting for critical parameters.</li>
          <li>Improved transformer maintenance planning and reduced unexpected failures.</li>
          <li>Visual dashboard for quick analysis and historical trends.</li>
          <li>Scalable for integration with multiple transformers and locations.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>🔷 Future Scope</h2>
        <ul style={styles.list}>
          <li>Integration with IoT sensors for real-time automatic data entry.</li>
          <li>Role-based access system for admins, engineers, and technicians.</li>
          <li>Predictive analytics using machine learning for failure prediction.</li>
          <li>Exporting reports in PDF or Excel formats for documentation.</li>
          <li>Mobile application development for field engineers.</li>
          <li>Integration with SCADA systems for centralized grid management.</li>
        </ul>
      </section>

      <p style={styles.credit}>
        Developed by Akshat Singh as part of the Power Grid Corporation internship project (2025).
      </p>
    </div></>
  );
};

const styles = {
  container: {
    padding: "40px",
    background: "linear-gradient(to right, #0c3c60, #145374)",
    minHeight: "100vh",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  section: {
    marginBottom: "30px",
  },
  subheading: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.8",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "16px",
    lineHeight: "1.8",
  },
  credit: {
    marginTop: "40px",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: "15px",
  },
};

export default About;
