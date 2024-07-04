async function fetchData() {
  const dataDisplay = document.getElementById("dataDisplay");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    dataDisplay.innerHTML =
      "<h2>Fetched Data:</h2>" + JSON.stringify(data, null, 2);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    dataDisplay.innerHTML =
      "<p>Error fetching data. Please try again later.</p>";
  }
}
