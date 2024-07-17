const handleError = (error) => {
  let errorMessage = "An unknown error occured";

  if (error.response) {
    errorMessage = error.response.data.message || error.response.statusText;
  } else if (error.request) {
    errorMessage = "No response from the server. Please try again later.";
  } else {
    errorMessage = error.message;
  }

  console.log("Error::", errorMessage);

  return errorMessage;
};

export default handleError;
