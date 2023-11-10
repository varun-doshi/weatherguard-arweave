import React from "react";

import PropTypes from "prop-types";

import "./feature-card.css";

const FeatureCard = (props) => {
  return (
    <div className="feature-card-feature-card">
      <img src={props.Image} className="feature-card-icon" alt="" />
      <div className="feature-card-container">
        <h3 className="feature-card-text heading3">{props.Heading}</h3>
        <span className="feature-card-text1">{props.SubHeading}</span>
      </div>
    </div>
  );
};

FeatureCard.defaultProps = {
  Heading: "",
  SubHeading: "",
  Image: "",
};

FeatureCard.propTypes = {
  Heading: PropTypes.string,
  SubHeading: PropTypes.string,
  Image: PropTypes.string,
};

export default FeatureCard;
