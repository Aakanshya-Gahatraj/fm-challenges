import { useState } from "react";

function SignUPForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          submitted && email && alert(email + " signed in!");
        }}
      >
        <label
          htmlFor="email"
          className="font-custom-roboto font-custom-bold text-xs"
        >
          Email address
          {submitted && !email && <span className="text-primary">*</span>}
        </label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`p-2 mt-1 w-full border hover:cursor-pointer ${
            submitted && !email
              ? "border-primary shadow-primary shadow-sm"
              : "border-custom-grey"
          } rounded-md text-custom-grey`}
          placeholder={
            submitted && !email ? "Please add your email!" : "email@company.com"
          }
        />
        <button className="px-2 py-3 mt-4 w-full text-custom-white font-semibold text-center bg-custom-dark-slate-grey hover:bg-gradient-to-r from-gradient-1 to-gradient-2 rounded-md">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

export default SignUPForm;
