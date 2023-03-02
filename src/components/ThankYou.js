import Card from '../components/UI/Card'
import { ReactComponent as ThankYouIcon } from '../assets/icon-thank-you.svg'
import styles from './ThankYou.module.css'
import { ReactComponent as SidebarDesktop } from '../assets/bg-sidebar-desktop.svg'



function ThankYou() {
    return (
        <Card>
            <div className={styles.thankYou}>
                <div className={styles.stepsNav}>
                    <SidebarDesktop />
                </div>
                <div className={styles.thankYouData}>
                    <ThankYouIcon height={55} />
                    <h1>Thank you!</h1>
                    <p>Thanks for confirming your subscription!
                    We hope you have fun using out platform. If you need
                    support, please feel free to email us at support@loremgaming.com.
                </p>
                </div>
            </div>
        </Card>
    )
}

export default ThankYou
