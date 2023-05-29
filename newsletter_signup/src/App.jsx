// import { useState } from "react";
import Content from "./components/Content";
import SignUPForm from "./components/SignUPForm";
import Image from "./components/Image";

function App() {
  return (
    <div className="min-h-screen w-full bg-custom-charcoal-grey flex justify-center items-center">
      <div className=" w-custom-w p-4 grid grid-cols-2 bg-custom-white border border-none rounded-3xl">
        <div className="px-8 flex flex-col gap-8 justify-center items-end">
          <Content />
          <SignUPForm />
        </div>
        <div className="flex justify-end">
          <Image />
        </div>
      </div>
    </div>
  );
}

export default App;
