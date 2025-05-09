import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export default defineType({
  name: 'battlepack',
  title: 'Battlepacks',
  type: 'document',
  icon: CalendarIcon,
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
  ],
  orderings: [
  {
    title: 'Date, Newest first',
    name: 'dateDesc',
    by: [
      {field: 'date', direction: 'desc'}
    ]
  },
  {
    title: 'Date, Oldest first',
    name: 'dateAsc',
    by: [
      {field: 'date', direction: 'asc'}
    ]
  }
],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare(selection) {
      const {title, date} = selection
      let subtitle = ''
      if (date) {
        // Format date as DD/MM/YY
        const d = new Date(date)
        const day = String(d.getDate()).padStart(2, '0')
        const month = String(d.getMonth() + 1).padStart(2, '0')
        const year = String(d.getFullYear())
        subtitle = `${day}/${month}/${year}`
      }
      return {
        title,
        subtitle,
      }
    },
  },
})
