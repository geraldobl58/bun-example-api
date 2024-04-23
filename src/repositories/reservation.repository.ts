import prisma from "../database/prisma";
import type { AddReservationDto } from "../dtos/reservation";

class ReservationRepository {
  async findAll() {
    return await prisma.reservation.findMany({
      include: {
        Flight: true,
        Passenger: true,
      },
    });
  }

  async add(data: AddReservationDto) {
    const { reservationDate, ...rest } = data;
    return await prisma.reservation.create({
      data: {
        reservationDate: new Date(reservationDate),
        ...rest,
      },
    });
  }

  async findById(id: number) {
    return await prisma.reservation.findUnique({
      where: {
        id,
      },
      include: {
        Flight: true,
        Passenger: true,
      },
    });
  }

  async removeById(id: number) {
    return await prisma.reservation.delete({
      where: {
        id,
      },
    });
  }
}

export default new ReservationRepository();
