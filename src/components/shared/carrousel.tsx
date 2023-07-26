'use client'

import { useEffect, useRef } from 'react'
import type Splide from '@splidejs/splide'
import Image from 'next/image'

const Carrousel = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const splideRef = useRef<Splide | null>(null)

  useEffect(() => {
    import('@splidejs/splide').then(({ default: Splide }) => {
      splideRef.current = new Splide(divRef?.current!, {
        rewind: true,
        pagination: false
      })

      splideRef.current?.mount()
    })

    return () => {
      splideRef.current?.destroy(true)
    }
  }, [])

  return (
    <div className="w-full aspect-[4_/_5]">
      <div
        ref={divRef}
        role="group"
        className="splide"
        aria-label="Mejores trabajos de Meche Styles"
      >
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <div className="w-full aspect-[4_/_5] relative">
                <Image fill alt="" src="/images/home_hero_1.jpeg" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="w-full aspect-[4_/_5] relative">
                <Image fill alt="" src="/images/home_hero_2.jpeg" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="w-full aspect-[4_/_5] relative">
                <Image fill alt="" src="/images/home_hero_3.jpeg" />
              </div>
            </li>
            <li className="splide__slide">
              <div className="w-full aspect-[4_/_5] relative">
                <Image fill alt="" src="/images/home_hero_4.jpeg" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Carrousel
