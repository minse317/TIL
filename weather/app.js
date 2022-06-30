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
        })
        .catch( error => {
          console.log(error)
        })
    })
  }
})