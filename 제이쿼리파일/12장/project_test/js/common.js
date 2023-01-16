$(function () {
  /*로그인 버튼*/
  $(".login_wrap>a").on("click", function () {
    $("#login_f").animate({ top: "20px" }, 500); // 기능을 0.5초 동안 쓸게
    return false; // 기존에 가지고 있는 a태그의 링크(이동하려는거) 없앰
    // 위에 미리 올라가 있는 로그인 폼을 아래로 내릴게

  }); // .login_wrap 밑에 a태그 적용할게

  // 이제 닫기 버튼 누르면 다시 위로 가야됨
  $(".login_close_btn, input[alt='로그인버튼']").on("click", function () { // input 태그의 속성 alt의 로그인 버튼을 눌렀을때
    $("#login_f").animate({ top: "-500px" }, 500); // 기능을 0.5초 동안 쓸게(아까랑 반대로 설정해주면돼)
    return false;
  });

  $("#user_id , #user_pw").on("focus", function () { // 비번 입력란(input)을 포커스 하면 안에 있던 이미지를 내보내줘야돼
    $(this).prev().css("left", "-9999px");
  });

  $("#user_id , #user_pw").on("blur", function () { // 다시 비어있을땐 기존 이미지 넣어주기
    if ($(this).val == "") // 입력값이 비어있을때만, 아래꺼 적용해줘
      $(this).prev().css("left", "2px");
  });


  /*zoom 버튼*/
  var base = 100;
  var mybody = $("body"); // <body>태그 선택, 전체 컨텐츠 선택

  // 줌 밑의 하위 태그 <a> 3개 선택할꺼
  $("#zoom a").on("click", function () {
    var zNum = $("#zoom a").index(this); // zoom a를 뜻함(0,1,2)

    if (zNum == 0) { // "+"
      base += 10;
    } else if (zNum == 1) { // "100"
      base = 100;
    } else { // "-"
      base -= 10;
    }
    mybody.css("overflow-x", "auto")
      .css("transform-origin", "0 0")
      .css("transform", "scale(" + base / 100 + ")") // css("transform", "scale(1)") 이런식으로..
      .css("zoom", base + "%"); // css("zoom", 100%)
    return false;
  });


  /*프린트 버튼, 클릭스 프린트 창 띄워줌*/
  $(".print_btn").on("click", function () {
    window.print(); // 프린트 창 띄워주는 기능 있음
    return false;
  });

  /*검색 창 안내 가이드*/
  $("#keyword").on("focus", function () { // input태그 말하는거
    $(this).css("background-position", "0 -500px");
  }).on("blur", function () {
    if ($(this).val() == "") // input 안에 값이 없을때 불러올게
      $(this).css("background-position", "0 0px");
  })
  // 이런식으로 ; 대신 . 쓰면 계속해서 연결해서 사용가능 

  /*GNB메뉴*/
  var beforeEl;
  $("#gnb>li>a").on("mouseover focus", function () {
    if (beforeEl)
      beforeEl.children("img").attr("src", beforeEl.children("img").attr("src").replace("over.gif", "out.gif"));
    $("img", this).attr("src", $("img", this).attr("src").replace("out.gif", "over.gif")); // 여기서 this는 a태그를 의미, a태그 밑에 있는 이미지
    // $("img", this).attr("src") : "images/gnb_1_out.gif" -> "images/gnb_1_over.gif" 마우스를 올리면 흰색에서 노란색으로 바뀜

    $("#gnb ul:visible").slideUp("fast"); // 4개 중에 눈에 보이는것만 슬라이드업해줘

    $(this).next().stop().slideDown("normal"); // a태그의 동생(ul태그) 내려와주라
    beforeEl = $(this);
  });

  $("#gnb").on("mouseleave", function () {
    $("#gnb ul:visible").slideUp("fast");

    if (beforeEl) beforeEl.children("img").attr("src", beforeEl.children("img").attr("src").replace("over.gif", "out.gif"));
  });

  /*전체메뉴*/

  $("#total_btn a").on("click", function () {
    $("#total_menu").slideDown("normal");
    $("img", this).attr("src", $("img", this).attr("scr").replace("out.gif", "over.gif")); // 본인 밑에 있는 이미지
  });



  /*전체 메뉴 닫기 버튼*/
  $("#total_close a").on("click", function () {
    $("#total_menu").slideUp("fast");
    $("#total_btn a img").attr("src", $("#total_btn a img").attr("src").replace("over.gif", "out.gif"));
    return false;
  });


  /*날짜 표기*/
  var t = new Date();
  var y = t.getFullYear();
  var m = t.getMonth(); // 1달 -> 0으로 12달 -> 11로
  var d = t.getDate();

  $("#date_wrap .year").text(y);
  $("#date_wrap .month").text(m+1);
  $("#date_wrap .date").text(d);


  /*관련 사이트 이동*/


  /*퀵메뉴*/

});