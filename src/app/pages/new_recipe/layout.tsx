"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function PagesLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <QueryClientProvider client={queryClient}>
        <header>header</header>
        {children}
        <footer>footer</footer>
        </QueryClientProvider>
    );
  }
  