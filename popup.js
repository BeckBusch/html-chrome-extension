document.getElementById("submit").addEventListener("click", myFunction);



function myFunction() {
                    var person = prompt("Please enter your name", "Harry Potter");

                    if (person !== null) {
                        document.getElementById("demo").innerHTML =
                            "Hello " + person + "! How are you today?";
                    }
                }
