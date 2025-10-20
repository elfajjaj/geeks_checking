import React from "react";

function Contact() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h3 className="text-center mb-4 fw-bold">Contact us</h3>

        <div className="row">
          <div className="col-md-6">
            <p>Contact us and we will get back to you within 24 hours.</p>
            <p>
              <i className="fa fa-map-marker"></i> Company Name
            </p>
            <p>
              <i className="fa fa-phone"></i> +256 778 800 900
            </p>
            <p>
              <i className="fa fa-envelope"></i> company@gmail.com
            </p>
          </div>

          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Contact
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email address"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="comment"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger w-100">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
