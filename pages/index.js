import Head from 'next/head'

export async function getStaticProps(context) {
  const res = await fetch('http://localhost:3000/api/profiles')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Awesome GitHub Profiles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to EddieHub ({data && data.length})
        </h1>

        <ul>
          {data && data.map((profile) => (<li key={profile.username}>{profile.name}</li>))}
        </ul>

      </main>

      <footer>
          Powered by EddieHub
      </footer>
    </div>
  )
}
