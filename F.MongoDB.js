use catHotelNuevo

db.catHotelNuevo.insertMany([
  {
    "propietarioDocumento": "12345678",
    "propietarioNombre": "Santiago Beltrán",
    "propietarioTelefono": "093245678",
    "propietarioEmail": "santiago.beltran@domain.com",
    "gatos": [
      {
        "gatoID": 1,
        "gatoNombre": "Misu",
        "gatoRaza": "Siames",
        "gatoEdad": 3,
        "gatoPeso": 4.5,
        "gatoColor": "Blanco y Marrón",
        "gatoCaracter": "Juguetón",
        "gatoFoto": "https://imgur.com/WO7Bp62",
        "reservas": [
          {
            "reservaID": 1,
            "habitacionNombre": "Suite Ejecutiva",
            "habitacionEstado": "LLENA",
            "reservaFechaInicio": "2024-11-01",
            "reservaFechaFin": "2024-11-10",
            "reservaMonto": 1500.00,
            "servicios": [
              {
                "servicioNombre": "CONTROL_PARASITOS",
                "cantidad": 1
              },
              {
                "servicioNombre": "REVISION_VETERINARIA",
                "cantidad": 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "propietarioDocumento": "23456789",
    "propietarioNombre": "Laura García",
    "propietarioTelefono": "091234567",
    "propietarioEmail": "laura.garcia@domain.com",
    "gatos": [
      {
        "gatoID": 2,
        "gatoNombre": "Luna",
        "gatoRaza": "Persa",
        "gatoEdad": 2,
        "gatoPeso": 5.0,
        "gatoColor": "Gris claro",
        "gatoCaracter": "Tímida",
        "gatoFoto": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
        "reservas": [
          {
            "reservaID": 2,
            "habitacionNombre": "Suite Ejecutiva",
            "habitacionEstado": "DISPONIBLE",
            "reservaFechaInicio": "2024-07-05",
            "reservaFechaFin": "2024-07-10",
            "reservaMonto": 1800.00,
            "servicios": [
              {
                "servicioNombre": "PELUQUERIA",
                "cantidad": 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "propietarioDocumento": "34567890",
    "propietarioNombre": "Carlos Rodríguez",
    "propietarioTelefono": "092345678",
    "propietarioEmail": "carlos.rodriguez@domain.com",
    "gatos": [
      {
        "gatoID": 3,
        "gatoNombre": "Tommy",
        "gatoRaza": "Maine Coon",
        "gatoEdad": 4,
        "gatoPeso": 6.0,
        "gatoColor": "Tigrado",
        "gatoCaracter": "Amigable",
        "gatoFoto": "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg",
        "reservas": [
          {
            "reservaID": 3,
            "habitacionNombre": "Suite1",
            "habitacionEstado": "DISPONIBLE",
            "reservaFechaInicio": "2024-07-01",
            "reservaFechaFin": "2024-07-07",
            "reservaMonto": 1400.00,
            "servicios": []
          },
          {
            "reservaID": 4,
            "habitacionNombre": "Suite2",
            "habitacionEstado": "LIMPIANDO",
            "reservaFechaInicio": "2024-07-08",
            "reservaFechaFin": "2024-07-12",
            "reservaMonto": 1600.00,
            "servicios": [
              {
                "servicioNombre": "CONTROL_PARASITOS",
                "cantidad": 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "propietarioDocumento": "45678901",
    "propietarioNombre": "Isabel Pérez",
    "propietarioTelefono": "094567890",
    "propietarioEmail": "isabel.perez@domain.com",
    "gatos": [
      {
        "gatoID": 4,
        "gatoNombre": "Boby",
        "gatoRaza": "Sphynx",
        "gatoEdad": 1,
        "gatoPeso": 3.2,
        "gatoColor": "Beige",
        "gatoCaracter": "Curioso",
        "gatoFoto": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
        "reservas": [
          {
            "reservaID": 5,
            "habitacionNombre": "Suite Ejecutiva",
            "habitacionEstado": "DISPONIBLE",
            "reservaFechaInicio": "2024-07-10",
            "reservaFechaFin": "2024-07-15",
            "reservaMonto": 1700.00,
            "servicios": [
              {
                "servicioNombre": "REVISION_VETERINARIA",
                "cantidad": 1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "propietarioDocumento": "45677971",
    "propietarioNombre": "Miguel Sanchez",
    "propietarioTelefono": "095564890",
    "propietarioEmail": "MS@domain.com",
    "gatos": [
      {
        "gatoID": 5,
        "gatoNombre": "Bob",
        "gatoRaza": "Siamez",
        "gatoEdad": 4,
        "gatoPeso": 3.2,
        "gatoColor": "Blanco",
        "gatoCaracter": "Jugueton",
        "gatoFoto": "https://www.pexels.com/photo/european-shorthair-cat-on-a-woven-basket-1543793/",
        "reservas": [
          {
            "reservaID": 6,
            "habitacionNombre": "Suite Ejecutiva",
            "habitacionEstado": "DISPONIBLE",
            "reservaFechaInicio": "2024-07-10",
            "reservaFechaFin": "2024-07-15",
            "reservaMonto": 1700.00,
            "servicios": [
              {
                "servicioNombre": "REVISION_VETERINARIA",
                "cantidad": 1
              }
            ]
          },
           {
            "reservaID": 7,
            "habitacionNombre": "Habitacion de lujo",
            "habitacionEstado": "DISPONIBLE",
            "reservaFechaInicio": "2024-07-10",
            "reservaFechaFin": "2024-07-15",
            "reservaMonto": 1800.00,
            "servicios": [
              {
                "servicioNombre": "REVISION_VETERINARIA",
                "cantidad": 1
              }
            ]
          }
        ]
      }
    ]
  }
]);






/******* B ********/

db.catHotelNuevo.aggregate([
  // 1. Filtrar el propietario con documento "12345678"
  {
    $match: {
      "propietarioDocumento": "12345678"
    }
  },
  // 2. Descomponer los gatos del propietario
  {
    $unwind: {
      path: "$gatos",
      preserveNullAndEmptyArrays: false // Solo procesar si hay gatos
    }
  },
  // 3. Descomponer las reservas de cada gato
  {
    $unwind: {
      path: "$gatos.reservas",
      preserveNullAndEmptyArrays: false // Solo procesar si el gato tiene reservas
    }
  },
  // 4. Seleccionar los campos necesarios de las reservas
  {
    $project: {
      "reservaID": "$gatos.reservas.reservaID",
      "habitacionNombre": "$gatos.reservas.habitacionNombre",
      "habitacionEstado": "$gatos.reservas.habitacionEstado",
      "reservaFechaInicio": "$gatos.reservas.reservaFechaInicio",
      "reservaFechaFin": "$gatos.reservas.reservaFechaFin",
      "reservaMonto": "$gatos.reservas.reservaMonto",
      "servicios": "$gatos.reservas.servicios"
    }
  }
]);

/********* C *********/

db.catHotelNuevo.aggregate([
  // 1. Descomponer los gatos dentro de los propietarios
  {
    $unwind: {
      path: "$gatos",
      preserveNullAndEmptyArrays: false // Solo procesar si hay gatos
    }
  },
  // 2. Descomponer las reservas de cada gato
  {
    $unwind: {
      path: "$gatos.reservas",
      preserveNullAndEmptyArrays: false // Solo procesar si el gato tiene reservas
    }
  },
  // 3. Filtrar las reservas que incluyen el servicio "PELUQUERIA"
  {
    $match: {
      "gatos.reservas.servicios.servicioNombre": "PELUQUERIA" // Filtrar por el servicio "PELUQUERIA"
    }
  },
  // 4. Seleccionar los campos necesarios de las reservas
  {
    $project: {
      "reservaID": "$gatos.reservas.reservaID",
      "habitacionNombre": "$gatos.reservas.habitacionNombre",
      "habitacionEstado": "$gatos.reservas.habitacionEstado",
      "reservaFechaInicio": "$gatos.reservas.reservaFechaInicio",
      "reservaFechaFin": "$gatos.reservas.reservaFechaFin",
      "reservaMonto": "$gatos.reservas.reservaMonto",
      "servicios": "$gatos.reservas.servicios"
    }
  }
]);



/*********** D **************/

db.catHotelNuevo.updateOne(
  { 
    "gatos.reservas.habitacionNombre": "Suite1", 
    "gatos.reservas.habitacionEstado": "DISPONIBLE" 
  },
  { 
    $set: { 
      "gatos.$[gato].reservas.$[reserva].habitacionEstado": "LLENA" 
    }
  },
  { 
    arrayFilters: [
      { "gato.reservas": { $exists: true } },
      { "reserva.habitacionNombre": "Suite1", "reserva.habitacionEstado": "DISPONIBLE" }
    ]
  }
);

// Verificar los cambios
//Tengo que fijarme en Carlos Rodriguez
db.catHotelNuevo.find()



/************** E *************/

db.catHotelNuevo.aggregate([
  
  { $unwind: "$gatos" },
  { $unwind: "$gatos.reservas" },
  
  {
    $match: {
      "gatos.reservas.reservaFechaInicio": {
        $gte: "2024-07-01",
        $lte: "2024-07-31"
      }
    }
  },
  // Creamos un campo único para las reservas del propietario
  {
    $group: {
      _id: {
        propietarioDocumento: "$propietarioDocumento",
        reservaID: "$gatos.reservas.reservaID"
      },
      propietarioNombre: { $first: "$propietarioNombre" }
    }
  },
  // Agrupamos por propietario para contar reservas únicas
  {
    $group: {
      _id: "$_id.propietarioDocumento",
      propietarioNombre: { $first: "$propietarioNombre" },
      cantidadReservasJulio: { $sum: 1 }
    }
  },
  // Filtramos para propietarios con más de una reserva
  {
    $match: {
      cantidadReservasJulio: { $gt: 1 }
    }
  },
  // Seleccionamos los campos que queremos mostrar
  {
    $project: {
      _id: 0,
      propietarioNombre: 1,
      cantidadReservasJulio: 1
    }
  }
]);


