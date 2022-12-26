import classNames from 'classnames'
import React from 'react'

function RenderHtmlContent({content, classes}:any) {
  return (
    <div
     className={classNames({[`${classes}`]: classes})}
      dangerouslySetInnerHTML={{
        __html: content,
      }}/>
  )
}

export default RenderHtmlContent