import RenderHtmlContent from 'components/shared/RenderHtmlContent';

function Articles({data}: any) {
  return (
    <>
    {data && data.length ? (
      <div className="grid py-10">
        {data.slice(0,4).map((article: any, index: number) => (
            <article key={`article-${index}-${article.id}`} className="md:items-center grid relative mb-5">             
                <div className="image-text">
                  <h3 className="text-2xl font-semibold">
                    <span className='mb-2'>{article.libelle}</span>
                    <span className="bg-secondary block h-1 w-24 my-2"/>
                  </h3>
                  {article.abstrait ? (<RenderHtmlContent classes='text-md py-2 break-normal whitespace-normal' content={article.abstrait}/>) : null }
                  {article.description ? (<RenderHtmlContent classes='text-md py-2 break-normal whitespace-normal' content={article.description}/>) : null }
                </div>   
            </article>
          ))}
      </div>
      ): null}
    </>
  )
}

export default Articles
