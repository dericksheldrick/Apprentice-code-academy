// function fetching data from the public API
async function fetchData() {
  const dataDisplay = document.getElementById("dataDisplay");

  try {
    // Fetching data from JSONPlaceholder API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // Checking if the response from the server is ok

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    //  Convert the response data to JSON format
    const data = await response.json();

    // display the Data fetched
    dataDisplay.innerHTML =
      "<h2>Fetched Data </h2>" + JSON.stringify(data, null, 2);
  } catch (error) {
    // Handle any errors that occurred during the fetch operation
    console.error("There has been a problem with your fetch operation:", error);
    dataDisplay.innerHTML =
      "<p>Error fetching data. Please try again later.</p>";
  }
}
