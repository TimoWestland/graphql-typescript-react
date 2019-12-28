import './LaunchList.css'

import * as React from 'react'
import { LaunchListQuery } from '../../generated/graphql'

export interface OwnProps {
  onIdChange: (newId: number) => void
}

export interface Props extends OwnProps {
  data: LaunchListQuery
}

export const LaunchList: React.FC<Props> = ({ data, onIdChange }) => (
  <div className="launch-list">
    <h3>Launches</h3>
    <ol className="launch-list__list">
      {!!data.launches &&
        data.launches.map(
          (launch, i) =>
            !!launch && (
              <li
                key={i}
                data-testid="launch-list-item"
                className="launch-list__item"
                onClick={() => onIdChange(launch.flight_number!)}
              >
                {launch.mission_name} {launch.launch_year}
              </li>
            )
        )}
    </ol>
  </div>
)

export default LaunchList
