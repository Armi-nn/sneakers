import { useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import { toast, Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
export default function Toast({ toastMessage }) {
    const mobileSize = useMediaQuery('(max-width:600px)')
  useEffect(() => {
    toast(toastMessage);
  }, [toastMessage]);
  return (
    <ToastContainer
      position={mobileSize?"bottom-center":"bottom-left"}
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick={false}
      closeButton={false}
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover={false}
      theme="light"
      transition={Slide}
    />
  );
}
