import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from './main-header.module.css'
import Image from "next/image";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        {/*
        img 태그를 대신한 Image: 이미지 최적화하기
        png가 아닌 wenp로 온다
        */}
        <Image src={logoImg.src} alt='음식사진' width={100} height={100} priority/>
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}