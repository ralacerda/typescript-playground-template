# Node Typescript Playground Template

A simple template playground for Node with Typescript.
Eslint and Prettier are included.
This uses node type striping, so make sure you have Node 23 or later

## How to use

Use the command to [`giget`][giget] download the latest commit. You can include the `--install` flag to install dependencies after cloning.

```sh
npx giget gh:ralacerda/typescript-playground-template new-project-name

# Or
npx giget --install gh:ralacerda/typescript-playground-template new-project-name
```

Install the dependencies

```
pnpm i
```

Run the code

```
# Start in watch mode
pnpm dev

# Run the code once
pnpm start
```

[giget]: https://github.com/unjs/giget
