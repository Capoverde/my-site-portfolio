// import React from 'react'
// import styles from './Blobs.module.css'

// export const Blobs = ({ children }) => {
//   return (
//     <div className={`${styles.Blob} Blobs relative w-screen h-screen z-[-1]`}>
//       {children}
//     </div>
//   )
// }


// import React from 'react';
// import Image from 'next/image';
// import classNames from 'classnames';
// import { useFeatureStore } from './store';
// import { Blobs, Blob } from './TwoBlobs'; // Załóżmy, że Twoje komponenty Blobs i Blob są w pliku TwoBlobs.js

// export const Visual = ({ gradient, children, id }) => {
//   const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);

//   return (
//     <div className={classNames("fixed inset-0 flex items-center justify-center transition-opacity duration-500",
//                                fullScreenFeature === id ? "opacity-100" : "opacity-0 pointer-events-none"
//                                )}>
//         <div className='flex justify-center items-center 
//                         w-screen h-screen px-4 py-auto
//                         bg-black
//                         relative'
//         >
//           {children}
//         </div>
//     </div>
//   );
// };

// export const PortfolioVisual = ({ id }) => {
//   return (
//     <Visual id={id}>
//       <Blobs>
//         <Blob width="100px" height="100px" background="blue" position="absolute" />
//         {/* Dodaj więcej Blob z różnymi właściwościami */}
//       </Blobs>
//     </Visual>
//   );
// };

// export const OtherVisual = ({ id }) => {
//   return (
//     <Visual id={id}>
//       <Blobs>
//         <Blob width="80px" height="80px" background="green" position="absolute" />
//         {/* Dodaj więcej Blob z różnymi właściwościami */}
//       </Blobs>
//     </Visual>
//   );
// };

