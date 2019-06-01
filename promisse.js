async function Max(a, b) {
    if (a > b) {
     return Promise.resolve("Success");
    }
    else {
     return Promise.reject("Error");
    }
   }

   Max(4, 10)
   .then(function(x) {
    console.log("Good " + x); 
   })
   .catch(function(x) {
    console.log("Oops " + x); 
   });
//    Output:
//    Oops Error
//    If we pass Max(14, 10) then we should get "Good Success" :)

async function hello() {
    let response = await fetch('https://api.github.com/');
    // above line fetches the response from the given API endpoint.
    return response;
   }
   hello()
   .then(function(x) {
    console.log(x); 
   });
//    ...
//    ...
//    Output:
//    Response from the API.