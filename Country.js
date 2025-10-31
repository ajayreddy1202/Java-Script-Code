document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();

    const country = document.getElementById("inp").value.trim();
    const resEle = document.querySelector(".result");
    const coatOfArmsImage = document.querySelector(".coat_of_arms");

    if (country !== "") {
        const countryURL = `https://restcountries.com/v3.1/name/${country}`;

        fetch(countryURL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Server is not responding");
                }
                return response.json();
            })
            .then((data) => {
                const countryData = data[0];
                console.log(countryData);

                resEle.innerHTML = `
                    <h2>${country}</h2>
                    <p>Capital: <strong>${countryData.capital ? countryData.capital.toString() : "N/A"}</strong></p>
                    <p>Region: <strong>${countryData.region}</strong></p>
                `;

                // Check if coat of arms image exists
                if (countryData.coatOfArms && countryData.coatOfArms.png) {
                    coatOfArmsImage.src = countryData.coatOfArms.png;
                    coatOfArmsImage.alt = `${country} Coat of Arms`;
                } else {
                    coatOfArmsImage.src = "";
                    coatOfArmsImage.alt = "No coat of arms available";
                }
            })
            .catch((err) => {
                console.error(err);
                resEle.innerHTML = `<strong class='error'>Country not found or server error.</strong>`;
                coatOfArmsImage.src = "";
            });
    } else {
        resEle.innerHTML = "<strong class='error'>Please enter a country name.</strong>";
        coatOfArmsImage.src = "";
    }
};
