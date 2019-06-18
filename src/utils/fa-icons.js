/**
 *  Only import the font-awesome icons you need
 *  to reduce bundle size
 */

import { library } from '@fortawesome/fontawesome-svg-core'
//import { faRss } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithubAlt,
  faCodepen,
  faDeviantart,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

/**
 * Utility class for initializing
 *
 * FaIcons.init()
 */
class FaIcons {
  static init() {
    library.add(
      //faRss,
      faTwitter,
      faGithubAlt,
      faCodepen,
      faDeviantart,
      faLinkedin
    )
  }
}

export default FaIcons
