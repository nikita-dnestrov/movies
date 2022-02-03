import { Op } from 'sequelize';

export const filterHelper = (filter) => {
  const { search, actor, title } = filter;
  if (search) {
    return {
      [Op.or]: [
        {
          title: {
            [Op.like]: `${search}`,
          },
        },
        {
          actors: {
            [Op.like]: `${search}`,
          },
        },
      ],
    };
  }

  if (actor) {
    return {
      actors: {
        [Op.substring]: `${actor}`,
      },
    };
  }

  if (title) {
    return {
      title: {
        [Op.like]: `${title}`,
      },
    };
  }
};
