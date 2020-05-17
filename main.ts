import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { page } from "./page.tsx";
const app = new Application();
const router = new Router();

router.get('/books', (ctx) => {
    ctx.response.body = page({});
})

app.use(router.routes());

app.use((ctx) => {
    ctx.response.status = 404;
    ctx.response.body = "Page not found";
});

app.addEventListener("error", (evt) => {
    // Will log the thrown error to the console.
    console.log(evt.error);
  });

await app.listen({ port: 8000 });