const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 5000
});

const autocomplete = document.querySelector('.autocomplete');
M.Autocomplete.init(autocomplete, {
  data: {
    Aruba: 'img/aruba_thumb.jpg',
    'Cancun Mexico': 'img/cancun_thumb.jpg',
    Hawaii: 'img/hawaii_thumb.jpg',
    California: 'img/california_thumb.jpg',
    Bahamas: 'img/bahamas_thumb.jpg',
    Jamaica: 'img/jamaica_thumb.jpg',
    Europe: 'img/europe_thumb.jpg'
  }
});
