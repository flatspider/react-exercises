// List the items currently loaded into state
// and display them in a table format.

// Can I read directly from the state?
// First, add them to it.

function Record({ record }) {
  return (
    <div className="record-item">
      <label htmlFor={record.id}>
        <tr>
          <td>{record.firstName}</td>
          <td>{record.lastName}</td>
          <td>{record.address}</td>
          <td>{record.phoneNumber}</td>
        </tr>
      </label>
    </div>
  );
}

export { Record };
