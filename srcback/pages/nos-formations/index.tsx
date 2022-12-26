import OpenedLayout from '../../containers/opened'
import { ApplicationContext } from '../../context/ApplicationContext';
import React, { useContext, useState } from 'react'
function Search() {
  const {updateSearchPrams} = useContext(ApplicationContext);
  const [isImageLoading, setLoading] = useState(true);
  return (
    <OpenedLayout>
     
    </OpenedLayout>
  )
}

export default Search
