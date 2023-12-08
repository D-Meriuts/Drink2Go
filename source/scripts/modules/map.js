function map() {
  document.querySelector('.map').classList.remove('map--nojs');

  const map = L.map('map')
    .setView({
      lat: 59.96831,
      lng: 30.31748,
    }, 16);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);

  const point = [
    {
      title: 'Drink2Go',
      adress: 'Санкт-Петербург, набережная реки Карповки, дом 5',
      tel: '+7 (999) 999-99-99',
      lat: 59.96831,
      lng: 30.31748,
    },
  ];

  const createCustomPopup = ({ lat, lng, title, adress, tel }) =>
    `<section class="balloon">
<h3 class="balloon__title">${title}</h3>
<p class="balloon__text">${adress}</p>
<a class="balloon__phone" href="tel:+79999999999">${tel}</a>
<p class="balloon__lat-lng">Координаты: ${lat}, ${lng}</p>
</section>`;

  point.forEach((point) => {
    const { lat, lng } = point;

    const icon = L.icon({
      iconUrl: '../../images/icons/stack.svg#map_pin',
      iconSize: [38, 50],
      iconAnchor: [17, 50],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        createCustomPopup(point),
        {
          keepInView: true,
        },
      );
  });

}

export default map;
