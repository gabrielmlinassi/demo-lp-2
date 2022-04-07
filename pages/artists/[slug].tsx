import ReactPlayer from 'react-player'
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import Image from 'next/image'
import { MusicIcon } from 'components/Icons'
import { Container } from 'components/Container'
import DemoData, { IArtist } from 'data'
import { Layout } from 'components/Layout'
import { FollowIcons } from 'components/FollowIcons'

interface IParams extends ParsedUrlQuery {
  slug: string
}

type Page = {} & NextPage<InferGetStaticPropsType<typeof getStaticProps>>

const Artist: Page = ({ artist }) => {
  return (
    <Layout navFixed>
      <div className="relative h-[600px]">
        <Image src={artist.picture} layout="fill" objectFit="cover" priority />
        <div className="absolute bottom-12 left-0 w-3/4 bg-black bg-opacity-50 px-4 py-4 md:w-1/3 md:px-12 md:py-8">
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white md:text-3xl">
              <MusicIcon className="md:hidden" />
              {artist.name}
            </div>
            <div className="mt-3">
              <FollowIcons
                facebookUrl={artist.facebook}
                instagramUrl={artist.instagram}
                spotifyUrl={artist.spotify}
                twitterUrl={artist.twitter}
                youtubeUrl={artist.youtube}
              />
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="my-20 flex flex-col gap-20 xl:flex-row">
          <div className="space-y-6">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <p>
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </p>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </p>
          </div>
          <div className="max-w-[650px] md:min-w-[550px]">
            <h5>Videos</h5>
            <div className="mt-6">
              <div className="aspect-video">
                <ReactPlayer
                  url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <span className="mt-3 inline-flex font-bold text-white">
                Connor Elingtoneo - Video #1
              </span>
            </div>
            <div className="mt-8">
              <div className="aspect-video">
                <ReactPlayer
                  url={'https://vimeo.com/104778280'}
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <span className="mt-3 inline-flex font-bold text-white">
                Connor Elingtoneo - Video #2
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = DemoData.artists.map((artist) => ({
    params: { slug: artist.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  const { slug } = params as IParams

  const artist = DemoData.artists.find(
    (artist) => artist.slug == slug
  ) as IArtist

  return { props: { title: `${artist.name} - Round Hill Records`, artist } }
}

export default Artist
