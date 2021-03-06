/**
 * Plugin kkcountdown counts down to specific dates in the future.
 *
 * @example
 * $(".come-class").kkcountdown();
 *
 * @type jQuery
 *
 * @name kkcountdown
 * @author Krzysztof Furtak http://krzysztof-furtak.pl/
 * @version 1.3
 * 
 * Documentation: http://krzysztof-furtak.pl/2010/05/kk-countdown-jquery-plugin/
 * 
 */
(function($){$.fn.kkcountdown=function(k){var l={dayText:'day ',daysText:'days ',hoursText:':',minutesText:':',secondsText:'',textAfterCount:'---',oneDayClass:false,displayDays:true,displayZeroDays:true,addClass:false,callback:false,warnSeconds:60,warnClass:false};var k=$.extend(l,k);var m=new Array();this.each(function(){var a=$(this);var b=$(document.createElement('span')).addClass('kkcountdown-box');var c=$(document.createElement('span')).addClass('kkc-dni');var d=$(document.createElement('span')).addClass('kkc-godz');var e=$(document.createElement('span')).addClass('kkc-min');var f=$(document.createElement('span')).addClass('kkc-sec');var g=$(document.createElement('span')).addClass('kkc-dni-text');var h=$(document.createElement('span')).addClass('kkc-godz-text');var i=$(document.createElement('span')).addClass('kkc-min-text');var j=$(document.createElement('span')).addClass('kkc-sec-text');if(k.addClass!=false){b.addClass(k.addClass)}h.html(k.hoursText);i.html(k.minutesText);j.html(k.secondsText);b.append(c).append(g).append(d).append(h).append(e).append(i).append(f).append(j);a.append(b);kkCountdownInit(a)});function kkCountdownInit(a){var b=0;if(a.id===undefined){a.id='kk_'+Math.random(new Date().getTime())}if(a.id in m)b=m[a.id];else b=a.attr('data-seconds');if(b===undefined){var c=new Date();c=Math.floor(c.getTime()/1000);var d=a.attr('data-time');if(d===undefined)d=a.attr('time');b=d-c}m[a.id]=b-1;if(k.warnClass&&b<k.warnSeconds){a.addClass(k.warnClass)}if(b<0){a.html(k.textAfterCount);if(k.callback){k.callback()}}else if(b<=24*60*60){setTimeout(function(){kkCountDown(true,a,b);kkCountdownInit(a)},1000)}else{setTimeout(function(){kkCountDown(false,a,b);kkCountdownInit(a)},1000)}}function kkCountDown(a,b,c){var d=naprawaCzasu(c%60);c=Math.floor(c/60);var e=naprawaCzasu(c%60);c=Math.floor(c/60);var f=naprawaCzasu(c%24);c=Math.floor(c/24);var g=c;if(a&&k.oneDayClass!=false){b.addClass(k.oneDayClass)}if(g==0&&!k.displayZeroDays){}else if(g==1){b.find('.kkc-dni').html(g);b.find('.kkc-dni-text').html(k.dayText)}else{b.find('.kkc-dni').html(g);b.find('.kkc-dni-text').html(k.daysText)}b.find('.kkc-godz').html(f);b.find('.kkc-min').html(e);b.find('.kkc-sec').html(d)}function naprawaCzasu(a){s='';if(a<10){a='0'+a}return a}}})(jQuery);