/**
 * CatalogManager
 */
export default class CatalogManager {

  /**
   * Transform a human readable catalog object into flatten object for state.
   * {
   * "id": 1,
   * "value": "Lieux",
   * "expressions": [
   *   {
   *     "id": 2,
   *     "value": "Paris"
   *   }
   * ]
   *},
   *{
   *  "id": 3,
   *  "value": "Personnages",
   *  "expressions": [
   *    {
   *      "id": 4,
   *      "value": "Chewbacca"
   *    }
   *  ]
   *}
   *
   * become
   *
   * {
   * "categories": {
   *   1: {
   *     id: 1,
   *     value: "Lieux",
   *     expressions: [2]
   *   },
   *   3: {
   *     id: 3,
   *     value: "Personnages",
   *     expressions: [4]
   *   },
   * }
   * "expressions": [
   *   {
   *     "id": 2,
   *     "value": "Paris"
   *   },
   *   {
   *     "id": 4,
   *     "value": "Chewbacca"
   *   }
   * ]
   *}
   *
   * The goal is to flatten as maximum the state.
   *
   * @param {Object} data
   * @returns {Object}
   */
  static normalizeCatalogForState(data) {
    let normalizedCatalog = {
      categories: {},
      expressions: {},
      cards: {},
    };

    data.map((category) => {
      normalizedCatalog.categories[category.id] = {
        id: category.id,
        value: category.value,
        expressions: []
      };
      category.expressions.map((expression) => {
        normalizedCatalog.expressions[expression.id] = {
          id: expression.id,
          value: expression.value,
        };
        normalizedCatalog.categories[category.id].expressions.push(expression.id);
        normalizedCatalog.cards[category.id + "." + expression.id] = {
          categoryId: category.id,
          expressionId: expression.id
        };
      });
    });

    return normalizedCatalog;
  }
}