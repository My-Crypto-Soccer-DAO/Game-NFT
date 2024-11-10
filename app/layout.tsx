// app/layout.tsx
"use client";
import React, { useState } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import '../styles/globals.css'; // Seu CSS global
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThirdwebProvider activeChain={PolygonAmoyTestnet}>
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
