fetch("https://jsonplaceholder.typicode.com/users/1") // gets client information from stated website
    .then(response => {
        return response.json() // returns retrieved information in json format
    })
    .then(data => console.log(data)) // prints entire data on the client
    .then(data => console.log(data.name)) // prints the client's name as requested on the website
    .then(data => console.log(data.email)) // prints the client's email as requested on the website
    .catch(error => console.log(error)); // throws an error if specified is not found at the url