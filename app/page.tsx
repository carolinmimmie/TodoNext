"use client";
import { useState } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";


export default function Home() {

  return (
    <main className="max-w-md m-auto my-32 flex flex-col gap-8">
      <Header />
      <TodoList/>
    </main>
  );
}
