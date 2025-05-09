import {defineField, defineType} from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

export default defineType({
  name: 'battleplan',
  title: 'Battleplans',
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
      description: 'Unique URL-friendly name generated from the title. You can edit if needed.',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '')
            .slice(0, 96),
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'reference',
      to: {type: 'publication'},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'number',
      title: 'Number',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'deploymentMap',
      title: 'Deployment Map',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publication: 'publication.title',
      number: 'number',
      media: 'deploymentMap',
    },
    prepare(selection) {
      const {title, publication, number, media} = selection;
      
      return {
        title: title,
        subtitle: `${publication} | ${Math.floor((number-1)/6)+1}:${((number-1)%6)+1}`,
        media: media,
      }
    },
  },
})
