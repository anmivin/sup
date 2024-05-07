import worlds from '@backend-shared/database/worlds.json';
import { QueryInterface, Sequelize } from 'sequelize';
import { v4 } from 'uuid';

module.exports = {
  up: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    worlds.map(async (world) => {
      const [{ key: worldKey }] = (await queryInterface.bulkInsert(
        'worlds',
        [
          {
            key: world.key,
            part: 'sims_4',
            icon: world.icon,
            filled_map: world.filled_map,
            empty_map: world.empty_map,
          },
        ],
        //@ts-ignore
        { returning: ['key'] },
      )) as { key: string }[];
      world.just_lots.length &&
        world.just_lots.map(async (lot) => {
          const [{ key: lotKey }] = (await queryInterface.bulkInsert(
            'lots',
            [
              {
                key: lot.key,
                part: 'sims_4',
                filled_image: lot.filled_img,
                empty_image: lot.empty_img,
                price_filled: lot.price_filled,
                price_empty: lot.price_empty,
                size: lot.size.join('x'),
                world_key: worldKey,
              },
            ],
            //@ts-ignore
            { returning: ['key'] },
          )) as { key: string }[];

          const { top_left, top_right, bottom_right, bottom_left } = lot.coordinates;

          await queryInterface.insert(null, 'coordinates', {
            id: v4(),
            lot_key: lotKey,
            top_left_x: top_left[0],
            top_left_y: top_left[1],
            top_right_x: top_right[0],
            top_right_y: top_right[1],
            bottom_right_x: bottom_right[0],
            bottom_right_y: bottom_right[1],
            bottom_left_x: bottom_left[0],
            bottom_left_y: bottom_left[1],
          });
        });

      world.neighborhoods.length &&
        world.neighborhoods.map(async (neighborhood) => {
          const [{ key: neighborhoodKey }] = (await queryInterface.bulkInsert(
            'neighborhoods',
            [
              {
                key: neighborhood.key,
                part: 'sims_4',
                icon: neighborhood.icon,
                world_key: worldKey,
              },
            ],
            //@ts-ignore
            { returning: ['key'] },
          )) as { key: string }[];

          neighborhood.lots.map(async (lot) => {
            const [{ key: lotKey }] = (await queryInterface.bulkInsert(
              'lots',
              [
                {
                  key: lot.key,
                  part: 'sims_4',
                  filled_image: lot.filled_img,
                  empty_image: lot.empty_img,
                  price_filled: lot.price_filled,
                  price_empty: lot.price_empty,
                  size: lot.size.join('x'),
                  world_key: worldKey,
                  neighborhood_key: neighborhoodKey,
                },
              ],
              //@ts-ignore
              { returning: ['key'] },
            )) as { key: string }[];

            const { top_left, top_right, bottom_right, bottom_left } = lot.coordinates;
            await queryInterface.insert(null, 'coordinates', {
              id: v4(),
              lot_key: lotKey,
              top_left_x: top_left[0],
              top_left_y: top_left[1],
              top_right_x: top_right[0],
              top_right_y: top_right[1],
              bottom_right_x: bottom_right[0],
              bottom_right_y: bottom_right[1],
              bottom_left_x: bottom_left[0],
              bottom_left_y: bottom_left[1],
            });
          });
        });
    });
  },
  down: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {},
};
