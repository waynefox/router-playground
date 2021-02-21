import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image from '../images/about-us.webp';

const About = () => {
  return (
    <div>
      <LazyLoadImage
        src={image}
        alt={image.name}
        delayMethod='throttle'
        delayTime='30000'
        effect='blur'
      />
    </div>
  );
};

export default About;
