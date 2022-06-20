import { BannerSecondaryComponent } from "./BannerSecondaryComponent"

import { ContainerBannersSecondary } from "./style"

import { gamesBannersSecondary } from '../../../../public/datas/banners.json'

export const BannersSecondary = () => {

  return (
    <>
      <ContainerBannersSecondary>
        {
          gamesBannersSecondary.map((banner) => {
              return (
                <BannerSecondaryComponent
                  img={banner.image.img}
                  altImg={banner.image.altImg}
                  description={banner.description}
                />
              )
          })
        }
      </ContainerBannersSecondary>
    </>
  )
}