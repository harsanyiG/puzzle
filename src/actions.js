// const basePanel = [
//   [
//     [-1, 1],
//     [0, 1],
//     [1, 1],
//   ],
//   [
//     [-1, 0],
//     [0, 0],
//     [1, 0],
//   ],
//   [
//     [-1, -1],
//     [0, -1],
//     [1, -1],
//   ]]

const basePanel = [
  [
    [-1.1, 1.1],
    [0, 1.1],
    [1.1, 1.1],
  ],
  [
    [-1.1, 0],
    [0, 0],
    [1.1, 0],
  ],
  [
    [-1.1, -1.1],
    [0, -1.1],
    [1.1, -1.1],
  ],
]

export const getBlockCoord = (row, column) => basePanel[row - 1][column - 1]

export const generateBase = () => {
  const skippedBlock = {
    row: Math.floor(Math.random() * 3),
    column: Math.floor(Math.random() * 3),
  }


  const startPanel = [...basePanel]
  startPanel[skippedBlock.row] = startPanel[skippedBlock.row].filter(
    (_coord, index) => index !== skippedBlock.column
  )

  return startPanel
}
