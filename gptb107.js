const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "eps12_q01_tractor.png",
        options: [
            { text: "콤바인입니다." },
            { text: "경운기입니다." },
            { text: "트랙터입니다." },
            { text: "이앙기입니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "eps12_q02_washing_vegetables.png",
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
        image: "eps12_q03_safety_apron.png",
        options: [
            { text: "방열복입니다." },
            { text: "용접용 앞치마입니다." },
            { text: "우비입니다." },
            { text: "작업복 상의입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "eps12_q04_post_office_parcel.png",
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
        image: "eps12_q08_respirator_required.png",
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
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17. 쇠파이프나 굵은 철사를 자르거나 구부릴 때 사용하는 공구로, 끝부분이 뾰족하게 맞물려 있습니다.",
        detail: "",
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
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18. 근로자가 1년 동안 80% 이상 출근했을 때, 유급으로 쉴 수 있도록 법적으로 보장해 주는 휴가 제도입니다.",
        detail: "",
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

    // --- LISTENING SECTION (듣기 21~40) ---
    // Note: Q21 & Q22 feature minimally contrasting phonetics/syllables requiring careful listening!
    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "eps12_q21_listening.mp3",
        script: "남: 잔업 수당",
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
        audio: "eps12_q22_listening.mp3",
        script: "여: 작업장 통로에 자재를 쌓아 두면 안 됩니다.",
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
        audio: "eps12_q23_listening.mp3",
        script: "남: 경운기를 운전해서 논으로 이동하고 있습니다.",
        options: [
            { image: "eps12_q23_opt1_forklift.png" },
            { image: "eps12_q23_opt2_cultivator.png" },
            { image: "eps12_q23_opt3_crane.png" },
            { image: "eps12_q23_opt4_handcart.png" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "eps12_q24_listening.mp3",
        script: "여: 어른께 두 손으로 공손하게 술을 따르고 있습니다.",
        options: [
            { image: "eps12_q24_opt1_one_hand_pour.png" },
            { image: "eps12_q24_opt2_shaking_hands.png" },
            { image: "eps12_q24_opt3_two_hands_pour.png" },
            { image: "eps12_q24_opt4_eating_alone.png" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "eps12_q25_listening.mp3",
        script: "남: 그라인더로 금속 표면의 거친 부분을 갈아내고 있습니다.",
        options: [
            { image: "eps12_q25_opt1_painting.png" },
            { image: "eps12_q25_opt2_sweeping.png" },
            { image: "eps12_q25_opt3_sawing.png" },
            { image: "eps12_q25_opt4_grinding.png" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "eps12_q26_listening.mp3",
        script: "여: 밭에서 호미를 이용해 잡초를 뽑고 있습니다.",
        options: [
            { image: "eps12_q26_opt1_weeding_hoe.png" },
            { image: "eps12_q26_opt2_picking_apples.png" },
            { image: "eps12_q26_opt3_feeding_pigs.png" },
            { image: "eps12_q26_opt4_pulling_net.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "eps12_q27_listening.mp3",
        script: "남: 세탁기에 빨래를 넣고 세제를 붓고 있습니다.",
        options: [
            { image: "eps12_q27_opt1_washing_dishes.png" },
            { image: "eps12_q27_opt2_vacuuming.png" },
            { image: "eps12_q27_opt3_laundry_machine.png" },
            { image: "eps12_q27_opt4_ironing.png" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "eps12_q28_listening.mp3",
        script: "여: 약국에서 약사의 복약 지도를 들으며 약을 받고 있습니다.",
        options: [
            { image: "eps12_q28_opt1_bank_teller.png" },
            { image: "eps12_q28_opt2_pharmacy.png" },
            { image: "eps12_q28_opt3_post_office.png" },
            { image: "eps12_q28_opt4_restaurant.png" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "eps12_q29_listening.mp3",
        script: "여: 이사한 집 주소는 어디에 신고해야 합니까?",
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
        audio: "eps12_q30_listening.mp3",
        script: "남: 오늘 회식 메뉴가 돼지고기인데 괜찮으세요?",
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
        audio: "eps12_q31_listening.mp3",
        script: "여: 비닐하우스 안 온도가 너무 높은데 어떻게 할까요?",
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
        audio: "eps12_q32_listening.mp3",
        script: "남: 이번 달 급여 명세서에서 세금이 얼마나 공제되었는지 아세요?",
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
        audio: "eps12_q33_listening.mp3",
        script: "여: 아까 제가 작업 지시를 잘못 이해해서 실수를 했네요. 정말 죄송합니다.",
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
        audio: "eps12_q34_listening.mp3",
        script: "남: 용접할 때 불꽃이 튀어서 옷이 탈 수 있어요.\n여: 맞아요. 반드시 가죽으로 된 용접용 앞치마를 착용하고 작업하세요.",
        options: [
            { image: "eps12_q34_opt1_earmuffs.png" },
            { image: "eps12_q34_opt2_welding_apron.png" },
            { image: "eps12_q34_opt3_safety_boots.png" },
            { image: "eps12_q34_opt4_dust_mask.png" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "eps12_q35_listening.mp3",
        script: "여: 고향에 보낼 소포 포장은 다 끝났어요?\n남: 네, 상자에 테이프를 단단히 붙이고 우체국에 가서 무게를 재려고 해요.",
        options: [
            { image: "eps12_q35_opt1_atm.png" },
            { image: "eps12_q35_opt2_hospital.png" },
            { image: "eps12_q35_opt3_post_office.png" },
            { image: "eps12_q35_opt4_subway.png" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "eps12_q36_listening.mp3",
        script: "남: 논에 비료를 뿌리기 전에 흙을 먼저 고르게 펴야겠어요.\n여: 그럼 창고에서 트랙터를 몰고 나와서 작업을 시작합시다.",
        options: [
            { image: "eps12_q36_opt1_tractor.png" },
            { image: "eps12_q36_opt2_handcart.png" },
            { image: "eps12_q36_opt3_bus.png" },
            { image: "eps12_q36_opt4_crane.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 여자가 내일 아침에 주민센터에 가려는 이유는 무엇입니까?",
        detail: "",
        image: "",
        audio: "eps12_q37_listening.mp3",
        script: "남: 수지 씨, 지난주에 회사 근처 원룸으로 이사하셨다고 들었어요. 짐 정리는 다 끝나셨어요?\n여: 네, 어제 저녁에 겨우 다 정리했어요. 그런데 이사한 날부터 14일 이내에 전입신고(체류지 변경 신고)를 해야 한다고 해서 내일 아침에 주민센터에 다녀오려고요.\n남: 맞아요. 기간을 넘기면 과태료를 낼 수 있으니까 꼭 임대차 계약서랑 외국인등록증을 챙겨서 가세요.\n여: 알려주셔서 감사합니다. 반장님께는 오전 반차를 미리 말씀드렸어요.",
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
        audio: "eps12_q38_listening.mp3",
        script: "여: 투안 씨, 오늘 오후에는 배를 타고 나가서 가두리 양식장 그물을 점검해야 해요.\n남: 네, 알겠습니다. 그런데 바다 위에서 작업할 때 특별히 조심해야 할 점이 있나요?\n여: 파도가 칠 때 배가 흔들릴 수 있으니까 작업 중에는 절대 구명조끼를 벗으면 안 돼요. 그리고 미끄러지지 않게 장화 바닥도 미리 확인하세요.\n남: 네, 구명조끼를 단단히 착용하고 안전하게 다녀오겠습니다.",
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
        audio: "eps12_q39_listening.mp3",
        script: "남: 반장님, 다음 주 수요일이 한국 공휴일인 '부처님 오신 날'이라고 하던데 우리 회사도 쉬나요?\n여: 네, 법정 공휴일이라서 기본적으로 유급 휴무입니다. 하지만 납기일을 맞춰야 해서 오전 근무만 특별히 진행하기로 결정되었어요.\n남: 아, 그렇군요. 그럼 휴일 근로 수당이 지급되는 건가요?\n여: 물론이죠. 휴일에 근무하는 만큼 통상임금의 1.5배를 계산해서 다음 달 급여에 포함해 드릴 겁니다.",
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
        audio: "eps12_q40_listening.mp3",
        script: "여: 리한 씨, 한국에서는 밥을 먹을 때 숟가락과 젓가락을 동시에 한 손에 쥐고 먹지 않아요.\n남: 아, 정말요? 저는 반찬을 집을 때 숟가락을 손에 쥔 채로 젓가락을 같이 썼거든요.\n여: 밥이나 국을 먹을 때는 숟가락을 쓰고, 반찬을 집을 때는 숟가락을 상 위에 내려놓고 젓가락만 사용하는 것이 한국의 식사 예절이에요.\n남: 좋은 정보를 알려주셔서 고마워요. 앞으로는 식사할 때 주의할게요.",
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