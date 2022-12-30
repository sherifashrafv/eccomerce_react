import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import Accordion from "../../untils/accord";
import { accordionData } from "../../untils/data";
export default function Faq() {
  return (
    <div className="container page-heading-container">
      <div className="page-heading columns-2">
        <div className="col">
          <h1>
            F.A.Q.<small>Frequently Asked Questions</small>
          </h1>{" "}
        </div>
        <div className="col">
          <div className="right-aligned">
            <div className="breadcrumb">
              <span property="itemListElement" typeof="ListItem">
                <Link to="/" className="bread-crumb_link">
                  <span property="name">Aurum</span>
                </Link>
              </span>
              &gt; <span className="post post-page current-item">F.A.Q.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}
