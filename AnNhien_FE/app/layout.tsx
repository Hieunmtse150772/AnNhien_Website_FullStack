"use client"
import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Provider store={store}>
          <Navbar />
          {children}
          <Footer />
        </Provider>

      </body>
    </html >
  )
}
