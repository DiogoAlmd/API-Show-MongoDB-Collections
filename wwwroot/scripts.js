 let meuTexto = document.getElementById('teste');
 //meuTexto.textContent = "teste";


// var data = {element: "barium"};
// asdf = null;

// fetch("http://localhost:5000/api/MostrarCollections", {
//   method: "POST",
//   headers: {'Content-Type': 'application/json'},

// }).then(res => {
//   console.log("Request complete! response:", res);
//   asdf = res;
// });

var data = {element: "barium"};

fetch("https://localhost:44337/api/MostrarCollections", {
method: "GET",
headers: {'Content-Type': 'application/json'}
}).then(res => {
console.log("Request complete! response:", res);
});






// fetch('http://localhost:5000/api/MostrarCollections').then(function (response) {
// 	// The API call was successful!
// 	return response.json();
// }).then(function (data) {
// 	// This is the JSON from our response
// 	console.log(data);
// }).catch(function (err) {
// 	// There was an error
// 	console.warn('Something went wrong.', err);
// });

