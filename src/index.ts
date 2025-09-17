import { banana } from "./another-file.ts";
import database from "./database.json" with { type: "json" };

function greet(name: string): string {
  return `Hello, ${name}! Have a ${banana}!`;
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const user = database.users[0]?.name ?? "Guest";

const result: string = greet(user);
console.log(result);
