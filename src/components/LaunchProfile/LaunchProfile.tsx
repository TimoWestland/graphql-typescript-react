import './LaunchProfile.css'

import * as React from 'react'
import { LaunchProfileQuery } from '../../generated/graphql'

export interface Props {
  data: LaunchProfileQuery
}

export const LaunchProfile: React.FC<Props> = ({ data }) => {
  if (!data.launch) {
    return <div>No launch available</div>
  }

  const { launch } = data

  return (
    <div className="launch-profile">
      <div className="launch-profile__status">
        <span>Flight {launch.flight_number}: </span>
        {launch.launch_success ? (
          <span className="launch-profile__success">Success</span>
        ) : (
          <span className="launch-profile__failed">Failed</span>
        )}
      </div>
      <h1 className="launch-profile__title">
        {launch.mission_name}
        {launch.rocket && ` (${launch.rocket.rocket_name} | ${launch.rocket.rocket_type})`}
      </h1>
      <p className="launch-profile__description">{launch.details}</p>
      {!!launch.links && !!launch.links.flickr_images && (
        <div className="launch-profile__image-list">
          {launch.links.flickr_images.map((image) =>
            image ? <img src={image} className="launch-profile__image" key={image}  alt="yolo"/> : null
          )}
        </div>
      )}
    </div>
  )
}

export default LaunchProfile
