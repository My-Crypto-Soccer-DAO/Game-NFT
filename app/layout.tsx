// app/layout.tsx (ou onde quer que você tenha o componente raiz)
"use client";
import React, { useState } from "react";
import { ThirdwebProvider } from "thirdweb/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '../styles/globals.css'; // Seu CSS global

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThirdwebProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </QueryClientProvider>
    </ThirdwebProvider>
  );
}