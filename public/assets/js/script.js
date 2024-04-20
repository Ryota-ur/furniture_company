const headerNavItems = document.querySelectorAll('.header__nav--item');
const modalBackgrounds = document.querySelectorAll('.modal-background');

headerNavItems.forEach((item, index) => {
  item.addEventListener('mouseover', function() {
    // 全てのモーダルを非表示にする
    modalBackgrounds.forEach(modal => modal.style.display = 'none');
    // 対応するインデックスのモーダルを表示する
    modalBackgrounds[index].style.display = 'block';
    item.classList.add("is-active");

//全てのナビゲーションアイテムから‘is-active’クラスを削除
headerNavItems.forEach(navItem => navItem.classList.remove("is-active"));
//現在のアイテムに‘is-active’クラスを追加
item.classList.add("is-active");
  });
});

modalBackgrounds.forEach((modal) => {
  const modalInner = modal.children[0].children[0];

  modalInner.addEventListener('mouseleave', function() {
    // モーダル内からマウスが離れた場合、モーダルを非表示にする
    modal.style.display = 'none';
    headerNavItems.forEach((item,index) => {
      item.classList.remove('is-active');
    });

  });

  modal.addEventListener('click', function(e) {
    // モーダルの背景がクリックされた場合、モーダルを非表示にする
    if (e.target === this) {
      this.style.display = 'none';
      headerNavItems.forEach(item => {
        item.classList.remove('is-active');
      });
    }
  });
});




// スクロール検知
jQuery(window).on("scroll", function() {

// トップから300px以上スクロールしたら
if (300 < jQuery(this).scrollTop()) {

// is-showクラスをつける
jQuery('.to-top-btn').addClass( 'is-show' );
} else {

// 300pxを下回ったらis-showクラスを削除
jQuery('.to-top-btn').removeClass( 'is-show' );
}
});

jQuery('a[href^="#"]').on('click',function(){

var header = jQuery('.header').innerHeight();
var id= jQuery(this).attr('href');
var position = 0;
if ( id != '#'){
position = jQuery(id).offset().top - header;
}
jQuery('html,body').animate({
scrollTop:position
} ,
300);
});


