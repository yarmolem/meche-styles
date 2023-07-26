import Navbar from '@src/components/shared/navbar'
import Container from '@src/components/shared/container'
import Carrousel from '@src/components/shared/carrousel'
import { Button } from '@src/components/ui/button'
import { Calendar } from '@src/components/ui/calendar'
import { Typography } from '@src/components/shared/typography'

const Home = () => {
  return (
    <>
      <section className="flex flex-col h-screen mb-8">
        <Navbar />

        <Container className="flex-1 flex flex-col justify-center">
          <div className="flex flex-col items-center text-center">
            <Typography>Passion & love for natural beauty</Typography>

            <Typography size="p" className="text-muted-foreground mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis ultrices tortor in tempor. In ut rhoncus sem, in congue
              diam.
            </Typography>

            <Calendar className="mb-3 dark" />

            <Button>Agenda tu cita</Button>
          </div>
        </Container>
      </section>

      <section className="mb-8">
        <Typography size="h2" className="mb-4 max-w-xs mx-auto">
          Nuestros mejores trabajos
        </Typography>

        <Carrousel />
      </section>
    </>
  )
}

export default Home
