import Head from 'next/head';
import { useEffect, useState,useRef } from 'react';
import styles from '../styles/Home.module.css';
import ChatWithUs from '../components/chatWithUs/ChatWithUs';
import 'tailwindcss/tailwind.css'
import React from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import ModalForm from '../components/modal/ModalForm';

const HeavyHeader = dynamic((showBuyNow,setOpenModal) => import('../components/header/Header'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed

  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyShowChat = dynamic(() => import('../components/chatWithUs/ChatWithUs'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed

  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyBanner1 = dynamic((setOpenModal) => import('../components/banner1/Banner1'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyBanner2 = dynamic(() => import('../components/banner2/Banner2'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyBanner3 = dynamic(() => import('../components/banner3/Banner3'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyBanner4 = dynamic(() => import('../components/banner4/Banner4'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyBanner5 = dynamic(() => import('../components/banner5/Banner5'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyBanner6 = dynamic(() => import('../components/banner6/Banner6'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyBanner7 = dynamic(() => import('../components/banner7/Banner7'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyBanner8 = dynamic(() => import('../components/banner8/Banner8'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});
const HeavyFooter = dynamic(() => import('../components/footer/Footer'), {
  ssr: false, // Optional: Disable server-side rendering for the component if it's not needed
  loading: () => <p>Loading...</p>, // Optional: Add a fallback loading component
});


export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [openModal,setOpenModal]=useState(false)
  const [refHeader, inViewHeader] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref7, inView7] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref8, inView8] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refFooter, inViewFooter] = useInView({ triggerOnce: true, threshold: 0.1 });


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust the threshold as needed
        setShowChat(true);
      } else {
        setShowChat(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const modalRef = useRef(null);

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpenModal(false) 
        }
    };

    useEffect(() => {
        if (openModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openModal]);
  return (

    <div className={styles.container}>
      <Head>
        <title>Pi Book</title>
        <link rel="icon" href="/Vector Pi.png" />
      </Head>

      <div ref={refHeader}>
        {inViewHeader && <HeavyHeader showBuyNow={showChat} setOpenModal={setOpenModal} />}
      </div>
   
      <main className='bg-bgColor'>
        {showChat && <ChatWithUs />}
        {openModal && <ModalForm reff={modalRef} openModal={openModal} setOpenModal={setOpenModal} />}
        <div ref={ref1}>
          {inView1 && <HeavyBanner1 setOpenModal={setOpenModal} />}
        </div>
        <div ref={ref2}>
          {inView2 && <HeavyBanner2 />}
        </div>
        <div ref={ref3}>
          {inView3 && <HeavyBanner3 />}
        </div>
        <div ref={ref4}>
          {inView4 && <HeavyBanner4 />}
        </div>
        <div ref={ref5}>
          {inView5 && <HeavyBanner5 />}
        </div>
        <div ref={ref6}>
          {inView6 && <HeavyBanner6 />}
        </div>
        <div ref={ref7}>
          {inView7 && <HeavyBanner7 />}
        </div>
        <div ref={ref8}>
          {inView8 && <HeavyBanner8 />}
        </div>
        {/* <HeavyBanner1 />
        <HeavyBanner2 />
        <HeavyBanner3 />
        <HeavyBanner4 />
        <HeavyBanner5 />
        <HeavyBanner5 />
        <HeavyBanner6 />
        <HeavyBanner7 />
        <HeavyBanner8 /> */}
      </main>

      {/* <Footer /> */}
      <div ref={refFooter}>
        {inViewFooter && <HeavyFooter />}
      </div>
      {/* <HeavyFooter /> */}

    </div>

  );
}
