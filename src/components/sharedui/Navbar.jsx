import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-lime-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="flex justify-end items-end px-8">
        <Link
          className="bg-stone-800 text-lime-100 font-medium px-4 py-2 self-stretch rounded"
          href="/sign-in"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}
