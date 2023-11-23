import { useState } from "react";
import '../../src/App.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8 dark-green-gray text-off-white fixed w-full">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li>
                <AnchorLink href="#problema">Problema</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#justificativa">Justificativa</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#objetivo">Objetivo Geral</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#especificos">Objetivos específicos da pesquisa</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#referencial">Referencial Teórico</AnchorLink>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex px-4">
          <li>
            <AnchorLink href="#problema">Problema</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#justificativa">Justificativa</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#objetivo">Objetivo Geral</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#especificos">Objetivos específicos da pesquisa</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#referencial">Referencial Teórico</AnchorLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}