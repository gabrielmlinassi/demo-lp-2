export interface IArtist {
  id: number
  picture: string
  name: string
  slug: string
  facebook: string
  twitter: string
  instagram: string
  spotify: string
  youtube: string
}

export interface IStaff {
  name: string
  picture: string
  role: string
  linkedin: string
}

type Data = {
  artists: IArtist[]
  staff: IStaff[]
}

const data: Data = {
  artists: [
    {
      id: 1,
      picture: '/images/jack-aldridge.jpeg',
      name: 'Jack Aldridge',
      slug: 'jack-aldridge',
      facebook: '',
      twitter: '',
      instagram: '',
      spotify: '',
      youtube: '',
    },
    {
      id: 2,
      picture: '/images/samuel-adamson.jpeg',
      name: 'Samuel Adamson',
      slug: 'samuel-adamson',
      facebook: '',
      twitter: '',
      instagram: '',
      spotify: '',
      youtube: '',
    },
    {
      id: 3,
      picture: '/images/cameron-williamson.jpeg',
      name: 'Cameron Williamson',
      slug: 'cameron-williamson',
      facebook: '',
      twitter: '',
      instagram: '',
      spotify: '',
      youtube: '',
    },
    {
      id: 4,
      picture: '/images/connor-elington.jpeg',
      name: 'Connor Elington',
      slug: 'connor-elington',
      facebook: '',
      twitter: '',
      instagram: '',
      spotify: '',
      youtube: '',
    },
    {
      id: 5,
      picture: '/images/jack-aldridge2.jpeg',
      name: 'Jack Aldridge',
      slug: 'jack-aldridge',
      facebook: '',
      twitter: '',
      instagram: '',
      spotify: '',
      youtube: '',
    },
    {
      id: 6,
      picture: '/images/samuel-adamson2.jpeg',
      name: 'Samuel Adamson',
      slug: 'samuel-adamson',
      facebook: '',
      twitter: '',
      instagram: '',
      spotify: '',
      youtube: '',
    },
    {
      id: 7,
      picture: '/images/cameron-williamson2.jpeg',
      name: 'Cameron Williamson',
      slug: 'cameron-williamson',
      facebook: '',
      twitter: '',
      instagram: '',
      spotify: '',
      youtube: '',
    },
    {
      id: 8,
      picture: '/images/connor-elington2.jpeg',
      name: 'Connor Elington',
      slug: 'connor-elington',
      facebook: '',
      twitter: '',
      instagram: '',
      spotify: '',
      youtube: '',
    },
  ],
  staff: [
    {
      name: 'Joe Calitri',
      picture: '/images/joe-calitri.jpeg',
      role: 'President - Round Hill Records, Nashville',
      linkedin: 'https://www.linkedin.com/in/gabrielmlinassi/',
    },
    {
      name: 'Michael Volk',
      picture: '/images/michael-volk.jpeg',
      role: 'Head of Operations & Business Development, Round Hill Records, Nashville',
      linkedin: '',
    },
    {
      name: 'Lucy Bartozzi',
      picture: '/images/lucy-bartozzi.jpeg',
      role: 'Senior Director, Marketing, Nashville',
      linkedin: '',
    },
    {
      name: 'Brian Hay',
      picture: '/images/brian-hay.jpeg',
      role: 'Head of Catalogue, Nashville',
      linkedin: '',
    },
    {
      name: 'Jeffery Bensmiller',
      picture: '/images/jeffery-bensmiller.jpeg',
      role: 'Merchandise & E-Commerce Manager, Nashville',
      linkedin: '',
    },
    {
      name: 'Imani Givertz',
      picture: '/images/imani-givertz.jpeg',
      role: 'Digital Content Manager, Nashville',
      linkedin: '',
    },
  ],
}

export default data
