import DemoData from 'data'
import type { NextPage } from 'next'
import { Artist } from 'components/Artist'
import { LinkButton } from 'components/LinkButton'
import { BgImage } from 'components/BgImage'
import { Layout } from 'components/Layout'
import { Container } from 'components/Container'
import { TextBlock } from 'components/TextBlock'

const highlightedArtists = DemoData.artists.filter((_, i) => i < 4)

const Home: NextPage = () => {
  return (
    <Layout navFixed>
      <section className="relative h-[650px] md:h-[850px]">
        <BgImage src="/images/singing-bg.png" backdrop priority />
        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-[930px] bg-black bg-opacity-50 px-6 py-12 text-center">
            <h1>A headline here</h1>
            <span className="mx-auto mt-2 inline-block text-sm text-white text-opacity-70 sm:max-w-[75%] md:text-xl">
              Est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </span>
            <div className="mt-6">
              <LinkButton href="/artists">View all artists</LinkButton>
            </div>
          </div>
        </div>
      </section>
      <Container className="mt-20">
        <div className="flex flex-wrap justify-center gap-6">
          {highlightedArtists.map((artist) => (
            <Artist key={artist.name} {...artist} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <LinkButton href="/artists">View all our artists</LinkButton>
        </div>
      </Container>
      <section className="relative mt-28 pt-14 pb-8 md:pt-28 md:pb-28">
        <Container>
          <TextBlock>
            <TextBlock.Overline>Our mission</TextBlock.Overline>
            <TextBlock.Headline>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </TextBlock.Headline>
          </TextBlock>
        </Container>
        <BgImage src="/images/studio-bg.jpeg" backdrop />
      </section>
    </Layout>
  )
}

export default Home
