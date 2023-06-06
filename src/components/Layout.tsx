interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (<div className="content-center mx-auto w-1/2"><div className="flex flex-col sm:flex-row flex-wrap sm:flex-nowrap py-4 flex-grow">
    <div className="w-fixed w-1/2 flex-shrink flex-grow-0 px-4 ">
      <div className="sticky top-0 p-4 bg-gray-100 rounded-xl w-full h-full">
        <ul className="flex sm:flex-col overflow-hidden content-center justify-center">
          <li className="py-2 hover:bg-indigo-300 rounded">
            <a className="truncate" href="#">
              <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" className="w-7 sm:mx-2 mx-4 inline" />
              <span className="hidden sm:inline">Home</span>
            </a>
          </li>
          <li className="py-2 hover:bg-indigo-300 rounded">
            <a className="truncate" href="#">
              <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/cog.svg" className="w-7 sm:mx-2 mx-4 inline" /> <span className="hidden sm:inline">Settings</span>
            </a>
          </li>
          <li className="py-2 hover:bg-indigo-300 rounded">
            <a className="" href="#">
              <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/gift.svg" className="w-7 sm:mx-2 mx-4 inline" /> <span className="hidden sm:inline">Products</span>
            </a>
          </li>
          <li className="py-2 hover:bg-indigo-300 rounded">
            <a className="" href="#">
              <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/chart-bar.svg" className="w-7 sm:mx-2 mx-4 inline" /> <span className="hidden sm:inline">Reports</span>
            </a>
          </li>
          <li className="py-2 hover:bg-indigo-300 rounded">
            <a className="" href="#">
              <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/collection.svg" className="w-7 sm:mx-2 mx-4 inline" /> <span className="hidden sm:inline">Integrations</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <main role="main" className="w-full flex-grow pt-1 px-3">
      {children}
    </main>
  </div>
    <footer className="bg-black mt-auto">
      <div className="p-5 text-white mx-auto">
        <h1 className="text-2xl">Footer</h1>
        <div className="flex">
          <div className="flex-grow flex flex-col">
            <a href="#">Boom</a>
            <a href="#">Boom</a>
            <a href="#">Boom</a>
            <a href="#">Boom</a>
          </div>
          <div className="flex-grow flex flex-col">
            <a href="#">Boom</a>
            <a href="#">Boom</a>
            <a href="#">Boom</a>
            <a href="#">Boom</a>
          </div>
          <div className="flex-grow flex flex-col">
            <a href="#">Boom</a>
            <a href="#">Boom</a>
            <a href="#">Boom</a>
          </div>
          <div className="flex-grow flex flex-col">
            <a href="#">Boom</a>
            <a href="#">Boom</a>
            <a href="#">Boom</a>
            <a href="#">Boom</a>
          </div>
        </div>
        <div className="text-right text-xs py-4">
          <a href="">&copy;2021 Someco Inc.</a>
        </div>
      </div>
    </footer>
  </div>)
}
