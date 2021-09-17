import "./Admin.css";

function Admin() {
  return (
    <div id="Admin-Main" className="admin">
      <title>FCDG Administration</title>
      <div className="form">
        <label>First Name: </label>
        <input type="text" name="FirstName" />
        <label>Last Name: </label>
        <input type="text" name="LastName" />
        <label>Username: </label>
        <input type="text" name="Username" />
        <label>Email: </label>
        <input type="text" name="Email" />
        <label>Password: </label>
        <input type="text" name="Password" />

        <button>Submit</button>
      </div>
    </div>
  );
}

export default Admin;
