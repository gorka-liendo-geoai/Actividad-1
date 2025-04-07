import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Home() {
    return (
      <div className="container mx-auto p-8 bg-gradient-to-r from-slate-300 to-slate-500 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-extrabold text-white mb-6 text-center tracking-wide">
          Home
        </h1>
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pruebas de Botonería</h2>
          <Link to="/dashboard">
            <Button variant="primary" className="w-full py-2 px-4 text-lg mt-4 hover:bg-blue-700 transition duration-300 ease-in-out">
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  

export default Home;
