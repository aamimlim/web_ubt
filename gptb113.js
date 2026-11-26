const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "eps13_q01_subway_card.png",
        options: [
            { text: "여권입니다." },
            { text: "교통카드입니다." },
            { text: "처방전입니다." },
            { text: "영수증입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "eps13_q02_greenhouse_watering.png",
        options: [
            { text: "비닐하우스에서 작물에 물을 주고 있습니다." },
            { text: "축사에서 소에게 건초를 주고 있습니다." },
            { text: "항구에서 어망을 손질하고 있습니다." },
            { text: "공장에서 철판을 절단하고 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "eps13_q03_insulating_gloves.png",
        options: [
            { text: "방진마스크입니다." },
            { text: "절연장갑입니다." },
            { text: "안전모입니다." },
            { text: "귀마개입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "eps13_q04_sorting_trash.png",
        options: [
            { text: "은행에서 돈을 찾고 있습니다." },
            { text: "우체국에서 소포를 보내고 있습니다." },
            { text: "재활용 쓰레기를 분리해서 버리고 있습니다." },
            { text: "식당에서 음식을 주문하고 있습니다." }
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
            { text: "기숙사 방 안이 더워서 창문을 <u>열었습니다</u>." },
            { text: "기숙사 방 안이 더워서 창문을 <u>신었습니다</u>." },
            { text: "기숙사 방 안이 더워서 창문을 <u>탔습니다</u>." },
            { text: "기숙사 방 안이 더워서 창문을 <u>입었습니다</u>." }
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
            { text: "병원이 멀어서 버스를 <u>먹고</u> 가야 해요." },
            { text: "병원이 멀어서 버스를 <u>쓰고</u> 가야 해요." },
            { text: "병원이 멀어서 버스를 <u>입고</u> 가야 해요." },
            { text: "병원이 멀어서 버스를 <u>타고</u> 가야 해요." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 우체국 영업시간과 소포 접수 안내 중 옳은 것은 무엇입니까?",
        detail: "[우체국 이용 안내]\n- 창구 운영: 평일 09:00 ~ 18:00 (주말 및 공휴일 휴무)\n- 일반 소포 및 등기우편 접수 가능\n※ 소포 발송 전 물품 내용을 정확히 말씀해 주시기 바랍니다.",
        image: "",
        options: [
            { text: "일요일 오후에도 창구에서 소포를 보낼 수 있습니다." },
            { text: "평일 오후 6시까지 창구 업무를 합니다." },
            { text: "물품 내용을 알려주지 않아도 됩니다." },
            { text: "공휴일에도 우체국 창구가 열립니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 이 표지판이 있는 곳에서 지켜야 할 사항은 무엇입니까?",
        detail: "",
        image: "eps13_q08_wear_earmuffs.png",
        options: [
            { text: "소음으로부터 귀를 보호하기 위해 귀마개를 착용해야 합니다." },
            { text: "바닥이 미끄러우니 뛰지 말아야 합니다." },
            { text: "화기가 있으니 담배를 피우면 안 됩니다." },
            { text: "고압 전기 설비를 만지지 말아야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 한국의 명절 문화에 대한 글의 내용과 같은 것은 무엇입니까?",
        detail: "한국의 대표적인 명절인 추석에는 가족들이 모여 맛있는 음식을 나누어 먹습니다. 햇곡식으로 빚은 송편을 먹고, 조상님께 감사하는 마음으로 차례를 지냅니다. 고향에 가지 못하는 사람들은 기숙사나 모임에서 명절 음식을 함께 나누기도 합니다.",
        image: "",
        options: [
            { text: "추석에는 송편 대신 떡국만 먹습니다." },
            { text: "추석에는 햇곡식으로 송편을 만들어 먹습니다." },
            { text: "추석에는 조상님께 차례를 지내지 않습니다." },
            { text: "고향에 못 가는 사람은 명절 음식을 먹지 못합니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 기숙사 생활 규칙 안내문과 다른 것은 무엇입니까?",
        detail: "[기숙사 생활 안내]\n- 밤 11시 이후에는 조용히 해 주십시오.\n- 세탁기와 건조기는 공용 공간에서 순서대로 사용해 주십시오.\n- 쓰레기는 정해진 요일에 분리수거해 주십시오.\n- 방 안에서 요리할 때는 반드시 창문을 열고 환기해 주십시오.",
        image: "",
        options: [
            { text: "밤 11시 이후에는 소음을 줄여야 합니다." },
            { text: "세탁기는 순서대로 사용합니다." },
            { text: "쓰레기는 아무 날이나 아무 곳에 버립니다." },
            { text: "방에서 요리할 때 환기하는 것이 좋습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "한국 식당에서 어른과 함께 식사할 때는 어른이 수저를 ______ 후에 식사를 시작하는 것이 예의입니다.",
        image: "",
        options: [
            { text: "드신" },
            { text: "버리신" },
            { text: "숨기신" },
            { text: "부수신" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "농작물을 심기 전에 밭의 흙을 고르게 고르고 잡초를 ______ 작업을 합니다.",
        image: "",
        options: [
            { text: "뽑는" },
            { text: "끓이는" },
            { text: "세탁하는" },
            { text: "운전하는" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "외국인 근로자가 체류지를 옮겼을 때는 14일 이내에 관할 기관에 ______ 신고를 해야 합니다.",
        image: "",
        options: [
            { text: "운전면허" },
            { text: "소포 발송" },
            { text: "체류지 변경" },
            { text: "신용카드" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "일하다가 다쳐서 병원에 갈 때는 회사에 알리고 ______ 보험 혜택을 받을 수 있습니다.",
        image: "",
        options: [
            { text: "산재" },
            { text: "여행자" },
            { text: "자동차" },
            { text: "화재" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "회식 자리에서 상사나 선배가 술을 따라 줄 때는 잔을 ______ 받는 것이 공손한 태도입니다.",
        image: "",
        options: [
            { text: "발로" },
            { text: "등 뒤로" },
            { text: "눈을 감고" },
            { text: "두 손으로" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "직장 동료와 의견이 다를 때는 화를 내지 않고 차분하게 ______ 해결하는 것이 좋습니다.",
        image: "",
        options: [
            { text: "도망가서" },
            { text: "소리를 질러서" },
            { text: "문제를 숨겨서" },
            { text: "대화해서" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17. 농촌에서 논밭을 갈거나 짐을 실어 나르는 데 널리 쓰이는 농업용 기계입니다.",
        detail: "",
        image: "",
        options: [
            { text: "경운기" },
            { text: "세탁기" },
            { text: "냉장고" },
            { text: "전자레인지" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18. 일한 시간에 따라 정해진 임금 외에 추가로 받는 돈으로, 연장 근로 수당이나 야간 근로 수당 등이 있습니다.",
        detail: "",
        image: "",
        options: [
            { text: "처방전" },
            { text: "수당" },
            { text: "등기부등본" },
            { text: "종량제 봉투" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19.",
        detail: "한국에서는 쓰레기를 줄이고 환경을 보호하기 위해 분리수거를 철저히 합니다. 종이, 플라스틱, 캔, 유리병 등은 깨끗이 씻어서 정해진 분리수거함에 버리고, 일반 쓰레기는 종량제 봉투에 담아 배출합니다.",
        image: "",
        options: [
            { text: "일반 쓰레기는 분리수거함에 넣어야 합니다." },
            { text: "플라스틱과 음식물 쓰레기를 함께 버립니다." },
            { text: "재활용품은 깨끗이 씻어서 분리수거함에 버립니다." },
            { text: "한국에는 분리수거 제도가 없습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20.",
        detail: "외국인 근로자가 근로계약을 체결할 때는 근로시간, 임금, 휴게시간 등이 적힌 표준근로계약서를 작성합니다. 계약 내용을 잘 이해하지 못할 때는 통역이나 번역 자료를 통해 확인한 후 서명하는 것이 안전합니다.",
        image: "",
        options: [
            { text: "계약 내용을 확인한 후 서명하는 것이 안전합니다." },
            { text: "근로계약서에는 임금 내용을 적지 않습니다." },
            { text: "이해하지 못해도 무조건 빨리 서명해야 합니다." },
            { text: "표준근로계약서는 외국인에게 적용되지 않습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    // --- LISTENING SECTION (듣기 21~40) ---
    // Q21 & Q22: subtle visual/lexical differences requiring careful observation
    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "eps13_q21_listening.mp3",
        script: "남: 세탁기",
        options: [
            { text: "식세기" },
            { text: "청소기" },
            { text: "세탁기" },
            { text: "선풍기" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "eps13_q22_listening.mp3",
        script: "여: 모종삽으로 흙을 파고 있습니다.",
        options: [
            { text: "호미로 흙을 파고 있습니다." },
            { text: "모종삽으로 흙을 파고 있습니다." },
            { text: "삽으로 모래를 파고 있습니다." },
            { text: "갈퀴로 흙을 모으고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "eps13_q23_listening.mp3",
        script: "남: 은행 창구에서 돈을 찾고 있습니다.",
        options: [
            { image: "eps13_q23_opt1_bank.png" },
            { image: "eps13_q23_opt2_post_office.png" },
            { image: "eps13_q23_opt3_pharmacy.png" },
            { image: "eps13_q23_opt4_market.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "eps13_q24_listening.mp3",
        script: "여: 밭에서 고추를 따고 있습니다.",
        options: [
            { image: "eps13_q24_opt1_harvesting_peppers.png" },
            { image: "eps13_q24_opt2_welding.png" },
            { image: "eps13_q24_opt3_forklift.png" },
            { image: "eps13_q24_opt4_sweeping.png" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "eps13_q25_listening.mp3",
        script: "남: 보안경을 쓰고 용접을 하고 있습니다.",
        options: [
            { image: "eps13_q25_opt1_welding_goggles.png" },
            { image: "eps13_q25_opt2_cooking.png" },
            { image: "eps13_q25_opt3_driving_bus.png" },
            { image: "eps13_q25_opt4_washing_hands.png" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "eps13_q26_listening.mp3",
        script: "여: 구급함에서 밴드를 꺼내고 있습니다.",
        options: [
            { image: "eps13_q26_opt1_first_aid_bandage.png" },
            { image: "eps13_q26_opt2_helmet.png" },
            { image: "eps13_q26_opt3_boots.png" },
            { image: "eps13_q26_opt4_earmuffs.png" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "eps13_q27_listening.mp3",
        script: "남: 손수레에 짐을 싣고 있습니다.",
        options: [
            { image: "eps13_q27_opt1_handcart.png" },
            { image: "eps13_q27_opt2_bicycle.png" },
            { image: "eps13_q27_opt3_airplane.png" },
            { image: "eps13_q27_opt4_ship.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "eps13_q28_listening.mp3",
        script: "여: 대걸레로 바닥을 닦고 있습니다.",
        options: [
            { image: "eps13_q28_opt1_mopping.png" },
            { image: "eps13_q28_opt2_hammering.png" },
            { image: "eps13_q28_opt3_sawing.png" },
            { image: "eps13_q28_opt4_measuring.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "eps13_q29_listening.mp3",
        script: "여: 오늘 점심에 뭘 드실 거예요?",
        options: [
            { text: "버스를 타고 왔어요." },
            { text: "오후 2시에 끝나요." },
            { text: "김치찌개를 먹으려고 해요." },
            { text: "기숙사에 살아요." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "eps13_q30_listening.mp3",
        script: "남: 일하다가 다치면 어디에 연락해야 해요?",
        options: [
            { text: "마트에 가서 과일을 사세요." },
            { text: "영화를 보러 가세요." },
            { text: "집에서 쉬세요." },
            { text: "반장님께 바로 말씀드리세요." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "eps13_q31_listening.mp3",
        script: "여: 한국 생활이 어때요?",
        options: [
            { text: "처음엔 낯설었지만 지금은 괜찮아요." },
            { text: "사과가 세 개 있어요." },
            { text: "내일 출근할 거예요." },
            { text: "우체국이 왼쪽에 있어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "eps13_q32_listening.mp3",
        script: "남: 기숙사 세탁기는 언제까지 쓸 수 있어요?",
        options: [
            { text: "어제 빨래를 했어요." },
            { text: "세제가 아주 좋아요." },
            { text: "방이 두 개 있어요." },
            { text: "밤 11시 전까지 사용할 수 있어요." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "eps13_q33_listening.mp3",
        script: "여: 고향에 계신 부모님께 안부 전해 주세요.",
        options: [
            { text: "아니요, 아직 안 먹었어요." },
            { text: "네, 내일 뵙겠습니다." },
            { text: "죄송하지만 모릅니다." },
            { text: "네, 통화할 때 꼭 전해 드릴게요." }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "eps13_q34_listening.mp3",
        script: "남: 소음이 크니까 귀마개를 끼세요.\n여: 네, 서랍에서 꺼내 낄게요.",
        options: [
            { image: "eps13_q34_opt1_earmuffs.png" },
            { image: "eps13_q34_opt2_helmet.png" },
            { image: "eps13_q34_opt3_boots.png" },
            { image: "eps13_q34_opt4_gloves.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "eps13_q35_listening.mp3",
        script: "여: 농장에서 흙을 파려면 뭐가 필요해요?\n남: 모종삽을 가져오면 돼요.",
        options: [
            { image: "eps13_q35_opt1_trowel.png" },
            { image: "eps13_q35_opt2_hammer.png" },
            { image: "eps13_q35_opt3_saw.png" },
            { image: "eps13_q35_opt4_wrench.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "eps13_q36_listening.mp3",
        script: "남: 소포를 보내려고 하는데 어디로 가야 해요?\n여: 저기 우체국으로 가세요.",
        options: [
            { image: "eps13_q36_opt1_post_office.png" },
            { image: "eps13_q36_opt2_bank.png" },
            { image: "eps13_q36_opt3_hospital.png" },
            { image: "eps13_q36_opt4_subway.png" }
        ],
        correct: 0,
        points: 2.5
    },

    // --- SHORTER DIALOGUE SCRIPTS (37~40) ---
    {
        text: "[37~40] 대화를 듣고 물음에 답하십시오.",
        num: "37. 여자는 어디에 가려고 합니까?",
        detail: "",
        image: "",
        audio: "eps13_q37_listening.mp3",
        script: "남: 지수 씨, 점심시간에 어디 가세요?\n여: 고향에 돈을 보내려고 은행에 가요.",
        options: [
            { text: "은행" },
            { text: "병원" },
            { text: "시장" },
            { text: "공원" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 대화를 듣고 물음에 답하십시오.",
        num: "38. 두 사람은 주말에 무엇을 할 예정입니까?",
        detail: "",
        image: "",
        audio: "eps13_q38_listening.mp3",
        script: "여: 이번 토요일에 같이 영화 볼래요?\n남: 좋아요. 저녁에 보고 같이 밥도 먹어요.",
        options: [
            { text: "영화 보기와 식사하기" },
            { text: "이사하기와 청소하기" },
            { text: "등산하기와 수영하기" },
            { text: "기계 수리하기" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 대화를 듣고 물음에 답하십시오.",
        num: "39. 남자는 왜 약국에 갑니까?",
        detail: "",
        image: "",
        audio: "eps13_q39_listening.mp3",
        script: "남: 목이 좀 아픈데 약국에 다녀올게요.\n여: 네, 감기약 잘 사 가지고 오세요.",
        options: [
            { text: "감기약을 사려고" },
            { text: "우표를 사려고" },
            { text: "신발을 사려고" },
            { text: "책을 사려고" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 대화를 듣고 물음에 답하십시오.",
        num: "40. 여자는 오늘 무엇을 할 것입니까?",
        detail: "",
        image: "",
        audio: "eps13_q40_listening.mp3",
        script: "여: 오늘 퇴근 후에 기숙사 방을 청소할 거예요.\n남: 저도 같이 도울게요.",
        options: [
            { text: "기숙사 방 청소하기" },
            { text: "회사 회식 참석하기" },
            { text: "비자 연장 신청하기" },
            { text: "농약 뿌리기" }
        ],
        correct: 0,
        points: 2.5
    }

];