const quizMetadata = [
    {
        text: "[1-2] 다음 질문에 답하십시오.",
        num: "1. 다음 단어와 관계 있는 것은 무엇입니까? ",
        detail: "이름, 노래, 손님, 배",
        image: "",
        options: [
            { text: "아프다 " },
            { text: "부르다" },
            { text: "적다 " },
            { text: "초대하다" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[1-2] 다음 질문에 답하십시오.",
        num: "2. 다음 단어의 비슷한 말을 무엇입니까? ",
        detail: "(물건을) 주문한다",
        image: "",
        options: [
            { text: "준다" },
            { text: "받는다" },
            { text: "찾는다" },
            { text: "시킨다" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[3-6] 빈 칸에 들어갈 가장 알맞은 것을 고르십시오. ",
        num: "3.",
        detail: "여름엔 다양한_______ 을 먹을 수 있습니다. 수박, 참외, 복숭아 도 맛있지만 저는 시큼한 자두가 가장 맛있습니다.",
        image: "",
        options: [
            { text: "과일 " },
            { text: "나물 " },
            { text: "채소 " },
            { text: "유제품" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[3-6] 빈 칸에 들어갈 가장 알맞은 것을 고르십시오. ",
        num: "4.",
        detail: "기숙사는 단체 생활을 하는 곳이므로 정해진 을 ________잘 지켜야 합니 다. ",
        image: "",
        options: [
            { text: "규칙 " },
            { text: "관리 " },
            { text: "시설 " },
            { text: "보고" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[3-6] 빈 칸에 들어갈 가장 알맞은 것을 고르십시오. ",
        num: "5.",
        detail: "실내외 온도차를 5°C 정도로 __________ .",
        image: "",
        options: [
            { text: "유지하세요" },
            { text: "정소하세요" },
            { text: "해 주세요" },
            { text: "금연하세요" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[3-6] 빈 칸에 들어갈 가장 알맞은 것을 고르십시오. ",
        num: "6.",
        detail: "저는 미용사 ______ 을/를 따려고 주말마다 미용 교육을 받고 있습니다. 시험이 다음 달에 있어서 열심히 준비하고 있습니다.",
        image: "",
        options: [
            { text: "응시 원서" },
            { text: "자격증" },
            { text: "접수증" },
            { text: "수업료" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[7-10] 다음 질문에 답하십시오.",
        num: "7. 이 표지는 무슨 뜻입니까? ",
        detail: "",
        image: "",
        options: [
            { text: "이 곳에서 버스를 탈 수 있습니다. " },
            { text: "이 곳에서 주차를 할 수 있습니다." },
            { text: "이 곳에서 기차를 탈 수 있습니다. " },
            { text: "이 곳에서 택시를 탈 수 있습니다." }
        ],
        correct: 3,
        points: 2.5
    },
    {
        text: "[7-10] 다음 질문에 답하십시오.",
        num: "8. 이 사람이 수강하는 수업은 무엇입니까? ",
        detail: "",
        image: "",
        options: [
            { text: "람구릉입니다." },
            { text: "요리교실입니다.  " },
            { text: "자동차정비입니다. " },
            { text: "안산외국인력지원센터입니다." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[7-10] 다음 질문에 답하십시오.",
        num: "9. 다음은 직장인들이 주말에 하고 싶어하는 일을 조사한 것입니다.직장인들이 주말에 가장 하고 싶어하는 것은 무엇입니까? ",
        detail: "",
        image: "",
        options: [
            { text: "집에서 쉬는 것" },
            { text: "여행을 가는 것" },
            { text: "운동을 하는 것" },
            { text: "컴퓨터를 배우는 것" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[7-10] 다음 질문에 답하십시오.",
        num: "10. 이 사람의 직업은 무엇입니까?",
        detail: "",
        image: "",
        options: [
            { text: "강사입니다." },
            { text: "최민수입니다." },
            { text: "금봉대로입니다." },
            { text: "학교입니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[11-12] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "11.",
        detail: "어제 저녁에 눈이 많이 왔습니다. 오늘 저는 일찍 출근을 해서 회사 출 입문 앞과 주차장에 있는 눈을__________ . ",
        image: "",
        options: [
            { text: "치워 놓았습니다 " },
            { text: "치우는지 모릅니다 " },
            { text: "닦아 놓았습니다 " },
            { text: "닦는지 모릅니다" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[11-12] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
        num: "12.",
        detail: "일요일은_______휴일이니까 그날은 일을 하지 않아도 임금이 지불되요.",
        image: "",
        options: [
            { text: "유급 " },
            { text: "약정 " },
            { text: "무급 " },
            { text: "근로" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[13-14] 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "13.",
        detail: "한국에서 지하철이나 버스를 타면 노약자석 표지판을 볼 수 있습니다. 이 표지판이 있는 좌석은 나이 많으신 분이나 몸이 불편한 사람을 위한 자리입니다. 이 자리는 앉지 말고 비워 두는 것이 좋습니다. 만약 사람이 없어서 잠깐 앉더라도 이런 사람들을 보면 자리를 양보해야 합니다.",
        image: "",
        options: [
            { text: "노약자" },
            { text: "대중교통" },
            { text: "좌석 양보" },
            { text: "노선 안내" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[13-14] 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
        num: "14.",
        detail: "보호구는 위험으로부터 우리 몸을 지켜 줍니다. 작업장에서 작업을 때 보호구가 없으면 다칠 수 도 있습니다. 보호구에는 머리를 보호하는 안전모, 눈을 보호하는 보안경, 손을 다치지 않게 해 주는 안전장갑이 있습니다. 우리는 일하기 전에 반드시 보호구들을 착용해서 안전사고를 예방해야 합니다.",
        image: "",
        options: [
            { text: "보호구 관리법" },
            { text: "보호구 가격" },
            { text: "보호구 종류" },
            { text: "보호구 착용법" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[15-16] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "15.",
        detail: " 얼마 전 유행한 한 드라마로 인해 한국에 오는 중국인 관광객 수가 급증하 였습니다. 대부분의 관광객들은 드라마에서 주인공들이 먹었던 음식과 그들 이 사용했던 물건들을 쇼핑할 목적으로 옵니다. 드라마에 협찬을 한 기업들 은 그 덕분에 관광 수입을 톡톡히 챙기게 되었습니다. 앞으로도 드라마 관련 협찬은 더더욱 그 경쟁이 치열해질 것으로 예상됩니다.",
        image: "",
        options: [
            { text: "중국 관광객들은 드라마를 보려고 한국에 옵니다. " },
            { text: "중국 관광객들은 주인공들과 함께 쇼핑을 합니다. " },
            { text: "드라마에 상품을 협찬하는 기업은 돈을 많이 벌었습니다. " },
            { text: "한국 드라마를 팔기 위해 앞으로 더 치열한 경쟁이 예상됩니다." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[15-16] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
        num: "16.",
        detail: "현재 중부지방은 맑으나, 남부지방은 구름이 많은 날씨를 보이고 있습 니다. 오늘 중부지방은 따뜻하고 맑겠으나 남부 지방은 비가 내리는 곳 도 있겠습니다. 또한 내일은 전국이 맑은 날씨를 보이면서 아침 기온은 떨어지고, 낮 기온은 오르면서 낮과 밤의 기온차가 크겠으니, 건강관리 에 유의하기 바랍니다. ",
        image: "",
        options: [
            { text: "현재 전국 날씨는 맑습니다. " },
            { text: "오늘 남부 지방에 비가 올 수 있습니다. " },
            { text: "내일은 하루 종일 날씨가 추울 것입니다. " },
            { text: "오늘은 낮과 밤의 기온차가 클 것입니다." }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[17-18] 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "17.",
        detail: "법으로 정해 놓은 하루 근로 시간인 8시간이 넘게 일하는 것으로, 이 때 평소 수당의 1.5배를 지급합니다.",
        image: "",
        options: [
            { text: "연장 근로" },
            { text: "야간 근로" },
            { text: "공제 총액" },
            { text: "세금 총액" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[17-18] 다음 설명에 알맞은 어휘를 고르십시오.",
        num: "18.",
        detail: "월급의 총액에서 공제되는 금액을 모두 뺀 것으로 근로자가 실제로 받는 돈입니다.",
        image: "",
        options: [
            { text: "최저 임금" },
            { text: "실수령액" },
            { text: "연말정산" },
            { text: "급여 내역" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[19-20] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "19.",
        detail: "",
        image: "",
        options: [
            { text: "화분 " },
            { text: "수분 " },
            { text: "물병 " },
            { text: "꽃밭" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[19-20] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
        num: "20.",
        detail: "",
        image: "",
        options: [
            { text: "차례를 지내고 있습니다. " },
            { text: "성묘를 하고 있습니다. " },
            { text: "소원을 빌고 있습니다. " },
            { text: "보름달을 보고 있습니다." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[21-24] 들은 것을 고르십시오.",
        num: "21.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "갑니다." },
            { text: "잡니다." },
            { text: "옵니다." },
            { text: "놉니다." }
        ],
        correct: 3,
        points: 2.5
    },
    {
        text: "[21-24] 들은 것을 고르십시오.",
        num: "22.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "사금 " },
            { text: "송금 " },
            { text: "수금 " },
            { text: "순금" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[21-24] 들은 것을 고르십시오.",
        num: "23.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 4,
        points: 2.5
    },
    {
        text: "[21-24] 들은 것을 고르십시오.",
        num: "24.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
        num: "25. 이것은 무엇입니까? ",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
        num: "26. 여기는 어디입니까? ",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
        num: "27.이 사람은 무엇을 하고 있습니까? ",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
        num: "28. 몇 월 며칠입니까? ",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[25-29] 그림을 보고 알맞은 대답을 고르십시오.",
        num: "29. 은행은 어디에 있습니까? ",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
        num: "30.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "버스를 타고 오세요. " },
            { text: "신청서를 썼어요. " },
            { text: "입금하려고 왔어요. " },
            { text: "은행은 건물 밖에 있어요." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
        num: "31.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "네, 무슨 일이신데요? " },
            { text: "네, 시간이 없어요. " },
            { text: "아니요, 저녁 같이 먹을까요? " },
            { text: "아니요, 저녁에 아무 일도 없어요." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
        num: "32.",
        detail: "",
        image: "",
        audio: "5-10-32",
        options: [
            { text: "내과에 가야 합니다. " },
            { text: "안과에 가야 합니다. " },
            { text: "이비인후과에 가야 합니다. " },
            { text: "치과에 가야 합니다." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[30-33] 다음을 듣고 질문에 알맞은 대답을 고르십시오.",
        num: "33.",
        detail: "",
        image: "",
        audio: "5-6-33",
        options: [
            { text: "먼저 온 순서대로 줄을 서 주세요. " },
            { text: "작년 6월부터 기숙사가 생겼습니다. " },
            { text: "신청하고 한 달 정도 기다려야 해요. " },
            { text: "한 번 들어가면 2년 정도 지낼 수 있어요." }
        ],
        correct: 2,
        points: 2.5
    },
    {
        text: "[34-35] 다음을 듣고 이어지는 말을 고르십시오.",
        num: "34.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "그렇죠? 날씨가 따뜻해졌어요. " },
            { text: "그렇죠? 동네가 조용하네요. " },
            { text: "그렇죠? 단풍이 들었어요" },
            { text: "그렇죠? 눈이 오네요." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[34-35] 다음을 듣고 이어지는 말을 고르십시오.",
        num: "35.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "네, 드디어 여름이 왔네요. " },
            { text: "네, 바람이 시원하네요. " },
            { text: "네, 어제보다 춥지요. " },
            { text: "네, 어제보다 기온이 내려갔어요." }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[36-37] 다음을 듣고 들은 내용과 관계 있는 그림을 고르십시오.",
        num: "36.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[36-37] 다음을 듣고 들은 내용과 관계 있는 그림을 고르십시오.",
        num: "37.",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "" },
            { text: "" },
            { text: "" },
            { text: "" }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
        num: "38. 남자는 무엇을 하고 있습니까? ",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "제안" },
            { text: "안부 " },
            { text: "질문 " },
            { text: "소개" }
        ],
        correct: 0,
        points: 2.5
    },
    {
        text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
        num: "39. 남자는 이번 주말에 무엇을 합니까? ",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "근무를 합니다. " },
            { text: "놀이공원에 갑니다. " },
            { text: "가족들을 만납니다. " },
            { text: "여자와 등산을 갑니다." }
        ],
        correct: 1,
        points: 2.5
    },
    {
        text: "[38-40] 다음 이야기를 듣고 질문에 알맞은 대답을 고르십시오.",
        num: "40. 남자는 여자에게 무엇을 보여 주겠습니까? ",
        detail: "",
        image: "",
        audio: "",
        options: [
            { text: "여권" },
            { text: "주민등록증" },
            { text: "의료보험증" },
            { text: "외국인등록증" }
        ],
        correct: 2,
        points: 2.5
    }
];