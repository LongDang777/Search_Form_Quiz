import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import "./styles.scss";

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired
};

function AlbumList({ albumList }) {

  return (
    <ul className="album_list">
      {albumList.map(({ id, album }) => (
        <li key={id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;