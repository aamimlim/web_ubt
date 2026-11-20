const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-01.webp",
        options: [
            { text: "모종삽입니다." },
            { text: "호미입니다." },
            { text: "전동 가위입니다." },
            { text: "갈퀴입니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-02.webp",
        options: [
            { text: "공중전화로 전화를 걸고 있습니다." },
            { text: "자판기에서 음료수를 뽑고 있습니다." },
            { text: "현금인출기에서 돈을 찾고 있습니다." },
            { text: "무인발권기에서 기차표를 사고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt18-34-1.webp",
        options: [
            { text: "용접면입니다." },
            { text: "귀덮개입니다." },
            { text: "방독면입니다." },
            { text: "안전대입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-04.webp",
        options: [
            { text: "밭에서 잡초를 뽑고 있습니다." },
            { text: "그물을 수선하고 있습니다." },
            { text: "생선을 크기별로 분류하고 있습니다." },
            { text: "과수원에서 사과를 따고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
        num: "5.",
        detail: "",
        image: "",
        options: [
            { text: "한국어 수업이 끝나면 도서관에 <u>가려고</u> 합니다." },
            { text: "한국어 수업이 끝나면 도서관에 <u>가면서</u> 합니다." },
            { text: "한국어 수업이 끝나면 도서관에 <u>가지만</u> 합니다." },
            { text: "한국어 수업이 끝나면 도서관에 <u>가거나</u> 합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
        num: "6.",
        detail: "",
        image: "",
        options: [
            { text: "고향에 소포를 보내려면 우체국에 <u>신어야</u> 합니다." },
            { text: "고향에 소포를 보내려면 우체국에 <u>가야</u> 합니다." },
            { text: "고향에 소포를 보내려면 우체국에 <u>입어야</u> 합니다." },
            { text: "고향에 소포를 보내려면 우체국에 <u>타야</u> 합니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 우체국 국제특급(EMS) 발송 시 보낼 수 없는 물품은 무엇입니까?",
        detail: "[국제특급우편(EMS) 이용 안내]\n- 접수 시간: 평일 09:00 ~ 18:00\n- 취급 제한 품목: 현금, 유가증권, 폭발성·인화성 물질, 부패하기 쉬운 음식물\n※ 주소와 연락처는 영문으로 정확하게 기재해 주시기 바랍니다.",
        image: "",
        options: [
            { text: "의류 및 신발" },
            { text: "책과 학용품" },
            { text: "현금 및 인화성 물질" },
            { text: "건조된 생활용품" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 이 표지판이 붙어 있는 곳에서 주의해야 할 점은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-08.webp",
        options: [
            { text: "부식성 물질이 있으므로 피부나 눈에 닿지 않도록 주의해야 합니다." },
            { text: "바닥이 미끄러우니 천천히 걸어야 합니다." },
            { text: "소음이 심하므로 귀마개를 착용해야 합니다." },
            { text: "고압 전류가 흐르므로 만지지 말아야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 다음 급여 명세서의 공제 내역에 해당하지 않는 것은 무엇입니까?",
        detail: "[11월 급여 내역]\n- 지급 항목: 기본급(2,060,740원), 연장수당(320,000원), 식대(100,000원)\n- 공제 항목: 국민연금, 건강보험, 고용보험, 기숙사 관리비\n- 실수령액: 지급 총액에서 공제 총액을 뺀 금액",
        image: "",
        options: [
            { text: "국민연금" },
            { text: "식대" },
            { text: "건강보험" },
            { text: "기숙사 관리비" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 외국인력지원센터 프로그램 안내문과 일치하지 않는 것은 무엇입니까?",
        detail: "[외국인력지원센터 주말 프로그램 안내]\n- 한국어 교육: 매주 일요일 10:00 ~ 12:00 (초급·중급반)\n- 무료 진료(내과·치과): 매월 둘째 주 일요일 13:00 ~ 16:00\n- 고충 상담: 평일 및 일요일 상시 운영 (통역 지원 가능)\n※ 모든 교육과 진료는 무료로 진행됩니다.",
        image: "",
        options: [
            { text: "한국어 교육은 매주 일요일 오전에 열립니다." },
            { text: "무료 진료는 한 달에 한 번 둘째 주 일요일에 있습니다." },
            { text: "상담 시 모국어 통역 지원을 받을 수 있습니다." },
            { text: "진료를 받으려면 별도의 접수비를 내야 합니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "한국의 명절인 설날 아침에는 어른들께 새해 인사로 ______을/를 드리고 덕담과 세뱃돈을 받습니다.",
        image: "",
        options: [
            { text: "세배" },
            { text: "차례" },
            { text: "회식" },
            { text: "결재" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "농작물에 병충해가 생기는 것을 막기 위해 농약을 뿌릴 때는 반드시 바람을 ______ 작업해야 합니다.",
        image: "",
        options: [
            { text: "등지고" },
            { text: "마주 보고" },
            { text: "무시하고" },
            { text: "기다리고" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "직장 내에서 상급자나 동료가 성적 언동 등으로 불쾌감이나 굴욕감을 주는 행위는 ______에 해당하며 법으로 엄격히 금지되어 있습니다.",
        image: "",
        options: [
            { text: "직장 내 성희롱" },
            { text: "연장 근로" },
            { text: "직무 교육" },
            { text: "산업 재해" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "음식물 쓰레기를 버릴 때는 물기를 최대한 제거한 뒤, 일반 쓰레기와 섞이지 않도록 전용 ______에 담아 배출해야 합니다.",
        image: "",
        options: [
            { text: "수거함(봉투)" },
            { text: "우체통" },
            { text: "공구함" },
            { text: "구급함" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "선반이나 밀링처럼 회전하는 기계를 다룰 때는 옷소매나 장갑이 기계에 ______ 위험이 있으므로 단정하게 복장을 착용해야 합니다.",
        image: "",
        options: [
            { text: "말려 들어갈" },
            { text: "미끄러질" },
            { text: "떨어질" },
            { text: "부딪힐" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "고용허가제로 입국한 외국인 근로자가 본국으로 귀국할 때 필요한 항공권 구입 비용 등을 충당하기 위해 가입하는 보험은 ______입니다.",
        image: "",
        options: [
            { text: "귀국비용보험" },
            { text: "상해보험" },
            { text: "자동차보험" },
            { text: "화재보험" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[17~18] 다음 질문에 답하십시오.",
        num: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        detail: "목재의 거친 표면을 매끄럽게 깎아낼 때 사용하는 목공용 도구입니다.",
        image: "",
        options: [
            { text: "대패" },
            { text: "송곳" },
            { text: "니퍼" },
            { text: "렌치" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[17~18] 다음 질문에 답하십시오.",
        num: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        detail: "회사의 업무가 끝나고 팀원들이 함께 모여 저녁 식사를 하거나 술을 마시며 친목을 다지는 모임입니다.",
        image: "",
        options: [
            { text: "회식" },
            { text: "조회" },
            { text: "면접" },
            { text: "출장" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19.",
        detail: "한국에서는 집을 구할 때 부동산 중개업소를 이용하는 경우가 많습니다. 계약하기 전에는 등기부등본을 확인하여 집주인이 실제 소유자인지, 집에 빚(근저당)이 많이 잡혀 있는지 꼼꼼히 살펴보아야 보증금을 안전하게 지킬 수 있습니다.",
        image: "",
        options: [
            { text: "집을 계약하기 전에는 등기부등본을 확인하는 것이 안전합니다." },
            { text: "집주인이 누구인지 확인하지 않고 바로 돈을 보내야 합니다." },
            { text: "한국에는 부동산 중개업소가 전혀 없습니다." },
            { text: "등기부등본은 집을 계약한 지 1년 후에 확인하는 서류입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20.",
        detail: "출국만기보험은 외국인 근로자의 퇴직금을 보장하기 위해 사업주가 의무적으로 가입하는 보험입니다. 1년 이상 한 사업장에서 계속 근무한 근로자가 퇴직하거나 출국할 때 보험금을 청구하여 받을 수 있습니다.",
        image: "",
        options: [
            { text: "출국만기보험은 근로자의 퇴직금을 보장하기 위한 제도입니다." },
            { text: "근로자 본인이 매달 보험료를 직접 납부해야 합니다." },
            { text: "1개월만 일하고 그만두어도 출국만기보험금을 전액 받습니다." },
            { text: "사업주는 이 보험에 가입할 의무가 전혀 없습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt22-21.mp3",
        options: [
            { text: "안전모" },
            { text: "안전화" },
            { text: "안전대" },
            { text: "보안경" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[21-24] 들은 것을 고르십시오.",
        num: "22.",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2025/01/g4_set10-22.mp3",
        options: [
            { text: "아버지는 63살에 사장이 됐습니다." },
            { text: "아버지는 52 살에 사장이 됐습니다." },
            { text: "아버지는 53 살에 사정이 됐습니다." },
            { text: "아버지는 54살에 사정이 됐습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-35-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-02.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-24-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b1-27-1.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-25-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-04.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-24-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-09.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-25-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-28-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-26-2.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-03.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt21-36-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt24-36-2.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-29.mp3",
        options: [
            { text: "가까운 우체국에 가시면 됩니다." },
            { text: "어제 소포를 받았습니다." },
            { text: "편지 봉투가 아주 예쁩니다." },
            { text: "기차역을 지나서 왼쪽에 있어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-30.mp3",
        options: [
            { text: "죄송하지만 저는 종교 때문에 술을 못 마셔요." },
            { text: "네, 어제 회식을 재미있게 했습니다." },
            { text: "아니요, 삼겹살을 아주 좋아합니다." },
            { text: "네, 내일 아침에 일찍 출근합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-31.mp3",
        options: [
            { text: "저온 창고 안쪽 선반에 정리해 주세요." },
            { text: "과수원에서 사과를 따고 있습니다." },
            { text: "사과가 아주 달고 맛있습니다." },
            { text: "트랙터를 운전해서 밭에 갔습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-32.mp3",
        options: [
            { text: "편의점에서도 간단한 감기약을 살 수 있어요." },
            { text: "어제 병원에 가서 주사를 맞았어요." },
            { text: "약국이 문 앞에 바로 있습니다." },
            { text: "감기가 다 나아서 기분이 좋아요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-33.mp3",
        options: [
            { text: "괜찮아요. 누구나 처음에는 실수할 수 있어요." },
            { text: "네, 저도 그렇게 생각합니다." },
            { text: "아니요, 아직 점심을 안 먹었어요." },
            { text: "천만에요. 제가 도와드릴게요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-01.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt17-23-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt02-27-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-35-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt15-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt09-36-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 여자가 은행에 가려는 이유는 무엇입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-37.mp3",
        options: [
            { text: "해외 송금 전용 계좌를 개설하기 위해" },
            { text: "잃어버린 체크카드를 재발급받기 위해" },
            { text: "공과금과 관리비를 납부하기 위해" },
            { text: "한국 돈을 달러로 환전하기 위해" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "38. 남자가 양식장에서 해야 할 일은 무엇입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-38.mp3",
        options: [
            { text: "물고기에게 사료를 주고 수온을 확인하는 일" },
            { text: "찢어진 그물을 바늘로 꿰매어 수선하는 일" },
            { text: "배에 얼음과 생선 상자를 싣는 일" },
            { text: "양식장 주변의 잡초를 뽑고 청소하는 일" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "39. 두 사람이 대화하는 내용과 일치하는 것은 무엇입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-39.mp3",
        options: [
            { text: "남자는 출국 최소 2주 전에 휴가 신청서를 내야 한다." },
            { text: "남자는 휴가를 사용할 수 있는 조건이 되지 않는다." },
            { text: "여자는 비행기 표를 대신 예매해 주기로 했다." },
            { text: "휴가 신청서는 고향에 다녀온 후에 제출한다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        detail: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-40.mp3",
        options: [
            { text: "한국의 술자리 및 식사 예절" },
            { text: "회식 장소 예약 및 메뉴 선정" },
            { text: "기숙사 공동생활 규칙 안내" },
            { text: "건강검진 일정 및 주의사항" }
        ],
        correct: 0,
        points: 2.5
    }

];