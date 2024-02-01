// 이 안에서 데이터베이스에 도달하고 데이터를 가져온다

import sql from 'better-sqlite3';

const db = sql('prescriptions.db')

export async function getPrescriptions() {
  // 임의로 시간 지연 - 로딩 작업을 위해
  await new Promise((res) => setTimeout(res, 2000))

  // 에러 테스트
  // throw new Error('loading failed!!!!');
  return db.prepare('SELECT * FROM prescriptions').all()
}