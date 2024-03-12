import NextAuth from "next-auth/next";
import CredentialsProvider, {
  CredentialsConfig,
} from "next-auth/providers/credentials";

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

const authOptions: IAuthOptions = {
  // @ts-ignore

  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const user = { id: "1" };
        return user;
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
// @ts-ignore

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
