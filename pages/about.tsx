import DemoData from 'data'
import Image from 'next/image'
import type { NextPage } from 'next'
import { Container } from 'components/Container'
import { Layout } from 'components/Layout'
import { TextBlock } from 'components/TextBlock'
import { BgImage } from 'components/BgImage'
import { ExternalLink } from 'components/ExternalLink'

const About: NextPage = () => {
  return (
    <Layout navFixed>
      <section className="relative flex min-h-[600px] items-center lg:min-h-[700px]">
        <Container className="mt-16">
          <TextBlock>
            <TextBlock.Overline>Our mission</TextBlock.Overline>
            <TextBlock.Headline>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </TextBlock.Headline>
          </TextBlock>
        </Container>
        <BgImage src="/studio-bg.jpeg" backdrop priority />
      </section>
      <Container>
        <ul className="flex flex-wrap gap-12 py-32 md:gap-6 lg:gap-12">
          {DemoData.staff.map((person) => (
            <li
              key={person.name}
              className="w-full lg:max-w-[calc(50%-1.5rem)]"
            >
              <div className="flex flex-shrink-0 flex-col items-start gap-9 md:flex-row md:items-center">
                <div className="relative h-80 w-full grayscale md:h-72 md:w-72">
                  <Image src={person.picture} layout="fill" objectFit="cover" />
                </div>
                <div className="w-full">
                  <h5>{person.name}</h5>
                  <p className="text-sm text-[#FAFAFA]">{person.role}</p>
                  <hr className="mt-2 h-[2px] w-full border-none bg-[#F00B8F]" />
                  <ExternalLink href={person.linkedin} className="mt-4">
                    Linkedin
                  </ExternalLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  )
}

export default About
