//"use strict";
//var searchtest;
//(function () {
    //"use strict";
var init = function () {};

var urlstr = "";
var searchm3 = function () {
    var loc = document.getElementById('wherecombo').value;
    var split = loc.split(" ");
    var pnr = split[0];
    var val = base.replace("svaedi=", "svaedi=" + pnr + "_" + pnr);
    var teg = document.getElementById('typecombo').value;
    teg = teg.replace("æ", "ae");
    teg = teg.replace("ó", "o");
    teg = teg.replace("ö", "o");
    teg = teg.replace("ý", "y");
    teg = teg.replace("ð", "d");
    teg = teg.replace("ú", "u");
    teg = teg.replace("parhus/radhus", "par_radhus");
    val = val.replace("tegund=", "tegund=" + teg);
    var diffstr = document.getElementById('sizedelta').value;
    var diff = parseInt(diffstr);
    var fermstr = document.getElementById('size').value;
    var ferm = parseInt(fermstr);
    val = val.replace("fermetrar_fra=", "fermetrar_fra=" + (ferm - diff));
    val = val.replace("fermetrar_til=", "fermetrar_til=" + (ferm + diff));

    urlstr = val;
    var urlstr2 = urlstr.replace("offset", "offset=" + 0 );
    
    intelstuff( urlstr2 );
    //var grd = AppMobi.device.getRemoteData();
    //ajaxsim( urlstr2 );
    //xhrsim( urlstr2 );
}

function isuccess( data ) {
    success( data );
}

function ifailure( data ) {
    console.log('erm' + data);   
}

function intelstuff( urlstr2 ) {
    intel.xdk.device.getRemoteData( urlstr2, "GET", "", "isuccess", "ifailure" );
}

function ajaxsim(urlstr2) {
    $.ajax({
        url: urlstr2,
        crossDomain: true,
        success: function( data, textStatus, jqXHR ) {
            success( data );
        },
        error: function( jqXHR, textStatus, error ) {
            //alert( 'eerm ' + error + ' ' + textStatus + ' ' + jqXHR );
        }
    });    
}

function xhrsim( urlstr2 ) {
    var xhr = new XMLHttpRequest();
    //var url = "http://www.mbl.is/";
    xhr.onreadystatechange = function () {
        alert( 'status ' + xhr.status );
        alert( 'st ' + xhr.statusText );
        alert( 'rs ' + xhr.readyState );
        if (xhr.readyState === 4 && xhr.status === 200 ) {
            alert( xhr.status );
            alert( xhr.statusText );
            alert( xhr.readyState );
            alert( xhr.responseText );
            //success( xhr.responseText );
        }
    };
    xhr.open("GET", urlstr2, true);
    xhr.send();
}

function Ibud(nafn) {
    this.nafn = nafn;
    
    this.isSelected = function () {
        return this.selected;
    };
    
    this.setSelection = function (sel) {
        this.selected = sel;
    };

    this.setProperties = function (nafn, verd, fastm, brunm, teg, ferm, herb, dat, url, imgurl) {
        this.nafn = nafn;
        this.verd = verd;
        this.fastm = fastm;
        this.brunm = brunm;
        this.teg = teg;
        this.ferm = ferm;
        this.herb = herb;
        this.dat = dat;
        this.imgurl = imgurl;
    };

    this.set = function (i, obj) {
        try {
            if ( typeof obj === 'string' ) {
                var val = obj;
                
                val = val.replace('.', '');
                if (i === 0) {
                    this.verd = parseInt(val, 10);
                } else if (i === 1) {
                    this.fastm = parseInt(val, 10);
                } else if (i === 2) {
                    this.brunm = parseInt(val, 10);
                } else if (i === 3) {
                    this.teg = val;
                } else if (i === 4) {
                    this.ferm = parseInt(val, 10);
                } else if (i === 5) {
                    this.herb = parseInt(val, 10);
                } else if (i === 6) {
                    //String[] split = val.split(" ");
                    //if (split.length >= 3 && mmap.containsKey(split[1])) {
                    //    int year = Integer.parseInt(split[2]);
                    //    int month = mmap.get(split[1]);
                    //    int day = Integer.parseInt(split[0]);
                    //    Calendar cal = Calendar.getInstance();
                    //    cal.set(year, month - 1, day);
                    //    dat = cal.getTime();
                    //}
                }
            } // else dat = (Date)obj;
        } catch( e ) {
            //e.printStackTrace();
        }
    };

    this.getUrlString = function () {
        return url;
    };
    
    this.equals = function (o) {
        return o instanceof Ibud && this.url.equals( o.url );
    };

    this.toString = function () {
        return nafn + "\t" + verd + "\t" + fastm + "\t" + brunm + "\t" + teg + "\t" + ferm + "\t" + herb + "\t" + dat + "\t" + url;
    };
};

