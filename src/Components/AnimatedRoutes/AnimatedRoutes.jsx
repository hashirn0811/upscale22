import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../Pages/Home";
import WebinarPage from "../../Pages/WebinarPage";
import KnowMore from "../../Pages/KnowMore";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../../helpers/ScrollToTop";
import webinarData from "../../Data/Webinar.json";
import Speakers from "../../Pages/Speakers";
import TicketPage from "../../Pages/TicketPage";

function AnimatedRoutes() {
  const location = useLocation();
//   const { hash } = useLocation()
//   useEffect(() => {
//     const targetElement = hash && document.getElementById(hash.substring(1));
//     console.log(targetElement)
//     window.scrollTo({
//         top: targetElement?.offsetTop,
//         left: 0,
//         behavior: "smooth"
//         })
// }, [hash])


  return (
    <AnimatePresence>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/webinar/:id"
          element={<WebinarPage webinars={webinarData} />}
        />
        <Route path="/about" element={<KnowMore />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/ticket" element={<TicketPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
