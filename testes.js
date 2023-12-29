const phone = "85989898989"

function maskphone(phone) {
  const arrNumeros = phone.split('')
  const ddd = arrNumeros.slice(0, 2).join('')
  const prefixo = arrNumeros.slice(2, 7).join('')
  const sufixo = arrNumeros.slice(7, 11).join('')
  return `(${ddd}) ${prefixo}-${sufixo}`
}

console.log(maskphone(phone))