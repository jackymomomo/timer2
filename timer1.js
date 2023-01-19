const userInput = process.argv.slice(2)

const timer = (input) => {
  if (!userInput || userInput < 0){
    console.log(undefined)
  } else {
    for(let i = 0; i <= input; i++){
      setTimeout(() => {
        console.log(i)
        userInput.forEach(element => {
          if (element == i){
            process.stdout.write('\x07')
          }
        });
      },i * 500)
    }
  }
}

timer(10)

