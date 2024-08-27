import { type SchemaTypeDefinition } from 'sanity'
import blog from '../schemas/blog'
import job from '../schemas/job'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, job],
}
