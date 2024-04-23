import prisma from "../database/prisma";
import type { AddPassengerDto } from "../dtos/passengers";

class PassengersRepository {
  async findAll() {
    return await prisma.passenger.findMany({
      include: {
        reservations: true,
      },
    });
  }

  async add(data: AddPassengerDto) {
    return await prisma.passenger.create({
      data,
    });
  }

  async findById(id: number) {
    return await prisma.passenger.findUnique({
      where: {
        id,
      },
      include: {
        reservations: true,
      },
    });
  }

  async removeById(id: number) {
    return await prisma.passenger.delete({
      where: {
        id,
      },
    });
  }
}

export default new PassengersRepository();
