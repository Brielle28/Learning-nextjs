"use client"
import Link from "next/link";
const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1>
        There seems to be an error. Do you want to go back? If yes, press the
        home button.
      </h1>
      <Link href="/">
      Home
      </Link>
    </div>
  );
};

export default Error;
