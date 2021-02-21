import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import image from '../images/contact.webp';

const Contact = () => {
  return (
    <div>
      <LazyLoadImage
        src={image}
        alt={image.name}
        delayMethod='debounce'
        delayTime='30000'
        effect='opacity'
      />
    </div>
  );
};

export default Contact;
