import { Toaster } from "sonner";
import Header from "./components/Header";
import NewsParent from "./components/NewsParent";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([
    {
      newsName: "Task1",
      newsBody: "Task about",
      id: 345,
    },
  ]);
  return (
    <>
      <Header list={list} setList={setList} />
      <main className="grow">
        <div className="container mx-auto py-10">
          <NewsParent setList={setList} list={list}></NewsParent>
        </div>
      </main>
      <Toaster position="top-center" richColors />
    </>
  );
}
