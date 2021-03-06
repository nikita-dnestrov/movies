import { movieService } from '../services/index.js';
import fs from 'fs';

class MovieController {
  async getAll(req, res, next) {
    try {
      const { actor, title, search, sort, order } = req.query;

      const sortQuery = sort && order ? [sort, order] : ['id', 'ASC'];

      const allMovies = await movieService.findAll({ actor, title, search }, sortQuery);

      res.status(200).json({ data: allMovies, status: 1 });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async getById(req, res, next) {
    try {
      const movie = await movieService.findById(req.params.id);
      res.status(200).json({ data: movie, status: 1 });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async update(req, res, next) {
    try {
      const movie = await movieService.update(req.params.id, req.body);
      res.status(200).json({ data: movie, status: 1 });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async create(req, res, next) {
    try {
      const movie = await movieService.create(req.body);
      res.status(200).json({ data: movie, status: 1 });
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        res.status(422).json({ message: e.errors[0].message });
      } else next(e);
    }
  }

  async remove(req, res, next) {
    try {
      const movie = await movieService.remove(req.params.id);
      res.status(200).json({ data: movie, status: 1 });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async parse(req, res, next) {
    try {
      fs.readFile(req.file.path, 'utf8', async (err, data) => {
        if (err) throw err;

        const arr = [];

        const buffer = data.split('\n').filter((f) => f !== '');

        for (let i = 0; i < buffer.length; i += 4) {
          const movie = {};
          const sliced = buffer.slice(i, i + 4);
          sliced.forEach((item) => {
            let val = item.split(':');
            if (val[0] === 'Stars') {
              movie[val[0]] = val[1].split(',').map((m) => m.trim());
            } else {
              movie[val[0]] = val[1].trim();
            }
          });

          arr.push(movie);
        }

        const parsedArr = arr.map((m) => {
          return {
            title: m.Title,
            year: m['Release Year'],
            format: m.Format,
            actors: m.Stars,
          };
        });

        const movies = await movieService.createMany(parsedArr);

        res.status(200).json({ movies });
      });
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        res.status(422).json({ message: e.errors[0].message });
      } else res.status(500).json({ message: e.message });
    }
  }
}

export const movieController = new MovieController();
