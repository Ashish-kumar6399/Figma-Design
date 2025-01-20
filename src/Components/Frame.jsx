import React, { useState } from "react";
import "../Components/Frame.css";

const Frame = ({ onSearch }) => {
  const [clientName, setClientName] = useState("");
  const [domain, setDomain] = useState("");
  const [errors, setErrors] = useState({ clientName: "", domain: "" });

  const handleSearchClick = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { clientName: "", domain: "" };

    // Validate Client Name
    if (!clientName.trim()) {
      newErrors.clientName = "Client Name is required";
      isValid = false;
    }

    // Validate Domain
    if (!domain.trim()) {
      newErrors.domain = "Domain is required";
      isValid = false;
    }

    setErrors(newErrors);

    // If all fields are valid, trigger the search
    if (isValid) {
      onSearch(clientName, domain);
    }
  };

  const handleInputChange = (field, value) => {
    if (field === "clientName") {
      setClientName(value);
      if (value.trim()) setErrors((prev) => ({ ...prev, clientName: "" }));
    }

    if (field === "domain") {
      setDomain(value);
      if (value.trim()) setErrors((prev) => ({ ...prev, domain: "" }));
    }

    // If a field is cleared, reset the DNS data
    if (!value) {
      onSearch("", ""); // Clear DNS records when fields are empty
    }
  };

  return (
    <div className="pt-lg-5 p-lg-0 ps-lg-5 pe-lg-5" style={{ backgroundColor: "#fafbfc" }}>
      <div className="card p-4 border-bottom-0 rounded-0 rounded-top border-0">
        <h5 className="mb-3 fw-bold">DNS Records</h5>
        <p className="text-muted">
          Discover all DNS Records for a domain with ease.
          <br />
          From A to TXT, view various record types effortlessly.
        </p>
        <form>
          <div className="row">
            {/* Client Name Field */}
            <div className="col-md-4 mb-3">
              <label htmlFor="clientName" className="form-label">
                Client Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="clientName"
                className="form-control"
                placeholder="Enter client name"
                value={clientName}
                onChange={(e) => handleInputChange("clientName", e.target.value)}
                required
              />
              {errors.clientName && <p className="text-danger mt-1">{errors.clientName}</p>}
            </div>

            {/* Domain Field */}
            <div className="col-md-4 mb-3">
              <label htmlFor="domain" className="form-label">
                Choose Domain <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="domain"
                className="form-control"
                placeholder="Enter domain"
                value={domain}
                onChange={(e) => handleInputChange("domain", e.target.value)}
                required
              />
              {errors.domain && <p className="text-danger mt-1">{errors.domain}</p>}
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="col-md-4 mb-3 text-center text-white rounded h-100 p-1 search_btn"
              style={{ marginTop: "2.1rem" }}
              onClick={handleSearchClick}
            >
              Search DNS Records
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Frame;
