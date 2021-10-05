const entries: string[] = ["a", "b", "c", "d"];

const objEntries = entries.entries()

console.log(typeof objEntries)

for (let keys of objEntries) {
  console.log(keys)
}

