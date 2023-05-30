// import { useState } from "react";
import Content from "./components/Content";
import SignUPForm from "./components/SignUPForm";
// import Image from "./components/Image";

function App() {
  return (
    <div className="main min-h-screen w-full bg-custom-charcoal-grey flex justify-center items-center">
      <div className="wrapper w-full h-screen bg-custom-white">
        <div className="box-1">
          <img
            src="/src/assets/sign-up-mobile.svg"
            className="w-full h-auto"
            alt="Sign Up Image"
          />
          {/* <Image /> */}
        </div>
        <div className="box-2 mt-9 px-5 flex flex-col gap-11 justify-center items-end">
          <Content />
          <SignUPForm />
        </div>
      </div>
    </div>
  );
}

export default App;
