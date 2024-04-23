import passengersRepository from "../repositories/passengers.repository";

import type { AddPassengerDto } from "../dtos/passengers";

export async function findAll() {
  const results = await passengersRepository.findAll();

  return results;
}

export async function add(data: AddPassengerDto) {
  const results = await passengersRepository.add(data);

  return results;
}

export async function findById(id: number) {
  const results = await passengersRepository.findById(id);

  return results;
}

export async function removeById(id: number) {
  await passengersRepository.removeById(id);
}
