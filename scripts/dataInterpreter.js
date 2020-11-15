//fetch('/scripts/data.json').then(response => response.text()).then(text => console.log(text))
var data = JSON.parse(fetch('/scripts/data.json'))
console.log(data)