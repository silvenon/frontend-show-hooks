import { queryHelpers, buildQueries } from '@testing-library/react'

const queryAllByTestId = (...args) =>
  queryHelpers.queryAllByAttribute('data-test', ...args)

const getMultipleError = (c, dataTestValue) =>
  `Found multiple elements with the data-test attribute of: ${dataTestValue}`
const getMissingError = (c, dataTestValue) =>
  `Unable to find an element with the data-test attribute of: ${dataTestValue}`

const [
  queryByTestId,
  getAllByTestId,
  getByTestId,
  findAllByTestId,
  findByTestId,
] = buildQueries(queryAllByTestId, getMultipleError, getMissingError)

export {
  queryByTestId,
  getAllByTestId,
  getByTestId,
  findAllByTestId,
  findByTestId,
}
