import Image from "next/image"
import styles from './about.module.css'
const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src={'/Designer.png'} alt="Designer" fill />
    </div>
  )
}

export default AboutPage