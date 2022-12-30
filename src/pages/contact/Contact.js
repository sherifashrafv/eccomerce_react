import React from "react";
import "./Contact.scss";
export default function Contact_Us() {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            height={400}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=mansoura&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            style={{ width: "100%" }}
          />
          <br />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".mapouter{position:relative;text-align:right;height:500px;width:100%;}",
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}",
            }}
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-6">
            <div className="page-heading ">
              <h3
                style={{ fontSize: "24px" }}
                className="d-flex flex-column gap-3 align-items-start p-0 m-0 mb-3"
              >
                Get in Touch
                <small
                  style={{ color: "#888", fontWeight: "300", fontSize: "14px" }}
                >
                  Write us a Letter
                </small>
              </h3>{" "}
            </div>
            <div className="contact-form">
              <div className="row">
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      className="form-control required"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      className="form-control required"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mb-3">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail *"
                      className="form-control required"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message *"
                  className="form-control required"
                  rows={5}
                  style={{ width: "100%", height: 141 }}
                  defaultValue={""}
                />
              </div>
              <div className="d-flex justify-content-end my-3">
                <button type="submit" className="btn btn-primary send-message">
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-7 col-sm-6 contact-information">
            <div className="page-heading">
              <div class="col">
                <h3
                  style={{ fontSize: "24px", fontWeight: "300", color: "#222" }}
                  className="d-flex flex-column"
                >
                  Our Address
                  <small style={{ fontSize: "14px" }}>
                    Where are we located
                  </small>
                </h3>
              </div>
            </div>
            <div>
              <p className="m-0">
                2954 Golden Estates, <br />
                <p className="m-0">Guys Store, Virginia,</p>
                <br />
                <p className="m-0">24318-5414,</p>
                <br />
                <p className="m-0">United states</p>
                <br />
                <p className="m-0">(571) 400-1255</p>
                <br />
                <p className="m-0">info@aurumtheme.com</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
