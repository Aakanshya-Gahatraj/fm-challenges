import { useRef, useState } from "react";
import Icon from "./Icon";

const validateEmail = (email) => {
  return /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/.test(email);
};

function SignUPForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const dialogRef = useRef(null);

  const handleInputChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    if (!validateEmail(email)) {
      setError("Invalid email address");
      setIsDisabled(true);
    } else {
      setError("");
      setIsDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please add your email");
    } else {
      openPopup();
      setIsDisabled(false);
    }
  };

  const openPopup = () => {
    dialogRef.current.showModal();
  };

  const closePopup = () => {
    dialogRef.current.close();
  };

  return (
    <div className="signUp ">
      <form onSubmit={handleSubmit}>
        <div className="label mb-4 flex justify-between">
          <label
            htmlFor="email"
            className="font-custom-roboto font-custom-bold text-base @4xl:text-xs"
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
          onChange={handleInputChange}
          className={` p-4 @4xl:py-3 w-full border hover:cursor-pointer ${
            error
              ? "bg-red-100 text-primary border-primary"
              : "border-custom-grey"
          } rounded-md text-custom-grey`}
          placeholder={error ? error : "email@company.com"}
        />
        <button
          disabled={isDisabled}
          className="text-sm @[1000px]:text-base px-2 py-5 @4xl:py-3 mt-5 w-full text-custom-white font-semibold text-center bg-custom-dark-slate-grey hover:bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-md"
        >
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
