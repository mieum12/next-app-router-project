// 이 안에서 데이터베이스에 도달하고 데이터를 가져온다

import fs from 'node:fs'
import sql from 'better-sqlite3';
import slugify from "slugify";
import xss from "xss";

const db = sql('prescriptions.db')

export async function getPrescriptions() {
  // 임의로 시간 지연 - 로딩 작업을 위해
  await new Promise((res) => setTimeout(res, 2000))

  // 에러 테스트
  // throw new Error('loading failed!!!!');
  return db.prepare('SELECT * FROM prescriptions').all()
}

// SQL 인젝션에서 보호하기 위해 WHERE slug = slug 라고 안하고 ? 로 대체한 뒤
// get(slug)로 불러준다
export function getPrescription(slug) {
  return db.prepare('SELECT * FROM prescriptions WHERE slug = ?').get(slug)
}

// 저장하기
export async function savePrescription(prescription) {
  // 덮어쓰기로 slug 생성
  prescription.slug = slugify(prescription.title, {lower: true}) //소문자로
  // instructions 검열한 후 덮어쓰기
  prescription.instructions = xss(prescription.instructions)

  // 이미지파일을 퍼블릭폴더에 따로 저장을 해준다
  const extension = prescription.image.name.split('.').pop() // .이후의 png, jpeg만 받는다는 뜻
  const fileName = `${prescription.slug}.${extension}`
  // 어떤 파일에 데이터를 쓸 수 있도록해주는 stream 생성 (이미지 파일을 저장하는 경로를 받음)
  const stream = fs.createWriteStream(`public/images/${fileName}`)
  // 변환이 필요하다
  const bufferedImage = await prescription.image.arrayBuffer()

  // 두가지 인수: 저장할 파일, 파일 쓰기를 마치면 실행 될 함수
  // error를받는 이유: 정상동작하면 에러가 null일 것, 문제가 있다면 에러를 받아올 것
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('이미지 저장에 실패했습니다!!!')
    }
  });

  // prescription객체에 저장된 image를 저장된 이미지 경로로 덮어쓸 것
  // 데이터베이스는 파일을 저장하는 장소가 아니므로! 파일의 경로만 저장하려고 한다
  // public은 지워도 됨, 모든 이미지 요청을 자동으로 퍼블릭으로 보내지기 때문
  // 다른말로, 퍼블릭 폴더의 내용은 서버의 root단에 있는 것과 동일
  prescription.image = `/images/${fileName}`

  // 마지막으로 전체 데이터를 데이터베이스에 저장해야한다
  // 각 필드에 맞는 데이터가 자동으로 추출된다
  db.prepare(`
  INSERT INTO prescriptions
    (title, summary, instructions, creator, creator_email, image, slug)
   VALUES (
    @title, @summary, @instructions, @creator, @creator_email, @image, @slug
   )
  `).run(prescription)
}