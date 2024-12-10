"use client";
import { AddUser } from "@/actions/image.actions";
import {Modal,ModalContent,ModalHeader,ModalBody,Button} from "@nextui-org/react";
import {  useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { CiImageOn } from "react-icons/ci";
  
export default function AddModal({isOpen ,onOpenChange}:{isOpen : boolean,onOpenChange : ()=>void}) {

    const [newUser , setNewUser] = useState<{first_name: string; last_name: string; image: string | null}>({
        first_name: "",
        last_name: "",
        image: null,
    });

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
        <>
            <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 font-semibold text-dark_green">Detect the user</ModalHeader>
                        <ModalBody>
                            <div className="bg-white p-4 rounded-lg shadow mb-6">
                                <h2 className="text-xl font-semibold text-gray-700">Add User</h2>
                                <form onSubmit={(e)=>{addUser(e)}} className="mt-4 space-y-4">
                                    <input
                                    type="text"
                                    placeholder="Name"
                                    value={newUser.first_name}
                                    onChange={(e) => setNewUser({ ...newUser, first_name: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                    type="email"
                                    placeholder="Email"
                                    value={newUser.last_name}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, last_name: e.target.value })
                                    }
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {
                                    newUser.image ? <div className="flex justify-center items-center p-4 border rounded-md">
                                        <Image src={newUser.image} alt="image" width={100} height={100}/>
                                    </div> : null
                                    }
                                    <label className="w-full p-4 flex justify-center items-center shadow-sm rounded-md hover:bg-gray-50 transition-all duration-200 cursor-pointer border">
                                    <CiImageOn size={34} />
                                    <span className="ml-2 font-semibold">Add Image</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e)=>{
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = () => {
                                            setNewUser({ ...newUser, image: reader.result as string });
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                        }}
                                    />
                                    </label>
                                    <Button
                                    type="submit"
                                    onClick={onClose}
                                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                                    >
                                    Add User
                                    </Button>
                                </form>
                            </div>
                        </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}