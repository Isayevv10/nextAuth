import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider, {
  CredentialsConfig,
} from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import RenderResult from "next/dist/server/render-result";

interface IAuthOptions {
  authOptions: {
    providers: CredentialsConfig<{}>[];
    session: {
      strategy: string;
    };
    secret: string | undefined;
    pages: {
      signIn: string;
    };
  };
}

export const authOptions: IAuthOptions = {
  // @ts-ignore

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      // @ts-ignore
      async authorize(credentials: { email: string; password: string }) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error", error);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/register",
  },
};
// @ts-ignore

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
