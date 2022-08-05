// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  // Find the example form, and handle its submit event
  const exampleForm = document.querySelector('#example-form')

  exampleForm.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 1, 2, 3, 5, 8]

    const inputField = document.querySelector('#example-form .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, push it into the array and continue
    if(!isNaN(userNumber)){
      data.push(userNumber)

      // Use reduce to sum all the numbers in the data array
      const sum = data.reduce((accumulator, currentElement) => accumulator + currentElement);

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form .output').innerHTML = sum
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // Student Example 1
  const exampleForm1 = document.querySelector('#example-form1')

  exampleForm1.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 15, 27, 41, 88, 92]

    const inputField = document.querySelector('#example-form1 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, then apply the filter method and output the result
    if(!isNaN(userNumber)){
      // Filter method creates a new array filled with elements that pass a test provided by a function, in this example only values less than the input
      const results = data.filter(function(value){
        return value < userNumber;
      });

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form1 .output').innerHTML = results
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // Student Example 2
  const exampleForm2 = document.querySelector('#example-form2')

  exampleForm2.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    let data = [0, 15, 27, 41, 88, 92]

    const inputField = document.querySelector('#example-form2 .input')
    const userInput = inputField.value
    const userNumber = parseInt(userInput)

    // If the user's input was a number, then use the map function to perform a calculation on each values
    if(!isNaN(userNumber)){
      // Map creates a new array from calling a function for every array element.  In this example each value is divided by the user input
      const results = data.map(function(value){
        return value/userNumber;
      });

      // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
      document.querySelector('#example-form2 .output').innerHTML = results
    }

    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // Student Example 3 Include
  const exampleForm3 = document.querySelector('#example-form3')

  exampleForm3.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array of valid pets
    const data = ['cat', 'dog', 'fish', 'bird', 'mouse', 'rat', 'hampster', 'turtle', 'snake']

    const inputField = document.querySelector('#example-form3 .input')
    const userInput = inputField.value

    // Using the include method to see if the userInput matches any of the valid pets.  The userInput is converted to all lowercase to have more valid matches.
    const result = data.includes(userInput.toLowerCase());

    document.querySelector('#example-form3 .output').innerHTML = result
    
    // Clear the form field so the user can try again
    inputField.value = ''
  })

  // Student Example 4
  const exampleForm4 = document.querySelector('#example-form4')

  exampleForm4.addEventListener('submit', function(event){
    // Prevent the form from trying to submit to a server
    event.preventDefault()

    // An array that we can transform based on user input
    const data = [0, 15, 27, 41, 88, 92]

    const inputField = document.querySelector('#example-form4 .input')
    const userInput = inputField.value

    let results = [];
    // Could be done with a map but wanted to try forEach method.  In this example the input and array are treated like strings and simply combined, no math operation is performed.
    data.forEach(function(value){
      results.push(value + userInput)
    })

    // Output the total to the page- no need to convert the numeric sum back to a string, HTML will just print the number as a string
    document.querySelector('#example-form4 .output').innerHTML = results
    

    // Clear the form field so the user can try again
    inputField.value = ''
  })

})