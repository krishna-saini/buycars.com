import nextAuth from "next-auth";
import NextAuth, { User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  database: process.env.DB_URL,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  }
});
