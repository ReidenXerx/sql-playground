// MultiTabView.tsx
import { Tabs, Tab, Box, CircularProgress, Typography } from '@mui/material'
import VirtualizedTable from './VirtualizedTable'
import {
  LoaderStates,
  RawOutput,
  RawOutputBySource,
  SourceDatabaseModes,
} from 'src/types'
import { SourceDatabaseName } from 'src/constants'

type SetSourceDatabaseMode = (state: SourceDatabaseModes) => SourceDatabaseModes

type MultiTabViewTableProps = {
  rawOutputBySource?: RawOutputBySource
  loaderStates: LoaderStates
  sourceDatabaseMode: SourceDatabaseModes
  setSourceDatabaseMode: (
    newDatabaseMode: SourceDatabaseModes | SetSourceDatabaseMode,
  ) => void
}

export const MultiTabView = ({
  rawOutputBySource,
  loaderStates,
  sourceDatabaseMode,
  setSourceDatabaseMode,
}: MultiTabViewTableProps) => {
  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: SourceDatabaseModes,
  ) => {
    setSourceDatabaseMode(newValue)
  }

  const getContent = (source: SourceDatabaseName) => {
    if (!loaderStates[source] && !rawOutputBySource?.[source]) {
      return (
        <Typography variant="h5" color="white">
          There is empty
        </Typography>
      )
    }
    if (loaderStates[source]) {
      return <CircularProgress color="success" size={30} thickness={5} />
    }
    if (!loaderStates[source] && rawOutputBySource?.[source]) {
      return (
        <VirtualizedTable
          rawOutput={
            (rawOutputBySource && rawOutputBySource[source]) ??
            ({} as RawOutput)
          }
        />
      )
    }
  }

  return (
    <Box borderBottom="2px solid white" sx={{ width: '45%', height: '350px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={sourceDatabaseMode}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { backgroundColor: 'white' } }}
        >
          <Tab
            label="SQL"
            sx={{
              color: 'gray', // Customize the text color for unselected tab
              '&.Mui-selected': {
                color: '#FE6B8B', // Customize the text color for selected tab
              },
            }}
          />
          <Tab
            label="PVML"
            sx={{
              color: 'gray', // Customize the text color for unselected tab
              '&.Mui-selected': {
                color: '#13F200', // Customize the text color for selected tab
              },
            }}
          />
        </Tabs>
      </Box>
      {getContent(
        sourceDatabaseMode === 0
          ? SourceDatabaseName.SQL
          : SourceDatabaseName.PVML,
      )}
    </Box>
  )
}
