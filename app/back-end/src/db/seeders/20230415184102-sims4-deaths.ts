import { QueryInterface, Sequelize } from 'sequelize';
module.exports = {
  up: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    await queryInterface.bulkInsert(
      'deaths',
      [
        {
          name: 'Голод',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Пожар',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Утопление',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Удар током',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Сердечный приступ',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Истерика',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Смущение',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Старость',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Переутомление',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Жвачное растение',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Метеор',
          expansion: 'Базовая игра',
          description: '',
        },
        {
          name: 'Рыба фугу',
          expansion: 'Жизнь в городе',
          description: '',
        },
        {
          name: 'Холод',
          expansion: 'Времена года',
          description: '',
        },
        {
          name: 'Жара',
          expansion: 'Времена года',
          description: '',
        },
        {
          name: 'Молния',
          expansion: 'Времена года',
          description: '',
        },
        {
          name: 'Цветок смерти',
          expansion: 'Времена года',
          description: '',
        },
        {
          name: 'Мухи',
          expansion: 'Экологичная жизнь',
          description: '',
        },
        {
          name: 'Торговый автомат',
          expansion: 'Снежные просторы',
          description: '',
        },
        {
          name: 'Падение с высоты',
          expansion: 'Снежные просторы',
          description: '',
        },
        {
          name: 'Кролик убийца',
          expansion: 'Деревенская жизнь',
          description: '',
        },

        {
          name: 'Курица убийца',
          expansion: 'Деревенская жизнь',
          description: '',
        },
        {
          name: 'Городская легенда',
          expansion: 'Старшая школа',
          description: '',
        },
        {
          name: 'Вонючая капсула',
          expansion: 'Старшая школа',
          description: '',
        },
        {
          name: 'Пар',
          expansion: 'День спа',
          description: '',
        },
        {
          name: 'Солнце',
          expansion: 'Вампиры',
          description: '',
        },
        {
          name: 'Яд',
          expansion: 'Приключение в джунглях',
          description: '',
        },
        {
          name: 'Материнское растение',
          expansion: 'Тайна Стрейнджервилля',
          description: '',
        },

        {
          name: 'Магический заряд',
          expansion: 'Мир магии',
          description: '',
        },
        {
          name: 'Ночной дух',
          expansion: 'Мир магии',
          description: '',
        },
        {
          name: 'Лихорадка бешеного грызуна',
          expansion: 'Мой первый питомец',
          description: '',
        },
        {
          name: 'Складная кровать',
          expansion: 'Компактная жизнь',
          description: '',
        },
        {
          name: 'Крушение космического корабля',
          expansion: '',
          description: '',
        },
        {
          name: 'Колодец желаний',
          expansion: 'Романтический сад',
          description: '',
        },
        {
          name: 'Акула',
          expansion: '',
          description: '',
        },
        {
          name: 'Русалка',
          expansion: '',
          description: '',
        },
        {
          name: 'Пруд с пираньями',
          expansion: '',
          description: '',
        },
        {
          name: 'Сейф',
          expansion: '',
          description: '',
        },
        {
          name: 'Стол для робототехники',
          expansion: '',
          description: '',
        },
        {
          name: 'Жуки',
          expansion: '',
          description: '',
        },
        {
          name: 'Стена для скалолазания',
          expansion: '',
          description: '',
        },
        {
          name: 'Сушилка',
          expansion: '',
          description: '',
        },
        {
          name: 'Исследования',
          expansion: '',
          description: '',
        },
      ].map((death) => {
        return {
          ...death,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }),
    );
  },

  down: async (queryInterface: QueryInterface, _sequelize: Sequelize) => {
    await queryInterface.bulkDelete('deaths', {});
  },
};
