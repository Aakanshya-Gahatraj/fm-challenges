// import { useState } from "react";
import Content from "./components/Content";
import SignUPForm from "./components/SignUPForm";
// import Image from "./components/Image";

function App() {
  return (
    <div className="@container min-h-screen w-full bg-custom-charcoal-grey flex justify-center items-center">
      <div className="w-full h-screen bg-custom-white flex flex-col gap-9 @4xl:w-custom-md @4xl:h-fit @4xl:p-4 @4xl:grid @4xl:grid-cols-2 @4xl:gap-x-px @4xl:rounded-3xl @[1500px]:w-custom-fix">
        <div className="box-1 @4xl:col-start-2 @4xl:col-end-3 @4xl:flex @4xl:justify-end">
          <img
            src="/src/assets/sign-up-mobile.svg"
            className="w-full h-auto"
            alt="Sign Up Image"
          />
        </div>
        <div
          className="box-2 w-full px-5 flex flex-col gap-11 justify-center items-center @4xl:items-start
          @4xl:px-8 @4xl:col-start-1 @4xl:col-end-2 @4xl:row-start-1 @4xl:row-end-2 @4xl:gap-8 "
        >
          <Content />
          <SignUPForm />
        </div>
      </div>
    </div>
  );
}

export default App;
