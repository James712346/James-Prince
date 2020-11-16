//fetch('/scripts/data.json').then(response => response.text()).then(text => console.log(text))
var data = fetch('/scripts/data.json').json();
console.log(data);