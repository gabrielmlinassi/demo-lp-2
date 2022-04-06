import { Container } from 'components/Container'
import { Layout } from 'components/Layout'
import { NextPage } from 'next'

const NotFound: NextPage = () => {
  return (
    <Layout>
      <Container>
        <div className="flex items-center justify-center py-44 text-2xl font-bold text-white">
          404 - Not Found ;(
        </div>
      </Container>
    </Layout>
  )
}

export default NotFound
