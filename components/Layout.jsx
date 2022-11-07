import Footer from "./Footer"
import Nav from "./Nav"


const Layout = ({children}) => {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
        <Nav />
        {children}
        <Footer />
    </div>
  )
}

export default Layout