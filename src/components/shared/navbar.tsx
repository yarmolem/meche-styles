import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@src/components/ui/sheet'
import { Button } from '../ui/button'

import Logo from './logo'
import Container from './container'
import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <Container
      as="nav"
      className="py-4 flex justify-between sticky top-0 bg-background z-50"
    >
      <Logo />

      {/* Desktop */}
      <ul className="hidden items-center gap-3 sm:flex">
        <li>
          <a href="#" className="font-semibold hover:underline">
            INICIO
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold hover:underline">
            SERVICIOS
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold hover:underline">
            PRODUCTOS
          </a>
        </li>
        <li>
          <a href="#" className="font-semibold hover:underline">
            CONTACTO
          </a>
        </li>
      </ul>

      {/* Mobile */}
      <Sheet>
        <SheetTrigger asChild className="sm:hidden">
          <Button size="icon" aria-label="Abrir menu de navegacion">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <nav className="mt-3">
            <ul>
              <li className="border-b border-b-border">
                <a href="#" className="font-semibold">
                  <div className="p-3">INICIO</div>
                </a>
              </li>
              <li className="border-b border-b-border">
                <a href="#" className="font-semibold">
                  <div className="p-3">SERVICIOS</div>
                </a>
              </li>
              <li className="border-b border-b-border">
                <a href="#" className="font-semibold">
                  <div className="p-3">PRODUCTOS</div>
                </a>
              </li>
              <li>
                <a href="#" className="font-semibold">
                  <div className="p-3">CONTACTO</div>
                </a>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </Container>
  )
}

export default Navbar
