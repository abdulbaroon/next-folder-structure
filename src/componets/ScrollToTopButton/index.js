// 'use client'
// import {motion, useAnimationControls, useScroll} from 'framer-motion'
// import { useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa';

// const isBrowser = () => typeof window !== 'undefined'; 

// function scrollToTop() {
//     if (!isBrowser()) return;
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// const ScrollToTopContainerVariants = {
//     hide: { opacity: 0, y: 100 },
//     show: { opacity: 1, y: 0 },
// };

export function ScrollToTopButton() {
//     const { scrollYProgress } = useScroll();
//     const controls = useAnimationControls();

//     useEffect(() => {
//         return scrollYProgress.on('change', (latestValue) => {
//             if (latestValue > 0.1) {
//                 controls.start('show');
//             } else {
//                 controls.start('hide');
//             }
//         });
//     },[scrollYProgress,controls]);

//     return (
//         <motion.button
//             className="fixed bottom-0 right-0 p-4 m-5 rounded-md bg-primary"
//             variants={ScrollToTopContainerVariants}
//             initial="hide"
//             animate={controls}
//             onClick={scrollToTop}
//             >
//             <FaArrowUp className='text-black' />
//         </motion.button>
//     );
}