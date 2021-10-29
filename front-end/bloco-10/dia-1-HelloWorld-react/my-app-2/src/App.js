import Header from './Header'
import Content from './Content'
import Image from './Image'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image
        source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg"
        alternativeText="Cute cat staring"
      />
      <Footer />
    </div>
  )
}

export default App
