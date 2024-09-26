import worlds from '../../../../../backend-shared/database/worlds.json';
import { QueryInterface } from 'sequelize';
import { v4 } from 'uuid';

const MINIO_URL = process.env.MINIO_URL ?? 'http://127.0.0.1:9000';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await Promise.all(
      worlds.map(async (world) => {
        const iconPath = `${MINIO_URL}/icons/worlds_${world.icon}`;
        const emptyMapPath = `${MINIO_URL}/icons/worldsmaps_${world.empty_map}`;
        const filledMapPath = `${MINIO_URL}/icons/worldsmaps_${world.filled_map}`;
        const [{ id: iconId }] = (await queryInterface.bulkInsert(
          'files',
          [
            {
              id: v4(),
              path: iconPath,
              name: world.icon,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['id'] },
        )) as { id: string }[];

        const [{ id: emptyMapId }] = (await queryInterface.bulkInsert(
          'files',
          [
            {
              id: v4(),
              path: emptyMapPath,
              name: world.empty_map,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['id'] },
        )) as { id: string }[];
        console.log('1');
        const [{ id: filledMapId }] = (await queryInterface.bulkInsert(
          'files',
          [
            {
              id: v4(),
              path: filledMapPath,
              name: world.filled_map,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['id'] },
        )) as { id: string }[];
        console.log('2');
        const [{ key: worldKey }] = (await queryInterface.bulkInsert(
          'worlds',
          [
            {
              key: world.key,
              part: 'sims_4',
              icon_id: iconId,
              filled_map_id: filledMapId,
              empty_map_id: emptyMapId,
            },
          ],
          //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
          { returning: ['key'] },
        )) as { key: string }[];
        console.log('3');
        world.just_lots.length &&
          world.just_lots.map(async (lot) => {
            console.log('4');
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
                  svg_path: `M${lot.coordinates.top_left[0]} ${lot.coordinates.top_left[1]}L${lot.coordinates.top_right[0]} ${lot.coordinates.top_right[1]} L${lot.coordinates.bottom_right[0]} ${lot.coordinates.bottom_right[1]} L${lot.coordinates.bottom_left[0]} ${lot.coordinates.bottom_left[1]}Z`,
                },
              ],
              //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
              { returning: ['key'] },
            )) as { key: string }[];

            console.log('5');
          });

        world.neighborhoods.length &&
          world.neighborhoods.map(async (neighborhood) => {
            console.log('6');
            const iconPath = `${MINIO_URL}/icons/worldsmaps_${neighborhood.icon}`;
            const [{ id: iconId }] = (await queryInterface.bulkInsert(
              'files',
              [
                {
                  id: v4(),
                  path: iconPath,
                  name: neighborhood.icon,
                },
              ],
              //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
              { returning: ['id'] },
            )) as { id: string }[];

            const [{ key: neighborhoodKey }] = (await queryInterface.bulkInsert(
              'neighborhoods',
              [
                {
                  key: neighborhood.key,
                  part: 'sims_4',
                  //@TODO: заменить на айди файлов
                  icon_id: iconId,
                  world_key: worldKey,
                },
              ],
              //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
              { returning: ['key'] },
            )) as { key: string }[];
            console.log(neighborhoodKey, neighborhood.key);

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
                    svg_path: `M${lot.coordinates.top_left[0]} ${lot.coordinates.top_left[1]}L${lot.coordinates.top_right[0]} ${lot.coordinates.top_right[1]} L${lot.coordinates.bottom_right[0]} ${lot.coordinates.bottom_right[1]} L${lot.coordinates.bottom_left[0]} ${lot.coordinates.bottom_left[1]}Z`,
                  },
                ],
                //@ts-expect-error  'returning' does not exist in type 'QueryOptions'
                { returning: ['key'] },
              )) as { key: string }[];
            });
          });
      }),
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('lots', {});
    await queryInterface.bulkDelete('neighborhoods', {});
    await queryInterface.bulkDelete('worlds', {});
  },
};
