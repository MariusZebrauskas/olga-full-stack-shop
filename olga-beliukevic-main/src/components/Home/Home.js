import React from 'react';
import Welcome from '../WelcomeImg/Welcome';
import Playlist from '../PlayList/PlayLIst';
import { RenderingStyles } from '../../Shared/renderingStyles';

const Home = ({
  language,
  addToShopCartAlbum,
  addToShopCartSingleSong,
  valsaiLt,
  valsaiEng,
  valsaiRu,
  insidePlaylist,
  mouseClicked,
  theCirkusHasArivedLt,
  theCirkusHasArivedRu,
  theCirkusHasArivedEng,
}) => {
  return (
    <RenderingStyles>
      <Welcome language={language}></Welcome>
      <Playlist
        insidePlaylist={insidePlaylist}
        mouseClicked={mouseClicked}
        language={language}
        theCirkusHasArivedLt={theCirkusHasArivedLt}
        theCirkusHasArivedRu={theCirkusHasArivedRu}
        theCirkusHasArivedEng={theCirkusHasArivedEng}
        valsaiLt={valsaiLt}
        valsaiEng={valsaiEng}
        valsaiRu={valsaiRu}
        addToShopCartAlbum={addToShopCartAlbum}
        addToShopCartSingleSong={addToShopCartSingleSong}
      ></Playlist>
    </RenderingStyles>
  );
};

export default Home;
