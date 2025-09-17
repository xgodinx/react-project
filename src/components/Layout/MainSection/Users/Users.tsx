import { useEffect, useState } from "react";
import MainButton from "../MainButton/MainButton";

export default function Users() {
  const [updateList, setUpdateList] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
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
    <div>
      <MainButton onClick={() => setUpdateList(true)}>Update</MainButton>

      {users.map((user: any) => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
    </div>
  );
}
