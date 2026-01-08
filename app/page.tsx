"use client";
import { useState } from "react";
export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  return (
    <>
      <div className=" font-sans flex flex-col items-center justify-center min-h-screen py-2">
        <div>
          <span className="text-9xl" style={{ color: backgroundColor }}>
            00:
          </span>{" "}
          <span className="text-9xl" style={{ color: backgroundColor }}>
            00:
          </span>{" "}
          <span className="text-9xl" style={{ color: backgroundColor }}>
            00
          </span>
        </div>
        <div className="mt-5 flex gap-8">
          <button
            onClick={() => setBackgroundColor("blue")}
            className="button uppercase border px-9 flex justify-center bg-blue-600 p-4 w-15 hover:bg-white hover:text-blue-500 hover:outline hover:outline-blue-500 transition ease-in-out duration-300 hover:cursor-pointer hover:transform hover:scale-115"
          >
            start
          </button>

          <button
            onClick={() => setBackgroundColor("red")}
            className="button uppercase border px-9 flex justify-center bg-red-600 p-4 w-15 hover:bg-white hover:text-red-500 hover:outline hover:outline-red-500 transition ease-in-out duration-300 hover:cursor-pointer hover:transform hover:scale-115"
          >
            stop
          </button>

          <button
            onClick={() => setBackgroundColor("green")}
            className="button uppercase border px-9 flex justify-center bg-green-600 p-4 w-15 hover:bg-white hover:text-green-500 hover:outline hover:outline-green-500 transition ease-in-out duration-300 hover:cursor-pointer hover:transform hover:scale-115"
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}
