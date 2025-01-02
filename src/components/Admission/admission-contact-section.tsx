// "use client";
// import { useState, ChangeEvent, FormEvent } from "react";
// import GlobalButton from "../ui/global-button";
// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   additional: string;
// }

// export default function ContactSection() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     phone: "",
//     email: "",
//     additional: "",
//   });

//   const handleChange = (
//       e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormData({
//           name: "",
//           phone: "",
//           email: "",
//           additional: "",
//         });
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Error sending message");
//     }
//   };

//   return (
//       <div className="bg-secondary-green py-6 sm:py-10 px-4 sm:px-6">
//         <h2 className="text-center text-3xl sm:text-4xl font-bold text-green-shade mb-4 sm:mb-8">
//           Contact Us
//         </h2>
//         <p className="text-center text-green-shade max-w-2xl mx-auto mb-6 sm:mb-10 text-base sm:text-lg px-4">
//           Have questions or need assistance? Our team is here to help you with
//           everything from course selection to admissions. Get in touch today!
//         </p>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
//           <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
//             <h3 className="text-xl sm:text-2xl font-semibold text-green-shade mb-4 sm:mb-6">Contact Us</h3>
//             <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Email:</p>
//             <p className="text-gray-700 mb-4">admission@meritedu.ca</p>
//             <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Call:</p>
//             <p className="text-gray-700 mb-4">+1 437 989 7210</p>
//             <p className="text-base sm:text-lg font-bold mb-2 sm:mb-4">Visit Us:</p>
//             <p className="text-gray-700">180 Duncan Mills Road</p>
//           </div>

//           <div className="bg-white p-4 sm:p-8 rounded-lg shadow-lg">
//             <h3 className="text-xl sm:text-2xl font-semibold text-green-shade mb-4 sm:mb-6">Get in Touch</h3>
//             <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
//               <input
//                   type="text"
//                   placeholder="Enter your Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input
//                     type="text"
//                     placeholder="Phone Number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email ID"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//               </div>
//               <textarea
//                   rows={4}
//                   name="additional"
//                   onChange={handleChange}
//                   placeholder="Additional message/concern"
//                   value={formData.additional}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               ></textarea>
//               <GlobalButton
//                   type="submit"
//                   // className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-shadow shadow-md hover:shadow-lg"
//               >
//                 Send Now
//               </GlobalButton>
//             </form>
//           </div>
//         </div>
//       </div>
//   );
// }


"use client";

export default function ContactSection() {
  return (
    <div className="bg-secondary-green mt-16 relative -z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-green-shade text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          CONTACT US
        </h2>
        <div className="w-16 sm:w-20 h-1 bg-green-shade mx-auto mb-4 sm:mb-8"></div>
        <p className="text-center text-green-shade max-w-3xl mx-auto mb-8 sm:mb-16 px-4 text-sm sm:text-base">
          Have questions or need assistance? Our team is here to help you with
          everything from course selection to admissions. 
        </p>

        <div className="bg-green-shade w-full h-16 absolute bottom-0 left-0 -z-10"/>

        <div className="bg-secondary-green2 z-50 rounded-lg p-4 sm:p-8 w-[80%] mx-auto ">
  <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 w-full ">
    {/* Address */}
    <div className="flex items-center space-x-3 flex-1 justify-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-700 rounded-full flex-shrink-0 flex items-center justify-center">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <div className="">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1">Address:</h3>
        <p className="text-green-shade text-xs sm:text-sm lg:text-base">180 Duncan Mills Road</p>
        <p className="text-green-shade text-xs sm:text-sm lg:text-base">Toronto, ON M3B 3M4</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center space-x-3 flex-1 justify-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-700 rounded-full flex-shrink-0 flex items-center justify-center">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1">Email:</h3>
        <p className="text-green-shade text-xs sm:text-sm lg:text-base">admission@meritedu.ca</p>
        <p className="text-green-shade text-xs sm:text-sm lg:text-base">support@meritedu.ca</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center space-x-3 flex-1 justify-center">
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-700 rounded-full flex-shrink-0 flex items-center justify-center">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </div>
      <div className="">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1">Call us:</h3>
        <p className="text-green-shade text-xs sm:text-sm lg:text-base">+1 437 989 7210</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
