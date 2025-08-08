/*  
    ty = 
    0.노잼
    1.에이스
    2.싸이코
    3.꿀벌
    4.폐급
    5.천사
    
    level =
    0.신병/이병
    1.일병
    2.상병
    3.병장
        */
const queanw = [
    //여자
    { dumq : [ 
        {que : "공군의 복무 개월수는?", 
        duma : [ 
            {anw : '16개월', fkty : 1 }, 
            {anw : '18개월', fkty : 1 },
            {anw : '20개월', fkty : 1 },
            {anw : '21개월', fkty : 0 }
        ]},
        {que : "우리의 주적은 누구인가?", 
        duma : [ 
            {anw : '북한', fkty : 4 }, 
            {anw : '중국', fkty : 1 },
            {anw : '간부', fkty : 0 },
            {anw : '남한', fkty : 3 }
        ]},
        {que : "당신은 시력이 낮아 신검에서 3급을 받았다. 당신의 병역 처분은?", 
        duma : [ 
            {anw : '현역', fkty : 0 }, 
            {anw : '보충역', fkty : 1 },
            {anw : '면제', fkty : 1 }
        ]}
    ] },
    //미필
    { dumq : [ 
        {que : "현역병 육군 훈련소 입영 요일은 언제인가??", 
        duma : [ 
            {anw : '월요일', fkty : 0 }, 
            {anw : '수요일', fkty : 2 },
            {anw : '금요일', fkty : 2 },
            {anw : '일요일', fkty : 2 }
        ]},
        {que : "훈련소에서 사용하는 연습용 수류탄의 색깔은?", 
        duma : [ 
            {anw : '파란색', fkty : 0 }, 
            {anw : '빨간색', fkty : 2 },
            {anw : '노란색', fkty : 2 },
            {anw : '초록색', fkty : 2 }
        ]},
        {que : "다음중 중위보다 계급상 낮은 계급은?", 
        duma : [ 
            {anw : '대위', fkty : 2 }, 
            {anw : '상사', fkty : 0 },
            {anw : '소령', fkty : 2 },
            {anw : '준장', fkty : 2 }
        ]}
    ] },
    //1
    {
        que : "군대에서 선임에게 장난같은 부조리를 당했다...", 
        rela : [ 
            {anw : '마음의 편지를 쓴다', ty : [0,4,6], level : 'none'}, 
            {anw : '그 선임과 친해진다', ty : [1,3,7], level : 'none'},
            {anw : '참고 버틴다', ty : [0,2,5], level : 'none'},
            {anw : '그 선임에게 부조리라고 얘기한다', ty : [2,4], level : 'none'}
        ]},
    //2
    {
        que : "행보관이 비효율적인 작업 지시를 내렸다.", 
        rela : [ 
            {anw : '건의한다', ty : [1,2], level : 'none'}, 
            {anw : '난 몰라', ty : [3,4], level : 'none'},
            {anw : '까라면 깐다', ty : [0,1,5,6], level : 'none'},
            {anw : '하는 척 한다', ty : [2,3,4,7], level : 'none'}
        ]},
    //3
    {
        que : "아침에 기상 방송이 울렸다.", 
        rela : [ 
            {anw : '졸린데 더 잔다', ty : 'none', level : [3]}, 
            {anw : '일어나서 환복한다', ty : 'none', level : [1]},
            {anw : '준비후 자고 있는 인원들을 깨운다', ty : [6], level : [0]},
            {anw : '일단 누워있는다', ty : [3], level : [2]}
        ]},
    //4 수정
    {
        que : "작업중 후임들이 일이 서투르다.", 
        rela : [ 
            {anw : '눈치 준다', ty : [1,2], level : 'none'}, 
            {anw : '그러려니 한다', ty : [0,3,5], level : 'none'},
            {anw : '아는 척 좀 한다', ty : [1,4,7], level : 'none'},
        ]},
    //5
    {
        que : "혹한기 훈련 전날이다.", 
        rela : [ 
            {anw : '풋살을 한다', ty : [1,3], level : [3]}, 
            {anw : '군장이나 싼다', ty : [0,2,4], level : 'none'},
            {anw : '인원들을 독려한다', ty : [1,5,6], level : 'none'},
            {anw : '장비를 점검한다', ty : [2], level : 'none'}
        ]},
    //6 
    {
        que : "행정반에서 일할 인원 3명을 호출했다.", 
        rela : [ 
            {anw : '간다', ty : [6], level : [0]}, 
            {anw : '...', ty : 'none', level : [3]},
            {anw : '일단 간다', ty : 'none', level : [1]},
            {anw : '지목되면 간다', ty : 'none', level : [2]}
        ]},
    //7
    {
        que : "군대의 야심한밤, 잠이오지 않는다. 무슨 생각을 하는가?", 
        rela : [ 
            {anw : '훈련 가는 상상을 한다', ty : [2,6], level : 'none'}, 
            {anw : '근심 걱정을 한다', ty : [3,4], level : 'none'},
            {anw : '야한 생각을 한다', ty : [0,2,4,7], level : 'none'},
            {anw : '아무 생각도 하지 않는다', ty : [0,3], level : 'none'}
        ]},
    //8
    {
        que : "동기들과 함께 외박을 나갔다.", 
        rela : [ 
            {anw : '피씨방을 간다', ty : [0,4,6], level : 'none'}, 
            {anw : '위수 지역을 벗어나 시내로 점프를 뛴다', ty : [1,3,7], level : 'none'},
            {anw : '주변에 펜션을 잡고 논다', ty : [1,5], level : 'none'},
            {anw : '개인 약속을 잡고 따로 활동한다', ty : [2,3], level : [2,3]}
        ]},
    //9
    {
        que : "휴가를 나갔다. 셋째 날 당신은 무엇을 할것인가?", 
        rela : [ 
            {anw : '집에서 쉰다', ty : [4], level : [2,3]}, 
            {anw : '술을 마신다', ty : [6], level : [0,1]},
            {anw : '여행을 간다', ty : 'none', level : [0,1,2]},
            {anw : '아무거나 한다', ty : 'none', level : [3]}
        ]},
    //10
    {
        que : "별로 친하지도 않은 선임이 말할게 있다고 한다. 무슨 생각이 드는가?", 
        rela : [ 
            {anw : '뭘 짬 때릴 생각인거지...', ty : [0,4], level : 'none'}, 
            {anw : '귀찮게 왜...', ty : [2,3], level : 'none'},
            {anw : '내가 뭘 잘못했나...', ty : [4,5,6], level : 'none'},
            {anw : '친해져 볼까...', ty : [1,6,7], level : 'none'}
        ]},
    //11
    {
        que : "동기와 함께 불침번 근무를  선다.", 
        rela : [ 
            {anw : '잔다', ty : [0,3,4], level : 'none'}, 
            {anw : '사회 얘기를 한다', ty : [1,5,6], level : 'none'},
            {anw : '멍때린다', ty : [2,4], level : 'none'},
            {anw : '뒷담을 깐다', ty : [0,4,7], level : 'none'}
        ]},
    //12
    {
        que : "체력 측정을 한다.", 
        rela : [ 
            {anw : '정정당당하게 증명한다', ty : [1,6], level : [0,1]}, 
            {anw : '부족한 부분을 가라친다', ty : 'none', level : [2,3]}
        ]},
    //13 2번 수정
    {
        que : "PX를 가던 도중 후임이 내 뒷담 까는 것을 들었다", 
        rela : [ 
            {anw : '현장 검거 한다', ty : [4,7], level : 'none'}, 
            {anw : '내용을 좀 더 듣는다', ty : [2,3], level : 'none'},
            {anw : '눈감아 준다', ty : [0,4], level : 'none'},
            {anw : '그 후임에게 잘해준다', ty : [1,2,5,6], level : 'none'}
        ]},
    //14
    {
        que : "체력 단련 시간이다", 
        rela : [ 
            {anw : '아프다고 뺀다', ty : [3,4], level : 'none'}, 
            {anw : '개인 체단을 실시한다', ty : [1,2,6], level : 'none'},
            {anw : '기본 체단 이후 휴식한다', ty : [0,5], level : 'none'},
            {anw : '풋살을 한다', ty : [1], level : 'none'}
        ]},
    //15
    {
        que : "제설 작전 시작전이다.", 
        rela : [ 
            {anw : '넉가래를 든다', ty : 'none', level : [2]}, 
            {anw : '싸리비를 든다', ty : 'none', level : [1]},
            {anw : '염화칼슘을 든다', ty : 'none', level : [0]},
            {anw : '송풍기를 든다', ty : [1,6,7], level : 'none'}
        ]},
    //16
    {
        que : "전역 후 군대 선임이 만나자고 한다.", 
        rela : [ 
            {anw : '일단 간다', ty : [0,2], level : 'none'}, 
            {anw : '간다', ty : [1,5,6,7], level : 'none'},
            {anw : '연락을 받지 않는다', ty : [3,4], level : 'none'},
            {anw : '가지 않는다', ty : [0,4], level : 'none'}
        ]},
    //17
    {
        que : "무더운 여름, 야외 숙영중...", 
        rela : [ 
            {anw : '다양한 썰을 푼다', ty : [1,5,6,7], level : 'none'}, 
            {anw : '간단한 게임을 한다', ty : [0,3,4], level : 'none'},
            {anw : '그냥 잠이나 잔다', ty : [2,4], level : 'none'},
            {anw : '등목을 한다', ty : [1,2,7], level : 'none'}
        ]},
    //18
    {
        que : "토요일 아침 군대리아가 나왔다.", 
        rela : [ 
            {anw : '그냥 먹는다', ty : 'none', level : [0,2]}, 
            {anw : '어디선가 봤던 꿀팁으로 맛있게 만들어 먹는다', ty : [6,7], level : [1]},
            {anw : '먹지 않는다', ty : 'none', level : [3]}
        ]},
    //19
    {
        que : "친한 후임이 선을 넘을듯 말듯 장난을 친다.", 
        rela : [ 
            {anw : '짬의 차이를 보여준다', ty : [2,3,4,7], level : 'none'}, 
            {anw : '일단 받아준다', ty : [0,4,5,6], level : 'none'},
            {anw : '정색한다', ty : [0,1,2], level : 'none'}
        ]},
    //20
    {
        que : "새로운 신병이 전입을 왔다.", 
        rela : [ 
            {anw : '관심없다', ty : 'none', level : [2,3]}, 
            {anw : '잘해줘야지', ty : 'none', level : [0,1]},
            {anw : '기강을 잡는다', ty : 'none', level : [1,2]},
            {anw : '신병놀이를 한다', ty : [4,7], level : 'none'}
        ]},
    //21
    {
        que : "드디어 기다리고 기다리던 전역날이다.", 
        rela : [ 
            {anw : '동네방네 소문 내며 시끄럽게 간다', ty : [1,3,4,7], level : 'none'}, 
            {anw : '조용히간다', ty : [0,1,2,5], level : 'none'},
            {anw : '도망친다', ty : [0,3,4], level : 'none'}
        ]}
]