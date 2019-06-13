import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = 'https://picsum.photos/id/1037/400/400';

document.body.append(image);
