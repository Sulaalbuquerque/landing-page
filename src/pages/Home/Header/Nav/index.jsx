import { useEffect, useContext } from "react"

import { NavIsVisibleContext } from "../../../../contexts/NavIsVisibleContext"

import { ContainerNav } from "./style"

export const Nav = () => {

  const { navIsVisible } = useContext(NavIsVisibleContext)
  
  useEffect(() => {
    if(window.innerWidth <= 770){
      document.body.style.overflow = navIsVisible ? 'hidden' : 'auto';
    }
  }, [navIsVisible]); 
  
  return (
    <>
      <ContainerNav navIsVisible={navIsVisible}>

        <div className="arrow"></div>
        
        <div className="lists">

          <div className="list">
            <h4>Luta</h4>
              <li>
                <a href="#">Mortal Kombat</a>
              </li>
              <li>
                <a href="#">Smash Bros</a>
              </li>
              <li>
                <a href="#">Killer Instict</a>
              </li>
              <li>
                <a href="#">DBZ Kakarot</a>
              </li>
          </div>

          <div className="list">
            <h4>Ação / Aventura</h4>
              <li>
                <a href="#">GTA V</a>
              </li>
              <li>
                <a href="#">Tomb Raider</a>
              </li>
              <li>
                <a href="#">HALO</a>
              </li>
              <li>
                <a href="#">Call of Duty</a>
              </li>
          </div>

          <div className="list">
            <h4>Corrida</h4>
              <li>
                <a href="#">NEED For SPEED</a>
              </li>
              <li>
                <a href="#">Forza Horizon</a>
              </li>
          </div>

        </div>

      </ContainerNav>
    </>
  )
}