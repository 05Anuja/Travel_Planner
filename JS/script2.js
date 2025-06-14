const destinationInfo = [
  {
    id: 1,
    img: "../Images/HOME_bgImg.jpg",
    title: "Gateway of India",
    description:
      "The Gateway of India is a majestic arch monument located in Mumbai, built during the British Raj. It faces the Arabian Sea and is a symbol of the city’s colonial past. Tourists often gather here for photographs, boat rides to Elephanta Caves, and to enjoy the sea breeze. It's especially beautiful during sunset hours.",
  },
  {
    id: 2,
    img: "../Images/HOME_bgImg.jpg",
    title: "Ajanta Caves",
    description:
      "Located in Aurangabad, the Ajanta Caves are a UNESCO World Heritage Site renowned for ancient Buddhist rock-cut temples and paintings. These caves date back to the 2nd century BCE and display exquisite murals and sculptures. They provide a glimpse into India’s rich artistic and spiritual heritage. It's a must-visit for history and art lovers.",
  },
  {
    id: 3,
    img: "../Images/HOME_bgImg.jpg",
    title: "Lonavala",
    description:
      "Lonavala is a serene hill station located between Mumbai and Pune, famous for its misty hills, waterfalls, and lush greenery. It is especially popular during the monsoon season. Attractions like Bhushi Dam, Tiger Point, and Karla Caves draw tourists year-round. It's perfect for a relaxing weekend getaway.",
  },
  {
    id: 4,
    img: "../Images/HOME_bgImg.jpg",
    title: "Nashik",
    description:
      "Nashik, situated on the banks of the Godavari River, is known for its ancient temples and sprawling vineyards. It is one of the four cities that host the Kumbh Mela, a major Hindu pilgrimage. Wine lovers can explore the Sula Vineyards and enjoy wine-tasting tours. The city blends spirituality with modern charm.",
  },
  {
    id: 5,
    img: "../Images/HOME_bgImg.jpg",
    title: "Mahabaleshwar",
    description:
      "Mahabaleshwar is a picturesque hill station in the Western Ghats, famous for strawberry farms, scenic viewpoints, and ancient temples. Spots like Arthur’s Seat and Venna Lake offer breathtaking views. The cool climate and lush surroundings make it a popular retreat. It’s also known for its fresh produce and local sweets.",
  },
  {
    id: 6,
    img: "../Images/HOME_bgImg.jpg",
    title: "Pune",
    description:
      "Pune is a vibrant city known for its academic institutions, historical sites, and cultural festivals. Visitors can explore places like Shaniwar Wada, Aga Khan Palace, and Osho Ashram. It also offers a lively nightlife and diverse food scene. Pune blends tradition with modern living effortlessly.",
  },
  {
    id: 7,
    img: "../Images/HOME_bgImg.jpg",
    title: "Matheran",
    description:
      "Matheran is a unique, eco-sensitive hill station where vehicles are banned. The town offers 30+ viewpoints like Panorama Point and Echo Point. Tourists enjoy toy train rides and horse-back trails. It’s a peaceful escape from the city's hustle, best enjoyed for its nature and quietude.",
  },
  {
    id: 8,
    img: "../Images/HOME_bgImg.jpg",
    title: "Alibaug",
    description:
      "Alibaug is a coastal town known for its clean beaches, forts, and coconut groves. It's a favorite weekend destination from Mumbai. Kolaba Fort, Alibaug Beach, and Nagaon Beach are top attractions. The town is also known for seafood and water sports activities.",
  },
  {
    id: 9,
    img: "../Images/HOME_bgImg.jpg",
    title: "Tadoba National Park",
    description:
      "Tadoba Andhari Tiger Reserve is one of Maharashtra’s finest wildlife destinations. It is home to tigers, leopards, sloth bears, and diverse bird species. Safari tours offer thrilling wildlife encounters. The park is best visited between October and June for good sightings.",
  },
  {
    id: 10,
    img: "../Images/HOME_bgImg.jpg",
    title: "Raigad Fort",
    description:
      "Raigad Fort, once the capital of Chhatrapati Shivaji Maharaj, is a symbol of Maratha pride. Situated atop a hill, the fort offers panoramic views and a glimpse into royal history. Visitors can reach the top by trekking or via ropeway. It is both historically significant and scenically breathtaking.",
  },
  {
    id: 11,
    img: "../Images/HOME_bgImg.jpg",
    title: "Ellora Caves",
    description:
      "Ellora Caves, a UNESCO World Heritage Site near Aurangabad, features rock-cut temples representing Buddhism, Hinduism, and Jainism. The most famous is the Kailasa Temple, carved entirely from a single rock. The intricate carvings and massive structures are architectural marvels. It's a must-visit for history and art enthusiasts.",
  },
  {
    id: 12,
    img: "../Images/HOME_bgImg.jpg",
    title: "Shirdi",
    description:
      "Shirdi is a revered pilgrimage site associated with Sai Baba, a saint worshipped across India. The Sai Baba Samadhi Mandir draws millions of devotees every year. The spiritual aura and peaceful atmosphere are the town’s biggest attractions. Devotees also visit Dwarkamai, Chavadi, and other connected spots.",
  },
  {
    id: 13,
    img: "../Images/HOME_bgImg.jpg",
    title: "Kolhapur",
    description:
      "Kolhapur is known for the grand Mahalaxmi Temple and rich cultural heritage. The city is famous for Kolhapuri chappals, spicy food, and traditional wrestling. Attractions include Rankala Lake, New Palace Museum, and Panhala Fort. It's a perfect blend of devotion, history, and local flavor.",
  },
  {
    id: 14,
    img: "../Images/HOME_bgImg.jpg",
    title: "Bhandardara",
    description:
      "Bhandardara is a hidden gem nestled in the Sahyadri ranges, ideal for nature lovers and trekkers. It features scenic lakes, waterfalls like Randha Falls, and the famous Arthur Lake. Mount Kalsubai, Maharashtra’s highest peak, is nearby. The peaceful environment makes it a perfect offbeat destination.",
  },
  {
    id: 15,
    img: "../Images/HOME_bgImg.jpg",
    title: "Sindhudurg",
    description:
      "Sindhudurg is a coastal paradise known for its historical fort, pristine beaches, and seafood. The Sindhudurg Fort was built by Chhatrapati Shivaji Maharaj on an island. The area is great for snorkeling and scuba diving. Malvan, Tarkarli, and Devgad are nearby gems worth visiting.",
  },
  {
    id: 16,
    img: "../Images/HOME_bgImg.jpg",
    title: "Chikhaldara",
    description:
      "Chikhaldara is the only coffee-growing region in Maharashtra and a serene hill station in the Vidarbha region. It offers cool weather, valleys, and wildlife. Tourists enjoy visiting Bhimkund, Gavilgad Fort, and Melghat Tiger Reserve. It’s ideal for those seeking nature and solitude.",
  },
  {
    id: 17,
    img: "../Images/HOME_bgImg.jpg",
    title: "Lonar Crater Lake",
    description:
      "Lonar Crater Lake was formed by a meteor impact over 50,000 years ago and is one of the only hyper-velocity impact craters in basaltic rock. The lake has both scientific and religious significance. It’s surrounded by ancient temples and attracts geologists and tourists alike. The greenish water and landscape offer a unique experience.",
  },
  {
    id: 18,
    img: "../Images/HOME_bgImg.jpg",
    title: "Kaas Plateau",
    description:
      "Kaas Plateau, also called the Valley of Flowers of Maharashtra, is a UNESCO Biodiversity Site. It blooms with thousands of colorful wildflowers after the monsoon. Located near Satara, the area is protected and offers a surreal floral experience. It’s a seasonal spot best visited between August and October.",
  },
];

let destination = document.getElementsByClassName("destination")[0];
let x = destinationInfo
  .map((item) => {
    return `
    <div class="card" style="background-image: url('${item.img}');">
        <div class="overlay"></div>
        <div class="card-content">
            <h3 style="margin: 10px;">${item.title}</h3>
            <p>${item.description}</p>
        </div>
    </div>
    `;
  })
  .join("");

destination.innerHTML = x;
