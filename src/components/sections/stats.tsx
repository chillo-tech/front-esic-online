const stats = {
    title : "Trusted by professionnals over years",
    subtitle : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.",
    items : [
        {
            label: "Year of Experience",
            value: "25"
        },
        {
            label: "Satisfaction",
            value: "98%"
        },
        {
            label: "Formations",
            value: "+400"
        },
        {
            label: "Certifications",
            value: "75"
        }
    ] 
}

export default function Stats(){
    return <section className="bg-gray-50 pt-12 sm:pt-16">

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{stats.title}</h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">{stats.subtitle}</p>
      </div>
    </div>

    <div className="mt-10 pb-12 bg-white sm:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
              {
                stats.items.map( item =>  
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">{item.label}</dt>
                    <dd className="order-1 text-5xl font-extrabold text-indigo-600">{item.value}</dd>
                </div>
              )
              }
            </dl>
          </div>
        </div>
      </div>
    </div>

  </section>
  
  
}