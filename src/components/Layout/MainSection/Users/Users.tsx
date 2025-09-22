import { useEffect, useState } from "react";
import MainButton from "../../../UI/MainButton/MainButton";
import "./Users.scss";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Users() {
  const [updateList, setUpdateList] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!updateList) {
      setUsers([]);
      return;
    }
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        const resJSON = await response.json();
        setUsers(resJSON);
        console.log(resJSON);
      } catch (e: any) {
        if (e.name === "AbortError") {
          console.log("fatch declined");
        } else {
          console.error(e);
        }
      }
    }

    fetchUsers();
    return () => controller.abort();
  }, [updateList]);

  return (
    <div className="users">
      <div className="update__users">
        <h3 className="users__title">Our best users</h3>
        <MainButton onClick={() => setUpdateList((prev) => !prev)}>
          {updateList ? "Hide users" : "Show users"}
        </MainButton>
      </div>
      {users.map((user: any) => (
        <ul className="users__list" key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
    </div>
  );
}
