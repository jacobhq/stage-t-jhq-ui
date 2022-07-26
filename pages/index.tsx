import { Button } from '@chakra-ui/react'
import { Donate, Layout } from 'jhq-ui'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const Home: NextPage = () => {
  const router = useRouter()
  const donateRef = useRef()

  return (
    <div>
      <Layout appTitle={'Demo app'} description="I just battled errors for ten min to create this demo." router={router} authLoading={false}>
        {/* @ts-ignore */}
        <Button onClick={() => donateRef.current.openModal()}>Open modal</Button>
        <Donate ref={donateRef} />
      </Layout>
    </div>
  )
}

export default Home
