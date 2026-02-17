import { useState, useReducer } from "react";
type Actions =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_DATE"; payload: string }
  | { type: "SET_ADDRESS"; payload: string }
  | { type: "SET_AGREE"; payload: boolean };

type State = {
  name: string;
  email: string;
  dateOfBirth: string;
  address: string;
  agreeToTerms: boolean;
};

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_DATE":
      return { ...state, dateOfBirth: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_AGREE":
      return { ...state, agreeToTerms: action.payload };
    default:
      return state;
  }
}

export default function Form() {
  const [step, setStep] = useState<number>(1);

  const initialState: State = {
    name: "",
    email: "",
    dateOfBirth: "",
    address: "",
    agreeToTerms: false,
  };

  const [formLogic, dispatch] = useReducer(reducer, initialState);

  // Navigate to next step
  function handleNextStep() {
    setStep((prev) => prev + 1);
  }

  // Navigate to previous step
  function handlePrevStep() {
    setStep((prev) => prev - 1);
  }

  // Final submit handler
  function handleOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(`My name is ${formLogic.name}`);
    console.log(`My email is ${formLogic.email}`);
    console.log(`My DOB is  ${formLogic.dateOfBirth}`);
    console.log(`My address is  ${formLogic.address}`);
    console.log(`Do I agree to terms ${formLogic.agreeToTerms}`);

    setStep(4); // Show success message
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h3 className="text-lg font-semibold text-gray-500 text-center mb-2">
          My Form
        </h3>
        <h2 className="text-2xl font-bold text-center mb-6">Step {step}</h2>

        <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
          {/* Step 1 */}
          {step === 1 && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  value={formLogic.name}
                  onChange={(e) =>
                    dispatch({ type: "SET_NAME", payload: e.target.value })
                  }
                  type="text"
                  placeholder="Name"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  value={formLogic.email}
                  onChange={(e) =>
                    dispatch({ type: "SET_EMAIL", payload: e.target.value })
                  }
                  type="email"
                  placeholder="Email"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  value={formLogic.dateOfBirth}
                  onChange={(e) =>
                    dispatch({ type: "SET_DATE", payload: e.target.value })
                  }
                  type="date"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  value={formLogic.address}
                  onChange={(e) =>
                    dispatch({ type: "SET_ADDRESS", payload: e.target.value })
                  }
                  placeholder="Address"
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="text-sm text-gray-700">Reason</label>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <label className="text-sm text-gray-700">Quote</label>
              </div>

              <div className="text-sm font-medium text-gray-700">Pricing</div>
            </>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={formLogic.agreeToTerms}
                onChange={(e) =>
                  dispatch({ type: "SET_AGREE", payload: e.target.checked })
                }
              />
              <label className="text-sm text-gray-700">I agree to terms</label>
            </div>
          )}

          {/* Navigation Buttons */}
          {step < 4 && (
            <div className="flex justify-between mt-6">
              <button
                type="button"
                disabled={step === 1}
                onClick={handlePrevStep}
                className="px-4 py-2 rounded-lg border bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                Previous
              </button>

              {step < 3 && (
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Next
                </button>
              )}

              {step === 3 && (
                <button
                  type="submit"
                  disabled={!formLogic.agreeToTerms}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  Submit
                </button>
              )}
            </div>
          )}

          {/* Step 4 – Success message */}
          {step === 4 && (
            <div className="text-center mt-4">
              <p className="text-green-600 font-semibold">
                Your form has been successfully submitted!
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
