import React from "react";

export default function Layout({ children }) {
  return (
    <main className="h-screen flex justify-center items-center bg-stone-950">
      {children}
    </main>
  );
}
