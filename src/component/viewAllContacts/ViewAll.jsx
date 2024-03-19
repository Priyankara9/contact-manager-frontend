import React from "react";
import "./ViewAll.css";
function ViewAll({ contacts }) {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col">
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default ViewAll;
