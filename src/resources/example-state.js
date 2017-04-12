/**
 * Example of an non-normalized state.
 */
export const categories = [
  {
    'id': 1,
    'name': 'Lieux',
    'items': [
      {
        'id': 3,
        'name': 'Paris'
      },
      {
        'id': 4,
        'name': 'Londres'
      },
      {
        'id': 5,
        'name': 'Nancy'
      }
    ]
  },
  {
    'id': 2,
    'name': 'Personnages',
    'items': [
      {
        'id': 1,
        'name': 'Dark Vador'
      },
      {
        'id': 2,
        'name': 'Chewbacca'
      }
    ]
  }
]

export const game = {
  'players': [
    {
      'id': 1,
      'name': 'Joueur 1',
      'cards': [
        {
          'id': 1,
          'name': 'Personnages',
          'items': [
            {
              'id': 1,
              'name': 'Dark Vador'
            }
          ]
        },
        {
          'id': 2,
          'name': 'Lieux',
          'items': [
            {
              'id': 2,
              'name': 'Paris'
            }
          ]
        }
      ]
    }
  ],

  // The same structure as the main catalog with categories but with chosen cards relative to the number of players (ex.: 5 players => 5*10 items)
  'deck': [
    {
      'id': 1,
      'name': 'Personnages',
      'items': [
        {
          'id': 1,
          'name': 'Dark Vador'
        }
      ]
    },
    {
      'id': 2,
      'name': 'Lieux',
      'items': [
        {
          'id': 2,
          'name': 'Paris'
        }
      ]
    }
  ]
}