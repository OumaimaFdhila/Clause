"use server";

import axios from "axios";


export async function AddUser({
    first_name,
    last_name,
    image,
  }: {
    first_name: string;
    last_name: string;
    image: string | null;
  }) {
    if (!first_name || !last_name || !image) {
      throw new Error("All fields are required");
    }
  
    try {
      const response = await axios.post(
        "https://nearby-prompt-buzzard.ngrok-free.app/add_user",
        {
          first_name: first_name,
          last_name: last_name,
          image,
        }
      );
      return response.data; 
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  }

export async function detect_user({ image }: { image: string }) {
    if (!image) throw new Error("Image is required");
    try {
        const response = await axios.post("https://nearby-prompt-buzzard.ngrok-free.app/image-detection", {
            image,
        });
        return response.data; 
    } catch (error) {
        console.error("Error detecting user:", error);
        throw error; 
    }
}

export async function getUsers() {
  try {
    const response = await axios.get("https://nearby-prompt-buzzard.ngrok-free.app/all_users");
    console.log(response.data);
    return response.data; 
} catch (error) {
    console.error("Error detecting user:", error);
    throw error; 
}}
