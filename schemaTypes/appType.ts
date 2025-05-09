import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'app',
  title: 'App',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'battlepack',
      title: 'Current Battlepack',
      type: 'reference',
      to: [{type: 'battlepack'}],
      validation: Rule => Rule.required(),
      // Only allow one reference by default in Sanity reference fields
    }),
    defineField({
      name: 'timer',
      title: 'Timer',
      type: 'object',
      fields: [
        defineField({
          name: 'deployment',
          title: 'Deployment',
          type: 'number',
          initialValue: 20,
          validation: Rule => Rule.required().integer().min(1).max(60),
        }),
        defineField({
          name: 'round1',
          title: 'Round 1',
          type: 'number',
          initialValue: 20,
          validation: Rule => Rule.required().integer().min(1).max(60),
        }),
        defineField({
          name: 'round2',
          title: 'Round 2',
          type: 'number',
          initialValue: 20,
          validation: Rule => Rule.required().integer().min(1).max(60),
        }),
        defineField({
          name: 'round3',
          title: 'Round 3',
          type: 'number',
          initialValue: 20,
          validation: Rule => Rule.required().integer().min(1).max(60),
        }),
        defineField({
          name: 'round4',
          title: 'Round 4',
          type: 'number',
          initialValue: 20,
          validation: Rule => Rule.required().integer().min(1).max(60),
        }),
        defineField({
          name: 'round5',
          title: 'Round 5',
          type: 'number',
          initialValue: 20,
          validation: Rule => Rule.required().integer().min(1).max(60),
        }),
      ],
    }),
  ],
})
