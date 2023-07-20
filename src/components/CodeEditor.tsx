import { useState } from 'react'
import styled from '@emotion/styled'
import CodeEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism.css'
import { Box, Button, Typography } from '@mui/material'
import { fetchRequest } from 'src/services/requester'
import { RequestMethods, SourceDatabaseName, apiUrl } from 'src/constants'
import { LoaderStates, RawOutput, RawOutputBySource } from 'src/types'
import '../CodeEditor.css'
import { toast } from 'react-toastify'

const sqlAllowedRegexp = new RegExp(
  "[^A-Za-z0-9_ \\-=()*.,;!@#$%^&{}|<>?:/'`~\\[\\]]",
  'g',
)

const GradientBorderBox = styled(Box)(({ theme: _theme }) => ({
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    border: '2px solid',
    width: 'calc(100% + 5px)',
    borderColor: 'transparent',
    borderRadius: '4px',
    backgroundImage: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    zIndex: 0,
  },
}))

type SetStateFromPrevious = (state: LoaderStates) => LoaderStates
type SetRawOutputBySource = (
  state: RawOutputBySource | undefined,
) => RawOutputBySource

type CodeEditorComponentProps = {
  setLoaderStates: (loaderStates: LoaderStates | SetStateFromPrevious) => void
  setRawOutputBySource: (
    rawOutputBySource: RawOutputBySource | SetRawOutputBySource,
  ) => void
}

const CodeEditorComponent = ({
  setLoaderStates,
  setRawOutputBySource,
}: CodeEditorComponentProps) => {
  const [query, setQuery] = useState('')

  const handleChange = (newValue: string) => {
    const cleanedValue = newValue.replaceAll(sqlAllowedRegexp, '')
    if (cleanedValue.length !== newValue.length) {
      toast.error('You inputed restricted symbol!')
    }
    setQuery(cleanedValue)
  }

  const onClickPlay = () => {
    setLoaderStates({
      [SourceDatabaseName.SQL]: true,
      [SourceDatabaseName.PVML]: true,
    })
    for (const source of Object.values(SourceDatabaseName)) {
      fetchRequest<RawOutput>(apiUrl, {
        method: RequestMethods.post,
        body: { source, sql: query },
      })
        .then((data: RawOutput) => {
          setRawOutputBySource(
            (rawOutputBySource) =>
              ({
                ...(rawOutputBySource ?? {}),
                [source]: data,
              } as RawOutputBySource),
          )
        })
        .catch(() =>
          toast.error(`Wow, it seems request for ${source} was failed`),
        )
        .finally(() =>
          setLoaderStates((state: LoaderStates) => ({
            ...state,
            [source]: false,
          })),
        )
    }
  }

  return (
    <Box justifyContent="flex-start" sx={{ width: '45%' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography
          textAlign="left"
          color="white"
          marginBottom="5px"
          variant="h4"
        >
          Input your query here
        </Typography>
        <Button onClick={onClickPlay}>{`Play -->`}</Button>
      </Box>

      <GradientBorderBox justifyContent="flex-start" sx={{ width: '100%' }}>
        <CodeEditor
          value={query}
          onValueChange={handleChange}
          highlight={(code) => highlight(code, languages.sql, 'sql')}
          padding={10}
          style={{
            border: '2px solid',
            borderColor: 'white',
            fontFamily: '"Fira Code", monospace',
            fontSize: 14,
            width: '100%',
            color: 'white',
            height: '300px',
            backgroundColor: '#151515',
          }}
        />
      </GradientBorderBox>
    </Box>
  )
}

export default CodeEditorComponent
