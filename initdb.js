const sql = require('better-sqlite3');
const db = sql('prescription.db');
// node initdb 를 터미널에 입력해 db를 얻는다

const dummyPrescriptions = [
  {
    title: '책 추천',
    slug: 'book',
    image: '/images/book.jpeg',
    summary:
      '마음이 복잡할 떄 추천하는 책.',
    instructions: `
      1. "아모르 파티" by 정유정

      이유: 이 소설은 삶의 복잡한 면들을 그림으로써 독자에게 공감과 위로를 전합니다. 주인공의 성장과 사랑, 가족에 대한 이야기를 통해 마음의 복잡함에 대한 깊은 이해를 제공합니다.

      2. "당신을 기다리는 시간" by 김유정

      이유: 김유정의 감성적인 글쓰기와 감동적인 이야기가 마음을 따뜻하게 만들어줍니다. 이 소설은 삶의 고난과 괴로움을 극복하며 성장하는 주인공의 이야기를 담고 있어, 독자에게 용기와 희망을 전합니다.
      
      3. "그해, 여름 손님" by 김영하
      
      이유: 이 소설은 한 여름 밤의 만남을 통해 인간관계와 사랑, 상실에 대한 섬세한 감정을 그립니다. 김영하의 수려한 문장과 감성적인 이야기는 독자에게 위로와 공감을 전해줍니다.
      
      4. "떠나지마" by 김윤주
      
      이유: 이 소설은 가족과 사랑, 인생의 선택에 대한 이야기를 다룹니다. 마음이 복잡한 순간에 무거움과 가벼움을 동시에 느낄 수 있는 이 소설은 독자에게 생각할 거리를 제공합니다.
      
      5. "우리가 함께 한 시간 속에서" by 김영하
      
      이유: 김영하의 짧지만 감각적인 단편 소설 모음집으로, 인간관계의 다양한 측면을 다룹니다. 이 소설은 일상에서 놓치기 쉬운 순간들을 통해 삶의 아름다움을 발견하게끔 이끌어줍니다.
    `,
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: '드라마 추천',
    slug: 'drama',
    image: '/images/drama.jpeg',
    summary:
      '스트레스가 풀릴만한 드라마 추천.',
    instructions: `
      
      1. "응답하라 1988"
      
      이유: 이 드라마는 따뜻한 가족 이야기와 친구들 간의 소소한 일상을 그리면서, 시청자에게 웃음과 감동을 선사합니다. 캐릭터들의 유쾌한 대화와 사랑스러운 상황들은 스트레스를 풀어주는 효과가 있습니다.
      
      2. "로맨스는 별책부록"
      
      이유: 이 드라마는 작가와 편집자의 이야기를 바탕으로 한 로맨틱 코미디로, 경쾌한 유머와 로맨스가 풍부하게 펼쳐집니다. 풍부한 상상력과 유쾌한 대사는 시청자에게 긍정적인 에너지를 전해줍니다.
      
      3. "미스터 션샤인"
      
      이유: 본격적인 사극 드라마로, 역사적 배경과 스릴 넘치는 스토리가 스트레스 해소에 도움을 줍니다. 아름다운 영상과 복잡한 인물 관계는 시청자를 몰입시키며 긴장을 풀어줍니다.
      
      4. "응답하라 1997"
      
      이유: 1990년대를 배경으로 한 이 드라마는 중학교 시절의 추억과 친구들 간의 우정을 그립니다. 특유의 유머와 감동적인 이야기는 시청자에게 회상과 웃음을 안겨줍니다.
      
      5. "이번 생은 처음이라"
      
      이유: 로맨틱 코미디 장르의 이 드라마는 전생과 현대의 이야기를 유쾌하게 결합시킵니다. 주인공들의 달달하고 경쾌한 로맨스는 일상의 스트레스를 잠시 잊게 만들어줍니다.
    `,
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: '영화 추천',
    slug: 'movie',
    image: '/images/movie.jpeg',
    summary:
      '연애 시작할 떄 딱 좋은 영화 추천.',
    instructions: `
      1. "러브액츄얼리" (Love Actually)

      이유: 크리스마스 분위기 속에서 펼쳐지는 다양한 연애 이야기들이 따뜻한 감동과 로맨스를 전해줍니다. 각 캐릭터들의 사랑스러운 모습이 연애 감정을 뿜뿜하게 만들어줍니다.
      
      2. "노트북" (The Notebook)
      
      이유: 닉 카사베츠와 앨리 해밀턴의 순수하고 강렬한 사랑 이야기는 많은 이들에게 감동을 전하며, 연인 간의 감정이 뿜뿜하는 순간들이 여러 장면에서 묘사되어 있습니다.
      
      3. "어바웃 타임" (About Time)
      
      이유: 시간을 되돌리는 능력을 가진 주인공이 자신의 삶과 연인에 대한 선택을 통해 가족과 사랑에 대한 깊은 감동을 느낄 수 있는 영화입니다. 달콤하면서 따뜻한 연애 이야기가 뿜뿜합니다.
      
      4. "라라랜드" (La La Land)
      
      이유: 현대적인 뮤지컬로 그려진 이 영화는 두 주인공의 꿈과 사랑을 통해 감정의 농도가 높아지는 순간들을 담고 있습니다. 음악과 춤으로 가득 찬 연애의 감정이 뿜뿜하게 전해집니다.
      
      5. "500일의 썸머" (500 Days of Summer)
      
      이유: 일상적인 연애 이야기를 흔치 않은 구성으로 전하는 이 영화는 감정의 파도를 여러 각도에서 보여줍니다. 현실적이면서도 로맨틱한 연애 감정이 뿜뿜하는 영화 중 하나입니다.
    `,
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: '노래 추천',
    slug: 'music',
    image: '/images/music.jpeg',
    summary:
      '드라이브할떄 좋은 팝송 추천.',
    instructions: `
      1. "Take On Me" by a-ha

      소개: 80년대 팝 클래식 중 하나로, 신나는 비트와 특이한 보컬로 유명합니다. 고속도로를 달리면서 듣기 좋은 텐션을 높여주는 곡으로, 특히 드라이브 시 쾌적한 분위기를 연출합니다.
      
      2. "Dancing Queen" by ABBA
      
      소개: ABBA의 대표곡 중 하나로, 경쾌하고 활기찬 분위기를 전하는 팝 클래식입니다. 드라이브 도중 유쾌하게 몸을 흔들 수 있는 곡으로, 활기찬 여행을 연상시켜줍니다.
      
      3. "Sweet Caroline" by Neil Diamond
      
      소개: 뉴 잉글랜드의 야구 경기에서 흔히 들리는 이 곡은 감동적인 멜로디와 함께 흥겨운 분위기를 전합니다. 드라이브 중에 시원한 바람과 함께 따라 부르기 좋은 곡입니다.
      
      4. "I Gotta Feeling" by The Black Eyed Peas
      
      소개: 흥미진진한 일상을 만들어주는 파티 분위기의 곡으로, 드라이브 시 흥겨운 몰입감을 선사합니다. 긍정적인 가사와 신나는 비트가 에너지를 불러일으킵니다.
      
      5. "Shut Up and Dance" by WALK THE MOON
      
      소개: 신나는 리듬과 즉흥적인 가사로 가득 찬 이 곡은 드라이브할 때 듣기 좋은 팝송 중 하나입니다. 흥겨운 멜로디와 함께 드라이브를 더욱 즐겁게 만들어줍니다.
    `,
    creator: 'Jiwon Choi',
    creator_email: 'jiwonni@example.com',
  },
];

db.prepare(`
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO prescriptions VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const prescription of dummyPrescriptions) {
    stmt.run(prescription);
  }
}

await initData();