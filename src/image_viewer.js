// import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {
  const smallImg = document.createElement('img');
  smallImg.src = small;
  document.body.append(smallImg);
};

// const bigImg = document.createElement('img');
// bigImg.src = big;
// document.body.append(bigImg);
