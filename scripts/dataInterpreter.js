var data; 
fetch('/scripts/data.json').then(repsonse => response.json()).then( function(json){ data = json });
console.log(data);