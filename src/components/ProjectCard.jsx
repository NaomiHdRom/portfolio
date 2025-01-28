import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </a>
      </div>
    </Col>
  );
};
