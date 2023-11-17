const setintoBackend = async (inputData) => {
  try {
    const response = await fetch(
      "https://online-fraud-detection-backend-9ejy-ten.vercel.app/api/members",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data; // Handle the response data if needed
  } catch (error) {
    console.error("Error sending input:", error);
  }
};

export { setintoBackend };
