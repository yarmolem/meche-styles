import Image from 'next/image'

import { Button } from '@src/components/ui/button'
import { Navbar } from '@src/components/shared/navbar'
import { Container } from '@src/components/shared/container'
import { Typography } from '@src/components/shared/typography'
import { Carrousel, CarrouselSlide } from '@src/components/shared/carrousel'

import HOME_HERO_1 from '@src/assets/images/home_hero_1.jpeg'
import HOME_HERO_2 from '@src/assets/images/home_hero_2.jpeg'
import HOME_HERO_3 from '@src/assets/images/home_hero_3.jpeg'
import HOME_HERO_4 from '@src/assets/images/home_hero_4.jpeg'

const Home = () => {
  return (
    <>
      <Navbar />

      <Container as="section" className="py-8 text-center">
        <Typography>Passion & love for natural beauty</Typography>

        <Typography size="p" className="text-muted-foreground mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum
          impedit ipsa facere doloribus asperiores saepe sed illum soluta
          ratione quos. Rerum quae molestiae quisquam, fuga id natus fugit
          dolore!
        </Typography>

        <Button>Agenda tu cita</Button>
      </Container>

      <section className="py-8">
        <Typography
          size="h2"
          className="mb-8 max-w-xs mx-auto text-center border-b border-b-border w-max pb-1"
        >
          Servicios
        </Typography>

        <Carrousel
          options={{
            rewind: true,
            autoplay: true,
            pagination: false
          }}
        >
          <CarrouselSlide className="relative w-full aspect-[4_/_5]">
            <div className="absolute bg-black bg-opacity-50 w-full h-full inset-0 z-10 p-8 flex flex-col justify-end">
              <Typography
                size="h2"
                className="text-white text-center tracking-wide"
              >
                Title
              </Typography>
            </div>
            <Image fill alt="" loading="lazy" src={HOME_HERO_1} />
          </CarrouselSlide>
          <CarrouselSlide className="relative w-full aspect-[4_/_5]">
            <div className="absolute bg-black bg-opacity-50 w-full h-full inset-0 z-10 p-8 flex flex-col justify-end">
              <Typography
                size="h2"
                className="text-white text-center tracking-wide"
              >
                Title
              </Typography>
            </div>
            <Image fill alt="" loading="lazy" src={HOME_HERO_2} />
          </CarrouselSlide>
          <CarrouselSlide className="relative w-full aspect-[4_/_5]">
            <div className="absolute bg-black bg-opacity-50 w-full h-full inset-0 z-10 p-8 flex flex-col justify-end">
              <Typography
                size="h2"
                className="text-white text-center tracking-wide"
              >
                Title
              </Typography>
            </div>
            <Image fill alt="" loading="lazy" src={HOME_HERO_3} />
          </CarrouselSlide>
          <CarrouselSlide className="relative w-full aspect-[4_/_5]">
            <div className="absolute bg-black bg-opacity-50 w-full h-full inset-0 z-10 p-8 flex flex-col justify-end">
              <Typography
                size="h2"
                className="text-white text-center tracking-wide"
              >
                Title
              </Typography>
            </div>
            <Image fill alt="" loading="lazy" src={HOME_HERO_4} />
          </CarrouselSlide>
        </Carrousel>
      </section>
    </>
  )
}

export default Home
