import { PhoneInputForm } from "./PhoneInputForm.js";
import { Record } from "./Record.js";
import { useState } from "react";

const INITIAL_RECORDS = [
  {
    firstName: "Conor",
    lastName: "McManamon",
    address: "123 Anywhere St.",
    phoneNumber: "443-534-9273",
  },
  {
    firstName: "Jack",
    lastName: "Pixel",
    address: "123 Anywhere St.",
    phoneNumber: "301-534-9273",
  },
  {
    firstName: "Tim",
    lastName: "Johnson",
    address: "123 Anywhere St.",
    phoneNumber: "888-534-9273",
  },
];

function FullForm() {
  const [infoRecords, setInfoRecords] = useState(INITIAL_RECORDS); // Sets records array to INITIAL RECORDS.

  const addNewRecord = (newPerson) => {
    // This spreads the phone array and adds the new record to the end.
    setInfoRecords([...infoRecords, newPerson]);
  };

  // How do I reach into the state and display the records?

  const recordsHTML = infoRecords.map((record, index) => (
    <Record key={index} firstName={record.firstName} record={record} />
  ));

  return (
    <div>
      <h1>Address List</h1>
      <PhoneInputForm addNewRecord={addNewRecord} />
      <table className="records-list table mt-2 w-75 mx-auto">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>{recordsHTML}</tbody>
      </table>
    </div>
  );
}

export { FullForm };
