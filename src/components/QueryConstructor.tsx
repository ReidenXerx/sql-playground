// QueryConstructor.tsx
import CodeEditor from './CodeEditor'
import { Box } from '@mui/material'
import { MultiTabView } from './MultiTabView'
import { useState } from 'react'
import { SourceDatabaseName } from 'src/constants'
import { LoaderStates, RawOutputBySource, SourceDatabaseModes } from 'src/types'

export const QueryConstructor = () => {
  const [loaderStates, setLoaderStates] = useState<LoaderStates>({
    [SourceDatabaseName.SQL]: false,
    [SourceDatabaseName.PVML]: false,
  })

  const [sourceDatabaseMode, setSourceDatabaseMode] =
    useState<SourceDatabaseModes>(0)

  const [rawOutputBySource, setRawOutputBySource] = useState<
    RawOutputBySource | undefined
  >()

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <CodeEditor
        setLoaderStates={setLoaderStates}
        setRawOutputBySource={setRawOutputBySource}
        sourceDatabaseMode={sourceDatabaseMode}
      />
      <MultiTabView
        loaderStates={loaderStates}
        rawOutputBySource={rawOutputBySource}
        sourceDatabaseMode={sourceDatabaseMode}
        setSourceDatabaseMode={setSourceDatabaseMode}
      />
    </Box>
  )
}
