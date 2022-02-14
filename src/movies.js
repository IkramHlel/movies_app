const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      url: 'http://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/affiche-ocean-8.jpg?1528902832',
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      url: 'https://fr.web.img3.acsta.net/pictures/18/05/04/13/15/4943524.jpg'
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      url: 'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg'
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      url: 'https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg'
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      url: 'https://fr.web.img3.acsta.net/c_310_420/pictures/18/11/27/14/25/1451897.jpg'
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      url: 'https://image.posterlounge.fr/images/l/1895909.jpg'
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      url: 'http://media2.woopic.com/api/v1/images/174%2Faudiovisual%2Fmovie%2F1f4%2Fcc1%2F6d58e4368d204ecfaa74c81a2e%2Fpulp-fiction%7Cmovies-10126-9001710230.jpg?format=600x900&facedetect=1&quality=85'
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      url: 'https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg'
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      url: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg'
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      url: 'http://addict-culture.com/wp-content/uploads/2014/10/gone-girl-poster.jpg'
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
  