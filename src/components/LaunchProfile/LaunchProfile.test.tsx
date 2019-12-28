import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { LaunchProfileQuery } from '../../generated/graphql'
import LaunchProfile, { Props } from './LaunchProfile'

const mockLaunch: LaunchProfileQuery['launch'] = {
  flight_number: 1,
  mission_name: 'Some name',
  launch_year: 2019,
  launch_success: true,
  details: 'Some more information about this launch.',
  launch_site: {
    site_name: 'Almere haven',
  },
  rocket: {
    rocket_name: 'Rocket man',
    rocket_type: 'Elton John',
  },
  links: {
    flickr_images: ['/some/src1.png', '/some/src2.png'],
  },
}

describe('LaunchProfile', () => {
  const defaultProps: Props = {
    data: {
      launch: mockLaunch,
    },
  }

  const create = (props: Partial<Props> = {}) =>
    render(<LaunchProfile {...defaultProps} {...props} />)

  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    const { container } = create()
    expect(container).toMatchSnapshot()
  })

  it('should render failed status if launch failed', () => {
    const { getByText } = create({
      data: {
        launch: {
          ...mockLaunch,
          launch_success: false
        },
      },
    })
    const statusFailed = getByText('Failed')
    expect(statusFailed).toBeInTheDocument()
  })
})
