import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const GetCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const api_url = import.meta.env.VITE_APP_API_URL;

      try {
        const response = await axios.get(
          `https://major-project-1-backend.onrender.com/api/users/getUser`,
          {
            withCredentials: true,
          }
        );

        dispatch(setUser(response.data));
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);
};

export default GetCurrentUser;
