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
            //@TODO: заменить на айди файлов
            icon: world.icon,
            filled_map: world.filled_map,
            empty_map: world.empty_map,
          },
        ],
        //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
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
                price: lot.price_empty,
                height: lot.size[1],
                width: lot.size[0],
                world_key: worldKey,
                path: `M${lot.coordinates.top_left[0]} ${lot.coordinates.top_left[1]}L${lot.coordinates.top_right[0]} ${lot.coordinates.top_right[1]} L${lot.coordinates.bottom_right[0]} ${lot.coordinates.bottom_right[1]} L${lot.coordinates.bottom_left[0]} ${lot.coordinates.bottom_left[1]}Z`,
              },
            ],
            //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
            { returning: ['key'] },
          )) as { key: string }[];
        });

      world.neighborhoods.length &&
        world.neighborhoods.map(async (neighborhood) => {
          const [{ key: neighborhoodKey }] = (await queryInterface.bulkInsert(
            'neighborhoods',
            [
              {
                key: neighborhood.key,
                part: 'sims_4',
                //@TODO: заменить на айди файлов
                icon: neighborhood.icon,
                world_key: worldKey,
              },
            ],
            //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
            { returning: ['key'] },
          )) as { key: string }[];

          neighborhood.lots.map(async (lot) => {
            const [{ key: lotKey }] = (await queryInterface.bulkInsert(
              'lots',
              [
                {
                  key: lot.key,
                  part: 'sims_4',
                  price: lot.price_empty,
                  height: lot.size[1],
                  width: lot.size[0],
                  world_key: worldKey,
                  neighborhood_key: neighborhoodKey,
                  path: `M${lot.coordinates.top_left[0]} ${lot.coordinates.top_left[1]}L${lot.coordinates.top_right[0]} ${lot.coordinates.top_right[1]} L${lot.coordinates.bottom_right[0]} ${lot.coordinates.bottom_right[1]} L${lot.coordinates.bottom_left[0]} ${lot.coordinates.bottom_left[1]}Z`,
                },
              ],
              //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
              { returning: ['key'] },
            )) as { key: string }[];
          });
        });
    });
  },
  down: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {},
};
