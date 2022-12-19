import React, { useState, useRef } from "react";
import Chatbot from "react-simple-chatbot";
import { RandomQuote } from "./randomQuote";
import { Menu } from "./Menu";
export default function App() {
  const l = useRef(Math.floor(Math.random() * 10));
  const steps = [
    {
      id: "1",
      message:
        "Hi , I am your virtual receptionist. What would you like to do?",
      trigger: "2"
    },
    {
      id: "2",
      options: [
        { value: 1, label: "View the menu", trigger: "4" },
        { value: 2, label: "Know our Story", trigger: "3" },
        { value: 3, label: "Tell me todays offer Please", trigger: "5" }
      ]
    },
    {
      id: "3",
      message: "Our story in detail. You will find this interesting..",
      trigger: "6"
    },
    {
      id: "4",
      message: "Alright, lets see the menu",
      trigger: "7"
    },
    {
      id: "5",
      message:
        "Todays offer is 5% discount on all orders and a free choclate.Take a moment to close your eyes, meditate and feel how cool the offer is! ",
      trigger: "6"
    },

    {
      id: "6",
      message: " Have a nice day!",
      end: true
    },
    {
      id: "7",
      component: <Menu />,
      trigger: "6"
    }
  ];

  return (
    <Chatbot
      headerTitle="Virtual receptionist"
      speechSynthesis={{ enable: true, lang: "en" }}
      steps={steps}
      height="100%"
    />
  );
}
