import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'battlepack',
  title: 'Battlepacks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'bcp',
      title: 'BCP Registration',
      type: 'url',
    }),
    defineField({
      name: 'eventbrite',
      title: 'Eventbrite',
      type: 'url',
    }),
    defineField({
      name: 'battleplans',
      title: 'Battleplans',
      type: 'array',
      of: [{type: 'reference', to: {type: 'battleplan'}}],
      validation: Rule => Rule.required().min(3),
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
