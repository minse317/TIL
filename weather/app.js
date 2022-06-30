window.addEventListener('load',()=> {
  let lon
  let lat

  let temperaturaValor = document.getElementById('temperature-value') 
  let temperaturaDescripcion = document.getElementById('temperature-explanation')  
    
  let ubicacion = document.getElementById('position')  
  let iconoAnimado = document.getElementById('icon-animation') 

  let vientoVelocidad = document.getElementById('wind-speed') 

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition( posicion => {
      lon = posicion.coords.longitude
      lat = posicion.coords.latitude

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3a541c58a096b851185e9a34147614ef`
      
      fetch(url)
        .then( response => { return response.json() })
        .then( data => {          
          let temp = Math.round(data.main.temp)
          temperaturaValor.textContent = `${temp} ° C`
          
          let desc = data.weather[0].description
          temperaturaDescripcion.textContent = desc.toUpperCase()

          ubicacion.textContent = data.name

          vientoVelocidad.textContent = `${data.wind.speed} m/s`
          
          /*let iconCode = data.weather[0].icon
          const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`

          console.log(urlIcon)*/
          console.log(data.weather[0].main)
          switch (data.weather[0].main) {
            case 'Thunderstorm':
              iconoAnimado.src='animated/thunder.svg'
              console.log('Thunderstorm');
              break;
            case 'Drizzle':
              iconoAnimado.src='animated/rainy-2.svg'
              console.log('Drizzle');
              break;
            case 'Rain':
              iconoAnimado.src='animated/rainy-7.svg'
              console.log('Rain');
              break;
            case 'Snow':
              iconoAnimado.src='animated/snowy-6.svg'
              console.log('Snow');
              break;                        
            case 'Clear':
              iconoAnimado.src='animated/day.svg'
              console.log('Clear');
              break;
            case 'Atmosphere':
              iconoAnimado.src='animated/weather.svg'
              console.log('Atmosphere');
              break;  
            case 'Clouds':
              iconoAnimado.src='animated/cloudy-day-1.svg'
              console.log('Clouds');
              break;  
            default: 
              iconoAnimado.src='animated/cloudy-day-1.svg'
              console.log('basic');
            }

        })
        .catch( error => {
          console.log(error)
        })
    })
  }
})