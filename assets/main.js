var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* отправляем ajax ага-ага */

jQuery.fn.submit_ajax_return_js = function() {
  $.ajax({
    type: "POST",
    url: this.get(0).action,
    data: this.serialize(),
    dataType: "script",
    'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
  })
};

function submit_ajax_and_return_js(form_name)
{
  $(document).ready(function(){
    $("#" + form_name).submit(function(){
      $(this).submit_ajax_return_js();
      return false;
    });
  });
}

function send_ajax(url_, auth_token, params)
{
  $.ajax({
    type: "POST",
    url: url_,
    data: auth_token + "&" + params,
    dataType: "script",
    'beforeSend': function(xhr) {xhr.setRequestHeader("Accept", "text/javascript")}
  });
}

function verify_form(form_name)
{
  $(document).ready(function(){
    var divs_withErrors = $("#" + form_name + " .fieldWithErrors");
    if (divs_withErrors.length > 0)
    {
      $("input, select, textarea", divs_withErrors.get(0)).get(0).focus();
    }
    else
    {
      var inputFinded = null;
      function parse(el){
        if (inputFinded)
          return;
        var tag = el.tagName.toLowerCase();
        if ((tag == 'input' || tag == 'select' || tag == 'textarea') && el.type != 'hidden')
        {
          inputFinded = el;
        }
        else
        {
          $(el).children().each(function(){
            parse(this);
          });
        }
      };

      parse($("#" + form_name).get(0));
      
      if (inputFinded)
        inputFinded.focus();
    }
 });
}



}
/*
     FILE ARCHIVED ON 09:14:21 Jan 09, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:37:49 Jun 21, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 75.737
  exclusion.robots: 0.121
  exclusion.robots.policy: 0.112
  RedisCDXSource: 6.682
  esindex: 0.01
  LoadShardBlock: 49.816 (3)
  PetaboxLoader3.datanode: 104.518 (5)
  CDXLines.iter: 16.131 (3)
  load_resource: 240.363 (2)
  PetaboxLoader3.resolve: 100.221 (2)
*/