let id = 1;

/**
 * Static word catalog.
 * For convenience we use uniq id for every entry/subEntry
 */
export default [
  {
    "id": id++,
    "value": "Lieux",
    "expressions": [
      {
        "id": id++,
        "value": "Paris"
      },
      {
        "id": id++,
        "value": "Londres"
      },
      {
        "id": id++,
        "value": "Nancy"
      },
      {
        "id": id++,
        "value": "Chine"
      }
    ]
  },
  {
    "id": id++,
    "value": "Personnages",
    "expressions": [
      {
        "id": id++,
        "value": "Chewbacca"
      },
      {
        "id": id++,
        "value": "Donald"
      }
    ]
  }
]