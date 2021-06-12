module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'Niveis',
      [
        {
          desct_nivel: 'básico',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desct_nivel: 'intermediário',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          desct_nivel: 'avançado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Niveis', null, {})
  },
}
