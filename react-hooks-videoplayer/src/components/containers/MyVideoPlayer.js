import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from './Playlist';
import StyledMyVideoPlayer from '../styles/StyledMyVideoPlayer';

const themeDark = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayer: 'none',
  color: '#fff'
};

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayer: 'none',
  color: '#353535'
};

const defaultVideos = {
  playlist:[
    {
      "num": 1,
      "title": "Yanni - For All Seasons",
      "id": "uKgue7YnNBo",
      "duration": "9:33",
      "video": "https://www.youtube.com/embed/uKgue7YnNBo"
    },
    {
      "num": 2,
      "title": "Yanni - World Dance",
      "id": "Fn8lodDV4Zw",
      "duration": "5:06",
      "video": "https://www.youtube.com/embed/Fn8lodDV4Zw"
    },
    {
      "num": 3,
      "title": "Kitaro - Matsuri",
      "id": "XhxbShjpwEU",
      "duration": "7:34",
      "video": "https://www.youtube.com/embed/XhxbShjpwEU"
    },
    {
      "num": 4,
      "title": "Kitaro - Earth and Heaven",
      "id": "DHuoneQoJO8",
      "duration": "10:56",
      "video": "https://www.youtube.com/embed/DHuoneQoJO8"
    },
    {
      "num": 5,
      "title": "There Is Only You In My Heart",
      "id": "lXVy3layeps",
      "duration": "05:20",
      "video": "https://www.youtube.com/embed/lXVy3layeps"
    },
    {
      "num": 6,
      "title": "Karunesh - Japanese Spring",
      "id": "K18A-CTPc7I",
      "duration": "05:43",
      "video": "https://www.youtube.com/embed/K18A-CTPc7I"
    },
    {
      "num": 7,
      "title": "DJ NONSTOP 2018 | Siêu Bass Cực Khủng Phê SML",
      "id": "sYF5RdwnmXc",
      "duration": "48:06",
      "video": "https://www.youtube.com/embed/sYF5RdwnmXc"
    },
    {
      "num": 8,
      "title": "Sonata Arctica - The Misery",
      "id": "kqi82tk0Lvk",
      "duration": "05:06",
      "video": "https://www.youtube.com/embed/kqi82tk0Lvk"
    },
    {
      "num": 9,
      "title": "BONUS - Xin Lỗi Em - Cẩm Ly & Minh Tuyết",
      "id": "tGgj_u1kP9k",
      "duration": "05:45",
      "video": "https://www.youtube.com/embed/tGgj_u1kP9k"
    },
    {
      "num": 10,
      "title": "BONUS - Nhạc Phim Tân Anh Hùng Xạ Điêu 2017",
      "id": "RS_DpiWfSJI",
      "duration": "02:23",
      "video": "https://www.youtube.com/embed/RS_DpiWfSJI"
    }
  ],
  playlistId: "hung-music-playlist-id-123456789"
};

const MyVideoPlayer = props => {
  const videos = {...defaultVideos};
  const savedState = JSON.parse(localStorage.getItem(`${videos.playlistId}`));

  const [state, setState] = useState({
    videos: savedState ? savedState.videos : videos.playlist,
    activeVideo: savedState ? savedState.activeVideo : videos.playlist[0],
    nightMode: savedState ? savedState.nightMode : true,
    playlistId: savedState ? savedState.playlistId : videos.playlistId,
    autoplay: false
  });

  // useEffect for working with localStorage and persist state
  useEffect(
    () => {
      localStorage.setItem(`${state.playlistId}`, JSON.stringify({...state}));
    },
    [state]
  );

  // useEffect for working with setting Pathname and changing Video state
  useEffect(
    () => {
      const videoId = props.match.params.activeVideoId;
      if (videoId !== undefined) {
        const newActiveVideo = state.videos.findIndex(video => video.id === videoId);
        setState({
          ...state,
          activeVideo: state.videos[newActiveVideo],
          autoplay: props.location.autoplay
        });
      } else {
        props.history.push({
          pathname: `/${state.activeVideo.id}`,
          autoplay: false
        });
      }
    },
    [props.match.params.activeVideoId]
  );

  const nightModeCallback = () => {
    setState({...state, nightMode: !state.nightMode});
  };

  const endCallback = () => {
    const videoId = props.match.params.activeVideoId;
    const currentVideoIndex = state.videos.findIndex(video => video.id === videoId);
    const nextVideoIndex = currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;
    props.history.push({
      pathname: `/${state.videos[nextVideoIndex].id}`,
      autoplay: false
    });
  };

  const progressCallback = (e) => {
    if (e.playedSeconds > 10 && e.playedSeconds < 11) {
      setState({
        ...state,
        videos: state.videos.map(element => {
          return element.id === state.activeVideo.id
            ? { ...element, played: true }
            : element;
        })
      });
    }
  };

  return (
    <ThemeProvider theme={state.nightMode ? themeDark : themeLight}>
      {state.videos !== null ? (
        <StyledMyVideoPlayer>
          <Video
            active={state.activeVideo}
            autoplay={Playlist.autoplay}
            endCallback={endCallback}
            progressCallback={progressCallback} />
          <Playlist
            videos={state.videos}
            active={state.activeVideo}
            nightModeCallback={nightModeCallback}
            nightMode={state.nightMode} />
        </StyledMyVideoPlayer>
      ) : null}
    </ThemeProvider>
  );
}

export default MyVideoPlayer;