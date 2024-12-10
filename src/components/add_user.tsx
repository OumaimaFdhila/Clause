"use client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AddUser, getUsers } from "@/actions/image.actions";
import UserTable from "./userTable";
import { User } from "@/types/types";

export default function Dashboard() {
  
  const [users, setUsers] = useState<User[]>([]);

  const [newUser , setNewUser] = useState<{first_name: string; last_name: string; image: string | null}>({
    first_name: "",
    last_name: "",
    image: null,
  });

  useEffect( () => {
    const GetAllUsers = async () => {
      await getUsers().then((res) => {
        setUsers(res.users);
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    GetAllUsers();
  }, []);

 
  
  const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!newUser.first_name || !newUser.last_name || !newUser.image  ) {
      toast.error("All fields are required!");
      return;
    }
  
    try {
      const response = await AddUser(newUser); 
      console.log(response);
      if (response?.status === "success") {
        toast.success("User added successfully!");
        // setUsers([
        //   ...users,
        //   { id: users.length + 1, ...newUser },
        // ]);
        // setNewUser({ firstName: "", lastName: "", image: null }); 
      } else {
        toast.warning("Unexpected response from server.");
      }
    } catch (error: any) {
      console.error("Error adding user:", error);
      toast.error("Error adding user. Please try again.");
    }
  };


  return (
    <div className="h-screen w-full mx-auto bg-[#ebede8]">
      <UserTable />
    </div>
  );
}
