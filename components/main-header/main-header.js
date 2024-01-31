import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground/>
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        {/*
        img 태그를 대신한 Image: 이미지 최적화하기
        png가 아닌 wenp로 온다
        */}
        <Image src={logoImg.src} alt='음식사진' width={100} height={100} priority/>
        마음처방전
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/prescription'>Browse Prescription</NavLink>
          </li>
          <li>
            <NavLink href='community'>Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}