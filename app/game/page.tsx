// app/game/page.tsx
"use client";
import React from "react";
import NavigationPage from "@/components/Navigation/page";

const GamePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <NavigationPage /> 
    </div>
  );
};

export default GamePage;