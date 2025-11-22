# Item Suggestion Microservice

> This ~~Meeting~~ Microservice could have been a~~n~~ ~~Email~~ Function

A Hono microservice that chooses a random string from a pre-configured list.

## API

Routes:

- Get item
- List all items

The API opens at the address <http://localhost:6446/> by default.

### Search

> GET `/item`

Returns one item

Example:

```text
cool item
```

### List all items

> GET `/all-items`

Returns the entire list of suggestions

Example:

```json
[
  "cool item",
  "Plutonium",
  "700 sheep",
  "800 sheep",
  "900 sheep",
  "999 sheep",
  "another item",
  "I ran out of ideas"
]
```

## Installation

This program requires `node` and `npm` or `pnpm`. You can ensure they are installed with the following command:

```bash
node -v
npm -v
# OR
pnpm -v
```

Install dependencies:

```bash
npm install
```

Run the program:

```bash
npm run build
npm run start
```

The API will be launched at port `6446`.
