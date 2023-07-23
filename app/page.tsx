import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/options";

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="mt-10 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-semibold">Todoism</h1>
        <p className="text-xl font-semibold">
          An end-to-end encrpyted Todo Manager
        </p>
      </div>
      <div className="mt-10">
        {session ? (
          <div>
            <p>Why not create few Todos if they aren&apos;t shown below</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl">
              You need to be logged in to see your Todos
            </p>
            <Link className="underline font-semibold" href="/auth/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
