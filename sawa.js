$(`<style>
    /* تعريف المتغيرات الجذرية للتحكم الموحد بالألوان */
    :root {
        --bg-color: #3a4d61;      /* لون الخلفية الافتراضي */
        --primary-color: #2c3d4f; /* لون العناصر الافتراضي */
        --dark-color: #2d2d2d;    /* اللون الداكن الثابت */
    }

    /* --- تنسيقات ستايلات الواجهة --- */
    @font-face{font-family:'jazeera';src: url('https://www.fontstatic.com/fonts/jazeera/jazeera.eot?#iefix');src: local('teeeest©'), local('jazeera'),url('https://www.fontstatic.com/fonts/jazeera/jazeera.woff') format('woff');}
    @font-face{font-family:'jazeera-light';src: url('https://www.fontstatic.com/fonts/jazeera-light/jazeera-light.eot?#iefix');src: local('11111'), local('jazeera-light'),url('https://www.fontstatic.com/fonts/jazeera-light/jazeera-light.woff') format('woff');}

/* ===================================
    BROADCAST HEADER
=================================== */

#tbox {
width: 230px!important;
border-radius: 15px!important;
}


/* ===================================
    BUTTONS
=================================== */




/* ===================================
   PRODUCT
=================================== */



/* ===================================
   MIC BUTTON
=================================== */


/* ===================================
   IMAGES
=================================== */




    .az-mdl {display:none;position:fixed;z-index:99999;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.75);backdrop-filter:blur(4px)}
    .az-cnt {background:var(--bg-color);margin:20% auto;width:280px;border-radius:15px;border:2px solid var(--primary-color);overflow:hidden;position:relative;text-align:center;font-family:'jazeera'}
    .az-hdr {background:var(--dark-color);color:var(--primary-color);padding:8px;font-weight:bold;border-bottom:2px solid var(--primary-color)}
    .az-body {padding:10px;color:var(--dark-color);font-size:12px;line-height:1.6}
    .az-btn {background:var(--dark-color);color:var(--primary-color)!important;padding:4px 12px;border-radius:8px;text-decoration:none;display:inline-block;border:1px solid var(--primary-color);margin-bottom:10px}
    .az-cls {position:absolute;left:8px;top:5px;color:var(--primary-color);cursor:pointer;font-size:18px}
div#l2 input#pass1,
div#l2 input#u2,
div#l3 input#pass2,
div#l3 input#u3 {
    display: inline-block;
    vertical-align: top;
    padding: 0px!important;
    border-radius: 25px!important;
    border: 1px solid #dedede!important;
    text-align: center;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);\n\
    height: 27px!important;
    width: 49%!important;
    float: right;
    margin: 2px 3px 2px 0;
}
#u2 + br,
#u3 + br {
    display: none;
}
div#l2 button,
div#l3 button,
div#l1 button {
    border-radius: 24px!important;
    height: 27px;
    padding: 0px 5px;
    width: 98%;
    margin-left: 4px;
    box-shadow: inset 0 0px 0 rgb(255 255 255), 0 2px 0px rgb(252 199 209);
    border-color: #FFFFFF!important;
    margin-top: 4px !important;
}
#u1 {
    padding: 0px 0px!important;
    margin-left: -6px;
    border-radius: 25px!important;
    border: 1px solid #e1e0e0;
    text-align: center;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 1px 2px rgb(107 32 49);
    border: 1px solid white;
    height: 27px!important;
    width: 100%!important;
    margin-top: 1px!important;
}
    div#tlogins .fl.mini.u-msg { display: none; }
    div#tlogins img.fr.co { display: none; }
    div#tlogins span.corner.u-topic.dots { margin-top: 8px!important; float: right; margin-right: -100px!important; }
    div#tlogins .hand.nosel.fl.uzr.border { width: 76%!important; margin-top: 5px!important; border-radius: 9px!important; }
    
    div#tlogins label.label.label-primary.mini.fl {
        width: 34%!important;
        margin-left: 5px;
        border-radius: 5px!important;
        background-color: var(--primary-color)!important;
        border: 1px solid black;
        font-family: 'jazeera-light',FontAwesome;
        color: var(--dark-color);
        padding: 0 5px;
    }

    div#tlogins .fr.borderg {
        background-color: var(--primary-color)!important;
        color: var(--dark-color);
        border-radius: 0px 0px 0px 15px;
        border: 1px solid black;
        font-family: 'jazeera-light',FontAwesome;
        padding: 0 2px!important;
        width: 72%;
        text-align: center;
    }
       
        .btn-success{
            border-radius: 10px 10px 10px 10px!important;}
    
    div#tlogins .fr.borderg a { color: var(--dark-color); }
    
    div#tlogins span.s1.fa.fa-user.label.badgex.label-as-badge.label-success {
        background-color: white;
        color: var(--primary-color);
        border-radius: 32px;
        margin-top: -3px !important;
        display: inline-block;
    }

    div#tlogins label.fl.label.loginstat.label-success {
        background-color: var(--primary-color) !important;
        color: var(--dark-color) !important;
        font-family: 'jazeera-light', FontAwesome;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 5px 15px !important;
        position: relative;
        clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 0% 100%); 
        min-width: 80px;
        margin-top: -10px !important;
    }
.label-primary, .btn-primary,.label-primary:hover{
background: #2c3d4f !important;
}
.btn-primary:hover{
background: #333 !important;
color:#fff !important;
}

    div#tlogins #s1.label-success {
        background-color: var(--bg-color) !important;
        color: var(--dark-color) !important;
        font-family: 'jazeera-light', FontAwesome;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 5px 15px !important;
        clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
        min-width: 60px;
        line-height: 30px;
        margin-right: 0 !important;
        margin-top: -5px !important;
        display: inline-block;
    }

    div#tlogins {
        background-color: var(--bg-color);
        border-right: 3px solid var(--primary-color);
        border-left: 3px solid var(--primary-color);
        border-bottom: 3px solid var(--primary-color);
        border-radius: 0 0 15px 15px;
    }
    
    div#tlogins ul.nav.nav-tabs li {
        width: 33.3%;
        background: var(--primary-color);
        border: 1px solid;
        margin-top: 1px;
        border-radius: 20px 20px 0 0;
    }
    
    div#tlogins ul.nav.nav-tabs li a {
        text-align: center;
        background-color: var(--dark-color);
        margin-top: 3px;
        border-radius: 15px 15px 0 0;
        width: 100%;
        color: white;
        font-family: 'jazeera',FontAwesome;
        padding: 6px 0px!important;
        font-size: 14px !important;
    }
    
    div#tlogins ul.nav.nav-tabs li.active a { background-color: var(--primary-color); color: white; }
    div#tlogins ul.nav.nav-tabs li.active { background: var(--dark-color); }
    
    div#tlogins div#l1, div#tlogins div#l2, div#l3 {
        border-top: 1px solid;
        margin-top: 2px;
        border-bottom: 1px solid;
        margin-bottom: 2px;
        padding: 18px 2px 0px !important;
        background-image: url(https://iqr30.com/sico/z1ckqkkuh610.png) !important;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right;
        height: 64px;
    }
    
    div#tlogins div#l2, div#l3 { padding: 4px 2px 4px !important; }
    div#tlogins div#l1 br { display: none; }
    
    div#tlogins #w99w1 {
        font-family: 'jazeera-light',FontAwesome;
        margin-bottom: -3px;
        background-color: var(--dark-color);
        height: 28px;
        color: var(--bg-color);
        border-radius: 0;
        border-bottom: 2px solid var(--dark-color);
        border-top: 2px solid var(--dark-color);
        padding-bottom: 2px!important;
        text-shadow: 2px 0px 8px rgba(255,255,219) , 0px 2px 10px #fff !important;
        width: 100%;
    }

    div#tlogins #w99w2 { border-bottom: 27px solid var(--bg-color); border-left: 27px solid transparent; height: 0; width: 98px; float: right; margin-top: -32px; position: relative; }
    div#tlogins #w99w3 { border-bottom: 27px solid var(--primary-color); border-left: 27px solid transparent; height: 0; width: 90px; float: right; margin-top: -32px; position: relative; }
    div#tlogins #w99w4 { padding: 3px 0; text-align: right; margin-right: 2px; font-family: 'jazeera',FontAwesome; }
    
    div#tlogins .a { background-color: #FFFFFF; border-radius: 15px; font-family: 'jazeera',FontAwesome; padding: 2px 10px; margin: 7px 10px; color: #2c3d4f; }
    div#tlogins .a2 { background-color: var(--bg-color); border-radius: 15px 15px 15px 0px; font-family: 'jazeera',FontAwesome; padding: 1px 10px 7px 10px; margin: 7px 10px 7px 0px; color: #d0046f; }
    
    .a3 { z-index: 1001; background-color: #FFFFFF; border-radius: 0 0 15px 15px; font-family: 'jazeera',FontAwesome; padding: 2px; margin: 0; color: var(--dark-color); position: absolute; margin-top: -20px; font-size: 14px!important; text-align: center; width: 383px; bottom: 3px; }
    
    div#tlogins .lonline.light.break { background-color: var(--bg-color); outline: none!important; }
    div#tlogins input#u1 { margin-top: -11px !important; position: relative !important; z-index: 1000 !important; margin-left: 0px; display: inline-block !important; }
    div#tlogins input#u2 { margin-top: 5px !important; }
    div#tlogins div#l1 { height: auto !important; padding-top: 10px !important; }
    
    div#tlogins input#u1, input#u2, input#u3, input#pass1, input#pass2 {
        font-family: 'jazeera',FontAwesome;
        text-align: center;
        border-radius: 3px;
        border: 2px solid var(--primary-color);
        color: #ffffff;
        background-color: var(--dark-color);
        width: 54%;
    }

    div#tlogins div#l1 button.btn.btn-primary, div#l2 button.btn.btn-primary, div#l3 button.btn.btn-primary { font-family: 'jazeera',FontAwesome; padding: 0px 5px 2px; margin-top: 0px; color: #fff; }
    div#tlogins div#l2 .checkbox { margin-top: -25px!important; position: fixed; margin-left: -46px!important; }
    div#tlogins div#l2 .checkbox label { font-family: 'jazeera',FontAwesome; }
    
    /* سكرول بار */
    ::-webkit-scrollbar { width: 5px; height: 10px; }
    ::-webkit-scrollbar-button { width: 5px; height: 5px; }
    ::-webkit-scrollbar-thumb { background: var(--dark-color); border: 71px none #ffffff; border-radius: 31px; }
    ::-webkit-scrollbar-track { background: #eee; border: 65px none #ffffff; border-radius: 34px; }
    img.fr.co { display: none; }

    /* --- تنسيقات لوحة التحكم بالألوان --- */
    #color-picker-icon { position: fixed; top: 80%; right: 20px; transform: translateY(-50%); width: 60px; height: 60px; z-index: 10000; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: all 0.4s ease-in-out; }
    #color-picker-icon img { width: 100%; height: 100%; border-radius: 50%; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); transition: transform 0.4s ease-in-out; }
    #color-picker-icon:hover img { transform: scale(1.1); }
    #color-picker-panel { position: fixed; top: 50%; right: 50%; transform: translate(50%, -50%); background: linear-gradient(135deg, #ffffff, #f3f4f6); border-radius: 16px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); padding: 20px; display: none; z-index: 9999; width: 300px; font-family: 'Arial', sans-serif; color: #ccc; animation: fadeIn 0.5s ease-in-out; }
    #color-picker-panel h4 { margin: 0; font-size: 16px; font-weight: bold; text-align: center; margin-bottom: 10px; color: #aaa; }
    #color-picker-panel input[type="color"] { width: 100%; height: 40px; border: none; cursor: pointer; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); background-color: #333; color: #fff; }
    #color-picker-panel button { width: 100%; padding: 12px; background: linear-gradient(135deg, #6a11cb, #2575fc); color: #fff; border: none; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); transition: all 0.3s ease-in-out; }
    #color-picker-panel button:hover { background: linear-gradient(135deg, #2575fc, #6a11cb); transform: scale(1.05); }
    #color-picker-panel .custom-color { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px; }
    #color-picker-panel .custom-color div { width: 40px; height: 40px; border-radius: 4px; cursor: pointer; border: 2px solid #fff; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); }
    #color-picker-panel .custom-color div:hover { border-color: #aaa; }
    #designer-rights { margin-top: 20px; font-size: 14px; text-align: center; color: #777; }
    #designer-rights a { color: #2575fc; text-decoration: none; font-weight: bold; }
    @keyframes fadeIn { from { opacity: 0; transform: translate(50%, -55%); } to { opacity: 1; transform: translate(50%, -50%); } }




#tlogins .fa.fa-eye {
    position: relative;
    margin: -30px 17px 2px 0px!important;
    color: #fff!important;
}
/* نبض هادئ لأيقونة تغيير الألوان */

#color-picker-icon img{
    animation: softPulse 2.8s infinite ease-in-out;
    transform-origin: center;
    will-change: transform, filter;
}

/* عند اللمس يوقف النبض ويكبر شوي */
#color-picker-icon:hover img{
    animation-play-state: paused;
    transform: scale(1.08);
}

@keyframes softPulse{

    0%{
        transform: scale(1);
        filter: brightness(1);
    }

    50%{
        transform: scale(1.08);
        filter: brightness(1.12);
    }

    100%{
        transform: scale(1);
        filter: brightness(1);
    }

}
  .bg{
  background-color:#3a4d61 !important ;
  }

  .bg{
   background: var(--primary-color);
  }  
#upro .modal-header.label-primary, #d0, .broadcasters, #rooms .label-primary, #users .nosel.ninr.fl.uzr.label.bg{
 background: var(--primary-color)!important ;
}
 #muteall{
 border-radius: 50% 50% !important;
 }
  </style>`).appendTo("head");

    // 2. إدراج العناصر في الصفحة (المودال + لوحة الألوان + الإهداءات)
    var modal = `<div id="az-m" class="az-mdl"><div class="az-cnt"><span class="az-cls" onclick="$('#az-m').fadeOut()">×</span><div class="az-hdr">تصميم استايلات احترافية 🎨</div><div class="az-body"><b>هل تريد تمييز موقعك؟</b><br>نصمم لك استايلات حصرية وجذابة تليق بموقعك.</div><a href="https://t.me/+966*******" target="_blank" class="az-btn">تواصل معي تيليجرام 💬</a></div></div>`;
    $("body").append(modal);

    var azouzBtn = $('<div id="azouz-styles" onclick="$(\'#az-m\').fadeIn()" style="position: absolute; left: 278px; bottom: 0px; background-color: var(--dark-color) !important; color: var(--primary-color); border-radius: 0px 0px 15px 0px; border: 1px solid var(--primary-color); font-family: \'jazeera-light\', FontAwesome; padding: 0 10px; min-width: 117px; text-align: center; cursor: pointer; height: 22px; line-height: 22px; font-size: 12px; font-weight: bold; z-index: 9999;">إستايلات عزوز</div>');
    $(".fr.borderg.minix.cop:last").parent().css({"position": "relative", "overflow": "visible"}).append(azouzBtn);

    var welcomeBarHtml = `<center><div style="border-bottom: 1px solid; margin-bottom: 2px;"><marquee direction="right" width="99%" id="w99w1" onmouseover="this.stop()" onmouseout="this.start()" scrolldelay="0" scrollamount="5">&nbsp;أهلا وسهلا بكم في شات <font class="a"> ســوا فــلــســطــيــن </font> ● · مع تمنياتنا للجميع بـ أطيب الاوقات&nbsp;</marquee></div><div id="w99w2"></div><div id="w99w3"><div id="w99w4">الإهداءات</div></div></center>`;
    $(welcomeBarHtml).insertBefore("div#tlogins .loginstat ");

    
    $("div#tlogins .btn.btn-primary").click(function () { $(".a3").hide(); });

    $(
        '<div id="color-picker-icon"><img src="https://rawcdn.githack.com/khasbmsharyy/https-3chaq.uk/1e0d465ac6f81145aa153b3c0cc4f3b6ed994f80/Picsart_26-04-09_03-31-14-674.png" alt="Color Picker Icon"></div>' +
        '<div id="color-picker-panel">' +
        '<h4>اختر لون الخلفية</h4><div class="custom-color">' +
        '<div style="background-color: #a41e54;" data-color="#a41e54"></div><div style="background-color: #982072;" data-color="#982072"></div><div style="background-color: #98278f;" data-color="#98278f"></div><div style="background-color: #62007a;" data-color="#62007a"></div><div style="background-color: #3c007a;" data-color="#3c007a"></div><div style="background-color: #0d1c4d;" data-color="#0d1c4d"></div><div style="background-color: #6f6f6f;" data-color="#6f6f6f"></div><div style="background-color: #212121;" data-color="#212121"></div></div>' +
        '<h4>اختر لون العناصر</h4><div class="custom-color">' +
        '<div style="background-color: #821d46;" data-color="#821d46"></div><div style="background-color: #7b215e;" data-color="#7b215e"></div><div style="background-color: #70276a;" data-color="#70276a"></div><div style="background-color: #4f0462;" data-color="#4f0462"></div><div style="background-color: #320561;" data-color="#320561"></div><div style="background-color: #081337;" data-color="#081337"></div><div style="background-color: #5c5c5c;" data-color="#5c5c5c"></div><div style="background-color: #111111;" data-color="#111111"></div></div>' +
        '<input type="color" id="bg-color-picker" value="#3a4d61">' +
        '<input type="color" id="btn-primary-color-picker" value="#2c3d4f">' +
        '<button id="apply-colors">تطبيق الألوان</button>' +
        '<div id="designer-rights"><span>+واتساب: <strong>قريبا</strong></span><br><span>حقوق التصميم لـ<a href="#">ز✯͜͡𓅓ــᬼـزوᬼ🇾🇪⑅⃝عــᬼ</a></span><br><span>خاص لـ <a href="https://3chaq.uk/" target="_blank">شات سوا فلسطين</a></span></div>' +
        '</div>'
 ).appendTo('#tlogins');

