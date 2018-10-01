$(function() {
  // 导航动画
  var navMain = $('#header-common')
  var navMainStatus = $('#header-common').length
  var navSider = $('.nav')
  var navSiderStatus = navSider.length
  var navContent = $('body > .content')
  var windowsWidthStatus = $(document).width() > 768
  if (navMainStatus && windowsWidthStatus) {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 70) {
        navMain.addClass('navMainScroll')
      } else {
        navMain.removeClass('navMainScroll')
      }
    })
  } else {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 70) {
        navMain.addClass('navMainScroll')
      } else {
        navMain.removeClass('navMainScroll')
      }
    })
  }
  if (navSiderStatus) {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 200) {
        navContent.addClass('activated')
      } else {
        navContent.removeClass('activated')
      }
    })
  }
  // 锚点平滑跳转
  $('a').click(function() {
    $(this)
      .addClass('active')
      .parent()
      .siblings()
      .find('a')
      .removeClass('active')
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var $target = $(this.hash)
      $target =
        ($target.length && $target) || $('[name=' + this.hash.slice(1) + ']')
      if ($target.length) {
        var targetOffset = $target.offset().top
        if ($(window).scrollTop() >= 200) {
          $('html,body').animate(
            {
              scrollTop: targetOffset + 30 + 'px'
            },
            1000
          )
        } else {
          $('html,body').animate(
            {
              scrollTop: targetOffset
            },
            500
          )
        }

        return false
      }
    }
  })
  // 锚点对应显示左侧当前项
  if ($('.content li a').length > 0) {
    $(document).scroll(function() {
      $('.anchor').each(function(index) {
        if (
          $('.anchor')
            .eq(index)
            .offset().top < $(document).scrollTop()
        ) {
          $('.content li a')
            .eq(index)
            .addClass('active')
            .parent()
            .siblings()
            .find('a')
            .removeClass('active')
        }
        if (
          $(document).scrollTop() >=
          $(document).height() - $(window).height()
        ) {
          $('.content li a')
            .eq(index)
            .addClass('active')
            .parent()
            .siblings()
            .find('a')
            .removeClass('active')
        }
      })
    })
  }
  // 二维码显示
  if ($('.erweima').length > 0) {
    $('.erweima')
      .prev('a')
      .on('click', function() {
        $('.erweima').fadeIn()
      })
    $('.erweima h5').on('click', function() {
      $('.erweima').fadeOut()
    })
  }
  // 移动端主导航
  if ($('#header .btn,#header-common .btn').length > 0) {
    $('#header .btn,#header-common .btn').on('click', function() {
      $('#nav-m').addClass('active')
    })
    $('.top .close,.shade').on('click', function() {
      $('#nav-m').removeClass('active')
    })
  }
  // 首页幻灯
  if ($('.swiper-container').length > 0) {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true
      },
      loop: true,
      autoplay: true,
      delay: 1000
    })
  }
  // // 验证手机号
  // $('#submit').on('click', function() {
  //   var val = $('#phone').val()
  //   if (!isRealNum(val)) {
  //     $(this).next().html('请输入正确手机号')
  //   }
  // })
  // //验证手机号方法
  // function isRealNum(val) {
  //   // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除
  //   if (val === '' || val == null) {
  //     return false
  //   }
  //   if (!isNaN(val)) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  // 表单验证 
  function yanzhengForm(){
    if( $(".board").length<=0){
        return false;
    }
    var myform = $(".board form")[0];
    if( !myform ){
        return false;
    }
    var uname = myform["data[xingming]"];
    var unameZZ = /(^[\u4e00-\u9fa5]{1,10}$)|(^[a-zA-Z\s]{2,20}$)/;
        $(uname).on("invalid",function(){
            uname.setCustomValidity("请填写此信息");
        });
        $(uname).on("input",function(){
            uname.setCustomValidity("");
        });

    var dianhua = myform["data[lianxidianhua]"];
    var dianhuaZZ = /(^1\d{10}$)|(^0\d{2,3}-?\d{7,8}$)/;  // 手机或者座机
        $(dianhua).on("invalid",function(){
            dianhua.setCustomValidity("请填写此信息");
        });
        $(dianhua).on("input",function(){
            dianhua.setCustomValidity("");
        });

    var shengshi = myform["data[suoshushengshi]"];
    var shengshiZZ = /(^[\u4e00-\u9fa5]{1,15}$)|(^[a-zA-Z-\s]{2,20}$)/;
        $(shengshi).on("invalid",function(){
            shengshi.setCustomValidity("请填写此信息");
        });
        $(shengshi).on("input",function(){
            shengshi.setCustomValidity("");
        });

    var hangye = myform["data[suoshuxingye]"];
    var hangyeZZ = /(^[\u4e00-\u9fa5]{1,10}$)|(^[a-zA-Z-\s]{2,20}$)/;
        $(hangye).on("invalid",function(){
            hangye.setCustomValidity("请填写此信息");
        });
        $(hangye).on("input",function(){
            hangye.setCustomValidity("");
        });

    var xuqiu = myform["data[nidexuqiu]"];
    var xuqiuZZ = /[a-zA-Z0-9_\u4e00-\u9fa5]+/;
        $(xuqiu).on("invalid",function(){
            xuqiu.setCustomValidity("请填写此信息");
        });
        $(xuqiu).on("input",function(){
            xuqiu.setCustomValidity("");
        });

    $(myform).on("submit",function(e){
      // 姓名
      if( !$.trim(uname.value) || !unameZZ.test( $.trim(uname.value) )  ){
          $(uname).addClass("error");
          $(uname).next().html(" <i class=\"icon_tanhao\"></i>请输入正确的姓名");
          return false;
      }else{
          $(uname).removeClass("error");
          uname.value = $.trim(uname.value);
          $(uname).next().html(" <i class=\"icon_tanhao\"></i> OK");
      }
      // 电话
      if( !$.trim(dianhua.value) || !dianhuaZZ.test( $.trim(dianhua.value)) ){
          $(dianhua).addClass("error");
          $(dianhua).next().html(" <i class=\"icon_tanhao\"></i>请输入正确的电话");
          return false;
      }else{
          $(dianhua).removeClass("error");
          dianhua.value = $.trim(dianhua.value);
          $(dianhua).next().html(" <i class=\"icon_tanhao\"></i> OK");
      }
      
      // 行业
      if( !$.trim(hangye.value) || !hangyeZZ.test($.trim(hangye.value) )){
          $(hangye).addClass("error");
          $(hangye).next().html(" <i class=\"icon_tanhao\"></i>请输入正确的行业");
          return false;
      }else{
          $(hangye).removeClass("error");
          hangye.value = $.trim(hangye.value);
          $(hangye).next().html(" <i class=\"icon_tanhao\"></i> OK");
      }

      // 省市
      if( !$.trim(shengshi.value) || !shengshiZZ.test($.trim(shengshi.value) )){
          $(shengshi).addClass("error");
          $(shengshi).next().html(" <i class=\"icon_tanhao\"></i>请输入正确的省市");
          return false;
      }else{
          $(shengshi).removeClass("error");
          shengshi.value = $.trim(shengshi.value);
          $(shengshi).next().html(" <i class=\"icon_tanhao\"></i> OK");
      }

      

      // 需求
      if( !$.trim(xuqiu.value) || !xuqiuZZ.test($.trim(xuqiu.value)) ){
          $(xuqiu).addClass("error");
          $(xuqiu).next().html(" <i class=\"icon_tanhao\"></i>请输入您的需求");
          return false;
      }else{
          $(xuqiu).removeClass("error");
          $(xuqiu).next().html(" <i class=\"icon_tanhao\"></i> OK");
      }
      return true;
    });
  }
  $(document).ready(function(){
      yanzhengForm();
  });
  $(document).ready(function(){
    var a = window.navigator.userAgent;
    if($(window).height() < 700 && $('.content > .nav').length>0 && a.indexOf('WindowsWechat')==-1) {
      $(window).scroll(function() {
        if ($(document).scrollTop() +700-$(window).height() >= $(document).height() - $(window).height()) {
          $('.content > .nav').hide()
        } else {
          $('.content > .nav').show()
        }

      })
    }
  })
  $(window).on('resize',function(){
    var a = window.navigator.userAgent;
    if($(window).height() < 700 && $('.content > .nav').length>0 && a.indexOf('WindowsWechat')==-1) {
      $(window).scroll(function() {
        if ($(document).scrollTop() +700-$(window).height() >= $(document).height() - $(window).height()) {
          $('.content > .nav').hide()
        } else {
          $('.content > .nav').show()
        }

      })
    }
  })
})
