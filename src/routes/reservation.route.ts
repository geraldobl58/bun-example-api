import { t, type Elysia } from "elysia";

import {
  add,
  findAll,
  findById,
  removeById,
} from "../handlers/reservation.handler";

export const reservationRoutes = (app: Elysia) => (
  app.get("/reservation", async () => {
    const results = await findAll();
    return results;
  }),
  app.get("/reservation/:id", async ({ params }) => {
    const results = await findById(parseInt(params.id));
    return results;
  }),
  app.delete("/reservation/:id", async ({ params }) => {
    const results = await removeById(parseInt(params.id));
    return results;
  }),
  app.post(
    "/reservation",
    async ({ body }) => {
      const results = await add(body);
      return results;
    },
    {
      body: t.Object({
        flightId: t.Number(),
        passengerId: t.Number(),
        seatNumber: t.Number(),
        reservationDate: t.String(),
      }),
    }
  )
);
