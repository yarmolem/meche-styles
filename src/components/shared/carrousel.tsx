'use client'

import { type ReactNode, useEffect, useRef } from 'react'
import type * as splide from '@splidejs/splide'

interface Props {
  className?: string
  children?: ReactNode
}

const CarrouselSlide = (props: Props) => (
  <li className="splide__slide">
    <div className={props.className}>{props.children}</div>
  </li>
)

const Carrousel = (props: Props & { options?: splide.Options }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const splideRef = useRef<splide.Splide | null>(null)

  useEffect(() => {
    import('@splidejs/splide').then(({ default: Splide }) => {
      splideRef.current = new Splide(divRef?.current!, props.options)
      splideRef.current?.mount()
    })

    return () => {
      splideRef.current?.destroy(true)
    }
  }, [])

  return (
    <div className={props.className}>
      <div
        ref={divRef}
        role="group"
        className="splide"
        aria-label="Mejores trabajos de Meche Styles"
      >
        <div className="splide__track">
          <ul className="splide__list">{props.children}</ul>
        </div>
      </div>
    </div>
  )
}

export { Carrousel, CarrouselSlide }
