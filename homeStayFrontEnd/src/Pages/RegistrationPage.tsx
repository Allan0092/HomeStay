import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

function RegistrationPage() {
  interface FormData {
    email: string;
    password: string;
    confirm_password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirm_password: "",
  });

  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password" || name === "confirm_password") {
      const confirm_password =
        name === "password" ? formData.confirm_password : value;
      validatePasswords(value, confirm_password);
    }
  };
  const validatePasswords = (password: string, confirm_password: string) => {
    if (password !== confirm_password) {
      setPasswordError("passwords do not match");
    } else {
      setPasswordError("");
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    validatePasswords(formData.password, formData.confirm_password);

    if (!passwordError) {
      try {
        const response = await axios.post(
          "http://localhost:8087/user/save",
          formData
        );
        toast.success(response.data);
        navigate("/login");
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };
  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex w-full max-w-xs">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center mb-4">
              <label className="block text-gray-700 font-bold mb-2 text-xl">
                Registration
              </label>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                password
              </label>
              <input
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                confirm password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="********"
                required
              />
              <label className="text-red-600 mb-5">{passwordError}</label>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
export default RegistrationPage;
