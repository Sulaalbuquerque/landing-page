import { ContainerNav } from "./style"

export const Nav = () => {
    
      return (
        <>
          <ContainerNav>
          
            <div className="list fight">
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

            <div className="list adventure">
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

            <div className="list race">
              <h4>Corrida</h4>
                <li>
                  <a href="#">NEED For SPEED</a>
                </li>
                <li>
                  <a href="#">Forza Horizon</a>
                </li>
            </div>

          </ContainerNav>
        </>
      )
  }