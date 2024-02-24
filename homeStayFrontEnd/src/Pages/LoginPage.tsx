import { useState } from "react";
import { storeAuthToken } from "../assets/token";
import { useNavigate } from "react-router-dom";
import axios, { HttpStatusCode } from "axios";
import { toast } from "react-toastify";

function LoginPage() {
  interface UserCredentials {
    email: string;
    password: string;
  }
  storeAuthToken(null);

  const [formData, setFormData] = useState<UserCredentials>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8087/authenticate",
        formData
      );
      if (response.status === HttpStatusCode.Ok) {
        toast.success("Login Successful");
        // wait for 2 seconds
        storeAuthToken(response.data.token);
        navigate("/admin");
      }
    } catch (e: any) {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                value={formData.email}
                type="email"
                onChange={handleChange}
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please enter a password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/register"
              >
                Create new account?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2024 HomeStay. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
