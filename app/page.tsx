"use client";
import React, { useState } from "react"; 
import Login from "./login"; 
import NavigationPage from "@/components/Navigation/page";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HomePage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("login"); 

  const handleSignUpClick = () => {
    setCurrentPage("navigation"); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">

      {currentPage === "login" && <Login onSignUpClick={handleSignUpClick} />} 
      {currentPage === "navigation" && <NavigationPage />} 
    </div>
  );
};

export default HomePage;
