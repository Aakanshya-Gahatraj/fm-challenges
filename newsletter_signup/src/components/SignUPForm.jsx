import { useRef, useState } from "react";
import Icon from "./Icon";

function SignUPForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dialogRef = useRef(null);

  const openPopup = () => {
    dialogRef.current.showModal();
  };

  const closePopup = () => {
    dialogRef.current.close();
  };

  const validateEmail = () => {
    !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email) &&
      setError("Valid email required");
  };

  return (
    <div className="signUp">
      <form
        onSubmit={(e) => {
          setError("");
          e.preventDefault();
          if (!email) {
            setError("Please add your email");
          } else {
            validateEmail();
            error.length == 0 && openPopup();
          }
        }}
      >
        <div className="label mb-4 flex justify-between">
          <label
            htmlFor="email"
            className="font-custom-roboto font-custom-bold text-base"
          >
            Email address
            {error && <span className="text-primary">*</span>}
          </label>
          {email && error && (
            <span className=" font-custom-roboto font-custom-bold text-xs text-primary">
              {error}
            </span>
          )}
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={` p-4 w-full border hover:cursor-pointer ${
            error
              ? "bg-red-100 text-primary border-primary"
              : "border-custom-grey"
          } rounded-md text-custom-grey`}
          placeholder={error ? error : "email@company.com"}
        />
        <button className=" px-2 py-5 mt-5 w-full text-custom-white font-semibold text-center bg-custom-dark-slate-grey hover:bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-md">
          Subscribe to monthly newsletter
        </button>
      </form>
      <dialog
        ref={dialogRef}
        // className="p-8 w-1/6 flex flex-col gap-4 rounded-3xl"
      >
        <Icon height="40px" width="40px" />
        <h1 className="font-custom-roboto font-custom-bold text-4xl text-custom-dark-slate-grey">
          Thanks for subscribing!
        </h1>
        <p className="text-xs">
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button
          className="px-2 py-3 mt-4 w-full text-custom-white font-semibold text-center bg-custom-dark-slate-grey hover:bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-md"
          onClick={closePopup}
        >
          Dismiss Message
        </button>
      </dialog>
    </div>
  );
}

export default SignUPForm;
