import React, { useEffect } from 'react';
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
  muzikinePasakaLt,
  muzikinePasakaRu,
  muzikinePasakaEng,
}) => {
  useEffect(() => {
    // scroll up on render
    window.scroll(0, 0);
    return () => {};
  }, []);
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
        muzikinePasakaLt={muzikinePasakaLt}
        muzikinePasakaRu={muzikinePasakaRu}
        muzikinePasakaEng={muzikinePasakaEng}
        addToShopCartAlbum={addToShopCartAlbum}
        addToShopCartSingleSong={addToShopCartSingleSong}
      ></Playlist>
    </RenderingStyles>
  );
};

export default Home;
