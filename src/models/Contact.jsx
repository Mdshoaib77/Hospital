import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Button from "../layouts/Button"; // Assuming Button is another component

const Contact = ({ closeForm }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state for form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to true when the form is submitted

    const formData = new FormData(e.target);

    // Simulating the form submission process (e.g., sending the form data to a server)
    setTimeout(() => {
      setIsLoading(false); // Set loading state back to false after submission is done
      
      // Show a Toastify success message
      toast.success("Thank you! Your appointment has been booked successfully.");
    }, 2000); // Simulate a 2-second delay for form submission

    // You can place actual form submission logic here (e.g., to a server or Web3Forms API)
  };

  return (
    <>
      {/* Toast container to show notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="absolute mt-12 text-black popup-form">
          <form className="p-5 space-y-5 bg-white w-80 md:w-96 rounded-xl" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-semibold text-center text-backgroundColor">
              Book Now
            </h1>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="text"
                name="userFirstName"
                id="userFirstName"
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="text"
                name="userLastName"
                id="userLastName"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="email"
                name="userEmail"
                id="userEmail"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <input
                className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
                type="number"
                name="userNumber"
                id="userNumber"
                placeholder="Phone No."
                required
              />
            </div>
            <div className="flex gap-5">
              {/* Button text will display "Sending..." while submitting */}
              <Button title={isLoading ? "Sending..." : "Book Appointment"} />
              <button
                className="px-10 text-white rounded-md bg-backgroundColor active:bg-red-500"
                onClick={closeForm}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
