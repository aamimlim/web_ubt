const quizMetadata = [

{
  text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
  num:"1.",
  detail:"",
  image:"protective_gloves.png",
  options:[
    { text:"보호 장갑을 착용하고 있습니다." },
    { text:"안전화를 벗고 있습니다." },
    { text:"마스크를 버리고 있습니다." },
    { text:"작업복을 세탁하고 있습니다." }
  ],
  correct:0,
  points:2.5
},

{
  text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
  num:"2.",
  detail:"",
  image:"machine_inspection.png",
  options:[
    { text:"기계를 수리하고 있습니다." },
    { text:"기계를 점검하고 있습니다." },
    { text:"제품을 포장하고 있습니다." },
    { text:"자재를 주문하고 있습니다." }
  ],
  correct:1,
  points:2.5
},

{
  text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
  num:"3.",
  detail:"",
  image:"warning_sign_floor.png",
  options:[
    { text:"미끄러질 위험이 있으니 조심해야 합니다." },
    { text:"출입문을 닫아야 합니다." },
    { text:"주차할 수 있는 곳입니다." },
    { text:"휴식을 취할 수 있는 곳입니다." }
  ],
  correct:0,
  points:2.5
},

{
  text: "[1~4] 다음 그림을 보고 맞는 단어나 문장을 고르십시오.",
  num:"4.",
  detail:"",
  image:"warehouse_inventory.png",
  options:[
    { text:"창고에서 물건의 수량을 확인하고 있습니다." },
    { text:"식당에서 음식을 주문하고 있습니다." },
    { text:"사무실에서 회의를 준비하고 있습니다." },
    { text:"공장에서 기계를 청소하고 있습니다." }
  ],
  correct:0,
  points:2.5
},

{
  text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
  num:"5.",
  detail:"",
  image:"",
  options:[
    { text:"작업이 끝나<u>면</u> 주변을 정리해야 합니다." },
    { text:"비가 오<u>아서</u> 안전화를 신었습니다." },
    { text:"관리자에게 물어보<u>은</u> 후에 작업했습니다." },
    { text:"기계가 고장 나<u>고</u> 작업을 중단했습니다." }
  ],
  correct:0,
  points:2.5
},

{
  text: "[5~6] 다음 중 밑줄 친 부분이 맞는 것은 무엇입니까?",
  num:"6.",
  detail:"",
  image:"",
  options:[
    { text:"저는 한국에 온 지 삼 년<u>이</u> 되었습니다." },
    { text:"어제 늦게까지 일하<u>어서</u> 피곤했습니다." },
    { text:"이 물건은 무거우<u>니까</u> 혼자 옮기지 마세요." },
    { text:"안전교육을 받<u>은</u> 작업을 시작했습니다." }
  ],
  correct:0,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"7. 안내문을 보고 작업자는 언제까지 안전교육을 받아야 합니까?",
  detail:"신입 직원은 작업을 시작하기 전에 반드시 안전교육을 받아야 합니다. 교육은 오전 9시부터 10시까지 진행됩니다.",
  image:"safety_training_notice.png",
  options:[
    { text:"작업을 시작한 후" },
    { text:"작업을 시작하기 전에" },
    { text:"퇴근한 후" },
    { text:"점심시간에" }
  ],
  correct:1,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"8. 이 안내문에 따르면 비가 많이 오는 날에는 어떻게 해야 합니까?",
  detail:"비가 많이 오는 날에는 작업장 바닥이 미끄러울 수 있습니다. 작업자는 미끄럼 방지 안전화를 착용하고 이동할 때 주변을 잘 살펴야 합니다.",
  image:"rainy_day_safety_notice.png",
  options:[
    { text:"안전화를 벗어야 합니다." },
    { text:"작업장 바닥에 물을 뿌려야 합니다." },
    { text:"미끄럼 방지 안전화를 착용해야 합니다." },
    { text:"평소보다 빨리 이동해야 합니다." }
  ],
  correct:2,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"9. 이 안내문에서 가장 강조하는 것은 무엇입니까?",
  detail:"공장 내에서는 지정된 통로로만 이동하십시오. 작업 중인 기계 주변으로 지나가거나 허가 없이 기계에 접근해서는 안 됩니다.",
  image:"factory_walkway_notice.png",
  options:[
    { text:"기계 사용 방법" },
    { text:"지정된 통로 이용" },
    { text:"휴게시간 변경" },
    { text:"작업복 세탁 방법" }
  ],
  correct:1,
  points:2.5
},

{
  text: "[7~10] 다음 글을 읽고 물음에 답하십시오.",
  num:"10. 무엇을 해야 할 때 관리자에게 먼저 허락을 받아야 합니까?",
  detail:"작업자는 교육받지 않은 기계를 임의로 조작해서는 안 됩니다. 다른 작업을 해야 할 경우에는 먼저 관리자에게 작업 방법을 확인하고 허락을 받아야 합니다.",
  image:"machine_permission_notice.png",
  options:[
    { text:"휴게실에서 쉬려고 할 때" },
    { text:"점심을 먹으려고 할 때" },
    { text:"교육받지 않은 기계를 조작할 때" },
    { text:"퇴근 준비를 할 때" }
  ],
  correct:2,
  points:2.5
},

{
  text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
  num:"11.",
  detail:"작업 중 이상한 소리가 들리면 즉시 기계를 ______ 작업을 중단해야 합니다.",
  image:"",
  options:[
    { text:"멈추고" },
    { text:"예약하고" },
    { text:"포장하고" },
    { text:"판매하고" }
  ],
  correct:0,
  points:2.5
},

{
  text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
  num:"12.",
  detail:"출근하기 전에 작업복과 안전장비가 모두 ______ 확인하십시오.",
  image:"",
  options:[
    { text:"준비되었는지" },
    { text:"준비했지만" },
    { text:"준비하니까" },
    { text:"준비하는데" }
  ],
  correct:0,
  points:2.5
},

{
  text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
  num:"13.",
  detail:"오늘 처리해야 할 주문량이 많기 ______ 평소보다 조금 늦게 퇴근할 것 같습니다.",
  image:"",
  options:[
    { text:"때문에" },
    { text:"위해서" },
    { text:"동안" },
    { text:"마다" }
  ],
  correct:0,
  points:2.5
},

{
  text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
  num:"14.",
  detail:"작업을 시작하기 전에 기계의 전원이 제대로 ______ 있는지 확인해야 합니다.",
  image:"",
  options:[
    { text:"꺼져" },
    { text:"꺼지는" },
    { text:"끄고" },
    { text:"끄면" }
  ],
  correct:0,
  points:2.5
},

{
  text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
  num:"15.",
  detail:"허리가 아파서 무거운 상자를 혼자 ______ 동료에게 도움을 요청했습니다.",
  image:"",
  options:[
    { text:"옮기지 않고" },
    { text:"옮기면서" },
    { text:"옮기도록" },
    { text:"옮긴다면" }
  ],
  correct:0,
  points:2.5
},

{
  text: "[11~16] 빈칸에 들어갈 가장 알맞은 것을 고르십시오.",
  num:"16.",
  detail:"작업장에서는 사고가 발생하지 ______ 안전수칙을 반드시 지켜야 합니다.",
  image:"",
  options:[
    { text:"않도록" },
    { text:"않지만" },
    { text:"않으면서" },
    { text:"않더라도" }
  ],
  correct:0,
  points:2.5
},

{
  text: "17. 다음 설명에 알맞은 어휘를 고르십시오.",
  num:"17.",
  detail:"공장에서 제품을 만들기 위해 필요한 원료나 부품 등을 보관하는 장소입니다.",
  image:"",
  options:[
    { text:"창고" },
    { text:"기숙사" },
    { text:"휴게실" },
    { text:"탈의실" }
  ],
  correct:0,
  points:2.5
},

{
  text: "18. 다음 글을 읽고 무엇에 대한 글인지 고르십시오.",
  num:"18.",
  detail:"작업 중 사고가 발생하면 먼저 주변 사람에게 알리고 기계를 정지시켜야 합니다. 부상자가 있으면 즉시 관리자에게 보고하고 필요한 경우 응급조치를 해야 합니다.",
  image:"",
  options:[
    { text:"작업 순서" },
    { text:"사고 발생 시 대처 방법" },
    { text:"휴가 신청 방법" },
    { text:"제품 검사 기준" }
  ],
  correct:1,
  points:2.5
},

{
  text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
  num:"19.",
  detail:"수진 씨는 지난달부터 새로운 공장에서 일하고 있습니다. 처음에는 일이 익숙하지 않았지만 동료들이 작업 방법을 알려 주어서 지금은 혼자서도 대부분의 일을 할 수 있습니다.",
  image:"",
  options:[
    { text:"수진 씨는 오늘 처음 출근했습니다." },
    { text:"수진 씨는 동료들에게 도움을 받았습니다." },
    { text:"수진 씨는 아직 일을 전혀 하지 못합니다." },
    { text:"수진 씨는 다른 공장으로 이사했습니다." }
  ],
  correct:1,
  points:2.5
},

{
  text: "[19~20] 다음 글을 읽고 내용과 같은 것을 고르십시오.",
  num:"20.",
  detail:"이번 주 토요일에는 공장 전체 정기 점검이 예정되어 있습니다. 점검 시간에는 일부 기계의 사용이 제한되므로 작업자는 관리자의 안내에 따라 다른 업무를 해야 합니다.",
  image:"",
  options:[
    { text:"토요일에는 모든 기계를 자유롭게 사용할 수 있습니다." },
    { text:"정기 점검은 다음 달에 실시됩니다." },
    { text:"점검 시간에는 일부 기계의 사용이 제한됩니다." },
    { text:"작업자는 관리자와 상관없이 업무를 선택할 수 있습니다." }
  ],
  correct:2,
  points:2.5
},

{
  text:"[21~22] 들은 것을 고르십시오.",
  num:"21.",
  image:"",
  audio:"audio/set06/q21.mp3",
  options:[
    { text:"작업복" },
    { text:"보호안경" },
    { text:"귀마개" },
    { text:"안전벨트" }
  ],
  correct:2,
  points:2.5
},

{
  text:"[21~22] 들은 것을 고르십시오.",
  num:"22.",
  image:"",
  audio:"audio/set06/q22.mp3",
  options:[
    { text:"점검하다" },
    { text:"교체하다" },
    { text:"운반하다" },
    { text:"보관하다" }
  ],
  correct:1,
  points:2.5
},

{
  text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
  num:"23.",
  image:"",
  audio:"audio/set06/q23.mp3",
  options:[
    { image:"worker_wearing_goggles.png" },
    { image:"worker_washing_hands.png" },
    { image:"worker_loading_boxes.png" },
    { image:"worker_resting.png" }
  ],
  correct:0,
  points:2.5
},

{
  text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
  num:"24.",
  image:"",
  audio:"audio/set06/q24.mp3",
  options:[
    { image:"machine_running.png" },
    { image:"machine_repair.png" },
    { image:"machine_cleaning.png" },
    { image:"machine_inspection.png" }
  ],
  correct:3,
  points:2.5
},

{
  text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
  num:"25.",
  image:"",
  audio:"audio/set06/q25.mp3",
  options:[
    { image:"warehouse_loading.png" },
    { image:"warehouse_sorting.png" },
    { image:"warehouse_inventory.png" },
    { image:"warehouse_resting.png" }
  ],
  correct:2,
  points:2.5
},

{
  text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
  num:"26.",
  image:"",
  audio:"audio/set06/q26.mp3",
  options:[
    { image:"worker_using_ladder.png" },
    { image:"worker_using_forklift.png" },
    { image:"worker_using_crane.png" },
    { image:"worker_using_drill.png" }
  ],
  correct:0,
  points:2.5
},

{
  text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
  num:"27.",
  image:"",
  audio:"audio/set06/q27.mp3",
  options:[
    { image:"fire_extinguisher_use.png" },
    { image:"emergency_exit.png" },
    { image:"first_aid.png" },
    { image:"safety_shower.png" }
  ],
  correct:2,
  points:2.5
},

{
  text:"[23~28] 듣고 알맞은 그림을 고르십시오.",
  num:"28.",
  image:"",
  audio:"audio/set06/q28.mp3",
  options:[
    { image:"truck_loading.png" },
    { image:"truck_driving.png" },
    { image:"truck_repair.png" },
    { image:"truck_washing.png" }
  ],
  correct:0,
  points:2.5
},

{
  text:"29~32 듣고 알맞은 대답을 고르십시오.",
  num:"29.",
  image:"",
  audio:"audio/set06/q29.mp3",
  options:[
  {text:"네, 관리자에게 확인했습니다."},
  {text:"아니요, 어제 사용했습니다."},
  {text:"오후 세 시에 퇴근합니다."},
  {text:"공장 안쪽에 있습니다."}
],
correct:0,
  points:2.5
},

{
  text:"29~32 듣고 알맞은 대답을 고르십시오.",
  num:"30.",
  image:"",
  audio:"audio/set06/q30.mp3",
  options:[
  {text:"관리자에게 즉시 보고하세요."},
  {text:"네, 작업복을 입었습니다."},
  {text:"오전 여덟 시에 출근합니다."},
  {text:"창고에서 자재를 가져왔습니다."}
],
correct:0,
  points:2.5
},

{
  text:"29~32 듣고 알맞은 대답을 고르십시오.",
  num:"31.",
  image:"",
  audio:"audio/set06/q31.mp3",
  options:[
    
  {text:"오후에 작업을 시작합니다."},
     {text:"네, 약간 아프지만 괜찮습니다."},
  {text:"네, 안전교육을 받았습니다."},
  {text:"공장 앞에서 기다리겠습니다."}
  ],
  correct:1,
  points:2.5
},

{
  text:"29~32 듣고 알맞은 대답을 고르십시오.",
  num:"32.",
  image:"",
  audio:"audio/set06/q32.mp3",
  options:[
    
  {text:"오전 8시에 출근했습니다."},
  {text:"창고에서 제품을 포장합니다."},
    {text:"집에 가서 좀 쉬려고 합니다."},
  {text:"네, 안전모를 착용했습니다."}
  ],
  correct:2,
  points:2.5
},

{
  text:"[33] 이어지는 말을 고르십시오.",
  num:"33.",
  image:"",
  audio:"audio/set06/q33.mp3",
  options:[
    
    {text:"네, 어제 비가 많이 왔습니다."},
     {text:"그럼 작업을 서두르지 말고 안전하게 하세요."},
    {text:"네, 어제 비가 많이 왔습니다."},
    {text:"오전 여덟 시에 버스를 탔습니다."},
    {text:"저는 지난주에 병원에 갔습니다."}
  ],
  correct:1,
  points:2.5
},

{
  text:"34~36 듣고 알맞은 그림을 고르십시오.",
  num:"34.",
  image:"",
  audio:"audio/set06/q34.mp3",
  options:[
    { image:"worker_checking_temperature.png" },
    { image:"worker_checking_weight.png" },
    { image:"worker_checking_quantity.png" },
    { image:"worker_checking_time.png" }
  ],
  correct:2,
  points:2.5
},

{
  text:"34~36 듣고 알맞은 그림을 고르십시오.",
  num:"35.",
  image:"",
  audio:"audio/set06/q35.mp3",
  options:[
    { image:"employee_requesting_leave.png" },
    { image:"employee_reporting_accident.png" },
    { image:"employee_receiving_training.png" },
    { image:"employee_signing_contract.png" }
  ],
  correct:2,
  points:2.5
},

{
  text:"34~36 듣고 알맞은 그림을 고르십시오.",
  num:"36.",
  image:"",
  audio:"audio/set06/q36.mp3",
  options:[
    { image:"worker_separating_recycling.png" },
    { image:"worker_packing_product.png" },
    { image:"worker_repairing_machine.png" },
    { image:"worker_cleaning_floor.png" }
  ],
  correct:0,
  points:2.5
},

{
  text:"37~40 긴 대화를 듣고 답하십시오.",
  num:"37.",
  image:"",
  audio:"audio/set06/q37.mp3",
  options:[
    {text:"작업장 입구"},
    {text:"자재 창고"},
    {text:"휴게실"},
    {text:"관리자 사무실"}
  ],
  correct:1,
  points:2.5
},

{
  text:"37~40 긴 대화를 듣고 답하십시오.",
  num:"38.",
  image:"",
  audio:"audio/set06/q38.mp3",
  options:[
    {text:"기계가 고장 나서"},
    {text:"안전교육을 받으려고"},
    {text:"제품을 주문하려고"},
    {text:"동료를 만나려고"}
  ],
  correct:1,
  points:2.5
},

{
  text:"37~40 긴 대화를 듣고 답하십시오.",
  num:"39.",
  image:"",
  audio:"audio/set06/q39.mp3",
  options:[
    {text:"작업복"},
    {text:"부품"},
    {text:"의약품"},
    {text:"식료품"}
  ],
  correct:1,
  points:2.5
},

{
  text:"37~40 긴 대화를 듣고 답하십시오.",
  num:"40.",
  image:"",
  audio:"audio/set06/q40.mp3",
  options:[
    {text:"작업 시간을 변경하기 위해"},
    {text:"새로운 기계를 배우기 위해"},
    {text:"병원에 방문하기 위해"},
    {text:"휴가를 신청하기 위해"}
  ],
  correct:0,
  points:2.5
}

];