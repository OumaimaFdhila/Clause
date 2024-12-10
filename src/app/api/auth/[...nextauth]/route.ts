import { authOption } from "@/lib/auth"
import NextAuth from "next-auth"

const handlers = NextAuth(authOption) as never
export const { GET, POST } = handlers