import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'rc69hj3l',
    dataset: 'production'
  },
  autoUpdates: false,
  studioHost: 'pubhammer'
})
