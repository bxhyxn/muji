$(document).ready(function(){
    // 탭 hover 해서 전환 //
    $(document).on('mouseenter', '[data-toggle="tab"]', function () {
      $(this).tab('show');
    });
    
    // d-lg 이상에서 카테고리 탭 클릭시 사이드바 슬라이드 + 오버레이//
    $('.nav-tabs-wrapper .nav-item').click(function(){
        $('.nav-tabs-container').css('left','0'),
        $('.sidebar-overlay').css('display','block');
    });
    // d-lg 이상에서 오버레이 클릭시 사이드바 제자리//
    $('.sidebar-overlay').click(function(){
        $('.nav-tabs-container').css('left','-300px'),
        $('.sidebar-overlay').css('display','none');
    });
    // d-md 이하에서 햄버거 버튼 클릭하면 사이드바 슬라이드 + 오버레이//
    $('.cate-open-btn').click(function(){
        $('.nav-tabs-wrapper.tabs-in-sidebar').css('left','0'),
        $('.nav-tabs-container').css('left','0'),
        $('.sidebar-overlay').css('display','block');
    });
    // d-md 이하에서 오버레이, X버튼 클릭하면 사이드바 제자리//
    $('.sidebar-overlay').click(function(){
        $('.nav-tabs-wrapper.tabs-in-sidebar').css('left','-300px'),
        $('.nav-tabs-container').css('left','-300px'),
        $('.sidebar-overlay').css('display','none');
    });
    
    //X 버튼으로 사이드바 닫기//
    $('.sidebar .close-btn').click(function(){
        $('.nav-tabs-wrapper.tabs-in-sidebar').css('left','-300px'),
        $('.nav-tabs-container').css('left','-300px'),
        $('.sidebar-overlay').css('display','none');
    });
    
    // 스크롤 다운시 헤더 줄어듬, top버튼 나옴 //
    
    $(window).on("scroll", function() {
            if ($(window).scrollTop() >= 20) {
                $(".top-nav-wrapper").addClass("compressed"),
                $('.go-top').addClass("show");
            }
            else { 
                $(".top-nav-wrapper").removeClass("compressed"),
                $('.go-top').removeClass("show");
            }
    });
});

//지도 설정//
function initMap() {
        var gangnam = {lat: 37.500784, lng: 127.026635};
        var sinchon = {lat: 37.562863, lng: 126.937176};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: gangnam
        });

        var marker = new google.maps.Marker({
          position: gangnam,
          map: map,
          title: '무인양품 강남점'
        });
        var marker = new google.maps.Marker({
          position: sinchon,
          map: map,
          title: '무인양품신촌점'
        });
      }
   
           