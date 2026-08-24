const quizMetadata = [

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "1.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-01.webp",
        options: [
            { text: "안전화입니다." },
            { text: "안전모입니다." },
            { text: "장갑입니다." },
            { text: "조끼입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "2.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-02.webp",
        options: [
            { text: "회의하고 있습니다." },
            { text: "지게차를 운전하고 있습니다." },
            { text: "청소하고 있습니다." },
            { text: "포장하고 있습니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "3.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-03.webp",
        options: [
            { text: "비상구입니다." },
            { text: "소화기입니다." },
            { text: "엘리베이터입니다." },
            { text: "계단입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "4.",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-04.webp",
        options: [
            { text: "회의를 하고 있습니다." },
            { text: "운동을 하고 있습니다." },
            { text: "식사를 하고 있습니다." },
            { text: "쇼핑을 하고 있습니다." }
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
            { text: "친구<u>를</u> 만났습니다." },
            { text: "학교<u>를</u> 다닙니다." },
            { text: "집<u>를</u> 갑니다." },
            { text: "회사<u>를</u> 있습니다." }
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
            { text: "어제 비<u>가</u> 왔습니다." },
            { text: "밥을 먹<u>가</u>." },
            { text: "친구를 학교가 갔습니다." },
            { text: "한국어를 어렵습니다." }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "7. 도서관은 몇 시에 문을 닫습니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-07.webp",
        options: [
            { text: "오후 5시" },
            { text: "오후 6시" },
            { text: "오후 7시" },
            { text: "오후 8시" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "8. 누구를 위한 안내문입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-08.webp",
        options: [
            { text: "손님" },
            { text: "학생" },
            { text: "근로자" },
            { text: "운전자" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "9. 이 장소는 어디입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-09.webp",
        options: [
            { text: "우체국" },
            { text: "약국" },
            { text: "병원" },
            { text: "은행" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
        num: "10. 무엇에 대한 안내입니까?",
        detail: "",
        image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-10.webp",
        options: [
            { text: "주차" },
            { text: "분리수거" },
            { text: "흡연" },
            { text: "출입" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "기계가 고장 났으니 관리자에게 ______.",
        image: "",
        options: [
            { text: "보고하십시오" },
            { text: "운전하십시오" },
            { text: "출근하십시오" },
            { text: "주문하십시오" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "오늘은 비가 많이 와서 우산을 ______.",
        image: "",
        options: [
            { text: "신었습니다" },
            { text: "입었습니다" },
            { text: "썼습니다" },
            { text: "열었습니다" }
        ],
        correct: 2,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "13.",
        detail: "안전모를 쓰지 않고 작업하면 매우 ______.",
        image: "",
        options: [
            { text: "안전합니다" },
            { text: "위험합니다" },
            { text: "깨끗합니다" },
            { text: "편리합니다" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "14.",
        detail: "한국어를 잘하려면 매일 연습을 ______.",
        image: "",
        options: [
            { text: "해야 합니다" },
            { text: "가지 않습니다" },
            { text: "버립니다" },
            { text: "보냅니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "15.",
        detail: "퇴근 후에 친구를 만나서 저녁을 ______.",
        image: "",
        options: [
            { text: "먹었습니다" },
            { text: "탔습니다" },
            { text: "열었습니다" },
            { text: "만들었습니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "16.",
        detail: "감기에 걸려서 병원에 가서 약을 ______.",
        image: "",
        options: [
            { text: "먹었습니다" },
            { text: "신었습니다" },
            { text: "씻었습니다" },
            { text: "보냈습니다" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17.",
        detail: "무거운 물건을 들어 올리거나 옮길 때 사용하는 차량입니다.",
        image: "",
        options: [
            { text: "지게차" },
            { text: "망치" },
            { text: "드라이버" },
            { text: "펜치" }
        ],
        correct: 0,
        points: 2.5
    },

    {
        text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "18.",
        detail: "작업 중에는 반드시 안전모와 안전화를 착용해야 하며 위험한 행동을 해서는 안 됩니다.",
        image: "",
        options: [
            { text: "근무시간" },
            { text: "안전수칙" },
            { text: "급여지급" },
            { text: "휴가신청" }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "19.",
        detail: "민수 씨는 매일 아침 7시에 일어나 운동을 한 후 회사에 갑니다.",
        image: "",
        options: [
            { text: "민수 씨는 운동을 하지 않습니다." },
            { text: "민수 씨는 회사에 다닙니다." },
            { text: "민수 씨는 밤에 운동합니다." },
            { text: "민수 씨는 학생입니다." }
        ],
        correct: 1,
        points: 2.5
    },

    {
        text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "20.",
        detail: "외국인 근로자는 국민연금, 건강보험, 고용보험 등에 가입할 수 있으며 관련 혜택을 받을 수 있습니다.",
        image: "",
        options: [
            { text: "외국인 근로자는 보험에 가입할 수 없습니다." },
            { text: "외국인 근로자는 보험 혜택을 받을 수 있습니다." },
            { text: "건강보험은 사업주만 가입합니다." },
            { text: "고용보험은 필요 없습니다." }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "21.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-21.mp3",
        options: [
            { text: "안전모" },
            { text: "안전화" },
            { text: "안전벨트" },
            { text: "장갑" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[21~22] 들은 것을 고르십시오.",
        num: "22.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-22.mp3",
        options: [
            { text: "포장하다" },
            { text: "운반하다" },
            { text: "조립하다" },
            { text: "청소하다" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "23.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-23.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-23-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-23-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-23-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-23-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "24.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-24.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-24-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-24-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-24-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-24-4.webp" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "25.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-25.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-25-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-25-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-25-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-25-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "26.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-26.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-26-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-26-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-26-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-26-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "27.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-27.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-27-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-27-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-27-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-27-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[23~28] 듣고 알맞은 그림을 고르십시오.",
        num: "28.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-28.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-28-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-28-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-28-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-28-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "29.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-29.mp3",
        options: [
            { text: "네, 가능합니다." },
            { text: "책을 읽었습니다." },
            { text: "비가 옵니다." },
            { text: "회사입니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "30.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-30.mp3",
        options: [
            { text: "관리자에게 보고하세요." },
            { text: "버스를 탑니다." },
            { text: "커피를 마십니다." },
            { text: "운동합니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "31.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-31.mp3",
        options: [
            { text: "머리가 아파요." },
            { text: "학교에 가요." },
            { text: "일요일이에요." },
            { text: "친구예요." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "29~32 듣고 알맞은 대답을 고르십시오.",
        num: "32.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-32.mp3",
        options: [
            { text: "버스를 타고 갑니다." },
            { text: "밥을 먹습니다." },
            { text: "책을 읽습니다." },
            { text: "일을 합니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[33] 이어지는 말을 고르십시오.",
        num: "33.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-33.mp3",
        options: [
            { text: "감사합니다." },
            { text: "비가 옵니다." },
            { text: "학교에 갑니다." },
            { text: "친구를 만났습니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "34.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-34.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-34-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-34-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-34-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-34-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "35.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-35.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-35-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-35-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-35-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-35-4.webp" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "34~36 듣고 알맞은 그림을 고르십시오.",
        num: "36.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-36.mp3",
        options: [
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-36-1.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-36-2.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-36-3.webp" },
            { image: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-36-4.webp" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "37~40 긴 대화를 듣고 답하십시오.",
        num: "37.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-37.mp3",
        options: [
            { text: "책상 위" },
            { text: "컴퓨터 옆" },
            { text: "가방 안" },
            { text: "서랍 안" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "37~40 긴 대화를 듣고 답하십시오.",
        num: "38.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-38.mp3",
        options: [
            { text: "감기에 걸려서" },
            { text: "운동하려고" },
            { text: "쇼핑하려고" },
            { text: "친구를 만나려고" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "37~40 긴 대화를 듣고 답하십시오.",
        num: "39.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-39.mp3",
        options: [
            { text: "책" },
            { text: "신발" },
            { text: "약" },
            { text: "우산" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "37~40 긴 대화를 듣고 답하십시오.",
        num: "40.",
        image: "",
        audio: "https://jettyland.wordpress.com/wp-content/uploads/2026/08/gpt01-40.mp3",
        options: [
            { text: "여행" },
            { text: "회사에 가기" },
            { text: "병원 방문" },
            { text: "이사" }
        ],
        correct: 1,
        points: 2.5
    }

];