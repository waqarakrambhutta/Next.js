import Image from 'next/image'
import Link from 'next/link'
import ProductCart from './components/ProductCart'

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link> {/*to link pages in next we use link instead of anchor tag (anchor tag cause reload of whole app but link doesn't do this)*/} 
      <ProductCart></ProductCart>
      </main>
      
  )
}
