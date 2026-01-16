import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setName("");
    setPassword("");
    alert(`email: ${name}, password: ${password}`);
  }

  const isFormValid = name.length < 3 && password.length < 3;

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-md"
    >
      <h1 className="mb-6 text-center text-xl font-semibold text-gray-900">
        Login
      </h1>

      {/* Email */}
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="your name"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
        />
        {name.length <= 3 && (
          <p className="text-red-500">
            Name must be longer than three characters
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-6">
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Password
        </label>

        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="********"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 pr-12 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          {String(password).length <= 3 && (
            <p className="text-red-500">
              Password must be longer than 3 characters
            </p>
          )}

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute inset-y-0 right-3 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            {showPassword ? "🫣" : "👁️‍🗨️"}
          </button>
        </div>
      </div>

      <button
        disabled={isFormValid}
        type="submit"
        className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
      >
        Login
      </button>
    </form>
  );
}
