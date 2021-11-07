import Header from './Header';
import { useState, useEffect, useRef } from 'react';
import { MainWrapper, SlideWrapper } from './styles';
import Cards from './Cards';
import Albums from './Albums';

const PlayLIst = ({
  language,
  theCirkusHasArivedLt,
  theCirkusHasArivedEng,
  theCirkusHasArivedRu,
  valsaiLt,
  valsaiEng,
  valsaiRu,
  addToShopCartAlbum,
  addToShopCartSingleSong,
  mouseClicked,
  insidePlaylist,
}) => {
  //playlist media query logic
  //remove playlist margin and set it to 0 on small screen devices
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const trackWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', trackWidth);
    if (width < 769) {
      return (ref.current.style.marginLeft = `0px`);
    }
    return () => {
      window.removeEventListener('resize', trackWidth);
    };
  }, [width]);
  const [currentCard, setCurrentCard] = useState(theCirkusHasArivedLt);
  let ref = useRef(null);
  const changeAlbum = (params) => {
    setCurrentCard(params);
  };

  //language logic
  useEffect(() => {
    if (language === 'lt') {
      setCurrentCard(theCirkusHasArivedLt);
    } else if (language === 'eng') {
      setCurrentCard(theCirkusHasArivedEng);
    } else if (language === 'ru') {
      setCurrentCard(theCirkusHasArivedRu);
    }
  }, [language]);
  //playlist functionality variables
  //there is 2 variables in App component   (let insidePlaylist = false;  let mouseClicked)
  let mouseCoordinateX = useRef(null);
  let mouseCoordinateXEnd = useRef(null);
  let currentMarginX = useRef(null);
  let walk = useRef(null);
  let moveElement = useRef(null);
  let cardWidth = 272;

  //playlist functionality

  const maxMargin = (width) => {
    let maximunWalk = width * currentCard.length + cardWidth;
    return maximunWalk;
  };
  const dontMoveOutOfScreenRight = () => {
    //protect dont disapier right
    let maxWidth = parseInt(maxMargin(cardWidth));
    let currenMargin = parseInt(ref.current.style.marginLeft);
    if (maxWidth + currenMargin < 0) {
      ref.current.style.marginLeft = `-${maxWidth}px`;
    }
  };
  const dontMoveOutOfScreenLeft = () => {
    if (ref.current.style.marginLeft > `0px`) {
      return (ref.current.style.marginLeft = `0px`);
    }
  };

  const onMouseEnter = (e) => {
    insidePlaylist = true;
    //media query chek in // on mobile this logic not working
    if (width < '768') {
      return;
    }
    //protect dont disapier left
    dontMoveOutOfScreenLeft();
    //protect dont disapier right
    dontMoveOutOfScreenRight();
  };
  const onMouseLeave = (e) => {
    //media query chek in // on mobile this logic not working
    if (width < '768') {
      return;
    }
    insidePlaylist = false;
    mouseClicked = false;

    //protect dont disapier left
    dontMoveOutOfScreenLeft();
    //protect dont disapier right
    dontMoveOutOfScreenRight();
  };

  const onMouseDown = (e) => {
    //media query chek in // on mobile this logic not working
    // if (e.target.parentNode.parentNode.clientWidth < '768') {
    //   return (ref.current.style.marginLeft = `0px`);
    // }
    mouseClicked = true;
    e.preventDefault();
    if (insidePlaylist && mouseClicked) {
      currentMarginX.current = ref.current.offsetLeft;
      mouseCoordinateX.current = e.clientX;
    }
    if (insidePlaylist === false) {
      //when buy item insidePlaylist sets to false for some reason this fixs it
      insidePlaylist = true;
    }
    //protect dont disapier left
    dontMoveOutOfScreenLeft();
    //protect dont disapier right
    dontMoveOutOfScreenRight();
  };

  const onMouseUp = (e) => {
    //media query chek in // on mobile this logic not working
    if (width < '768') {
      return;
    }
    mouseClicked = false;
    //protect dont disapier left
    dontMoveOutOfScreenLeft();
    //protect dont disapier right
    dontMoveOutOfScreenRight();
  };

  const onTouchMove = (e) => {
    if (e.target.parentNode.parentNode.clientWidth < '769') {
      return (ref.current.style.marginLeft = `0px`);
    }
  };
  const onMouseMove = (e) => {
    //media query chek in // on mobile this logic not working
    e.preventDefault();
    if (width < '768') {
      return;
    }

    if (insidePlaylist && mouseClicked) {
      mouseCoordinateXEnd.current = e.clientX;

      //walk funkcion

      walk.current = (x, end) => {
        let result = (end - x) * 2;

        return result;
      };
      //protect dont disapier left
      dontMoveOutOfScreenLeft();
      dontMoveOutOfScreenRight();


      moveElement.current =
        currentMarginX.current +
        walk.current(mouseCoordinateX.current, mouseCoordinateXEnd.current);

      ref.current.style.marginLeft = `${moveElement.current}px`;
    }
  };

  return (
    <>
      <Albums
        addToShopCartAlbum={addToShopCartAlbum}
        language={language}
        changeAlbum={changeAlbum}
        currentCard={currentCard}
        valsaiLt={valsaiLt}
        valsaiEng={valsaiEng}
        valsaiRu={valsaiRu}
        theCirkusHasArivedLt={theCirkusHasArivedLt}
        theCirkusHasArivedRu={theCirkusHasArivedRu}
        theCirkusHasArivedEng={theCirkusHasArivedEng}
      ></Albums>
      <Header currentCard={currentCard} language={language}></Header>
      <MainWrapper>
        <SlideWrapper
          ref={ref}
          onMouseUp={onMouseUp}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {currentCard.map((albumOne, index) => {
            return (
              <Cards
                albumOne={albumOne}
                addToShopCartSingleSong={addToShopCartSingleSong}
                language={language}
                key={index}
                {...albumOne}
              />
            );
          })}
        </SlideWrapper>
      </MainWrapper>
    </>
  );
};

export default PlayLIst;