function slebb( ind ) {
    var elems = $('#ulli').children('li').remove();
    
    var ib = iblist[ 0 ];
    alert( ib.nafn );
    
    elems.sort( function(a,b) {
        var ind1 = parseInt(a.id)-1;
        var ind2 = parseInt(b.id)-1;
        //alert( ind1 + '  ' + ind2 );
        var ib1 = iblist[ ind1 ];
        var ib2 = iblist[ ind2 ];
        
        if( ind == 0 ) {
            if( ib1.nafn > ib2.nafn ) return 1;
            else if( ib1.nafn == ib2.nafn ) return 0;
            else return -1;
        } else if( ind == 1 ) {
            if( ib1.verd > ib2.verd ) return 1;
            else if( ib1.verd == ib2.verd ) return 0;
            else return -1;
        } else if( ind == 2 ) {
            if( ib1.ferm/ib1.verd > ib2.ferm/ib2.verd ) return 1;
            else if( ib1.ferm/ib1.verd == ib2.ferm/ib2.verd ) return 0;
            else return -1;
        } else if( ind == 3 ) {
            if( ib1.ferm > ib2.ferm ) return 1;
            else if( ib1.ferm == ib2.ferm ) return 0;
            else return -1;
        } else return 0;
    });
    $('#ulli').append(elems);
}

var iblist = [];
var base = "http://www.mbl.is/mm/fasteignir/leit.html?offset;svaedi=&tegund=&fermetrar_fra=&fermetrar_til=&herbergi_fra=&herbergi_til=&gata=&lysing=";
var buds = [ "estate-verd", "estate-fasteignamat", "estate-brunabotamat", "estate-teg_eign", "estate-fermetrar", "estate-fjoldi_herb", "estate-sent_dags" ];

function subload( suburlstr, str ) {
    var ind = str.indexOf('src="/tncache');
    var stop = str.indexOf('.jpg', ind);
    
    while( stop > ind+100 ) {        
        ind = str.indexOf('src="/tncache', ind+1);
        stop = str.indexOf('.jpg', ind);
    }
    
    var imgurl = null;
    if( ind != -1 && stop != -1 ) imgurl = 'http://www.mbl.is'+str.substring(ind+5, stop+4);
    
    var h2 = '<h2 style=\"margin-bottom: 0.91em; font-size:1.5em;">';
    var ind = str.indexOf(h2);
    var stop = str.indexOf("</h2>", ind);
    var ibud = str.substring(ind + h2.length, stop).trim();
    var ib = new Ibud(ibud);
    ib.url = suburlstr;
    ib.imgurl = imgurl;
    //if( !iblist.contains(ib) ) {
    iblist.push(ib);
    var k = 0;
    for( var i in buds ) {
        var bud = buds[i];
        ind = str.indexOf(bud);
        var start = str.indexOf('fst-rvalue">', ind);
        stop = str.indexOf('</td>', start);
        var sval = str.substring(start + 12, stop).trim();
        ib.set(k++, sval);
    }
    //}
    
    var str = '<li class="widget uib_w_4" data-uib="app_framework/listitem" id="'+iblist.length+'" onclick="launch( suburlstr )"><img src="'+ib.imgurl+'" /><div style="text-align:center"><b>'+ibud+'</b><br>Fermetrar: '+ib.ferm+' / Herbergi: '+ib.herb+'<br>Verð: '+ib.verd+'</div></li>';
    $('#ulli').append( str );
}

function launch( url ) {
    intel.xdk.device.launchExternal( url );   
}

function ajaxtest( suburlstr ) {
    $.ajax({
        url: suburlstr,
        crossDomain: true,
        success: function( data, textStatus, jqXHR ) {
            subload( suburlstr, data );
            i++;
            if( i < vals.length ) load( vals, i );
        },
        error: function( jqXHR, textStatus, error ) {
        
        }
    }); 
}

function issuccess( data ) {
    subload( suburlstr, data );
    i++;
    if( i < vals.length ) load();
}

function isfailure( data ) {
    console.log( 'f ' + data );
}

function load() {
    var val = vals[i];
    
    var ind = val.indexOf('<a href="');
    var stop = val.indexOf('"', ind + 10);

    var sub = val.substring(ind + 9, stop);
    var ival = sub.indexOf('/mm/fasteignir');
    
    //window.alert('erm2 '+ival+ ' ' + vals.length);
    if( ival !== -1 ) {       
        //count++;
        suburlstr = 'http://www.mbl.is' + sub;
        
        //var str = '<li class="widget uib_w_4" data-uib="app_framework/listitem"><a id="fuck" href="'+suburlstr+'" taget="_blank">'+'erm'+'</a></li>';
        //$('#ulli').append( str );
        
        intel.xdk.device.getRemoteData( suburlstr, "GET", "", "issuccess", "isfailure" );  
        //alod( suburlstr );
    } else {
        i++;
        if( i < vals.length ) load();
    }
}

function alod() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", suburlstr, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log( 'bleh ' + suburlstr );
            
            subload( suburlstr, xhr.responseText );
            i++;
            if( i < vals.length ) load( vals, i );
        }
    };
    xhr.send();   
}

var suburlstr;
var vals;
var i;
function success( str ) {    
    vals = str.split('fast-nidurstada clearfix');
    i = 0;
    //var h2 = '<h2 style="margin-bottom: 0.91em; font-size:1.5em;">';
    load();

    //var urlstr2 = urlstr.replace("offset", "offset=" + count );
    //WinJS.xhr({ url:  urlstr2 }).done( success );
}

var searchmu = function() {
    //var ulli = document.getElementById('ulli');
    var str = '<li class="widget uib_w_4" data-uib="app_framework/listitem"><a id="fuck" href="http://www.mbl.is" taget="_blank">ermermerm</a></li>';
    //alert('me '+ $("ulli"));
    //var str = '<li>sex</li>';
    $('#ulli').append( str );
    //$("ulli").listview();
    //$("ulli").collapsibleset();
    //$('ulli').refresh();
};

window.addEventListener("load", init, false);
//})();