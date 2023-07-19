import { useEffect, useState } from 'react'
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window'
import { RawOutput } from 'src/types'

type VirtualizedTable = {
  rawOutput: RawOutput
}

const VirtualizedTable = ({ rawOutput }: VirtualizedTable) => {
  const [robustOutput, setRobustOutput] = useState<
    Array<{ [key: string]: any }>
  >([])

  useEffect(() => {
    const keys = rawOutput[0]
    const values = rawOutput.slice(1)
    const robustOutput = [] as Array<{ [key: string]: any }>
    for (let indexV = 0; indexV < values.length; indexV++) {
      const value = values[indexV]
      robustOutput.push({})
      for (const [index, key] of keys.entries()) {
        robustOutput[indexV][key] = value[index]
      }
    }
    setRobustOutput(robustOutput)
  }, [rawOutput])

  const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => (
    <div style={style}>{robustOutput[rowIndex][rawOutput[0][columnIndex]]}</div>
  )

  const HeaderCell = ({ columnIndex, style }: GridChildComponentProps) => (
    <div style={style}>{rawOutput[0][columnIndex]}</div>
  )

  return (
    robustOutput.length && (
      <>
        <Grid
          columnCount={rawOutput[0].length}
          columnWidth={150}
          height={35}
          rowCount={1}
          rowHeight={35}
          width={500}
          style={{
            color: 'white',
            backgroundColor: '#FE6B8B',
            marginLeft: '10px',
          }}
        >
          {HeaderCell}
        </Grid>
        <Grid
          columnCount={rawOutput[0].length}
          columnWidth={150}
          height={300}
          rowCount={robustOutput.length}
          rowHeight={35}
          width={300}
          style={{ color: 'white', marginLeft: '10px' }}
        >
          {Cell}
        </Grid>
      </>
    )
  )
}

export default VirtualizedTable
