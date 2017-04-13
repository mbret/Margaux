/**
 * Example of a normalized state.
 */
import { normalize, schema } from 'normalizr'
import state from './example-state'
let { categories, game } = state;

// Catalog state

// Define your item schema
const item = new schema.Entity('items')

// Define your category
const category = new schema.Entity('categories', {
  items: [item]
})

const normalizedCategories = normalize(categories, [category])

// Game state

// Define your card schema
const card = new schema.Entity('cards', [category])

// Define your player schema
const player = new schema.Entity('players', {
  cards: [card]
})

const normalizedGame = normalize(game, [player])

export default {
  categories: normalizedCategories,
  game: normalizedGame
}