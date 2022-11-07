import { useState } from "react"
import Container from "@components/Container"

const Nav = () => {

    const [dropDown, SetDropDown] = useState(false);
    const listDropDown = [
      {text: 'Internet', href: '#'},
      {text: 'Books', href: '#'},
      {text: 'Open Source', href: '#'},
    ]

  return (
    <nav className="py-10">
    <Container>
      <div className="flex items-center">
        <div className="w-2/12 flex items-center">
          <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-2 shadow-2xl">E</div>Epicetus
        </div>
        <div className="w-7/12">
          <ul className="space-x-10 flex items-center">
            <li><a href="#" className="hover:underline">UI Design</a></li>
            <li><a href="#" className="hover:underline">Front End</a></li>
            <li><a href="#" className="hover:underline">Back End</a></li>
            <li className="relative">
              <a className="hover:underline cursor-pointer" onClick={() => SetDropDown(!dropDown)}>Lainnya ^ 
              </a>
              {dropDown && (
                <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    {listDropDown.map(({text, href}) => (
                    <li className="border-b border-white/5 last:border-0">
                      <a key={text} href={href} className="hover:bg-gray-600 flex py-3 px-6">{text}</a>
                    </li>
                    ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="w-3/12 mr-32">
          <input className="bg-gray-700 px-6 py-2 w-full rounded-full" placeholder="Search..." />
        </div>
      </div>
    </Container>
  </nav>
  )
}

export default Nav