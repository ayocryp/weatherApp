
let cityOutput = document.querySelector("#cityoutput")
let desc = document.querySelector("#desc") 
let img = document.querySelector("#weather-img")
let temp = document.querySelector("#temp")
let timeZone = document.querySelector("#time")
let time = document.querySelector("#currentime")
let btn = document.querySelector("#submit")
let apiKey = "7cf51470932e3f806513125aa58fe0de";




let lookItUp = () => {
    let inputValue = document.querySelector("#search").value
    fetch(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=${inputValue}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
              cityOutput.innerHTML = `${data.location.name}, ${data.location.country}`
              desc.innerHTML = `<span>${data.current.weather_descriptions}</span>`
              img.src = `${data.current.weather_icons}`
              temp.innerHTML = `Temperature: <span${data.current.temperature}</span>`
              timeZone.innerHTML = `Timezone: <span>${data.location.timezone_id}</span>`
              time.innerHTML = `Time: <span>${data.current.observation_time}</span>`
        })
        .catch(err => {
            console.log(err);
            cityOutput.innerHTML = `You have entered a wrong city`
        });
}
btn.addEventListener('click', lookItUp)

