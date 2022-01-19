import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({ results }) {
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="A next.js clone of the hulu app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre

  try {
    const res = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)//.then(res => res.json())
    const req = await res.json()

    return {
      props: {
        results: req.results
      }
    }
  } catch (error) {
    console.error(error)
  }

  return { props: {} }
}