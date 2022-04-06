import { BgImage } from 'components/BgImage'
import { Container } from 'components/Container'
import { ExternalLink } from 'components/ExternalLink'
import { Layout } from 'components/Layout'
import type { NextPage } from 'next'

type Data = {
  title: string
  description: string
  link?: string
}

const data: Data[] = [
  {
    title: 'Black History Month',
    description:
      "In the spirit of Black History Month we want to encourage our community to continue to support the Black community and especially Black creators. We're excited to highlighthere Black-owned businesses, artists, writers and creators.",
  },
  {
    title: 'The National Museum of African American Music',
    description:
      'The National Museum of African American Music recently opened in Nashville, TN and features interactive exhibits celebrating the brilliant legacy that has followed the first Black Americans through more than 50 musical genres and subgenres during the past 400 years.',
    link: 'https://nmaam.org/',
  },
  {
    title: 'Marlene Barnett',
    description:
      'Marlene Barnett is an artist, activist, and authority on the cultural traditions and practices of art in the African diaspora and how it translates into her vision of the modern black experience.',
    link: 'https://malenebarnett.com/shop',
  },
  {
    title: 'Mateo Askaripour',
    description:
      'Mateo Askaripour is a Brooklyn-based author whose debut novel Black Buck has received critical acclaim from The Washington Post and the Los Angeles Times.',
    link: 'https://mateowrites.com',
  },
  {
    title: 'Samuel Getachew',
    description:
      'Samuel Getachew is an 18-year-old spoken word poet from Oakland, CA whose poetry has been featured in The New York Times, The East Bay Express, Refinery29, NPR and more.',
    link: 'https://www.samuelgetachew.com/',
  },
]

const Respect: NextPage = () => {
  return (
    <Layout navFixed>
      <div className="relative h-[600px] md:h-[700px]">
        <BgImage src="/soundboard-bg.jpeg" backdrop priority />
        <div className="absolute left-0 right-0 top-1/2 z-20 -translate-y-1/2 text-white">
          <Container>
            <div className="text-2xl font-bold md:max-w-[75%] md:text-5xl md:leading-tight">
              “Music doesn't lie. If thereis something to be changedin this
              world then it can only happen through music.”
            </div>
            <div className="mt-4 font-bold text-[#F00B8F] md:text-xl">
              - Jimi Hendrix
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <ul className="my-24 flex flex-wrap gap-x-4 gap-y-12">
          {data.map((o, idx) => (
            <li key={idx}>
              <div className="flex max-w-[600px] flex-col space-y-3 md:space-y-4">
                <h6>{o.title}</h6>
                <p className="md:text-base">{o.description}</p>
                {o.link && <ExternalLink href={o.link}>{o.link}</ExternalLink>}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default Respect
