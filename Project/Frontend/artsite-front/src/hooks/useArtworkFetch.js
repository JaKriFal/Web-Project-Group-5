import { useArtworkContext } from "./useArtworkContext";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export default function useArtworkFetch(url) {
  const { title, description, tags, thumbnail, images } = useArtworkContext();
  const { user } = useAuthContext();

  //Adding Artwork to backend

  const addArtworkFetch = async () => {
    if (!user) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("thumbnail", thumbnail);
    images.forEach((image) => {
      formData.append("images", image);
    });

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

  return { addArtworkFetch };
}
