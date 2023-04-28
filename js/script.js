const selectedCountries = document.querySelector('.countery_select');
const weather_details = document.querySelector('.weather_details');
function searchCountry() {
    event.preventDefault()
    // selectors
    const selectedCountrysUl = document.querySelector('.countery_select ul');
    selectedCountrysUl.textContent = '';
    weather_details.style.display= 'none'

    // countries
    const input = document.getElementById("country").value;
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City (Holy See)", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
    const result = countries.filter(country => country.toLowerCase().includes(input.toLowerCase()));
    const final_result = result.slice(0, 5);
    selectedCountries.style.display = 'initial';
    /// show the selectors


    for (let i = 0; i < final_result.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${final_result[i]}`;
        selectedCountrysUl.appendChild(li);
    }

    const lis = document.querySelectorAll('.countery_select ul li');
    lis.forEach((li) => {
        li.addEventListener("click", (e) => {
            const searchInput = document.querySelector('.main form .search');
            searchInput.value = e.target.innerText;
            selectedCountries.style.display = 'none';
        })
    })

}

async function get_weather(e) {
    event.preventDefault();
    const APIKey = '1b76424fb9b0d6d395be1f76edaaa2b8';
    const searchValue = document.querySelector('.main form #country').value;
    const res =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${APIKey}&units=metric`);
    const result = await res.json();
    if(result) {
        show_weather(result);
    }
}

function show_weather(result) {
    console.log(result)
    //selectors
    const temp = document.querySelector('.weather_details .temp h2');
    const weather_description = document.querySelector('.weather_details .temp2 h4');
    const humidity = document.querySelector('.weather_details .bottom_sec .humidity .content');
    const windSpeed = document.querySelector('.weather_details .bottom_sec .speed .content');
    const weather_img = document.querySelector('.weather_details .logo img');
    //data
    weather_details.style.display= 'flex';
    temp.textContent = Math.floor(result.main.temp);
    weather_description.textContent = result.weather[0].description;
    humidity.textContent = Math.floor(result.main.humidity) + '%';
    windSpeed.textContent = result.wind.speed + ' Km/h';

    // img 
    if(result.weather[0].main == 'Clear') {
        weather_img.setAttribute('src', './public/imgs/sun.png');
    }
    else if(result.weather[0].main == 'Clouds') {
        weather_img.setAttribute('src', './public/imgs/cloudy.png');
    }
    else if(result.weather[0].main == 'Fog') {
        weather_img.setAttribute('src', './public/imgs/fog.png');
    }
    else if(result.weather[0].main == 'Rain') {
        weather_img.setAttribute('src', './public/imgs/heavy-rain.png');
    }
    else if(result.weather[0].main == 'Snow') {
        weather_img.setAttribute('src', './public/imgs/snow.png');
    }
    else if(result.weather[0].main == 'Thunderstorm') {
        weather_img.setAttribute('src', './public/imgs/thunderstorm.png');
    }
    else if(result.weather[0].main == 'Tornado') {
        weather_img.setAttribute('src', './public/imgs/tornado.png');
    } else {
        weather_img.setAttribute('src', './public/imgs/cloudy.png');
    }
    
}


    