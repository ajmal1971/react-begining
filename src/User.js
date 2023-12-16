import { useState } from "react";

function User() {
  let [user, setUser] = useState({ fName: "", lName: "", email: "", country: "", gender: "Male" });
  let [users, setUsers] = useState([]);

  const onInputChange = (prop, value) => {
    setUser((prevUser) => ({
      ...prevUser,
      [prop]: value
    }))
  }

  const addUser = (e) => {
    e.preventDefault();
    users.push(user);
    setUsers([
      ...users
    ]);

    setUser({ fName: "", lName: "", email: "", country: "", gender: "Male" });
  }

  const removeUser = (index) => {
    users.splice(index, 1);
    setUsers([...users]);
  }

  const editUser = (index) => {
    let temp = users[index];
    setUser({ fName: temp.fName, lName: temp.lName, email: temp.email, country: temp.country, gender: temp.gender });
  }

  return (
    <div>

      <form onSubmit={addUser}>
        <input value={user.fName} onChange={(e) => onInputChange('fName', e.target.value)} placeholder="First Name" /><br />
        <input value={user.lName} onChange={(e) => onInputChange('lName', e.target.value)} placeholder="Last Name" /><br />
        <input value={user.email} onChange={(e) => onInputChange('email', e.target.value)} placeholder="Email Address" /><br />
        <select value={user.country} onChange={(e) => onInputChange('country', e.target.value)} >
          <option>Select Country</option>
          <option>Bangladesh</option>
          <option>Pakistan</option>
          <option>Afganisthan</option>
          <option>Palestine</option>
          <option>Siriya</option>
        </select><br />
        <input type="radio" value="Male" checked={user.gender === "Male"} onChange={(e) => onInputChange('gender', e.target.value)} />Male
        <input type="radio" value="Female" checked={user.gender === "Female"} onChange={(e) => onInputChange('gender', e.target.value)} />Female
        <br />
        <button type="submit">Submit</button>
      </form>

      <br />

      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
          {(() => {
            return users.length > 0
              ?
              (
                users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.fName}</td>
                      <td>{item.lName}</td>
                      <td>{item.email}</td>
                      <td>{item.country}</td>
                      <td>{item.gender}</td>
                      <td>
                        <button onClick={() => removeUser(index)}>Remove</button>
                        <button onClick={() => editUser(index)}>Edit</button>
                      </td>
                    </tr>
                  )
                })
              )
              :
              (<tr><td colSpan={3}>No Record Found!</td></tr>)
          })()}
        </tbody>
      </table>
    </div >
  )
}

export default User;