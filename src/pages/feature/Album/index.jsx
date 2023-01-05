import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {

  const albumList = [
    {
      id: 1,
      album: {
        name: "Mery christmas",
        thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/1/5/2/5/152586f3b94196ed1aee4246b817beac.jpg"
      }
    },
    {
      id: 2,
      album: {
        name: "Happy New Year",
        thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/a/9/5/f/a95f996ec5e1488d988546a4a5478366.jpg"
      }
    },
    {
      id: 3,
      album: {
        name: "Happy Lunar",
        thumbnailUrl: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/0/c/9/60c9aa3073637f0502dd25cc68b9176e.jpg"
      }
    }
  ]

  return (
    <div>
      <h2>Có thẻ bạn sẽ thích đấy</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;