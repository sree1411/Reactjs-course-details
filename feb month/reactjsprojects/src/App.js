import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [addusers, setAddUsers] = useState([]);
  const fnameRef = useRef();
  const lnameRef = useRef();
  const [user, setUser] = useState({
    firstName: "",
    lastName: ""
  });

  function handleInput(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.name === "firstName" && e.key === "Enter") {
      lnameRef.current.focus();
    } else if (e.target.name === "lastName" && e.key === "Enter") {
      fnameRef.current.focus();
    }
  }

  function addUser(e) {
    e.preventDefault();
    setAddUsers([...addusers, user]); // Add the current user to the list
    setUser({ firstName: "", lastName: "" }); // Clear the input fields after adding the user
    fnameRef.current.focus(); // Focus on the first name input field after adding the user
  }

  return (
    <>
      <form>
        <input
          type="text"
          onKeyUp={handleInput}
          ref={fnameRef}
          name="firstName"
          value={user.firstName} // Bind value to user.firstName
          placeholder="Enter the first name"
        />
        <input
          type="text"
          onKeyUp={handleInput}
          ref={lnameRef}
          name="lastName"
          value={user.lastName} // Bind value to user.lastName
          placeholder="Enter the last name"
        />
        <button onClick={addUser}>Add user</button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {addusers.map((people, index) => (
            <tr key={index}>
              <td>{people.firstName}</td>
              <td>{people.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
