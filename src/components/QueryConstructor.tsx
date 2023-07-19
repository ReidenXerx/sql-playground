// QueryConstructor.tsx
import CodeEditor from './CodeEditor'
import { Box } from '@mui/material'
import { MultiTabView } from './MultiTabView'
import { useState } from 'react'
import { SourceDatabaseName } from 'src/constants'
import { LoaderStates, RawOutputBySource } from 'src/types'

export const QueryConstructor = () => {
  const [loaderStates, setLoaderStates] = useState<LoaderStates>({
    [SourceDatabaseName.SQL]: false,
    [SourceDatabaseName.PVML]: false,
  })

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
      />
      <MultiTabView
        loaderStates={loaderStates}
        rawOutputBySource={rawOutputBySource}
      />
    </Box>
  )
}
