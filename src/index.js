const button = document.createElement('button');
button.innerText = 'Click Me';
button.addEventListener('click', e => {
  System.import('./image_viewer').then(module => {
    module.default();
  });
});

document.body.append(button);
