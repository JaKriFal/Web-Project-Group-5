import { useJobContext } from "./useJobContext";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export default function useJobFetch(url) {
  const { position, description, skills, location, type, medium, tags } =
    useJobContext();
  const { user } = useAuthContext();

  //Adding Job to backend

  const addJobFetch = async () => {
    const formData = new FormData();
    formData.append("position", position);
    formData.append("description", description);
    formData.append("skills", skills);
    formData.append("location", location);
    formData.append("type", type);
    formData.append("medium", medium);
    formData.append("tags", tags);

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return { addJobFetch };
}
