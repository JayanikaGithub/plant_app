const pets = [
  {
    pet: 'plants',
    pets: [
      {
        id: '1',
        name: 'Fiddle leaf fig',
        price: '1500.00',
        image: require('../assets/images/plants2.png'),
        scientific_name: 'Scientific name - Ficus lyrata',
        type: 'Indoor/Outdoor',
        about:
          'The fiddle leaf fig is an instagram plant fave and great decor for a boring corner. With its glossy, dark leaves,it acts as an extra statement piece to any room.',
      },
      {
        id: '2',
        name: 'Giant bird ',
        price: '1600.00',
        image: require('../assets/images/plants1.png'),
        type: 'Indoor',
        scientific_name: 'Scientific name - Strelitzia ',
        about:
          'Another tropical fave, the giant bird of paradise plant has tall stems with banana-like leaves. Flowers can develop,but unfortunately they don’t typically appear indoors.',
      },
      {
        id: '3',
        name: 'Dracaena ',
        price: '1100.00',
        image: require('../assets/images/plants3.png'),
        type: 'Indoor/Outdoor',
        scientific_name: 'Scientific name - massange',
        about:
          'We love a good low-maintenance plant,and one of the most popular is the Madagascar dragon tree. This plant has great architectural leaves,curving as it grows for a tropical look.',
      },
      {
        id: '4',
        name: 'Heartleaf',
        price: '900.00',
        image: require('../assets/images/plants4.png'),
        type: 'Indoor/Outdoor',
        scientific_name: 'Scientific name-Sacculant fera',
        about:
          'This plant has a trail of oval “beads” that makes the succulent unique. It’s a fast growing plant, so give it room to grow.It works great in hanging baskets or on shelves.',
      },
      {
        id: '5',
        name: 'Monstera',
        price: '910.00',
        image: require('../assets/images/plants5.png'),
        type: 'Indoor/Outdoor',
        scientific_name: 'Scientific name-Mondeliso',
        about:
          'The fiddle leaf fig is an instagram plant fave and great decor for a boring corner. With its glossy, dark leaves,it acts as an extra statement piece to any room.',
      },
      {
        id: '6',
        name: 'Polka dotig',
        price: '1300.00',
        image: require('../assets/images/plants6.png'),
        type: 'Indoor/Outdoor',
        scientific_name: 'Scientific name- phyllostachya',
        about:
          'This plant requires little effort to take care of, making it a lovely beginner plant.It’s also a well-known air cleaning and purifying plant. Two great reasons to own one.',
      },
      {
        id: '7',
        name: 'Calathea ',
        price: '1500.00',
        image: require('../assets/images/plants7.png'),
        type: 'Indoor/Outdoor',
        scientific_name: 'Scientific name-Calaornata',
        about:
          'The calathea is a popular variety in the pothos family and is also called devil’s ivy. It’s green leaves can have a white or yellow marbling, and it’s long vines like to climb, making it a great hanging plant..',
      },

    ],
  },
  {
    pet: 'flowers',
    pets: [
      {
        id: '1',
        name: 'Chrysanthe',
        price: '1280.00',
        image: require('../assets/images/flowers1.png'),
        type: 'Indoor',
        scientific_name: 'Scientific name-Chrysanthem',
        about:
          'The blooms are saucer-shaped, and the stems have gray, hairy leaves.The shrub may grow to around 15 feet, and many hybrids have been developed that you can enjoy.',
      },
      {
        id: '2',
        name: 'Anemone',
        price: '1000.00',
        image: require('../assets/images/flowers2.png'),
        type: 'Indoor',
        scientific_name: 'Scientific name-Anemone',
        about:
          'Acacias are soft, yellow flowers that tend to be fluffy. These plants are delicate and tender, growing best in sheltered gardens away from the cold frosts of northern climates.',
      },
      {
        id: '3',
        name: 'Lily',
        price: '1100.00',
        image: require('../assets/images/flowers3.png'),
        type: 'Indoor',
        scientific_name: 'Scientific name-Ilium',
        about:
          'Lily is a poisonous plant that is beautiful, which brings many people to plant it in their gardens. The flowers tend to be blue-purple or yellow in color, and the plant is native to mountainous areas.',
      },
      {
        id: '4',
        name: 'Carnation',
        price: '1280.00',
        image: require('../assets/images/flowers4.png'),
        type: 'Indoor',
        scientific_name: 'Scientific name-Dianthus',
        about:
          'The Carnation is a perennial with flowers that come in a variety of colors including red, gold, and blue.These flowers are great in cut flower arrangements or in the garden or as a container plant.',
      },
      {
        id: '5',
        name: ' Daffodil',
        price: '910.00',
        image: require('../assets/images/flowers5.png'),
        type: 'Indoor',
        scientific_name: 'Scientific name-Narcissus',
        about:
          'Daffodils comes in a variety of colors and heights. These showy flowers are produced in colors such as blue and purple.',
      },
      {
        id: '6',
        name: 'Peruvian Lily',
        price: '900.00',
        image: require('../assets/images/flowers6.png'),
        type: 'Indoor',
        scientific_name: 'Scientific name-Alstroemeria',
        about:
          'Peruvian Lily are soft, yellow flowers that tend to be fluffy. These plants are delicate and tender, growing best in sheltered gardens away from the cold frosts of northern climates.',
      },
      {
        id: '7',
        name: 'Hyacinth ',
        price: '800.00',
        image: require('../assets/images/flowers7.png'),
        type: 'Indoor',
        scientific_name: 'Scientific name-Hyacinthus',
        about:
          'Hyacinth is also called the Peruvian lily and is often grown commercially because the cut flowers last a long time.',
      },

    ],
  },
  {
    pet: 'seeds',
    pets: [
      {
        id: '1',
        name: 'Carrot Seeds',
        price: '300.00',
        image: require('../assets/images/seeds1.png'),
        type: 'Outdoor',
        scientific_name: 'scientific name- Preptusm',
        about:
          'Carrot seeds are not true seeds in a botanical sense but are dry fruits called schizocarps.The Carrot is not a fruit in the common understanding, so there are no seeds inside or on the carrot.',
      },
      {
        id: '2',
        name: 'Brinjal Seeds',
        price: '400.00',
        image: require('../assets/images/seeds2.png'),
        type: 'Outdoor',
        scientific_name: 'scientific name- kintify',
        about:
          'Brinjal is a hardy crop than other vegetables. Due to its hardness, it can be successfully grown in dry area with lowirrigation facilities. It is moderate.',
      },
      {
        id: '3',
        name: 'French Beans',
        price: '300.00',
        image: require('../assets/images/seeds3.png'),
        type: 'Outdoor',
        scientific_name: 'scientific name- Criliamm',
        about:
          'French beans, kidney beans or string beans, are cultivated for their dried seed or their fruits and their physiologically unripe seeds.',
      },
      {
        id: '4',
        name: 'Beetroot Seeds',
        price: '300.00',
        image: require('../assets/images/seeds4.png'),
        type: 'Indoor',
        scientific_name: 'scientific name- Propil',
        about:
          'Beetroot seed production is different in structure than other garden seeds. Each seed is actually a group of flowers melded together by the petals, ',
      },
      
      {
        id: '5',
        name: 'Flax Seeds ',
        price: '800.00',
        image: require('../assets/images/seeds5.png'),
        type: 'Indoor',
        scientific_name: 'scientific name-Fringe',
        about:
          'Flaxseed is a rich source of the omega-3 fatty acid alpha-linolenic acid (ALA) and is high in a class of phytoestrogens known as lignans..',
      },
      {
        id: '6',
        name: 'Pumkin Seeds',
        price: '300.00',
        image: require('../assets/images/seeds6.png'),
        type: 'Indoor',
        scientific_name: 'scientific name-Merldo',
        about:
          'The seeds are typically flat and asymm trically oval, have a white outer husk, and are light green in color after thehusk is removed. Some cultivars are huskless, and are grown only for their edible seed..',
      },
      {
        id: '7',
        name: 'Cabbage Seeds ',
        price: '250.00',
        image: require('../assets/images/seeds7.png'),
        type: 'Indoor',
        scientific_name: 'scientific name-Chrysant',
        about:
          'Cabbage is a biennial, producing its flowers and seeds in its second growing season but is mostly grown in home gardens as an annual vegetable.',
      },

    ],
  },
  {
    pet: 'pots',
    pets: [
      {
        id: '1',
        name: 'Ceramic Pot',
        price: '2500.00',
        image: require('../assets/images/pots1.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Cement',
        about:
          ' Terracotta pots are classic planting pots,with a neutral and warm color that makes almost any plant look great. .',
      },
      {
        id: '2',
        name: 'Cement Pot',
        price: '1600.00',
        image: require('../assets/images/pots2.png'),
        type: '40% Off',
        scientific_name: 'Used Material - Cement',
        about:
          ' Terra cotta is a type of clay that is commonly used in making pots and planters of various sizes and shapes. Terra cotta pots can be as small as twoinches in diameter or height, and as large as the creator’s imagination.',
      },
      {
        id: '3',
        name: 'Grante Pot',
        price: '1100.00',
        image: require('../assets/images/pots3.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Granite',
        about:
          'Cement pots can look great,  While concrete is the practical choice for large plants that might need the ballast support against the wind because of its sheer weight, that weight also makes the planter difficult to move..',
      },
      {
        id: '4',
        name: 'Coloured Pot',
        price: '900.00',
        image: require('../assets/images/pots4.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Cement',
        about:
          ' Cement is good for plants like succulents. In general, both concrete and cement pots are fantastic options for potted plants because they are somewhat porous and will allow some moisture to get through.',
      },
      {
        id: '5',
        name: 'Fiberglass Pot',
        price: '910.00',
        image: require('../assets/images/pots5.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Cement',
        about:
          ' These can be very elegant planting containers, suitable for designer gardens.Fiberglass is a much lighter material than clay or ceramics..',
      },
      {
        id: '6',
        name: 'Concrete Oldpot',
        price: '1300.00',
        image: require('../assets/images/pots6.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Cement',
        about:
          ' This is the most beautiful containers are made with concrete. The colors and shapes can be elegant and nuanced.Concrete and hypertufa are both incredibly durable and the containers can be left outside even in the harshest climates. ',
      },
      {
        id: '7',
        name: 'Plastic Pot',
        price: '250.00',
        image: require('../assets/images/pots7.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Plastic',
        about:
          ' Plastic pots are extremely lightweight. These are among the least expensive of plant pot materials.No material is more diverse than plastic; you can find literally hundreds of options when choosing plastic pots.',
      },
    ],
  },
  {
    pet: 'sprayers',
    pets: [
      {
        id: '1',
        name: ' Knapsack Sprayer',
        price: '3500.00',
        image: require('../assets/images/sprayn3.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Metal',
        about:
          'is convenient for spraying through hand-held nozzles that is connected to tank carried on operators back. There are three types of Knapsack sprayers i.e battery, manual and battery cum manual sprayer..',
      },
      {
        id: '2',
        name: ' Portable Sprayer',
        price: '1600.00',
        image: require('../assets/images/sprayn4.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Metal',
        about:
          ' These are operated by electric and petrol engine with the help of hose pipe. This type of sprayer doesn’t have chemical tank, which is used for applying pesticides, insecticides or liquid type chemicals at extensive land coverage.',
      },
      {
        id: '3',
        name: '  Orchard Sprayers',
        price: '900.00',
        image: require('../assets/images/sprayn5.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Metal',
        about:
          ' These sprayers are used to apply pesticides, plant growth regulators and foliar nutrients to orchard trees. It is a tractor mounted equipment suitable for large area lands.',
      },
      {
        id: '4',
        name: ' Knapsack Sprayer',
        price: '1100.00',
        image: require('../assets/images/spray4.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Metal',
        about:'This sprayer has motor engine operated by using petrol engine i.e., 2 stroke and 4stroke engine type. It has the separate chemical tank and also has hand held nozzles..',
      },
      {
        id: '5',
        name: '  Mist Sprayer',
        price: '910.00',
        image: require('../assets/images/spray5.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Metal',
        about:
          ' This is a kind of knapsack power sprayer which is used to spray liquid chemical in mist form and urea in granule form. Ideal for quick spraying operations in flower plants, indoor plants.',
      },
      {
        id: '6',
        name: ' Hand Sprayer',
        price: '910.00',
        image: require('../assets/images/sprayn1.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Metal',
        about:
          ' Hand sprayers work in the form of a tank and have a capacity of about 2 liters in the standard mode, this type of sprayer is placed on the hand like a backpack and spraying is done easily.',
          
      },
      {
        id: '7',
        name: ' Flower Sprayer',
        price: '800.00',
        image: require('../assets/images/sprayn2.png'),
        type: '10% Off',
        scientific_name: 'Used Material - Metal',
        about:
          'If you want a slightly smaller pressure sprayer, you can take a look at the 1.3-gallon Tabor Tools Sprayer .',
      },
    ],
  },
];

export default pets;