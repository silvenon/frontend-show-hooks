import { render as originalRender, queries } from '@testing-library/react'
import * as customQueries from './queries'

const render = (ui, options) =>
  originalRender(ui, {
    ...options,
    queries: {
      ...queries,
      ...customQueries,
    },
  })

export * from '@testing-library/react'
export { render }
