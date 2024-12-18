const characterData = [
    {
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      name: "Summer Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      name: "Beth Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      name: "Jerry Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    },
    {
      name: "Abadango Cluster Princess",
      image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    },
    {
      name: "Abradolf Lincler",
      image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
    },
    {
      name: "Adjudicator Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    },
    {
      name: "Agency Director",
      image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
    },
    {
      name: "Alan Rails",
      image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
    },
    {
      name: "Albert Einstein",
      image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
    },
    {
      name: "Alexander",
      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    },
    {
      name: "Alien Googah",
      image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
    },
    {
      name: "Alien Morty",
      image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
    },
    {
      name: "Alien Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    },
    {
      name: "Amish Cyborg",
      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    },
    {
      name: "Annie",
      image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
    },
    {
      name: "Antenna Morty",
      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    },
    {
      name: "Antenna Rick",
      image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
    },
    {
      name: "Ants In My Eyes Johnson",
      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    },
  ];
  
  const characterList = document.getElementById("character-list");
  
  characterData.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    card.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
    `;
  
    characterList.appendChild(card);
  });
  