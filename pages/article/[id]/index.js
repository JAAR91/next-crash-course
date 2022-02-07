import { useRouter } from "next/router"
import Link from 'next/link'

const article = ({article}) => {
  // const router = useRouter()
  // const {id} = router.query //this gets the parameter your passing on the route

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </div>
  )
}

export const getStaticProps = async (context) => {
  //context.params.id gets the id that is being passed on the route
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

  const article = await res.json()

  return {
    props: {
      article
    }
  }
}


export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

  const articles = await res.json()

  const paths = articles.map((item) => {
    const id = item.id
    return {
      params: {
        id: id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default article