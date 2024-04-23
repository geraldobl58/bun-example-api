import { t, type Elysia } from "elysia";

import {
  add,
  findAll,
  findById,
  removeById,
} from "../handlers/passengers.handler";

export const passengersRoutes = (app: Elysia) => (
  app.get("/passengers", async () => {
    const results = await findAll();
    return results;
  }),
  app.get("/passengers/:id", async ({ params }) => {
    const results = await findById(parseInt(params.id));
    return results;
  }),
  app.delete("/passengers/:id", async ({ params }) => {
    const results = await removeById(parseInt(params.id));
    return results;
  }),
  app.post(
    "/passengers",
    async ({ body }) => {
      const results = await add(body);
      return results;
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
      }),
    }
  )
);
