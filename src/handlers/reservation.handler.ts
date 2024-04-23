import reservationRepository from "../repositories/reservation.repository";

import type { AddReservationDto } from "../dtos/reservation";

export async function findAll() {
  const results = await reservationRepository.findAll();

  return results;
}

export async function add(data: AddReservationDto) {
  const results = await reservationRepository.add(data);

  return results;
}

export async function findById(id: number) {
  const results = await reservationRepository.findById(id);

  return results;
}

export async function removeById(id: number) {
  await reservationRepository.removeById(id);
}
