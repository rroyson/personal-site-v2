import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <body className='flex flex-col min-h-screen'>
      <Nav />
      <main>{children}</main>
      <Footer />
    </body>
  )
}
