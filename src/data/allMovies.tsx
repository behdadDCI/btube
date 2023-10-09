const allMovies = [
  {
    id: "1",
    path: "../public/images/movies/eternals.jpg",
    name: "Eternals",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "2",
    path: "../public/images/movies/matrix.jpg",
    name: "The Matrix",
    genre: "Sci-fi/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "3",
    path: "../public/images/movies/spider-men.jpg",
    name: "Spider-Man",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "4",
    path: "../public/images/movies/panther.jpg",
    name: "Black Panther",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "5",
    path: "../public/images/movies/gladiator.jpg",
    name: "Gladiator",
    genre: "Historic/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "6",
    path: "../public/images/movies/1917.jpg",
    name: "1917",
    genre: "War/Drama 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "7",
    path: "../public/images/movies/casino-royale.jpg",
    name: "Casino-Royale 7",
    genre: "Action/Adventure 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "8",
    path: "../public/images/movies/dune.jpg",
    name: "Dune-FI",
    genre: "War/Drama 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "9",
    path: "../public/images/movies/eternals.jpg",
    name: "Eternals",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "10",
    path: "../public/images/movies/matrix.jpg",
    name: "The Matrix",
    genre: "Sci-fi/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "11",
    path: "../public/images/movies/spider-men.jpg",
    name: "Spider-Man",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "12",
    path: "../public/images/movies/panther.jpg",
    name: "Black Panther",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "13",
    path: "../public/images/movies/gladiator.jpg",
    name: "Gladiator",
    genre: "Historic/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "14",
    path: "../public/images/movies/1917.jpg",
    name: "1917",
    genre: "War/Drama 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "15",
    path: "../public/images/movies/casino-royale.jpg",
    name: "Casino-Royale 7",
    genre: "Action/Adventure 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "16",
    path: "../public/images/movies/dune.jpg",
    name: "Dune-FI",
    genre: "War/Drama 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "17",
    path: "../public/images/movies/eternals.jpg",
    name: "Eternals",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "18",
    path: "../public/images/movies/matrix.jpg",
    name: "The Matrix",
    genre: "Sci-fi/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "19",
    path: "../public/images/movies/spider-men.jpg",
    name: "Spider-Man",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "20",
    path: "../public/images/movies/panther.jpg",
    name: "Black Panther",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "21",
    path: "../public/images/movies/gladiator.jpg",
    name: "Gladiator",
    genre: "Historic/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "22",
    path: "../public/images/movies/1917.jpg",
    name: "1917",
    genre: "War/Drama 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "23",
    path: "../public/images/movies/casino-royale.jpg",
    name: "Casino-Royale 7",
    genre: "Action/Adventure 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "24",
    path: "../public/images/movies/dune.jpg",
    name: "Dune-FI",
    genre: "War/Drama 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "25",
    path: "../public/images/movies/eternals.jpg",
    name: "Eternals",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "26",
    path: "../public/images/movies/matrix.jpg",
    name: "The Matrix",
    genre: "Sci-fi/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "27",
    path: "../public/images/movies/spider-men.jpg",
    name: "Spider-Man",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "28",
    path: "../public/images/movies/panther.jpg",
    name: "Black Panther",
    genre: "Advanture/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "29",
    path: "../public/images/movies/gladiator.jpg",
    name: "Gladiator",
    genre: "Historic/Action 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "30",
    path: "../public/images/comedy.jpg",
    name: "Mr Bin 2023",
    genre: "Comedy",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "31",
    path: "../public/images/adventure.jpg",
    name: "Black Notice",
    genre: "Action/Adventure 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
  {
    id: "32",
    path: "../public/images/action.jpg",
    name: "Cazinoblanca 2023",
    genre: "War/Drama 2023",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe fugit nemo ducimus maiores dolor quaerat at, voluptate atque incidunt molestiae, repudiandae, sint doloribus eos aperiam tempore vel culpa magnam! Nobis tempora fuga modi iste laborum. Impedit aspernatur totam nihil autem accusamus consequatur? Ipsum nesciunt sed nisi! Ut error praesentium sint necessitatibus autem expedita sed hic ratione iure illo tenetur quis, illum animi consectetur et voluptas, unde debitis! Voluptate earum alias debitis? Expedita at nemo nostrum explicabo quia praesentium, facilis fuga rem sapiente velit. Harum fuga a, eius recusandae ab cum qui velit, fugit vero, deserunt ex expedita eum quidem.",
  },
];

export const getAllMovies = () => {
  return allMovies;
};

export const getMovie = (id: string) => {
  return allMovies.find((movie) => movie.id === id);
};