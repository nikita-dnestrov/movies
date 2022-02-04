import { filterHelper } from "../helper/filter.helper.js";
import { Movie } from "../models/index.js";

class MovieService {
  async findById(id) {
    return await Movie.findOne({ where: { id } });
  }

  async findAll(filter, sort) {
    const composedFilter = filterHelper(filter);

    return (await Movie.findAll({ where: composedFilter, order: [sort], raw: true })).map(
      (movie) => ({
        ...movie,
        actors: JSON.parse(movie.actors)
      })
    );
  }

  async createMany(data) {
    const parsedData = data.map((m) => {
      const { title, format, year, actors } = m;
      return { title, format, year, actors: JSON.stringify(actors) };
    });

    return await Movie.bulkCreate(parsedData);
  }

  async create(data) {
    const { title, format, year, actors } = data;

    return await Movie.create({ title, format, year, actors: JSON.stringify(actors) });
  }

  async update(id, data) {
    const { title, year, format, actors } = data;

    const movieToUpdate = await Movie.findByPk(id);

    if (movieToUpdate) {
      await movieToUpdate.update({ title, year, format, actors });
    }

    return movieToUpdate;
  }

  async remove(id) {
    const movieToRemove = await Movie.findByPk(id);

    if (movieToRemove) {
      movieToRemove.destroy();
    }

    return movieToRemove;
  }
}

export const movieService = new MovieService();
