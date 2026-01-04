"use client";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" font-sans flex flex-col items-center justify-center min-h-screen py-2">
        <div className="text-9xl">00</div>

        <div className="mt-5 flex gap-4">
          <button className="button uppercase border px-9 flex justify-center bg-blue-600 p-4 w-15 hover:bg-white hover:text-blue-500 hover:outline hover:outline-blue-500 transition ease-in-out duration-300 hover:cursor-pointer hover:transform hover:scale-115">
            start
          </button>

          <button className="button uppercase border px-9 flex justify-center bg-red-600 p-4 w-15 hover:bg-white hover:text-red-500 hover:outline hover:outline-red-500 transition ease-in-out duration-300 hover:cursor-pointer hover:transform hover:scale-115">
            stop
          </button>

          <button className="button uppercase border px-9 flex justify-center bg-green-600 p-4 w-15 hover:bg-white hover:text-green-500 hover:outline hover:outline-green-500 transition ease-in-out duration-300 hover:cursor-pointer hover:transform hover:scale-115">
            reset
          </button>
        </div>
      </div>
    </>
  );
}
