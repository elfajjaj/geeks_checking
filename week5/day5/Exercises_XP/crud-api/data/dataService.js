import axios from "axios";

// Function to fetch posts from JSONPlaceholder API
export const fetchPosts = async () => {

  try {

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response.data;
  } catch (error) {

    console.error("❌ Axios fetch error:", error.message);

    throw error;
  }
};
