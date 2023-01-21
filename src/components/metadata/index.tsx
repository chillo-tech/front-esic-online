import Head from 'next/head'
import React, { useMemo ,useState} from 'react'

function Metadata({entry}: any) {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useMemo(() => {
    if(entry && entry.metadonnees && entry.metadonnees.titre) {
      setTitle(entry.metadonnees.titre);
    } else if(entry?.libelle) {
      setTitle(entry?.libelle);
    } else if(entry?.titre) {
      setTitle(entry?.titre);
    }

    if(entry && entry.metadonnees && entry.metadonnees.descriptipn) {
      setDescription(entry.metadonnees.descriptipn);
    } else if(entry?.description) {
      setDescription(entry?.description);
    }

  }, [entry])
  return (
    <Head>
      <title>{title}</title>
      <meta name="titre" content={title} />
      <meta name="description" content={description} />
    </Head>
  )
}

export default Metadata
