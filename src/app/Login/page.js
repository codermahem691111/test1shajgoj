"use client";
import { useState } from "react";



export default function Login() {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  

  const handleLogin = async () => {
    if (!phone.trim()) return;
    setLoading(true);

  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded-md disabled:bg-gray-500"
        >
          {loading ? "Sending..." : "Login with OTP"}
        </button>
      </div>
    </div>
  );
}
