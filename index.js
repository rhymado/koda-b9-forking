import randomizer from "./src/randomNumber.js";

console.log("Hello World");
console.log(`Random Number for Today: ${randomizer(1, 50)}`);

/**
 * NANDO DELKAFRIYO
 */

//import
import mostActiveUser from "./src/mostactiveuser.js";
console.log("================================================");
// menjalankan fungsi
try {
  const action = ["bob", "calice", "bob", "calice", "steve", "ed"];
  mostActiveUser(action);
} catch (error) {
  console.log(error);
}
