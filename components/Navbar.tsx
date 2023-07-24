import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="flex justify-between items-center bg-slate-900 text-slate-100 px-4 py-2 rounded-xl ">
      <div>
        <Link href="/" className="text-2xl">
          TODOISM
        </Link>
      </div>
      <div className="flex gap-2 items-center text-xl">
        {!session ? (
          <Link
            className="hover:bg-slate-200 duration-200 hover:text-slate-900 py-1 px-2 rounded-xl"
            href="/auth/login"
          >
            Login
          </Link>
        ) : (
          <div className="flex gap-2 items-center">
            <Link
              className="hover:bg-slate-200 duration-200 hover:text-slate-900 py-1 px-2 rounded-xl"
              href="/api/auth/signout"
            >
              Logout
            </Link>
            <Image
              src={session.user?.image as string}
              alt="pfp"
              width={40}
              height={20}
              className="rounded-full p-px bg-slate-100"
            />
          </div>
        )}
        <Link href="https://github.com/cryskram/todoism">
          <FaGithub className="hover:bg-slate-200 duration-200 hover:text-slate-900 p-1 text-3xl rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
