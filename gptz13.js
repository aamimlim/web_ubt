const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "eps2_q01_tape_measure.png",
        options: [
            { text: "줄자입니다." },
            { text: "스패너입니다." },
            { text: "손수레입니다." },
            { text: "망치입니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "eps2_q02_packing_boxes.png",
        options: [
            { text: "나무를 자르고 있습니다." },
            { text: "박스를 포장하고 있습니다." },
            { text: "페인트칠을 하고 있습니다." },
            { text: "용접을 하고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "eps2_q03_goggles.png",
        options: [
            { text: "안전모입니다." },
            { text: "보안경입니다." },
            { text: "귀마개입니다." },
            { text: "마스크입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "eps2_q04_painting.png",
        options: [
            { text: "벽에 페인트를 칠하고 있습니다." },
            { text: "바닥을 쓸고 있습니다." },
            { text: "기계를 고치고 있습니다." },
            { text: "물건을 쌓고 있습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
        num: "5.",
        detail: "",
        image: "",
        options: [
            { text: "버스를 <u>타고</u> 회사에 갑니다." },
            { text: "버스를 <u>입고</u> 회사에 갑니다." },
            { text: "버스를 <u>신고</u> 회사에 갑니다." },
            { text: "버스를 <u>쓰고</u> 회사에 갑니다." }
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
            { text: "밥을 <u>먹기 전에</u> 손을 씻습니다." },
            { text: "밥을 <u>먹어서</u> 손을 씻습니다." },
            { text: "밥을 <u>먹으면</u> 손을 씻었습니다." },
            { text: "밥을 <u>먹으러</u> 손을 씻습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 야간 근무는 몇 시부터 시작합니까?",
        detail: "",
        image: "eps2_q07_shift_schedule.png",
        options: [
            { text: "오전 8시" },
            { text: "오후 1시" },
            { text: "오후 6시" },
            { text: "오후 10시" }
        ],
        correct: 3,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 손님이 지불해야 하는 금액은 얼마입니까?",
        detail: "",
        image: "eps2_q08_receipt.png",
        options: [
            { text: "12,000원" },
            { text: "15,000원" },
            { text: "18,000원" },
            { text: "20,000원" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 이 표지판은 무슨 뜻입니까?",
        detail: "",
        image: "eps2_q09_high_voltage_warning.png",
        options: [
            { text: "미끄러짐 주의" },
            { text: "감전 위험 주의" },
            { text: "낙하물 위험 주의" },
            { text: "고온 경고" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 이 게시판의 내용과 다른 것은 무엇입니까?",
        detail: "",
        image: "eps2_q10_holiday_notice.png",
        options: [
            { text: "추석 연휴 동안 휴무입니다." },
            { text: "월요일부터 정상 근무합니다." },
            { text: "연휴 기간에는 공장이 가동됩니다." },
            { text: "비상 연락처가 적혀 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "용접 작업을 할 때는 강한 불꽃이 튀므로 반드시 ______을/를 착용해야 눈을 보호할 수 있습니다.",
        image: "",
        options: [
            { text: "보안경" },
            { text: "귀마개" },
            { text: "안전대" },
            { text: "방진마스크" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "작업장에 낙하물이 떨어질 위험이 있으니 머리를 보호하기 위해 ______을/를 쓰세요.",
        image: "",
        options: [
            { text: "안전화" },
            { text: "안전모" },
            { text: "장갑" },
            { text: "앞치마" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "일하다가 다쳐서 병원 치료를 받는 경우, 산재 보험을 통해 ______을/를 신청할 수 있습니다.",
        image: "",
        options: [
            { text: "보상금" },
            { text: "비자" },
            { text: "여권" },
            { text: "계약서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "작업장의 페인트 냄새가 너무 심해서 환풍기를 ______ 창문을 모두 열었습니다.",
        image: "",
        options: [
            { text: "틀고" },
            { text: "끄고" },
            { text: "닫고" },
            { text: "버리고" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "내일은 회사 창립기념일이라서 출근을 ______ 됩니다.",
        image: "",
        options: [
            { text: "안 해도" },
            { text: "해야만" },
            { text: "하지 못하면" },
            { text: "하도록" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "소방훈련 시간에는 비상구의 위치를 확인하고 소화기 ______ 법을 배웁니다.",
        image: "",
        options: [
            { text: "사용하는" },
            { text: "요리하는" },
            { text: "운전하는" },
            { text: "신청하는" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17. 높은 곳에 올라가서 작업할 때 발을 밟고 오르내릴 수 있도록 만든 도구입니다.",
        detail: "",
        image: "",
        options: [
            { text: "사다리" },
            { text: "대패" },
            { text: "송곳" },
            { text: "줄자" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18. 매월 25일에 지급되는 급여 내역에는 기본급, 연장근로수당, 세금 감면액 등이 상세히 적혀 있습니다.",
        detail: "",
        image: "",
        options: [
            { text: "급여 명세서" },
            { text: "안전 수칙" },
            { text: "출근부" },
            { text: "휴가 신청서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19. 작업 중 안전사고를 예방하려면 작업 전 점검과 개인 보호구 착용이 가장 중요합니다.",
        detail: "",
        image: "",
        options: [
            { text: "작업 중에는 보호구를 벗어야 합니다." },
            { text: "작업 시작 전 점검을 실시해야 합니다." },
            { text: "안전 점검은 사고 예방과 상관없습니다." },
            { text: "보호구는 사고가 난 후에 착용합니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20. 체류 기간 연장을 신청할 때는 표준근로계약서와 사업자등록증 사본 등의 서류를 제출해야 합니다.",
        detail: "",
        image: "",
        options: [
            { text: "체류 연장 시 아무 서류도 필요 없습니다." },
            { text: "표준근로계약서 제출이 필요합니다." },
            { text: "사업자등록증은 절대 내면 안 됩니다." },
            { text: "체류 연장은 자동으로 이루어집니다." }
        ],
        correct: 1,
        points: 2.5
    },


    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "eps2_q21_listening.mp3",
        script: "남: 소화기",
        options: [
            { text: "비상구" },
            { text: "소화기" },
            { text: "구급함" },
            { text: "환풍기" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "eps2_q22_listening.mp3",
        script: "여: 드라이버로 나사를 조이고 있습니다.",
        options: [
            { text: "망치로 못을 박고 있습니다." },
            { text: "드라이버로 나사를 조이고 있습니다." },
            { text: "톱으로 목재를 자르고 있습니다." },
            { text: "스패너로 볼트를 푸르고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "eps2_q23_listening.mp3",
        script: "남: 전동 드라이버로 나사를 고정하고 있습니다.",
        options: [
            { image: "eps2_q23_opt1_hammering.png" },
            { image: "eps2_q23_opt2_screwdriving.png" },
            { image: "eps2_q23_opt3_sawing.png" },
            { image: "eps2_q23_opt4_painting.png" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "eps2_q24_listening.mp3",
        script: "여: 기계의 스위치를 눌러 전원을 켜고 있습니다.",
        options: [
            { image: "eps2_q24_opt1_pushing_button.png" },
            { image: "eps2_q24_opt2_cleaning_floor.png" },
            { image: "eps2_q24_opt3_lifting_box.png" },
            { image: "eps2_q24_opt4_welding.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "eps2_q25_listening.mp3",
        script: "남: 크레인으로 무거운 철근을 옮기고 있습니다.",
        options: [
            { image: "eps2_q25_opt1_crane.png" },
            { image: "eps2_q25_opt2_forklift.png" },
            { image: "eps2_q25_opt3_wheelbarrow.png" },
            { image: "eps2_q25_opt4_truck.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "eps2_q26_listening.mp3",
        script: "여: 줄자로 판자의 길이를 측정하고 있습니다.",
        options: [
            { image: "eps2_q26_opt1_measuring_tape.png" },
            { image: "eps2_q26_opt2_cutting_wood.png" },
            { image: "eps2_q26_opt3_gluing.png" },
            { image: "eps2_q26_opt4_carrying_wood.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "eps2_q27_listening.mp3",
        script: "남: 구급함에서 밴드를 꺼내 손가락에 붙이고 있습니다.",
        options: [
            { image: "eps2_q27_opt1_applying_bandage.png" },
            { image: "eps2_q27_opt2_taking_pills.png" },
            { image: "eps2_q27_opt3_putting_helmet.png" },
            { image: "eps2_q27_opt4_washing_hands.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "eps2_q28_listening.mp3",
        script: "여: 빗자루로 작업장 바닥을 깨끗이 쓸고 있습니다.",
        options: [
            { image: "eps2_q28_opt1_sweeping_broom.png" },
            { image: "eps2_q28_opt2_mopping_water.png" },
            { image: "eps2_q28_opt3_emptying_trash.png" },
            { image: "eps2_q28_opt4_wiping_window.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "eps2_q29_listening.mp3",
        script: "여: 이 기계 작동하는 법 좀 가르쳐 주실 수 있어요?",
        options: [
            { text: "네, 스위치를 누르면 작동해요. 보여드릴게요." },
            { text: "아니요, 저녁을 먹으러 가요." },
            { text: "네, 기계가 아주 작아요." },
            { text: "아니요, 내일 퇴근할 거예요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "eps2_q30_listening.mp3",
        script: "남: 오늘 저녁에 야간 작업 가능한가요?",
        options: [
            { text: "죄송해요. 오늘은 병원 예약이 있어서 어려워요." },
            { text: "네, 어제 야근을 했습니다." },
            { text: "아니요, 버스를 타고 왔습니다." },
            { text: "네, 저녁 식사는 맛있었습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "eps2_q31_listening.mp3",
        script: "여: 먼지가 너무 많이 나는데 환풍기를 틀까요?",
        options: [
            { text: "네, 마스크도 착용하고 환풍기를 켜 주세요." },
            { text: "아니요, 어제 출근했습니다." },
            { text: "네, 날씨가 아주 따뜻해요." },
            { text: "아니요, 공장이 닫혀 있어요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "eps2_q32_listening.mp3",
        script: "남: 체류 기간 연장 신청은 어디에서 하나요?",
        options: [
            { text: "관할 출입국·외국인관서에서 하시면 됩니다." },
            { text: "우체국에 가서 편지를 보내세요." },
            { text: "편의점에서 신용카드로 만드세요." },
            { text: "지하철역에서 표를 구매하세요." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "eps2_q33_listening.mp3",
        script: "여: 생일 축하해요! 이건 제 자그마한 선물이에요.",
        options: [
            { text: "정말 고마워요. 잘 쓸게요!" },
            { text: "죄송합니다. 늦었습니다." },
            { text: "아니요, 안 가겠습니다." },
            { text: "네, 어제 만났습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "eps2_q34_listening.mp3",
        script: "남: 귀마개를 어디에 뒀는지 못 찾겠어요.\n여: 작업장 입구 선반 위에 귀마개가 있으니까 착용하고 들어가세요.",
        options: [
            { image: "eps2_q34_opt1_earmuffs.png" },
            { image: "eps2_q34_opt2_safety_shoes.png" },
            { image: "eps2_q34_opt3_gloves.png" },
            { image: "eps2_q34_opt4_glasses.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "eps2_q35_listening.mp3",
        script: "남: 용접을 할 때 맨손으로 작업하면 위험해요.\n여: 맞아. 뜨거우니까 반드시 용접용 가죽 장갑을 끼고 작업해야 해요.",
        options: [
            { image: "eps2_q35_opt1_bare_hands.png" },
            { image: "eps2_q35_opt2_welding_gloves.png" },
            { image: "eps2_q35_opt3_socks.png" },
            { image: "eps2_q35_opt4_hat.png" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "eps2_q36_listening.mp3",
        script: "여: 이 무거운 박스들을 창고까지 어떻게 운반할까요?\n남: 손수레를 가져와서 위에 차곡차곡 쌓아 옮깁시다.",
        options: [
            { image: "eps2_q36_opt1_hand_cart.png" },
            { image: "eps2_q36_opt2_bus.png" },
            { image: "eps2_q36_opt3_airplane.png" },
            { image: "eps2_q36_opt4_ship.png" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "37. 남자는 왜 망치를 찾고 있습니까?",
        detail: "",
        image: "",
        audio: "eps2_q37_listening.mp3",
        script: "여: 반장님, 왜 공구함을 찾으세요?\n남: 판자에 못을 박아야 하는데 망치가 안 보여서 찾고 있어요.",
        options: [
            { text: "못을 박기 위해서" },
            { text: "청소를 하기 위해서" },
            { text: "페인트를 칠하기 위해서" },
            { text: "길이를 재기 위해서" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "38. 두 사람은 이번 주말에 무엇을 하기로 했습니까?",
        detail: "",
        image: "",
        audio: "eps2_q38_listening.mp3",
        script: "남: 이번 주 토요일에 특별한 일정 있으세요?\n여: 아니요, 없어요. 왜요?\n남: 날씨도 좋은데 같이 근처 산으로 등산 갈래요?",
        options: [
            { text: "등산하기" },
            { text: "영화 보기" },
            { text: "쇼핑하기" },
            { text: "공장에서 일하기" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "39. 여자는 어디에 방문해야 합니까?",
        detail: "",
        image: "",
        audio: "eps2_q39_listening.mp3",
        script: "여: 비자 연장 서류를 준비했는데 어디로 가져가야 하나요?\n남: 관할 출입국·외국인관서에 가셔서 제출하시면 됩니다.",
        options: [
            { text: "은행" },
            { text: "출입국·외국인관서" },
            { text: "우체국" },
            { text: "경찰서" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[37~40] 긴 대화를 듣고 물음에 답하십시오.",
        num: "40. 두 사람은 무엇에 대해 이야기하고 있습니까?",
        detail: "",
        image: "",
        audio: "eps2_q40_listening.mp3",
        script: "남: 이번 달 월급명세서 확인해 보셨어요?\n여: 네, 기본급이랑 야간근로수당이 잘 들어왔는지 확인해 봤어요.",
        options: [
            { text: "월급 명세서 확인" },
            { text: "기숙사 청소 규칙" },
            { text: "외국인 등록증 발급" },
            { text: "안전 장구 구매" }
        ],
        correct: 0,
        points: 2.5
    }

];