const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt12-01.webp",
        options: [
            { text: "안전화입니다." },
            { text: "안전모입니다." },
            { text: "보안경입니다." },
            { text: "귀마개입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-2.webp",
        options: [
            { text: "채소를 다듬고 씻고 있습니다." },
            { text: "고기를 불판에 굽고 있습니다." },
            { text: "설거지를 하고 그릇을 닦고 있습니다." },
            { text: "음식물 쓰레기를 버리고 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt08-01.webp",
        options: [
            { text: "교통카드를 단말기에 대고 있습니다." },
            { text: "기차표를 매표소에서 사고 있습니다." },
            { text: "택시 요금을 현금으로 내고 있습니다." },
            { text: "버스 노선을 휴대전화로 검색하고 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-4.webp",
        options: [
            { text: "은행 창구에서 통장을 개설하고 있습니다." },
            { text: "출입국관서에서 체류 연장을 신청하고 있습니다." },
            { text: "병원의 접수처에서 진료 예약을 하고 있습니다." },
            { text: "우체국에서 소포의 무게를 재고 접수하고 있습니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
        num: "5.",
        detail: "",
        image: "",
        options: [
            { text: "추석 연휴에는 기차표를 예매하기가 <u>어려울</u> 것입니다." },
            { text: "추석 연휴에는 기차표를 예매하기가 <u>어렵지만</u> 것입니다." },
            { text: "추석 연휴에는 기차표를 예매하기가 <u>어렵고</u> 것입니다." },
            { text: "추석 연휴에는 기차표를 예매하기가 <u>어려워서</u> 것입니다." }
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
            { text: "기계에 이상이 생기면 전원부터 <u>꺼야</u> 안전합니다." },
            { text: "기계에 이상이 생기면 전원부터 <u>켜야</u> 안전합니다." },
            { text: "기계에 이상이 생기면 전원부터 <u>열어야</u> 안전합니다." },
            { text: "기계에 이상이 생기면 전원부터 <u>밀어야</u> 안전합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 다음 중 은행 영업시간과 이용 방법에 대한 설명으로 옳은 것은 무엇입니까?",
        detail: "[한국 은행 이용 안내]\n- 창구 영업시간: 평일 09:00 ~ 16:00 (토요일, 일요일 및 공휴일 휴무)\n- 자동화기기(ATM) 이용: 연중무휴 07:00 ~ 23:30\n※ 창구 업무 마감 후에는 ATM이나 모바일 뱅킹을 이용해 주시기 바랍니다.",
        image: "",
        options: [
            { text: "토요일 오전에도 은행 창구에서 직접 상담을 받을 수 있습니다." },
            { text: "자동화기기는 밤 11시 30분까지 이용할 수 있습니다." },
            { text: "창구 영업은 평일 오후 6시까지 계속 운영됩니다." },
            { text: "공휴일에는 모바일 뱅킹과 ATM 모두 중단됩니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 이 표지판이 있는 작업 구역에서 반드시 지켜야 할 사항은 무엇입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-08.webp",
        options: [
            { text: "방독마스크를 착용해야 합니다." },
            { text: "안전화를 벗고 들어가야 합니다." },
            { text: "귀마개를 착용하지 말아야 합니다." },
            { text: "보호장갑을 끼지 않고 작업해야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 다음 한국의 전통 명절 풍속에 대한 글의 내용과 일치하는 것은 무엇입니까?",
        detail: "한국에서는 음력 1월 1일인 설날에 온 가족이 모여 조상님께 차례를 지내고 떡국을 먹습니다. 떡국을 먹어야 나이를 한 살 더 먹는다고 생각하기 때문입니다. 식사를 마친 후에는 어른들께 세배를 드리고, 온 가족이 모여 윷놀이나 연날리기 같은 전통놀이를 즐깁니다.",
        image: "",
        options: [
            { text: "설날에는 차례를 지내기 전에 먼저 윷놀이를 합니다." },
            { text: "설날에 송편을 먹어야 나이를 한 살 더 먹는다고 여깁니다." },
            { text: "어른들께 세배를 드린 후 떡국을 끓이기 시작합니다." },
            { text: "설날에는 가족들과 함께 전통놀이를 즐기기도 합니다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 외국인 근로자 고용보험 및 산재보험 안내문과 다른 것은 무엇입니까?",
        detail: "[외국인 근로자 사회보험 안내]\n- 산재보험: 모든 사업장에 의무 적용되며, 보험료는 사업주가 전액 부담합니다.\n- 건강보험: 직장가입자로 자동 가입되며, 사업주와 근로자가 보험료를 50%씩 나누어 부담합니다.\n- 고용보험: 고용허가제(E-9) 근로자는 본인이 희망할 경우 임의로 가입할 수 있습니다.",
        image: "",
        options: [
            { text: "산재보험료는 근로자가 월급에서 50%를 부담합니다." },
            { text: "건강보험료는 회사와 근로자가 절반씩 나누어 냅니다." },
            { text: "E-9 비자 근로자의 고용보험 가입은 선택 사항입니다." },
            { text: "산재보험은 모든 사업장에 의무적으로 적용됩니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "한국에서는 지하철이나 버스에서 노약자나 임산부를 보면 자리를 ______ 주는 것이 좋은 예절입니다.",
        image: "",
        options: [
            { text: "차지해" },
            { text: "양보해" },
            { text: "거절해" },
            { text: "빌려" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "논에 모내기를 하기 전에는 먼저 논에 물을 대고 트랙터로 흙을 부드럽게 ______ 작업을 해야 합니다.",
        image: "",
        options: [
            { text: "갈아엎는" },
            { text: "수확하는" },
            { text: "건조하는" },
            { text: "포장하는" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "작업 중 불꽃이 튀거나 뜨거운 금속 파편이 날아올 수 있으므로 화상을 입지 않도록 ______을/를 착용해야 합니다.",
        image: "",
        options: [
            { text: "귀덮개" },
            { text: "안전대" },
            { text: "방열복" },
            { text: "슬리퍼" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "한국에서 집을 계약한 후에는 이사한 날로부터 14일 이내에 관할 주민센터나 출입국관서에 방문하여 ______을/를 해야 법적 보호를 받을 수 있습니다.",
        image: "",
        options: [
            { text: "체류지 변경 신고" },
            { text: "사업장 변경 신청" },
            { text: "출국 예정 신고" },
            { text: "여권 재발급 신청" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "직장 동료와 업무 방식에 대해 오해가 생겼을 때는 혼자 화를 내기보다 대화를 통해 서로의 입장을 ______ 것이 중요합니다.",
        image: "",
        options: [
            { text: "무시하는" },
            { text: "이해하는" },
            { text: "숨기는" },
            { text: "비난하는" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "공장에서 제품 출하 전 불량품이 섞여 있는지 꼼꼼하게 ______ 과정을 거친 후 상자에 담아 포장합니다.",
        image: "",
        options: [
            { text: "폐기하는" },
            { text: "분해하는" },
            { text: "검수하는" },
            { text: "파손하는" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[17~18] 다음 질문에 답하십시오.",
        num: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        detail: "쇠파이프나 굵은 철사를 자르거나 구부릴 때 사용하는 공구로, 끝부분이 뾰족하게 맞물려 있습니다.",
        image: "",
        options: [
            { text: "대패" },
            { text: "펜치" },
            { text: "줄자" },
            { text: "사포" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[17~18] 다음 질문에 답하십시오.",
        num: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        detail: "근로자가 1년 동안 80% 이상 출근했을 때, 유급으로 쉴 수 있도록 법적으로 보장해 주는 휴가 제도입니다.",
        image: "",
        options: [
            { text: "병가" },
            { text: "연차 유급휴가" },
            { text: "무단 결근" },
            { text: "출산 전후 휴가" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19.",
        detail: "한국에는 다양한 종교가 있으며, 각 종교마다 중요한 기념일이 있습니다. 불교에서는 음력 4월 8일을 '부처님 오신 날'로 기념하며, 절에 연등을 달고 축제를 엽니다. 기독교에서는 12월 25일을 '성탄절(크리스마스)'로 기념하며, 이 두 날은 모두 한국의 법정 공휴일로 지정되어 있습니다.",
        image: "",
        options: [
            { text: "부처님 오신 날은 양력 4월 8일로 한국의 평일입니다." },
            { text: "성탄절은 공휴일이 아니므로 모든 회사가 정상 근무합니다." },
            { text: "부처님 오신 날과 성탄절은 모두 한국의 법정 공휴일입니다." },
            { text: "한국에서는 종교 기념일에 절이나 교회에 가는 것이 금지되어 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20.",
        detail: "표준근로계약서에는 근로계약 기간, 취업 장소, 업무 내용, 근로시간, 휴게시간, 임금의 구성 항목 및 지급 방법 등이 명시되어야 합니다. 근로자는 계약서에 서명하기 전에 본인이 이해할 수 있는 언어로 번역된 내용을 반드시 확인해야 하며, 계약서 사본 1부를 교부받아 보관하는 것이 좋습니다.",
        image: "",
        options: [
            { text: "근로계약서에는 임금과 휴게시간에 대한 내용을 적지 않습니다." },
            { text: "계약서 사본은 회사만 보관하고 근로자는 가질 수 없습니다." },
            { text: "서명하기 전에 번역된 계약 내용을 확인하는 것이 중요합니다." },
            { text: "업무 내용은 계약서에 적지 않고 일하면서 매일 바꿉니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-21.mp3",
        options: [
            { text: "직업 상담" },
            { text: "잔업 수당" },
            { text: "작업 수칙" },
            { text: "산업 시찰" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-22.mp3",
        options: [
            { text: "작업장 통로에 자재를 쌓아 두면 안 됩니다." },
            { text: "작업장 동료에게 자재를 사다 주면 안 됩니다." },
            { text: "작업장 출구에 기계를 세워 두면 안 됩니다." },
            { text: "작업장 창고에 제품을 쌓아 두어야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-02.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt18-35-1.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-03.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-24-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-34-3.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-01.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-35-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b5-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-25-4.webp" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt14-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b4-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b6-25-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt14-24-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt14-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt25-28-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b1-03.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b2-35-4.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b3-10.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-29.mp3",
        options: [
            { text: "가까운 우체국에서 소포를 보내세요." },
            { text: "관할 주민센터나 출입국관서에 신고하시면 됩니다." },
            { text: "부동산 중개업소에서 집을 구했습니다." },
            { text: "어제 기숙사에서 짐을 다 쌌습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-30.mp3",
        options: [
            { text: "네, 어제 삼겹살을 맛있게 먹었습니다." },
            { text: "아니요, 회식 장소가 회사에서 아주 가깝습니다." },
            { text: "죄송하지만 저는 종교 때문에 돼지고기를 먹지 못해요." },
            { text: "네, 다음 주 금요일에 회식을 할 예정입니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-31.mp3",
        options: [
            { text: "측면 개폐기를 열어서 환기를 좀 시켜 주세요." },
            { text: "난방기를 켜서 온도를 더 높여 주세요." },
            { text: "어제 비가 와서 날씨가 많이 쌀쌀해졌어요." },
            { text: "토마토 모종을 화분에 옮겨 심었습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-32.mp3",
        options: [
            { text: "내일 은행에 가서 통장을 만들려고 합니다." },
            { text: "기본급 외에 연장 수당이 추가로 들어왔습니다." },
            { text: "명세서 하단의 공제 내역란을 확인해 보시면 나와 있어요." },
            { text: "월급날은 매달 25일이라서 아직 멀었습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-33.mp3",
        options: [
            { text: "천만에요. 제가 언제든지 도와드릴게요." },
            { text: "아니요, 아직 점심 식사를 하지 못했습니다." },
            { text: "네, 다음부터는 절대 지각하지 마세요." },
            { text: "괜찮습니다. 처음에는 누구나 헷갈릴 수 있으니까요." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/09/gpt13-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-35-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-35-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/10/gpt16-36-1.webp" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 여자가 내일 아침에 주민센터에 가려는 이유는 무엇입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-37.mp3",
        options: [
            { text: "새로운 원룸을 계약하기 위해서" },
            { text: "체류지 변경 신고를 하기 위해서" },
            { text: "외국인등록증을 재발급받기 위해서" },
            { text: "쓰레기 종량제 봉투를 사기 위해서" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "38. 남자가 양식장 작업 중 주의해야 할 점으로 들은 것은 무엇입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-38.mp3",
        options: [
            { text: "작업 중 구명조끼를 절대 벗지 않는 것" },
            { text: "물고기 사료를 창고 밖으로 옮기는 것" },
            { text: "배가 흔들릴 때 바다로 뛰어내리는 것" },
            { text: "장화를 벗고 맨발로 갑판 위를 걷는 것" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "39. 대화의 내용과 일치하지 않는 것은 무엇입니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-39.mp3",
        options: [
            { text: "다음 주 수요일은 한국의 법정 공휴일이다." },
            { text: "납기일을 맞추기 위해 수요일 오전에 근무를 한다." },
            { text: "휴일 근무에 대해서는 통상임금의 1.5배 수당이 지급된다." },
            { text: "회사는 수요일 하루 종일 문을 닫고 아무도 출근하지 않는다." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        detail: "",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/11/gpt-b7-40.mp3",
        options: [
            { text: "한국의 전통 명절 음식 종류" },
            { text: "숟가락과 젓가락을 사용하는 한국의 식사 예절" },
            { text: "식당에서 음식을 주문하고 계산하는 방법" },
            { text: "김장을 담그기 위해 재료를 준비하는 과정" }
        ],
        correct: 1,
        points: 2.5
    }

];