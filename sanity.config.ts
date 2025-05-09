import { defineConfig } from 'sanity'
import { structureTool, StructureBuilder } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'
import { MobileDeviceIcon } from '@sanity/icons'
import { visionTool } from '@sanity/vision'


const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Apps')
    .items([

      S.listItem()
        .title('Pubhammer')
        .icon(MobileDeviceIcon)
        .child(
          S.document()
            .schemaType('app')
            .documentId('e7de207a-333f-485e-a6dc-d85162843155')),
      S.listItem()
        .title('Pubhammer OPEN')
        .icon(MobileDeviceIcon)
        .child(
          S.document()
            .schemaType('app')
            .documentId('fd43b9f2-b310-487c-95ca-db1dfaa71cdd')),

      S.divider(),

     S.documentTypeListItem('battlepack')
      .title('Battlepacks')
      .child(
        S.documentTypeList('battlepack')
          .title('Battlepacks')
          .defaultOrdering([
            {field: 'date', direction: 'desc'}
          ])
      ),

      ...S.documentTypeListItems().filter(
        listItem => !['app', 'battlepack'].includes(
          listItem.getId() ?? ''
        )
      ),
    ])



export default defineConfig({
  name: 'default',
  title: 'pubhammer',

  projectId: 'rc69hj3l',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    ...(process.env.NODE_ENV === 'development' ? [visionTool()] : [])
  ],

  schema: {
    types: schemaTypes,
  },
})