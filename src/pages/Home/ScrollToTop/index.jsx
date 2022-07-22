import { ContainerScrollToTop } from "./style"

export const ScrollToTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <ContainerScrollToTop>
        <button
          onClick={() => scrollToTop()}
        >
          Voltar ao topo
        </button>
      </ContainerScrollToTop>
    </>
  )
}