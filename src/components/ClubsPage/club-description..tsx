// "use client";

// import Image from "next/image";
// import {FC} from "react";

// interface ClubDescriptionProps {
//     imageSrc: string,
//     title: string,
//     content: string,
//     buttonLabel?: string,
//     onButtonClick?: () => void
// }

// const ClubDescription: FC<ClubDescriptionProps> = ({imageSrc, title, content}) => {
//     return (
//         <section className="bg-secondary-green py-12">
//             <div className="container mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-8">
//                 <div className="lg:w-1/2 w-full flex justify-center">
//                     <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md">
//                         <Image
//                             src={imageSrc}
//                             alt={title}
//                             fill
//                             className="object-cover rounded-lg"
//                         />
//                     </div>
//                 </div>
//                 <div className="lg:w-1/2 w-full text-center lg:text-left space-y-4">
//                     <h2 className="text-2xl sm:text-3xl font-bold text-green-900">{title}</h2>
//                     <p className="text-green-shade text-base sm:text-lg">{content}</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ClubDescription;
