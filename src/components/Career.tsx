import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>07/2022–Present</h3>
            </div>
            <p>
              Reduced compute and storage costs by ~$487K annually by optimizing S3 storage patterns and Glue/Athena query execution. Engineered 150+ production-grade ETL/ELT pipelines processing hundreds of GBs daily. Designed and deployed Delta Lake-based lakehouse architecture providing ACID guarantees. Developed near real-time event-driven pipelines using EventBridge, Lambda, DynamoDB Streams, and Snowflake Snowpipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
