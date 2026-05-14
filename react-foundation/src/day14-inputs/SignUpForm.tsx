import React, { useState, type SubmitEvent } from "react";

// i'm putting this function outside the component
// because it's a pure function that doesn't have anything to do with the
// component or state logic at all
const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [education, setEducation] = useState("");

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<null | string>("");

  const degrees = [
    { text: "High School Diploma", value: "HS" },
    { text: "Associate's Degree", value: "AA" },
    { text: "Bachelor's Degree", value: "BA" },
    { text: "Master's Degree", value: "MA" },
    { text: "Doctorate (PhD)", value: "PHD" },
    { text: "Professional Degree (MD, JD)", value: "PROF" },
  ];

  const handleSignUp = (e: SubmitEvent) => {
    // always add this for form submit event, to prevent refresh
    e.preventDefault();

    // performing validations
    if (!validateEmail(email)) {
      // concurrent / batch state update, it's a new features since react 18
      setIsError(true);
      setError("email not validate");
      return;
    }

    if (password.length < 8) {
      setIsError(true);
      setError("password not strong enough");
      return;
    }

    if (password !== confirmPassword) {
      setIsError(true);
      setError("password don't match");
      return;
    }

    if (!isTermsAccepted) {
      setIsError(true);
      setError("sorry you must accept the terms first");
      return;
    }

    setIsError(false);
    setError(null);

    console.log("Sign Up Successful");
    // make the api call, do the redirection or something....
  };

  return (
    // form has a default behavior of refreshing upon submission
    // every time you click a button in form / hit enter in input: will trigger form submission

    <form onSubmit={handleSignUp}>
      <h3>Sign Up Form</h3>
      {isError && <div style={{ color: "red" }}>Error: {error}</div>}
      <div>
        <label>
          Email:
          {/* we are saying: the input's value must be email */}
          {/* onChange means: when it changes, it will update the email state */}
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>

      <div>
        <label>
          Password:
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Confirm Password:
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Select your highest education:
          <select
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          >
            <option value="">=== Please select your degree</option>
            {degrees.map((degree) => {
              const { text, value } = degree;
              return (
                <option key={value} value={value}>
                  {text}
                </option>
              );
            })}
          </select>
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isTermsAccepted}
            onChange={() => setIsTermsAccepted((prev) => !prev)}
          />
          I agree to terms and condition:
        </label>
      </div>
      {/* explicitly saying this button is for submission */}
      <button type="submit">Login</button>
      {/* if you want to click the button without triggering form submission */}
      {/* add type="button" */}
      <button type="button">Ask for help</button>
    </form>
  );
}
