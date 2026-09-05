import React from 'react'
import Reveals from '../Reveals'

type Props = React.PropsWithChildren<{
  plainText: string
  highlightText: string
}>

const SectionHeader = ({ plainText, highlightText, children }: Props) => {
  return (
    <Reveals initialX = {-40}>
    <div className="text-center">
      <h2 className="text-[22px] md:text-[35px] px-20">
        {plainText}{' '}
        <span className="highlight px-2 whitespace-nowrap">
          {highlightText}
        </span>
      </h2>
      
      {children}
    </div>
    </Reveals>
  )
}

export default SectionHeader
