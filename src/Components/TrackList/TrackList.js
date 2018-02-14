import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

export class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {this.props.tracks.map(track => <Track
              track={track}
              name={this.props.track.name}
              artist={this.props.track.artist}
              album={this.props.track.album}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove} />}
      </div>
    );
  }
}

export default TrackList;
