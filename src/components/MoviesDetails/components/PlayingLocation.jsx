import React from 'react'

const PlayingLocation = () => {

  const cinemasMU = [
    {"name" : "Star Caudan",
    "value" : "SC-C",
     "time" : [
      {"DD" : "18:00"},
      {"DD" : "21:00"},
      {"DDD" : "20:00"}
     ]},
    {"name" : "MCine Port Louis",
    "value" : "MC-PL"},
    {"name" : "Star La Croisette",
    "value" : "S-LC"},
    {"name" : "MCine Flacq",
    "value" : "MC-F"},
    {"name" : "Star Bagatelle",
    "value" : "S-BA"},
    {"name" : "MCine Trianon",
    "value" : "MC-T"},
    {"name" : "MCine Curepipe",
    "value" : "MC-C"}
  ]
  return (
    <div className="px-2">
      <h2 className="text-xl font-semibold">Showtimes</h2>
      {cinemasMU.map(cinema => (
        <div className="px-4">
          <p className="bg-red-200">
            {cinema.name}
          </p>
          {cinema.value}
          {console.log(cinema.time)}
          
          </div>
      )
      )}
    </div>
  )
}

export default PlayingLocation