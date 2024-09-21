import { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'
import Button from './ui/Button'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* logo */}
      <img src={logo} alt="logo" className='w-[124px] h-32px]' />

      {/* navbar dekstop */}
      <ul className='sm:flex hidden justify-end items-center flex-1 list-none'>
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] mr-10 text-white hover:text-secondary transition ease-in-out duration-200`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <a
          href=""
          target='_blank'
          rel='noreferrer'
        >
          <Button text='source code' styles='py-3 px-3 text-[16px]' />
        </a>
      </ul>

      {/* navbar mobile */}
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt={toggle ? 'Close Menu' : 'Open Menu'}
          title={toggle ? 'Close Menu' : 'Open Menu'}
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prevToggle) => ~prevToggle)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] mb-4 text-white hover:text-secondary`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li className={`font-poppins font-normal cursor-pointer text-[16px] border-b border-gradient text-secondary mb-0`}>
              <a href="https://github.com/muhammadwahabarifin" target='_blank' rel='noreferrer'>
                source code
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
