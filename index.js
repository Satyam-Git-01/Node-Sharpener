

console.log("a");
console.log("b");
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("c");
    resolve();
  }, 3000);
}).then(() => {
  console.log("d");
});
console.log("e");
