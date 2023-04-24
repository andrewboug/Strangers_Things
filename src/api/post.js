const baseUrl = "https://strangers-things.herokuapp.com/api/2301-FTB-ET-WEB-AM";

export const fetchPosts = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
