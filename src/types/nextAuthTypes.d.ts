import { DefaultSession } from "next-auth";
declare module "next-auth" {
    interface Session {
        user :{
        id : number;
        created_at?: string;
        first_name: string;
        last_name: string;
        image?: string;
        role : string;
        email : string;
        phone_number : string;
        } & DefaultSession["user"];

    } 
} 