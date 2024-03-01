import { useState } from "react";

function AddRoom() {
  interface Room {
    roomNo: number;
    description: string;
    imagePath: string;
    capacity: number;
    price: number;
    available: boolean;
  }

  const [formValue, setFormValue] = useState<Room>({
    roomNo: 0,
    description: "",
    imagePath: "",
    capacity: 0,
    price: 0,
    available: false,
  });
  const [productImage, setProductImage] = useState<File | null>(null);
  const [productImgPreview, setProductImgPreview] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImgPreview(reader.result as string);
        setProductImage(file);
      };
    }
  };
  return (
    <>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Add Room
        </h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" htmlFor="roomNo">
                Room Number
              </label>
              <input
                id="roomNo"
                type="number"
                name="roomNo"
                defaultValue={100}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200" htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="number"
                name="price"
                defaultValue={1000}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Available
              </label>
              <select
                name="available"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              >
                <option>true</option>
                <option>false</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="capacity"
              >
                Capacity
              </label>
              <input
                id="capacity"
                type="number"
                name="capacity"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="Description"
              >
                Description
              </label>
              <textarea
                id="textarea"
                name="description"
                className="block w-full px-4 py-10 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="imagePath"
                        accept="image/*"
                        width="5%"
                        height="5%"
                        type="file"
                        className="sr-only"
                        required
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-5 mb-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg">
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
export default AddRoom;
