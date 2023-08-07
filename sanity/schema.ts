import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import translation from './schemas/translation'
import author from './schemas/author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, translation, author, category, blockContent],
}
