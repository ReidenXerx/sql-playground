import { successSimpleSampleSQL } from './requestsSQL'
import { successSimpleSamplePVML } from './requestsPVML'
import { SourceDatabaseName } from 'src/constants'

const hashMockRequests: {
  [key: string]: { [key in SourceDatabaseName]: () => Promise<any> }
} = {
  ['select * from users']: {
    [SourceDatabaseName.SQL]: successSimpleSampleSQL,
    [SourceDatabaseName.PVML]: successSimpleSamplePVML,
  },
}

export default hashMockRequests
