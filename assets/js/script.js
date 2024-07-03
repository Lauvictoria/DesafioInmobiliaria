// Propiedades en venta 

const ventas1 = [
  {
      nombre: 'Apartamento de lujo en zona exclusiva',
      src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
      descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
      ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
      habitaciones: '4 Habitaciones |',
      baños: '4 Baños',
      costo: 5000,
      smoke: false,
      pets: false
  },
]

const ventas2 = [
  {
      nombre: 'Apartamento acogedor en la montaña',
      src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
      descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
      ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
      habitaciones: '2 Habitaciones |',
      baños: '1 Baño',
      costo: 1200,
      smoke: true,
      pets: true        
  },
]

const ventas3 = [
  {
      nombre: 'Penthouse de lujo con terraza panorámica',
      src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
      descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
      ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
      habitaciones: '3 Habitacion |',
      baños: '3 Baños',
      costo: 4500,
      smoke: false,
      pets: true
  } 
]

const proVentas1 = document.querySelector('.venta1container')
const proVentas2 = document.querySelector('.venta2container')
const proVentas3 = document.querySelector('.venta3container')


function createVentasTemplate(ventasArray) {
  let html = '';
  
  for (let vent of ventasArray) {
      const smokeIcon = vent.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban';
      const smokeColor = vent.smoke ? 'text-success' : 'text-danger';
      const smokeText = vent.smoke ? 'Permitido fumar' : 'Prohibido fumar';
  
      const petsIcon = vent.pets ? 'fas fa-paw' : 'fas fa-ban';
      const petsColor = vent.pets ? 'text-success' : 'text-danger';
      const petsText = vent.pets ? 'Permitidas mascotas' : 'Prohibidas mascotas';
  
      html += `<div class="card">
                  <img src="${vent.src}" class="card-img-top" />
                  <div class="card-body">
                      <h5 class="card-title">${vent.nombre}</h5>
                      <p class="card-text">${vent.descripcion}</p>
                      <p><i class="fas fa-map-marker-alt"></i> ${vent.ubicacion}</p>
                      <p><i class="fas fa-bed"></i> ${vent.habitaciones}<i class="fas fa-bath"></i> ${vent.baños}</p>
                      <p><i class="fas fa-dollar-sign"></i> ${vent.costo}</p>
                      <p class="${smokeColor}"><i class="${smokeIcon}"></i> ${smokeText}</p>
                      <p class="${petsColor}"><i class="${petsIcon}"></i> ${petsText}</p>
                  </div>
              </div>`;
  }

  return html;
}

proVentas1.innerHTML = createVentasTemplate(ventas1);
proVentas2.innerHTML = createVentasTemplate(ventas2);
proVentas3.innerHTML = createVentasTemplate(ventas3);


//PROPIEDADES EN ALQUILER

const alquiler1 = [
  {
      nombre: 'Apartamento en el centro de la ciudad',
      src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
      descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
      ubicacion: '123 Main Street, Anytown, CA 91234',
      habitaciones: '2 Habitaciones |',
      baños: '2 Baños',
      costo: 2000,
      smoke: false,
      pets: true
  },
];

const alquiler2 = [
  {
      nombre: 'Casa acogedora en los suburbios',
      src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      descripcion: 'Casa acogedora de 3 habitaciones con amplio jardín en una zona tranquila',
      ubicacion: '456 Suburbia Lane, Peaceful Town, TX 78901',
      habitaciones: '3 Habitaciones |',
      baños: '2 Baños',
      costo: 1500,
      smoke: true,
      pets: true
  },
];

const alquiler3 = [
  {
      nombre: 'Estudio moderno cerca de la playa',
      src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
      descripcion: 'Estudio moderno y amueblado a pocos pasos de la playa',
      ubicacion: '789 Beachside Blvd, Sunny Beach, FL 34567',
      habitaciones: '1 Habitación |',
      baños: '1 Baño',
      costo: 2500,
      smoke: false,
      pets: false
  },
];

const proAlquiler1 = document.querySelector('.alquiles1container');
const proAlquiler2 = document.querySelector('.alquiles2container');
const proAlquiler3 = document.querySelector('.alquiles3container');

function createAlquilerTemplate(alquilerArray) {
  let template = '';
  
  for (let alq of alquilerArray) {
      const smokeIcon = alq.smoke ? 'fas fa-smoking' : 'fas fa-smoking-ban';
      const smokeColor = alq.smoke ? 'text-success' : 'text-danger';
      const smokeText = alq.smoke ? 'Permitido fumar' : 'Prohibido fumar';
  
      const petsIcon = alq.pets ? 'fas fa-paw' : 'fas fa-ban';
      const petsColor = alq.pets ? 'text-success' : 'text-danger';
      const petsText = alq.pets ? 'Permitidas mascotas' : 'Prohibidas mascotas';
  
      template += `<div class="card">
                  <img src="${alq.src}" class="card-img-top" />
                  <div class="card-body">
                      <h5 class="card-title">${alq.nombre}</h5>
                      <p class="card-text">${alq.descripcion}</p>
                      <p><i class="fas fa-map-marker-alt"></i> ${alq.ubicacion}</p>
                      <p><i class="fas fa-bed"></i> ${alq.habitaciones}<i class="fas fa-bath"></i> ${alq.baños}</p>
                      <p><i class="fas fa-dollar-sign"></i> ${alq.costo}</p>
                      <p class="${smokeColor}"><i class="${smokeIcon}"></i> ${smokeText}</p>
                      <p class="${petsColor}"><i class="${petsIcon}"></i> ${petsText}</p>
                  </div>
              </div>`;
  }

  return template;
}

proAlquiler1.innerHTML = createAlquilerTemplate(alquiler1);
proAlquiler2.innerHTML = createAlquilerTemplate(alquiler2);
proAlquiler3.innerHTML = createAlquilerTemplate(alquiler3);


