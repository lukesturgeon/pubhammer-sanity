import {defineField, defineType} from 'sanity'

import {DocumentsIcon} from '@sanity/icons'

export default defineType({
  name: 'publication',
  title: 'GHBs',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    })
  ],
})