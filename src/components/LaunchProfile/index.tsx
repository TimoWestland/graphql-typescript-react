import * as React from 'react'
import { useLaunchProfileQuery } from '../../generated/graphql'
import LaunchProfile from './LaunchProfile'

interface Props {
  id: number
}

const LaunchProfileContainer: React.FC<Props> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  })

  React.useEffect(() => {
    refetch()
  }, [id, refetch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong!</div>
  }

  if (!data) {
    return <div>Select a flight from the panel on the left.</div>
  }

  return <LaunchProfile data={data} />
}

export default LaunchProfileContainer
