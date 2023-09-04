import './globals.css'
import React from "react";

export const metadata = {
  title: 'test',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body>
       <main>
         {children}
       </main>
       </body>
    </html>
  )
}
