// "use client";
// import React, { useState } from 'react';

// function FooterForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         email: '',
//         course: '',
//         additional: ''
//     });
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.ok) {
//                 // alert('Message sent successfully!');
//                 setFormData({
//                     name: '',
//                     phone: '',
//                     email: '',
//                     course: '',
//                     additional: ''
//                 });
//             } else {
//                 // alert('Failed to send message');
//             }
//         } catch (error) {
//             alert('Error sending message');
//         }
//     };  

//   return (
//     <div className="m-2">
//       <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
//         <h3 className="text-2xl font-semibold text-green-900 mb-6 text-center">
//           Connect with us
//         </h3>
//         <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-center lg:space-y-2 lg:space-x-4">
//           <div className="flex-1 min-w-[200px]">
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your name"
//               className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex-1 min-w-[200px]">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex-1 min-w-[200px]">
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               placeholder="Enter your phone number"
//               className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
//               value={formData.phone}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="flex-1 min-w-[200px]">
//             <select
//               id="course"
//               name="course"
//               className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-green-700 focus:border-green-700"
//               value={formData.course}
//               onChange={handleChange}
//             >
//               <option value="full-time">Full-Time Course</option>
//                 <option value="part-time">Part-Time Credit Course</option>
//                 <option value="ap">AP and Other Courses</option>
//             </select>
//           </div>
//           <textarea
//                 rows={4}
//                 placeholder="Additional message/concern"
//                 value={formData.additional}
//                 name="additional"
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
//               ></textarea>
//           <button
//             type="submit"
//             className="bg-green-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-800 transition"
//           >
//             Submit &rarr;
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default FooterForm;
