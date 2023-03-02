import styles from './BackgroundImage.module.css'
import sidebarMobile from '../assets/bg-sidebar-mobile.svg'

function BackgroundImage() {
    return (
        <div className={styles.backgroundImage} style={{backgroundImage: `url(${sidebarMobile})`}}>

        
        </div>

    )
}

export default BackgroundImage
