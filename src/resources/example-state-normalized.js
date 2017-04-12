/**
 * Example of a normalized state.
 */
import { normalize, schema } from 'normalizr'
import { categories } from './example-state'

// Define your item schema
const item = new schema.Entity('items')

// Define your category
const category = new schema.Entity('categories', {
  items: [item]
})

export const normalizedCategories = normalize(categories, [category])