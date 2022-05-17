import type { NextPage } from "next";
import { getSession, signOut, useSession } from "next-auth/react";
import useRequireAuth from "../lib/useRequireAuth";

const Home: NextPage = () => {
  const { data: session } = useSession();

  /*   const session = useRequireAuth();
  if (!session) return <div>loading...</div>; */

  return (
    <div>
      <h1>{`Seja bem-vindo ${session?.user?.name}`}</h1>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
};

export default Home;

/* export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
 */
