export function timer(set){   
  let horas = 0;
  let minutos = 0;
  let segundos = 0; 

  const time = setInterval(() => {
    segundos = segundos +1;
    if(segundos === 60){
      segundos = 0;
      minutos = minutos + 1;
      if(minutos === 60){
        minutos = 0;
        horas = horas + 1;
      }
    }
    if(horas === 1){ clearInterval(time)}
      set({horas, minutos, segundos})    
  }, 1000);
  
}
export function maskphone(phone) {
  if(phone){
    const arrNumeros = phone.split('')
    const ddd = arrNumeros.slice(0, 2).join('')
    const prefixo = arrNumeros.slice(2, 7).join('')
    const sufixo = arrNumeros.slice(7, 11).join('')
    return `(${ddd}) ${prefixo}-${sufixo}`
  }
}

export function setDate(date){
  return new Date(date).toLocaleDateString()
}
