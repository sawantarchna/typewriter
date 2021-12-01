const sentence = "hello there from lighthouse labs";
// for (const char of sentence) {
//     console.log(char);
//   }

let delay = 0;
for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);    
    },delay);
    delay += 50;
}