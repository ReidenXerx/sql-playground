import { SourceDatabaseName } from './constants'

export type LoaderStates = {
  [key in SourceDatabaseName]: boolean
}

export type RawOutput = Array<Array<string>>

export type RawOutputBySource = { [key in SourceDatabaseName]: RawOutput }

export type SourceDatabaseModes = 0 | 1
