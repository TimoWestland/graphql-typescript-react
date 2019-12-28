import * as React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import LaunchList, { Props } from './LaunchList'

const mockData = {
  launches: [
    {
      flight_number: 1,
      mission_name: 'some name',
      launch_year: 2019,
    },
    {
      flight_number: 2,
      mission_name: 'some name',
      launch_year: 2019,
    },
    {
      flight_number: 3,
      mission_name: 'some name',
      launch_year: 2019,
    },
  ],
}

describe('LaunchList', () => {
  const onIdChange = jest.fn()
  const defaultProps: Props = {
    onIdChange,
    data: mockData,
  }

  const create = (props: Partial<Props> = {}) => render(<LaunchList {...defaultProps} {...props} />)

  afterEach(() => {
    cleanup()
    onIdChange.mockReset()
  })

  it('should match snapshot', () => {
    const { container } = create()
    expect(container).toMatchSnapshot()
  })

  it('should handle id change', () => {
    const { getAllByTestId } = create()
    const items = getAllByTestId('launch-list-item')

    fireEvent.click(items[0])
    expect(defaultProps.onIdChange).toHaveBeenCalledWith(1)

    fireEvent.click(items[1])
    expect(defaultProps.onIdChange).toHaveBeenCalledWith(2)
  })
})
