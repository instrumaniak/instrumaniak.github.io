import { library } from '@fortawesome/fontawesome-svg-core'
import { faRss } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithubAlt,
  faCodepen,
  faDeviantart,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'


export const faIcons = {
  enable: () => {
    library.add(
      faRss,
      faTwitter,
      faGithubAlt,
      faCodepen,
      faDeviantart,
      faLinkedin
    )
  }
}
