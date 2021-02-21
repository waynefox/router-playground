import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import image from '../images/home-page.png';

const Home = () => {
  const image =
    'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80';

  return (
    <div>
      <LazyLoadImage
        src={image}
        alt={image.name}
        delayMethod='throttle'
        delayTime='3000'
        effect='black-and-white'
      />
    </div>
  );
};

export default Home;
