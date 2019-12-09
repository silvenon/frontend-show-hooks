import Home from '../src/pages/index'
import { render } from '@testing-library/react'

describe('pages', () => {
  describe('Home', () => {
    it('should greet the world', () => {
      const { container } = render(<Home />)
      expect(container).toHaveTextContent('Hello world!')
    })
  })
})
