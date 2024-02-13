import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignUpForm() {
  return (
    <div className="flex flex-col  gap-9 bg-stone-900 px-10 py-8 rounded-2xl font-semibold w-80 lg:w-96 ">
      <h2 className="text-lime-50 flex justify-center items-center text-bold text-2xl">
        Sign up
      </h2>
      <form>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-lime-300 text font-medium">username</p>
            <input placeholder="name" className="rounded px-3 py-2 text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lime-300 text font-medium">email</p>
            <input
              placeholder="hello@mail.com"
              className="rounded px-3 py-2 text-sm"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lime-300 text font-medium">password</p>
            <input
              placeholder="*******"
              className="rounded px-3 py-2 text-sm"
              type="password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lime-300 text font-medium">confirm password</p>
            <input
              placeholder="*******"
              className="rounded px-3 py-2 text-sm"
              type="password"
            />
          </div>
          <button className="bg-lime-300 text-stone-800 font-medium px-3 py-2 self-stretch rounded mt-6">
            Sign up
          </button>
        </div>
      </form>
      <div className="h-4 justify-center items-center gap-8 inline-flex">
        <div class="grow shrink basis-0 h-[0px] border border-lime-300"></div>
        <div className="text-lime-300 text-center">or</div>
        <div class="grow shrink basis-0 h-[0px] border border-lime-300"></div>
      </div>
      <div className="flex flex-col gap-3">
        <button className="bg-white text-stone-800 text-sm font-semibold px-3 py-2 self-stretch rounded flex justify-center items-center gap-4">
          <Image
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt="Google Logo"
            width={20}
            height={20}
          />{" "}
          Continue With Google
        </button>
        <p className="text-lime-50 text-sm font-light text-center space-x-1">
          <span>Already have an account?</span>
          <Link className=" text-lime-300" href="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
