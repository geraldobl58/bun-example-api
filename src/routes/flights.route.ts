import { t, type Elysia } from "elysia";

import {
  add,
  findAll,
  findById,
  removeById,
} from "../handlers/flights.handler";

export const flightsRoutes = (app: Elysia) => (
  app.get("/flights", async () => {
    const results = await findAll();
    return results;
  }),
  app.post(
    "/flights",
    async ({ body }) => {
      const result = await add(body);
      return result;
    },
    {
      body: t.Object({
        origin: t.String(),
        destination: t.String(),
        departure: t.String(),
        airline: t.String(),
        price: t.Number(),
      }),
    }
  ),
  app.get("/flights/:id", async ({ params }) => {
    const result = await findById(parseInt(params.id));

    return result;
  }),
  app.delete("/flights/:id", async ({ params }) => {
    await removeById(parseInt(params.id));
  })
);
