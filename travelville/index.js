const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 2000
});
