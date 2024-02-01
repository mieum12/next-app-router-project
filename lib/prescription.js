// 이 안에서 데이터베이스에 도달하고 데이터를 가져온다

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
}열

// SQL 인젝션에서 보호하기 위해 WHERE slug = slug 라고 안하고 ? 로 대체한 뒤
// get(slug)로 불러준다
export function getPrescription(slug) {
  return db.prepare('SELECT * FROM prescriptions WHERE slug = ?').get(slug)
}

// 저장하기
export function savePrescription(prescription) {
  // 덮어쓰기로 slug 생성
  prescription.slug = slugify(prescription.title, {lower: true}) //소문자로
  // instructions 검열한 후 덮어쓰기
  prescription.instructions = xss(prescription.instructions)
}