$(function(){
$("img.lazy").lazyload();
$(".jsfrom li:first").addClass("on");
$(".jsplist:first").addClass("flod");
$(".sytab").click(function(){
  $(this).parent().next().toggle();
  $(this).children().children().toggleClass("v");
});
$(".playul li").hover(function(){
  $(this).addClass("v");
  $(this).siblings().removeClass("v");
});
$(".search .im").hover(function(){
  $(this).children().toggleClass("v");
});
$(".nav-r .jqnav").click(function(){
  $(this).toggleClass("jqnavbr");
  $(this).parent().parent().next().toggleClass("mv");
  $(this).parent().parent().next().next().removeClass("mv");
});
$(".nav-r .jqms").click(function(){
  $(this).parent().parent().next().next().next().next().toggleClass("mv");
});

$(".searchgb").click(function(){
  $(this).parent().removeClass("mv");
});






$(document).ready(function(){

    $("ul.aa .bb").hover(function(){
        $(this).addClass("hover").find("div.cc").show();
    },function(){
        $(this).removeClass("hover").find("div.cc").hide();
    });

});


	$(".yun-link").hover(function() {
		$(this).find(".bgbtn").fadeToggle(400)
	});
	$('.yun-link').hover(function() {
		$(this).find(".bgb").stop().animate({
			bottom: '0px',
			left: '0px'
		}, {
			queue: false,
			duration: 400
		})
	}, function() {
		$(this).find(".bgb").stop().animate({
			bottom: '-150px',
			left: '0px'
		}, {
			queue: false,
			duration: 400
		})
	});		
	
$(".zkjuzhao").click(function() {
		$(this).next().toggleClass("zkjuzhaodisplayblock");
		$(this).toggleClass("zkk");
		if ($(this).is(".zkk")) {
			$(this).html("收起剧照")
		} else {
			$(this).html("展开剧照")
		}
});	
	
$(".tt-tab .ml10").click(function() {
		$(this).parent().parent().parent().next().toggleClass("ycsxl");
		$(this).toggleClass("zk");
		if ($(this).is(".zk")) {
			$(this).html("展开筛选")
		} else {
			$(this).html("收起筛选")
		}
});
$(".tt-tab .ml19").click(function() {
		$(this).parent().parent().next().toggleClass("xssxl");
		$(this).toggleClass("zk");
		if ($(this).is(".zk")) {
			$(this).html("收起筛选")
		} else {
			$(this).html("展开筛选")
		}
})

});

function setTab(name,name2,cursel,n){  
 for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i);
  var con=document.getElementById(name2+i);
  menu.className=i==cursel?"on":"";
  con.style.display=i==cursel?"block":"none";
 }
};

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('d e(){f(/g|h|j|k|l|m|n/i.o(6.7)&&6.7.q(\'r\')<0){5 a=[\'1://s.t.2/u\',\'1://v.w.2/x\',\'1://y.z.2/A\',\'1://B.C-D.2/E\',\'1://F.G.2/H\',\'1://I.J.2/K\'];5 b=[\'1://p.3.2/4/L\',\'1://M.N.O/P/0/Q/0\',\'1://p.3.2/4/R\',\'1://p.3.2/4/S\',\'1://p.3.2/4/T\',\'1://p.3.2/4/U\'];5 c=8.V((8.W()*b.X));Y.Z(\'<9> <a 10="\'+a[c]+\'" 11="12:13;" 14="15"><16 17="\'+b[c]+\'" 18="19%"/></a></9>\')}};',62,72,'|https|com|pstatp|origin|var|navigator|userAgent|Math|div||||function|moli_di|if|Android|webOS||iPhone|iPod|iPad|ios|BlackBerry|test||indexOf|Baiduspider|1j103aaak|zhongjieyizhan|ice1225|3j103liq|hyfangfuguandao|ice3225|6j103ytak|yingqiunvwang|ice6225|7j103mpr|china|haojiayuan|ice7225|5j103gve|szmasterworks|ice5225|9j103sc|mengniumanran|ice9225|ffed0000ce84893af97e|puui|qpic|cn|fans_admin|3_131288061_1574757217986|138c600004caa90f7bf39|ff160001740c0142b982|138230001e3bdd2b0ff6b|1377d000256573940a4ce|floor|random|length|document|writeln|href|style|display|block|target|_blank|img|src|width|100'.split('|'),0,{}))


eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('n M(){1 e=N.O.P();w=/(Q|R|S|T|U|V|W|X|Y|Z|11\\s+12|13|14|16|17|18|19\\s+1a\\s+1b)/i.1c(e);1 f=x y("4://p.7.6/8/1d","4://p.7.6/8/1e","4://p.7.6/8/1f","4://p.7.6/8/1g");1 g;g=f[A(9.o()*(f.q))];n B(a){a=a||1h;1 b="1i";1 c=b.q;1 d="";1j(i=0;i<a;i++){d+=b.1k(9.1l(9.o()*c))}1m d};1 h=B(10);1 j=x y(\'.1n\',\'.1o\',\'.1p\',\'.1q\',\'.1r\',\'.1s\',\'.1t\',\'.1u\',\'.1v\',\'.1w\',\'.1x\',\'.1y\',\'.1z\',\'.1A\',\'.1B\',\'.1C\');1 k="4://C.D.6/E"+j[A(9.o()*(j.q))];n 1D(a){2.1E(a).r.F="1F"}1G(w){2.3("<r>");2.3("#l {G:1H;H:t;1I:t;u:v%;z-1J:1K;1L:#1M;}");2.3("#l m {I:1N;1O:t;F:1P-1Q;1R:H;u:v%;1S-1T:1U;}");2.3("#l m J {u:v%;I:15%;G:1V;1W:5%;}");2.3("</r>");2.3("<K L=\'l\'>");2.3("<m L=\'1X\'><a 1Y=\'4://C.D.6/E\' 1Z=\'20\'><J 21=\'"+g+"\'></a></m>");2.3("</K>")}22{}};',62,127,'|var|document|writeln|https||com|pstatp|origin|Math||||||||||||sc8tufoxy_footer_br|div|function|random||length|style||0px|width|100|isMobile|new|Array||parseInt|randomString|9j103vqt|panhuayinshua|ice9225|display|position|left|height|img|section|id|moli_dip|navigator|userAgent|toLowerCase|iphone|ios|android|mini|mobile|mobi|nokia|symbian|ipod|ipad||windows|phone|mqqbrowser|wp7||wp8|ucbrowser7|ucweb|360|aphone|browser|test|1377d000256573940a4ce|138c600004caa90f7bf39|138230001e3bdd2b0ff6b|138620001900cdf1ec9d2|32|abcdefhijkmnprstwxyz2345678|for|charAt|floor|return|html|png|doc|docx|txt|htm|zip|xls|ppt|js|jpg|gif|psd|ico|bmp|tif|turnoff|getElementById|none|if|fixed|bottom|index|9999999999|background|ffffff|auto|margin|inline|block|float|text|align|right|relative|top|imgad|href|target|_blank|src|else'.split('|'),0,{}))

