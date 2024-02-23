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
      <div className="body h-screen items-center justify-center w-screen flex bg-orange-300">
        <div className="box flex items-center justify-center border-black rounded-md m-4 p-4 bg-white border">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-10">
              <h1>Login</h1>
            </div>
            <div className="email-container flex justify-evenly">
              Email
              <input
                className="border mb-4 justify-end"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="password-container flex justify-end">
              Password
              <input
                className="border mb-4"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center align-middle">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                type="submit"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
