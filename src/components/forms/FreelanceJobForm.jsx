import React from "react";

function FreelanceJobForm() {
  return (
    <div className="freelance-job-form">
      <h2>Freelance Job Form</h2>
      {/* Add form fields for freelance job here */}
      <label>
        Job Title:
        <input type="text" name="jobTitle" />
      </label>
      <label>
        Description:
        <textarea name="description" />
      </label>
      {/* Add more form fields as needed */}
      <button>Post Job</button>
    </div>
  );
}

export default FreelanceJobForm;
