// List the items currently loaded into state
// and display them in a table format.

// Can I read directly from the state?
// First, add them to it.

function Record({ record }) {
  return (
    <div className="record-item">
      <label htmlFor={record.id}>
        {record.firstName}
        {record.lastName}
        {record.address}
        {record.phoneNumber}
      </label>
    </div>
  );
}

export { Record };
