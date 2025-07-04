
import { detect_user } from "@/actions/image.actions";
import { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const authOption : AuthOptions = {
  providers: [
    Credentials({
        name: "credentials",
        credentials: {
          image : {type: "text", label: "Image"},
        },
         async authorize(credentials) {
          if (!credentials?.image) {
            throw new Error("Image is required")
          }
            try {
              const data = await detect_user({ image : credentials.image }); 
              console.log("data: ",data);
              if (data?.found) {
                return data
              } else {
                  throw new Error("User not found!")
              }
          } catch (error: any) {
              throw new Error(error.message)
          }
        }
      }),
  ],
  session : {
    strategy : "jwt"
  },
  callbacks : {} 
}