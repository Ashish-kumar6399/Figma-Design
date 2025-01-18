import React from "react";
import "../Components/Frame.css"; 

const Frame = () => {
  return (
    <div className="  pt-lg-5 p-lg-0 ps-lg-5 pe-lg-5   " style={{ backgroundColor: "#fafbfc" }}>
      <div className="card  p-4 border-bottom-0 rounded-0 rounded-top border-0 ">
        <h5 className="mb-3 fw-bold">DNS Records</h5>
        <p className="text-muted">
          Discover all DNS Records for a domain with ease.
          <br />
          From A to TXT, view various record types effortlessly.
        </p>
        <form>
          <div className="row">
            <div className="col-md-4 mb-3">
              <label htmlFor="clientName" className="form-label">
                Client Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="clientName"
                className="form-control"
                placeholder="Enter client name"
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="domain" className="form-label">
                Choose Domain <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter choose domain"
                required
              />
            </div>
            <button className="col-md-4 mb-3 text-center text-white rounded  h-100 p-2 search_btn ">
              Search DNS Records
            </button>
          </div>
        </form>
      </div>

      
    </div>
  );
};

export default Frame;
