import { toast } from "react-toastify";

export const showToastError = () => {
  toast.error("Please enter a valid IP address or domain.", {
    position: "bottom-left",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
