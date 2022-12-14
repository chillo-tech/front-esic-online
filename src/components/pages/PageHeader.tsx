import React from 'react'
interface Params {
  title: string,
  description ?: string,
  image?: string
}
function PageHeader({title, description, image='images/esic-image-5.jpg'}: Params) {
  return (
    <div className="md:text-left text-center w-full bg-cover bg-center h-40 md:h-80" style={{ backgroundImage: `url(/${image})`}}>
      <div className="bg-black/10 bg-gradient-to-r from-secondary w-full h-full">
        <div className="container mx-auto flex md:py-16 py-4  text-white flex-col h-full justify-center">
              <h1 className='font-extralight text-xl'>
                {title}
              </h1>
              {description ? (
              <div className="font-extrabold text-2xl md:text-left md:text-4xl "
                dangerouslySetInnerHTML={{__html: description}} />) : null}
        </div>
      </div>
    </div>
  )
}

export default PageHeader;