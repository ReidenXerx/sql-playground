import {
  successSimpleSampleSQL,
  successLongSimpleSampleSQL,
} from './requestsSQL'
import {
  successSimpleSamplePVML,
  successLongSimpleSamplePVML,
} from './requestsPVML'
import { SourceDatabaseName } from 'src/constants'

const hashMockRequests: {
  [key: string]: { [key in SourceDatabaseName]: () => Promise<any> }
} = {
  ['select * from users']: {
    [SourceDatabaseName.SQL]: successSimpleSampleSQL,
    [SourceDatabaseName.PVML]: successSimpleSamplePVML,
  },
  ['select * from usersLong']: {
    [SourceDatabaseName.SQL]: successLongSimpleSampleSQL,
    [SourceDatabaseName.PVML]: successLongSimpleSamplePVML,
  },
}

export default hashMockRequests
