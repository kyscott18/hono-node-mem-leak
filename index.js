import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { graphqlServer } from "@hono/graphql-server";
import { buildSchema } from "graphql";

setInterval(() => {
  const before = process.memoryUsage().heapUsed / 1024 / 1024;
  global.gc?.();
  const after = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log({ before: before.toFixed(2), after: after.toFixed(2) });
}, 1_000);

export const app = new Hono();

const schema = buildSchema(`
type Query {
  hello: String
}
`);

const rootResolver = (ctx) => {
  return {
    hello: () => "Hello Hono!",
  };
};

app.use(
  "/graphql",
  graphqlServer({
    schema,
    rootResolver,
  })
);

serve(app);
