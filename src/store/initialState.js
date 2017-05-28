let getExtensionsCards = function () {
  let availableExtensions = require('../assets/cards/extensions/manifest.json')

  let extensionsCards = {}

  Object.keys(availableExtensions).forEach((key, index) => {
    for (let deck of availableExtensions[key]) {
      // TODO: make that work
      // ../assets/cards/extensions/starwars/characters.json
      // extensionsCards[deck] = require('../assets/cards/extensions/' + key + '/' + deck + '.json')
    }
  })

  extensionsCards['characters'] = require('../assets/cards/extensions/starwars/characters.json')
  extensionsCards['places'] = require('../assets/cards/extensions/starwars/places.json')
  extensionsCards['expressions'] = []

  return extensionsCards
}

export default {
  players: [],
  availableCards: {
    characters: require('../assets/cards/characters.json').concat(getExtensionsCards().characters),
    places: require('../assets/cards/places.json').concat(getExtensionsCards().places),
    expressions: require('../assets/cards/expressions.json').concat(getExtensionsCards().expressions)
  }
}
