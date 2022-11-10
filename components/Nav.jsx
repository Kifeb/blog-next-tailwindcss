import { useState } from "react"
import Container from "@components/Container"
import Link from "next/link";

const Nav = () => {

    const [offCanvas, SetOffCanvas] = useState(false);
    const [search, SetSearch] = useState(false);
    const [dropDown, SetDropDown] = useState(false);
    const listDropDown = [
      {text: 'Internet', href: '/posts', id: 1},
      {text: 'Books', href: '/posts', id: 2},
      {text: 'Open Source', href: '/posts', id: 3},
    ]

  return (
    <nav className="py-10">
    <Container>
      <div className="flex items-center justify-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => {SetOffCanvas(!offCanvas)}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.4">
                      <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                  </svg>
            </button>
          </div>
        <div className="lg:w-2/12 w-6/12 flex items-center justify-center lg:justify-start">
          <Link href='/'>
            <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-2 shadow-2xl">E</div></Link>Epicetus
            </div>
        <div className="w-3/12 lg:hidden text-right">
          <button onClick={() => SetSearch(!search)}>
            <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
            </svg>
          </button>
        </div>
        <div className={`bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none lg:static lg:w-7/12 w-full fixed top-0 h-full lg:h-aut p-10 lg:p-0 transition-all ${offCanvas ? "left-0" : "-left-full"}`}>
          <ul className="lg:space-x-10 space-y-4 flex lg:items-center lg:flex-row flex-col">
            <button className="lg:hidden" onClick={() => SetOffCanvas(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <li><Link href="/posts" className="hover:underline">UI Design</Link></li>
            <li><Link href="/posts" className="hover:underline">Front End</Link></li>
            <li><Link href="/posts" className="hover:underline">Back End</Link></li>
            <li className="relative">
              <a className="hover:underline cursor-pointer" onClick={() => SetDropDown(!dropDown)}>Lainnya ^ 
              </a>
              {dropDown && (
                <ul className="absolute w-[200px] bg-gray-800 rounded shadow-2xl mt-4">
                    {listDropDown.map(({text, href}) => (
                    <li key={id} className="border-b border-white/5 last:border-0">
                      <Link href={href}><div className="p-3">{text}</div></Link>
                    </li>
                    ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${search ? 'top-10' : '-top-40'}`}>
          <button className="absolute top-2 right-11 lg:hidden" onClick={() => SetSearch(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          <input className="bg-gray-700 px-6 py-2 w-full lg:rounded-full rounded-lg" placeholder="Search..." />
        </div>
      </div>
    </Container>
  </nav>
  )
}

export default Nav