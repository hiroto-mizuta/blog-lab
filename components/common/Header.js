// export : 書き出し
// export const foo = なんか
// >> import { foo } from "ファイル相対パス"

// const piyo = なんか
// export default piyo
// >> import pito from "ファイルの相対パス"
import styles from './Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.Header}>
      <Link href="/">
        <a className={styles.HeaderText}>BLOG - Lab</a>
      </Link>
    </div>
  )
}

export default Header