// ===== لوحة الألوان تظهر فقط بالتسجيل =====

function toggleColorPanel() {

    let loginPage =
        $("#tlogins").length &&
        $("#tlogins").is(":visible");

    if (loginPage) {

        $("#color-picker-icon").css({
            display: "flex"
        });

    } else {

        $("#color-picker-icon").hide();
        $("#color-picker-panel").hide();

    }
}

// فتح وإغلاق اللوحة
$(document).on("click", "#color-picker-icon", function () {
    $("#color-picker-panel").fadeToggle();
});

// تشغيل أول مرة
toggleColorPanel();

// مراقبة الانتقال للدردشة
setInterval(toggleColorPanel, 300);

    // دالة مساعدة لتطبيق الألوان على المتغيرات والجذور
    function updateThemeColors(bgColor, primaryColor) {
        document.documentElement.style.setProperty('--bg-color', bgColor);
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        
        // لتغطية كلاسات الشات الافتراضية إذا تطلب الأمر
        $('.bg').css('background-color', bgColor);
        $('.label-primary, .btn-primary, .bg-primary').attr('style', function(i, s) { return (s || '') + 'background-color: ' + primaryColor + ' !important; border-color: ' + primaryColor + ' !important;';});
    }

    $('#apply-colors').on('click', function() {
        const bg = $('#bg-color-picker').val();
        const primary = $('#btn-primary-color-picker').val();
        updateThemeColors(bg, primary);
        $('#color-picker-panel').fadeOut();
    });

    $('#color-picker-panel .custom-color div').on('click', function() {
        const selectedColor = $(this).data('color');
        if ($(this).parent().prev('h4').text().includes('لون الخلفية')) {
            $('#bg-color-picker').val(selectedColor);
            document.documentElement.style.setProperty('--bg-color', selectedColor);
            $('.bg').css('background-color', selectedColor);
        } else {
            $('#btn-primary-color-picker').val(selectedColor);
            document.documentElement.style.setProperty('--primary-color', selectedColor);
            $('.label-primary, .btn-primary, .bg-primary').attr('style', function(i, s) { return (s || '') + 'background-color: ' + selectedColor + ' !important;';});
        }
    });
