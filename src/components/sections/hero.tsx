const hero = {
    title: ["ESIC", ["Your training center"]],
    subtitle: "Together towards excellence in your IT, management, design, language and office skills. More than 400 certified training courses in vocational training, sandwich courses and apprenticeships.",
    small: "Start new carreer right by following of our path",
    form: {
        search: {
            label : "Search a formation",
            placeholder: "Web developpement",
        },
        submit : {
            label: "Search"
        }
    }
}

export default function Hero(){
    return (    
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                  <span className="">{hero.title[0]}</span>
                  <span className=" text-indigo-400">{hero.title[1]}</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">{hero.subtitle}</p>
                <div className="mt-10 sm:mt-12">
                  <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                    <div className="sm:flex">
                      <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">{hero.form.search.label}</label>
                        <input id="email" type="email" placeholder={hero.form.search.placeholder} className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900" />
                      </div>
                      <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button type="submit" className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900">{hero.form.submit.label}</button>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-300 sm:mt-4">{hero.small}</p> 
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="/images/hero-image.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}