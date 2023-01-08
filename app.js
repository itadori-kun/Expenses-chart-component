fetch('data.json')
  .then(resp => {
    return resp.json()
  })
  .then(data => {
    data.forEach(el => {
      const output = `
        <div class='rectangle'>
        <span>&dollar;${el.amount}</span>
        <div class='empty-rect ${el.day}'></div>
        <p class='days'>${el.day}</p>
        </div>`
      document.getElementById('rect').insertAdjacentHTML('beforeend', output)
    })
  })
  .catch(err => {
    alert('HTTP-Error: ' + err.status)
  })
