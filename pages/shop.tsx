import { Container } from 'components/Container'
import { Layout } from 'components/Layout'
import { NextPage } from 'next'

const Shop: NextPage = () => {
  return (
    <Layout hideFooter>
      <Container>
        <div className="flex h-[500px] items-center justify-center text-center text-4xl font-bold text-white">
          Under development
        </div>
      </Container>
    </Layout>
  )
}

export default Shop
