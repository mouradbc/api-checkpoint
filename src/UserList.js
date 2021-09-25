import axios from "axios";
import React, { useState, useEffect } from "react";

const UserList = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsersList(response.data);
    });
    console.log(usersList);
  }, );
  return (
    <div>
      {usersList.map((user) => {
        return (
          <div className="four wide column" key={user.id}>
            <div className="ui link cards">
              <div className="card">
                <div className="content">
                  <div className="header">{user.name}</div>
                  <div className="meta price">{user.username}</div>
                  <div className="meta">{user.email}</div>
                  <div className="header">{user.address.street}</div>
                  <div className="header">{user.name}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <br/>
    </div>
  );
};

export default UserList;
