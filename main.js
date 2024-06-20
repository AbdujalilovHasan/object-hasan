const object = {name: 'John', age: 30, city: 'New York',}

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}