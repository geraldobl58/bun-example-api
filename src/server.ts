import { Elysia } from "elysia";

import swagger from "@elysiajs/swagger";

import { flightsRoutes } from "./routes/flights.route";
import { passengersRoutes } from "./routes/passengers.route";
import { reservationRoutes } from "./routes/reservation.route";

new Elysia()
  .use(swagger())
  .use(flightsRoutes)
  .use(passengersRoutes)
  .use(reservationRoutes)
  .listen(3001, () => console.log(`Server Started`));
