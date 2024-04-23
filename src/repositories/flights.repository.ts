import prisma from "../database/prisma";

import type { AddFlightDto } from "../dtos/flights";

class FlightsRepository {
  async findAll() {
    return await prisma.flight.findMany({
      orderBy: {
        departure: "desc",
      },
      include: {
        reservations: true,
      },
    });
  }

  async add(data: AddFlightDto) {
    const { departure, ...rest } = data;

    return await prisma.flight.create({
      data: {
        departure: new Date(departure),
        ...rest,
      },
    });
  }

  async findById(id: number) {
    return await prisma.flight.findUnique({
      where: {
        id,
      },
      include: {
        reservations: true,
      },
    });
  }

  async removeById(id: number) {
    return await prisma.flight.delete({
      where: {
        id,
      },
      include: {
        reservations: true,
      },
    });
  }
}

export default new FlightsRepository();
