const destinationInfo = [
    {
        id: 1,
        img: "../Images/HOME_bgImg.jpg",
        title: "Gateway of India",
        description: "An iconic symbol of Mumbai.",
    },
    {
        id: 2,
        img: "../Images/ajanta.jpg",
        title: "Ajanta Caves",
        description: "Ancient rock-cut caves in Aurangabad.",
    },
    {
        id: 3,
        img: "../Images/lonavala.jpg",
        title: "Lonavala",
        description: "Famous hill station with lush greenery.",
    },
    {
        id: 4,
        img: "../Images/nashik.jpg",
        title: "Nashik",
        description: "Known for vineyards and temples.",
    },
    {
        id: 5,
        img: "../Images/mahabaleshwar.jpg",
        title: "Mahabaleshwar",
        description: "Strawberry farms and scenic viewpoints.",
    },
];

let destination = document.getElementsByClassName("destination")[0];

let x = destinationInfo.map((item) => {
    return `
    <div class="card" style="background-image: url('${item.img}');>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    </div>
    `;
}).join("");

destination.innerHTML = x;
