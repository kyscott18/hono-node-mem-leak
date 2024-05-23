# Hono Graphql Memory Leak

Running this server and then sending queries with a tool such as autocannon shows a memory leak.

```sh
autocannon -c 100 -d 10 -m POST -H "Content-Type: application/json" -b '{"query":"{ hello }"}' http://localhost:3000/graphql
```
