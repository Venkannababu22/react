import { useEffect, useState } from "react";
/**
 * Custom hook to track online status of the application.
 * It listens for 'online' and 'offline' events and updates the state accordingly.
 *
 * @returns {boolean} - Returns true if online, false if offline.
 */

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
