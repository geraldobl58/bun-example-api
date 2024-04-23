import flightsRepository from "../repositories/flights.repository";

import type { AddFlightDto } from "../dtos/flights";

export async function findAll() {
  const results = await flightsRepository.findAll();

  return results;
}

export async function add(data: AddFlightDto) {
  const results = await flightsRepository.add(data);

  return results;
}

export async function findById(id: number) {
  const results = await flightsRepository.findById(id);

  return results;
}

export async function removeById(id: number) {
  await flightsRepository.removeById(id);
}
