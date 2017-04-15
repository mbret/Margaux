const uuidV4 = require('uuid/v4')

let placesArray = require('./catalog/places.json')
let id = 1

let placesArrayWithId = placesArray.map(item => {
  return {
    id: uuidV4(),
    value: item
  }
})

/**
 * Static word catalog.
 * For convenience we use uniq id for every entry/subEntry
 */
export default [
  {
    'id': id++,
    'value': 'Lieux',
    'expressions': placesArrayWithId
  },
  {
    'id': id++,
    'value': 'Personnages',
    'expressions': [
      {
        'id': id++,
        'value': 'Chewbacca'
      },
      {
        'id': id++,
        'value': 'Donald'
      }
    ]
  }
]