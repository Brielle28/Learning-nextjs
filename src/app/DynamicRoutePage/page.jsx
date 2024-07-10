import Link from "next/link";
import "../../../src/app/globals.css";
// import GitUsers from "@/component/GitubMapping//GitUsers";  
import dynamic from "next/dynamic";
import GitUsers from "@/component/GitubMapping/GitUsers";

const githubuserscomponent = dynamic(() => import ("@/component/GitubMapping/GitUsers"), {ssr:false})

const page = () => {
  return (
    <>
      <div className="z-10 max-w-5xl w-full flex items-center justify-between mt-[50px] pl-[100px] font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Dynamic page 
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Home
          </Link>
        </div>
      </div>
      <div className="mt-[30px] flex items-center justify-center ">
        <h1 className="text-[50px] font-poppins font-semibold">
          Github Users display
        </h1>
      </div>
        <div className="flex flex-wrap items-center justify-center gap-2 ">
          <GitUsers/>
        </div>
    </>
  );
};

export default page;
