import React from 'react';
import PlaylistItem from '../PlaylistItem';
import withLink from '../hoc/withLink';
import StyledPlaylistitems from '../styles/StyledPlaylistitems';

const PlaylistItemsWithLink = withLink(PlaylistItem);

const PlaylistItems = ({ videos, active }) => (
  <StyledPlaylistitems>
    {videos.map(video => (
      <PlaylistItemsWithLink
        key={video.id}
        video={video}
        active={video.id === active.id ? true : false}
        played={video.played} />
    ))}
  </StyledPlaylistitems>
);

export default PlaylistItems;