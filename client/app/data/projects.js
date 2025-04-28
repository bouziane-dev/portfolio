const projects = [
  {
    id: 1,
    type: 'Fullstack Project',
    slug: 'pharmacofort',
    title: 'Pharmacofort',
    shortDescription:
      'Pharmacofort is an e-learning platform for pharmacy students, offering an interactive way to prepare for exams.',
    images: [
      '/images/pharmacofort/image1.png',
      '/images/pharmacofort/image2.png',
      '/images/pharmacofort/image3.png',
      '/images/pharmacofort/image4.png',
      '/images/pharmacofort/image5.jpg',
      '/images/pharmacofort/image6.jpg'
    ],
    technologies: [
      'NextJS',
      'React',
      'TailwindCSS',
      'NodeJS',
      'Express',
      'MongoDB',
      'Postman',
      'Cloudinary',
      'Debugging',
      'APIs',
      'Networks',
      'Git',
      'Github'
    ],
    details: {
      about:
        'This project was created to provide an interactive way to solve MCQs and evaluating your revisions as a pharmacy student. It provides a large bank of questions in all subjects , statistics to track your progress , search and save question features , playlists or note taking , mimic a real exam situation with noted questions and a timer , along with a user friendly interface and lot more.',
      role: 'I worked as a full-stack developer. Designed the database system and set it up, built the API and test it, worked on parts of the frontend UI and implemented the logic behind it',
      challenges:
        'Handling a large amount of data and making sure the app is performant was a challenge. I used MongoDB to store the data, implement cache data for user specific data and optimized queries to ensure fast access times.'
    },
    repoUrl: 'https://github.com/bouziane-dev/pharmacofort'
  },
  {
    id: 2,
    slug: 'rk-shop',
    title: 'RK Sneakers Shop',
    shortDescription:
      'A small e-commerce shop for sneaker enthusiasts, with an admin panel to view and manage orders',
    images: [
      '/images/rkshop/image1.png',
      '/images/rkshop/image2.png',
      '/images/rkshop/image3.png',
      '/images/rkshop/image4.png'
    ],
    technologies: [
      'JavaScript',
      'React',
      'NextJS',
      'APIs',
      'Express',
      'NodeJS',
      'MongoDB',
      'Postman'
    ],
    details: {
      about:
        'This web app was intended to provide the client with an easier way to market, show and sell their products, rather than using regular social media platforms which can be time consuming due to the need of answering all customers and provide 24/7 support. The website is user friendly and responsive and it also comes with an admin interface to view and manage orders , a search feature and filters to navigate more easily.',
      role: 'I designed the UI , built it and handled both client and server logic',
      challenges:
        'I was quite new to admin panels at the point when I worked on this project so it was a bit challenging to learn a new concept and implement it right away, I think I did good.'
    },
    repoUrl: 'https://github.com/bouziane-dev/rk-shop'
  },

  {
    id: 3,
    slug: 'redstore',
    title: 'RedStore E-commerce',
    type: 'Frontend Project',
    shortDescription:
      'A small static front-end project for an eCommerce website. Built with basic web technologies.',
    images: [
      '/images/redstore/image1.png',
      '/images/redstore/image2.png',
      '/images/redstore/image3.png',
      '/images/redstore/image4.png',
      '/images/redstore/image5.png',
      '/images/redstore/image6.png'
    ],
    technologies: ['HTML', 'CSS'],
    details: {
      about:
        'I built this small project to practice manipulating layout, focusing on product listings and a basic shopping experience (front-end only).',
      role: 'I built the front-end structure using HTML and CSS, based on a simple layout I got from youtube.',
      challenges:
        'At the time I worked on this project, I was just starting out with web development, so structuring the layout and styling it was a new challenge for me back then.'
    },
    repoUrl: 'https://github.com/bouziane-dev/redstore-ecommerce'
  }
]

export default projects

// details: {
//   about:
//     'This project was created to solve XYZ for ABC users. It provides a seamless way to',
//   role: 'I worked as a full-stack developer. I designed the UI and handled both client and server logic',
//   challenges:
//     'Handling image uploads efficiently was tough. I optimized it using Cloudinary transformations and chunked uploads'
// },
