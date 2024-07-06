document.getElementById("akanForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;

  if (birthdate && gender) {
    const dayOfWeek = new Date(birthdate).getDay();
    const akanName = getAkanName(dayOfWeek, gender);
    displayResult(akanName);
  } else {
    alert("Please enter a valid birthdate and select gender.");
  }
});

function getAkanName(day, gender) {
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afia",
    "Ama",
  ];

  return gender === "male" ? maleNames[day] : femaleNames[day];
}

function displayResult(name) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Your Akan name is: ${name}`;
}
