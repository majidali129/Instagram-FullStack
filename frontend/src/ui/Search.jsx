import { useState } from "react"
import { MdMic } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { useModalContext } from "./Modal";

const Search = () => {
    const [query, setQuery] = useState('');
    // const [results, setResults] = useState([]);
    const {close} = useModalContext()
    const handleQueryChange = (e) => {
        setQuery(e.target.value)
    }

    const handleUserSearch = (e) => {
        e.preventDefault()
        console.log(query)
        setTimeout(() => {
            close()
            setQuery('')
        },1200)
    }

  return (
    <div className="bg-zinc-800 overflow-hidden h-[70vh] md:h-screen md:-left-60 max-w-md w-[22rem] md:w-[30rem] py-4 md:py-7 space-y-3 md:space-y-5 px-4 rounded">
        <h2>Search</h2>
        <form
        onSubmit={handleUserSearch}
        className="flex items-center border relative rounded-md gap-x-2 border-zinc-800"
      >
        <input
          type="text"
          name="query"
          autoComplete="off"
          value={query}
          onChange={handleQueryChange}
          placeholder="Search..."
          className="!bg-zinc-900 py-1.5 px-2 focus:outline-none focus:border-none text-[.95rem] w-full"
          />
        {!query && <MdMic className="w-6 h-6 cursor-pointer" />}
        {query && <MdCancel className="w-5 h-5 absolute right-2 cursor-pointer" onClick={() => setQuery('')} />}
      </form>

      <ul className="space-y-2 results h-full *:border-b *:border-b-zinc-700 *:py-1.5 *:grid *:grid-cols-[50px_1fr] *:gap-x-1 md:*:gap-x-5 !overflow-y-scroll">
        <Link to="profile/asif113" onClick={() => close()}>
            <Avatar />
            <div>
                <h4 >username</h4>
                <span className="opacity-70 text-sm">Front-End Developer</span>
            </div>
        </Link>
      </ul>
    </div>
  )
}

export default Search