/**
 * Initialize Client Side Only JS
 */
import { addBackToTop } from "vanilla-back-to-top";

const initClient = () => {
  if (typeof window === "undefined") {
    return null;
  } 
    addBackToTop({
      backgroundColor: "#4F3590",
    });
  
};

export default initClient;
