const projects = [
  {
    id: 1,
    type: 'Fullstack Project',
    slug: 'my-awesome-project',
    title: 'My Awesome Project',
    shortDescription: 'This is a brief summary...',
    images: [
      '/images/armaco.png',
      '/images/additional.png',
      '/images/additional.png',
      '/images/additional.png',
      '/images/additional.png'
    ],
    technologies: ['NextJS'],

    details: {
      about:
        'This project was created to solve XYZ for ABC users. It provides a seamless way to',
      role: 'I worked as a full-stack developer. I designed the UI and handled both client and server logic',
      challenges:
        'Handling image uploads efficiently was tough. I optimized it using Cloudinary transformations and chunked uploads'
    },
    repoUrl: 'https//github.com/username/my-awesome-project',
    liveUrl: 'https//my-awesome-project.com'
  },
  {
    id: 2,
    slug: 'another-cool-project',
    title: 'Another Cool Project',
    shortDescription: 'Another quick overview...',
    images: [
      '/images/armaco.png',
      '/images/additional.png',
      '/images/additional.png',
      '/images/additional.png'
    ],
    technologies: ['JavaScript', 'React']
  }
]

export default projects