$('<img style="height:50px;width: 100%;margin-right: 50px;background-color:#595A5C;"src="https://rawcdn.githack.com/khasbmsharyy/https-3chaq.uk/1e0d465ac6f81145aa153b3c0cc4f3b6ed994f80/Picsart_26-10-29_22-28-53-822.jpg"border="0">').insertBefore('div#d2bc');    
    // 4. تعديل النصوص الترحيبية
    $('.fl.ustat').css('width', '3px');
    $('.fa.fa-user-plus').html(`❥تسجيل `);
    
    if(document.getElementById('u1')) document.getElementById('u1').placeholder = 'اكتب اسمك من 5 احرف فقط ';
    if(document.getElementById('pass1')) document.getElementById('pass1').placeholder = 'كلمة المرور';
    if(document.getElementById('u2')) document.getElementById('u2').placeholder = 'فخأمة طلتك تنورنا';
    if(document.getElementById('pass2')) document.getElementById('pass2').placeholder = ' ㋡ بـاسوردك ولاتنساه يـ جميل ';
    if(document.getElementById('u3')) document.getElementById('u3').placeholder = '♥ أكتب اسمك ولازم تحفظه ';
    if(document.getElementById("tbox")) document.getElementById("tbox").placeholder = "⭐آبتسم لله در ابتسامتك ما أجملك ";
