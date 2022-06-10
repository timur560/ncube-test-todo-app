import Head from 'next/head'
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <>
      <Head>
        <title>NCube Goldwin Test App</title>
        <meta name="description" content="NCube Goldwin Test App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TodoList />
    </>
  )
}
