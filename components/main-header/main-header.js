'use client'

import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from './main-header.module.css'
import Image from "next/image";
import {usePathname} from "next/navigation";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function MainHeader() {
  const path = usePathname()
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
            <Link href='/prescription' className={path.startsWith('/prescription') ? classes.active : undefined}>Browse prescription</Link>
          </li>
          <li>
            <Link href='/community' className={path.startsWith('/community') ? classes.active : undefined}>Community</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  )
}