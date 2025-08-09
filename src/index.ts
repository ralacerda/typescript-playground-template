import { banana } from "./anotherFile.ts";

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const result: string = greet(`TypeScript, have a ${banana}!`);
console.log(result);
