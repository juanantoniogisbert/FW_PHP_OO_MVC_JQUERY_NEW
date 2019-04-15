$(document).ready(function(){
  $("[data-translate]").jqTranslate('lang/index', {defaultLang: 'en', forceLang: "es", asyncLangLoad: false});
  $("#english").on('click', function(event){
    (function(){
      $("[data-translate]").jqTranslate('lang/index', {defaultLang: 'es', forceLang: "en", asyncLangLoad: false});
    })();
  });

  $("#spanish").on('click', function(event){
    (function(){
      $("[data-translate]").jqTranslate('lang/index', {defaultLang: 'en', forceLang: "es", asyncLangLoad: false});
    })();
  });

  $("#valencia").on('click', function(event){
    (function(){
      $("[data-translate]").jqTranslate('lang/index', {forceLang: "val", asyncLangLoad: false});
    })();
  });
});