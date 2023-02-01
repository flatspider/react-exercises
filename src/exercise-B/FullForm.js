import { PhoneInputForm } from "./PhoneInputForm.js";
import { Record } from "./Record.js";
import { useState } from "react";

const INITIAL_RECORDS = [
  {
    firstName: "Conor",
    lastName: "Pixel",
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
    lastName: "Pixel",
    address: "123 Anywhere St.",
    phoneNumber: "888-534-9273",
  },
];

function FullForm() {
  const [infoRecords, setInfoRecords] = useState(INITIAL_RECORDS); // Sets records array to empty.

  const addNewRecord = (newPerson) => {
    // This spreads the phone array and adds the new record to the end.
    setInfoRecords([...infoRecords, newPerson]);
  };

  // How do I reach into the state and display the records?

  const recordsHTML = infoRecords.map((record) => (
    <Record firstName={record.firstName} record={record} />
  ));

  return (
    <div>
      <h1>Address List</h1>
      <PhoneInputForm addNewRecord={addNewRecord} />
      <div className="records-list">{recordsHTML}</div>
    </div>
  );
}

export { FullForm };
