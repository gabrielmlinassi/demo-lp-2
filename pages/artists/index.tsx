import DemoData from 'data'
import type { InferGetStaticPropsType, NextPage } from 'next'
import { Artist } from 'components/Artist'
import { Container } from 'components/Container'
import { Layout } from 'components/Layout'

type Page = {} & NextPage<InferGetStaticPropsType<typeof getStaticProps>>

const Artists: Page = ({ artists }) => {
  return (
    <Layout>
      <Container>
        <ul className="my-8 flex flex-wrap gap-6">
          {artists.map((artist, idx) => (
            <Artist key={artist.id} {...artist} priority={idx === 0} />
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export const getStaticProps = () => {
  const artists = DemoData.artists

  return {
    props: {
      artists,
    },
  }
}

export default Artists
