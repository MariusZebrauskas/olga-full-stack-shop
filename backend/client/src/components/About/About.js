import { RenderingStyles } from '../../Shared/renderingStyles';
import { Wrapeer } from './styledAbout';
import Pratarme from './Pratarme';

import { commentsLt, commentsEng, commentsRu } from './obj-about';
import Comments from './Comments';
const About = ({ language}) => {
  

  return (
    <>
 
        <RenderingStyles>
          <Wrapeer>
            <Pratarme
              language={language}
            ></Pratarme>
            <Comments
              commentsRu={commentsRu}
              language={language}
              commentsLt={commentsLt}
              commentsEng={commentsEng}
            ></Comments>
          </Wrapeer>
        </RenderingStyles>
    </>
  );
};

export default About;
