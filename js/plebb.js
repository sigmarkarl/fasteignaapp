//"use strict";
//var searchtest;
//(function () {
    //"use strict";
var init = function () {};

var urlstr = "";
var searchm3 = function () {
    /*var loc = document.getElementById('wherecombo').value;
    var split = loc.split(" ");
    var pnr = split[0];
    var val = base.replace("svaedi=", "svaedi=" + pnr + "_" + pnr);
    var teg = document.getElementById('typecombo').value.toLowerCase();
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
    var urlstr2 = urlstr.replace("offset", "offset=" + 0);
    */
    var ifrm = document.getElementById('ifrm');
    loc = base;
    ifrm.src = base;
    //window.alert('erm');
    //ifrm.load();
    //intelstuff( urlstr2 );
    
    
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
    }
    xhr.open("GET", urlstr2, true);
    xhr.send();
}

function Ibud(nafn) {
    this.nafn = nafn;
    
    this.isSelected = function () {
        return this.selected;
    }
    
    this.setSelection = function (sel) {
        this.selected = sel;
    }

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
    }
    
    this.getFasteignaMat = function() {
        return this.fastm;    
    }
    
    this.getBrunabotaMat = function() {
        return this.brunm;    
    }
    
    this.setUrl = function( rl ) {
        this.url = rl;
    }
    
    this.setVerd = function( vrd ) {
        this.verd = vrd;
    }
    
    this.setTegund = function( tg ) {
        this.teg = tg;
    }
    
    this.setFermetrar = function( frm ) {
        this.ferm = frm;
    }
     
    this.setHerbergi = function( hrb ) {
        this.herb = hrb;    
    }
    
    this.setFasteignaMat = function( fm ) {
        this.fastm = fm;
    }
    
    this.setBrunabotaMat = function( bm ) {
        this.brunm = bm;
    }

    this.set = function (i, obj) {
        try {
            if ( typeof obj === 'string' ) {
                var val = obj;
                
                val = val.replace(/\./g, '');
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
    }

    this.getUrlString = function () {
        return this.url;
    }
    
    this.equals = function (o) {
        return o instanceof Ibud && this.url.equals( o.url );
    }

    this.toString = function () {
        return this.nafn + "\t" + this.verd + "\t" + this.fastm + "\t" + this.brunm + "\t" + this.teg + "\t" + this.ferm + "\t" + this.herb + "\t" + this.dat + "\t" + this.url;
    }
}

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
var mbl = "http://www.mbl.is"
var base = mbl+"/fasteignir/";//leit.html?offset;svaedi=&tegund=&fermetrar_fra=&fermetrar_til=&herbergi_fra=&herbergi_til=&gata=&lysing=";
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
    
    var str = '<li class="widget uib_w_4" data-uib="app_framework/listitem" id="'+iblist.length+'" onclick="launch( \''+ib.url+'\' )"><table><tr><td><img src="'+ib.imgurl+'" /></td><td style="text-align:center"><div><b>'+ibud+'</b><br>Fermetrar: '+ib.ferm+' / Herbergi: '+ib.herb+'<br>Verð: '+ib.verd+'</div></td></tr></table></li>';
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

var einb;
var fjolb;
var haedir;
var radpar;
var thehie;

var chk101;
var chk103;
var chk104;
var chk105;
var chk107;
var chk108;
var chk109;
var chk110;
var chk111;
var chk112;
var chk113;
var chk116;
var chk170;
var chk190;
var chk200;
var chk201;
var chk202;
var chk203;
var chk210;
var chk211;
var chk220;
var chk221;
var chk225;

var sqm_from;
var sqm_to;
var ibmap = [];

var loc;

var ifrmload = function() {
    var ifrm = document.getElementById('ifrm');
    var doc = ifrm.contentWindow.document;
    //var loc = ifrm.contentWindow.location.href;
    console.log( "loc " + loc );
    if(loc && loc.indexOf("fasteign/") != -1) {
        //int i = loc.indexOf("fasteign/");
        //int id = Integer.parseInt( loc.substring(i+9, loc.indexOf('/', i+9) ) );

        if (loc in ibmap) {
            var ib = ibmap[loc];
            var nl = doc.getElementsByTagName("td");
            var m = 0;
            console.log("logggggi " + nl.length );
            for( var k = 0; k < nl.length; k++ ) {
                var td = nl.item(k);
                console.log("fmddd" + td);
                if( td.className == "value" ) {
                    if (m == 1) {
                        var cont = td.textContent.trim().split(" ")[0].replace(".", "");
                        try {
                            console.log("fm");
                            var fm = parseInt(cont);
                            console.log("fmset ");
                            ib.setFasteignaMat(fm);
                        } catch (e) {
                            ib.setFasteignaMat(0);
                        }
                    } else if (m == 2) {
                        var cont = td.textContent.trim().split(" ")[0].replace(".", "");
                        try {
                            ib.setBrunabotaMat(parseInt(cont));
                        } catch (e) {
                            ib.setBrunabotaMat(0);
                        }
                        break;
                    }
                    m++;
                }
            }
            iblist.push(ib);
            
            console.log( ib.imgurl );
            var str = '<li class="widget uib_w_4" data-uib="app_framework/listitem" id="'+iblist.length+'" onclick="launch( \''+ib.url+'\' )"><table><tr><td><img src="'+ib.imgurl+'" /></td><td style="text-align:center"><div><b>'+ib.nafn+'</b><br>Fermetrar: '+ib.ferm+' / Herbergi: '+ib.herb+'<br>Verð: '+ib.verd+'</div></td></tr></table></li>';
            $('#ulli').append( str );

            //console.log( iblist.length + " " + ibmap.length );
            if( iblist.length < Object.keys(ibmap).length ) {
                for (var urlstr in ibmap) {
                    var tib = ibmap[urlstr];
                    if (!tib.getFasteignaMat() || tib.getFasteignaMat() == -1) {
                        try {
                            loc = tib.getUrlString();
                            ifrm.src = tib.getUrlString();
                        } catch (e) {
                            //e.printStackTrace();
                        }
                        //webEngine.load( tib.getUrlString() );
                        break;
                    }
                }
            }
        }
    } else if (loc && loc.indexOf("leit") == -1) {        
        var nl = doc.getElementsByTagName("input");
        for (var i = 0; i < nl.length; i++) {
            var n = nl.item(i);
            var hie = n;
            nnm = hie.attributes;
            for (var m = 0; m < nnm.length; m++) {
                var node = nnm[m];
                var val = node.value;
                if (val == "Hefja leit") {
                    thehie = hie;
                }
            }
        }

        einb = doc.getElementById("einb");
        fjolb = doc.getElementById("fjolb");
        haedir = doc.getElementById("haedir");
        radpar = doc.getElementById("radpar");

        chk101 = doc.getElementById("chk-101");
        chk103 = doc.getElementById("chk-103");
        chk104 = doc.getElementById("chk-104");
        chk105 = doc.getElementById("chk-105");
        chk107 = doc.getElementById("chk-107");
        chk108 = doc.getElementById("chk-108");
        chk109 = doc.getElementById("chk-109");
        chk110 = doc.getElementById("chk-110");
        chk111 = doc.getElementById("chk-111");
        chk112 = doc.getElementById("chk-112");
        chk113 = doc.getElementById("chk-113");
        chk116 = doc.getElementById("chk-116");
        chk170 = doc.getElementById("chk-170");
        chk190 = doc.getElementById("chk-190");
        chk200 = doc.getElementById("chk-200");
        chk201 = doc.getElementById("chk-201");
        chk202 = doc.getElementById("chk-202");
        chk203 = doc.getElementById("chk-203");
        chk210 = doc.getElementById("chk-210");
        chk211 = doc.getElementById("chk-211");
        chk220 = doc.getElementById("chk-220");
        chk221 = doc.getElementById("chk-221");
        chk225 = doc.getElementById("chk-225");

        sqm_from = doc.getElementById("sqm-from");
        sqm_to = doc.getElementById("sqm-to");

        if (fjolb) {
            var val = document.getElementById('typecombo').value;
            /*fjolb.setChecked(false);
             einb.setChecked(false);
             haedir.setChecked(false);
             radpar.setChecked(false);*/
            if (val == "Einbýli") {
                einb.click();
            } else if (val == "Fjölbýli") {
                fjolb.click();
            } else if (val == "Hæðir") {
                haedir.click();
            } else if (val == "Raðhús/Parhús") {
                radpar.click();
            }
        }
        if (chk101) {
            var val = document.getElementById('wherecombo').value.substring(0, 3);
            if (val == "101") {
                chk101.click();
            } else if (val == "103") {
                chk103.click();
            } else if (val == "104") {
                chk104.click();
            } else if (val == "105") {
                chk105.click();
            } else if (val == "107") {
                chk107.click();
            } else if (val == "108") {
                chk108.click();
            } else if (val == "109") {
                chk109.click();
            } else if (val == "110") {
                chk110.click();
            } else if (val == "111") {
                chk111.click();
            } else if (val == "112") {
                chk112.click();
            } else if (val == "113") {
                chk113.click();
            } else if (val == "116") {
                chk116.click();
            } else if (val == "170") {
                chk170.click();
            } else if (val == "190") {
                chk190.click();
            } else if (val == "200") {
                chk200.click();
            } else if (val == "201") {
                chk201.click();
            } else if (val == "202") {
                chk202.click();
            } else if (val == "203") {
                chk203.click();
            } else if (val == "210") {
                chk210.click();
            } else if (val == "211") {
                chk211.click();
            } else if (val == "220") {
                chk220.click();
            } else if (val == "221") {
                chk221.click();
            } else if (val == "225") {
                chk225.click();
            }
        }
        if (sqm_from) {
            //sqm_from.setSelectedIndex( sqmfrom.getSelectionModel().getSelectedIndex() );
            sqm_from.value = document.getElementById('sqmfrom').value;
        }
        if (sqm_to) {
            //sqm_to.setSelectedIndex( sqmto.getSelectionModel().getSelectedIndex() );
            sqm_to.value = document.getElementById('sqmto').value;
        }
        if (thehie) {
            loc = "leit";
            thehie.click();
        }
    } else {
        console.log("logggggi2");
        var div = doc.getElementById("resultlist");
        if (div) {
            var nl = div.childNodes;
            for (var i = 0; i < nl.length; i++) {
                var n = nl.item(i);
                if (n.id && n.id.indexOf("realestate-result") != -1) {
                    var imgurl = "";
                    var url = "";
                    var nafn;
                    var pnr;
                    var verd = -1;
                    var herb = -1;
                    var tegund;
                    var staerd = -1.0;

                    var subnl = n.childNodes;
                    for (var k = 0; k < subnl.length; k++) {
                        var subn = subnl.item(k);
                        if (subn) {
                            if (subn.nodeName && subn.nodeName == "A") {
                                var ssubnl = subn.childNodes;
                                for (var m = 0; m < ssubnl.length; m++) {
                                    var then = ssubnl.item(m);
                                    if (then.nodeName && then.nodeName == "IMG") {
                                        imgurl = then.attributes.getNamedItem("src").textContent;
                                        break;
                                    }
                                }
                            } else if (subn.nodeName == "DIV") {
                                var ssubnl = subn.childNodes;
                                for (var m = 0; m < ssubnl.length; m++) {
                                    var then = ssubnl.item(m);
                                    if (then && then.nodeName == "DIV") {
                                        var head = then;
                                        var nl2 = head.childNodes;
                                        
                                        if (head.className && head.className.indexOf("head") != -1) {
                                            for (var m2 = 0; m2 < nl2.length; m2++) {
                                                var n2 = nl2.item(m2);
                                                if (n2 && n2.nodeName == "A") {
                                                    url = n2.attributes.getNamedItem("href").textContent;
                                                    var nl3 = n2.childNodes;
                                                    for (var m3 = 0; m3 < nl3.length; m3++) {
                                                        var n3 = nl3.item(m3);
                                                        if (n3 && n3.nodeName[0] == "H") {
                                                            if (nafn) {
                                                                nafn = n3.textContent;
                                                            } else {
                                                                pnr = n3.textContent;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else if (head.className && head.className.indexOf("properties") != -1) {
                                            for (var m2 = 0; m2 < nl2.length; m2++) {
                                                var n2 = nl2.item(m2);
                                                if (n2 && n2.nodeName != null && n2.nodeName == "SPAN") {
                                                    var type = n2.textContent;
                                                    if (type.indexOf("Verð") != -1) {
                                                        var spannodes = n2.childNodes;
                                                        for (var m3 = 0; m3 < spannodes.length; m3++) {
                                                            var n3 = spannodes.item(m3);
                                                            if (n3.nodeName == "STRONG") {
                                                                var val = n3.textContent.trim();
                                                                verd = parseInt(val.split(" ")[0].replace(".", ""));
                                                                break;
                                                            }
                                                        }
                                                    } else if (type.indexOf("Herb") != -1) {
                                                        var spannodes = n2.childNodes;
                                                        for (var m3 = 0; m3 < spannodes.length; m3++) {
                                                            var n3 = spannodes.item(m3);
                                                            if (n3.nodeName = "STRONG") {
                                                                var val = n3.textContent.trim();
                                                                herb = parseInt(val);
                                                                break;
                                                            }
                                                        }
                                                    } else if (type.indexOf("Tegund") != -1) {
                                                        var spannodes = n2.childNodes;
                                                        for (var m3 = 0; m3 < spannodes.length; m3++) {
                                                            var n3 = spannodes.item(m3);
                                                            if (n3.nodeName == "STRONG") {
                                                                var val = n3.textContent.trim();
                                                                tegund = val;
                                                                break;
                                                            }
                                                        }
                                                    } else if (type.indexOf("Stærð") != -1) {
                                                        var spannodes = n2.childNodes;
                                                        for (var m3 = 0; m3 < spannodes.length; m3++) {
                                                            var n3 = spannodes.item(m3);
                                                            if (n3.nodeName == "STRONG") {
                                                                var val = n3.textContent.trim();
                                                                staerd = parseFloat(val.split(" ")[0]);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    var urlstr = mbl + url;
                    if (!(urlstr in ibmap)) {
                        var ib = new Ibud(nafn);
                        ib.setUrl(urlstr);
                        ib.imgurl = mbl + imgurl;
                        ib.pnr = pnr;
                        ib.setVerd(verd);
                        ib.setTegund(tegund);
                        ib.setFermetrar(staerd);
                        ib.setHerbergi(herb);
                        //avgverdfm.bind( ib.verdfmProperty() );
                        //iblist.add( ib );
                        ibmap[urlstr] = ib;
                        //fasteign.iblist.add( ib );
                        //fasteign.refreshTables();
                    }
                }
            }

            var foundnext = false;
            /*nl = doc.getElementsByTagName("a");
            for (var i = 0; i < nl.length; i++) {
                var anchor = nl.item(i);
                if (anchor.textContent.indexOf("Næsta") != -1) {
                    var urlstr = anchor.href;
                    foundnext = true;
                    ifrm.src = urlstr;
                    break;
                }
            }*/

            if (!foundnext) {
                for (var urlstr in ibmap) {
                    var tib = ibmap[urlstr];
                    if (!tib.getFasteignaMat() || tib.getFasteignaMat() == -1 || tib.getFasteignaMat() == 0) {
                        loc = tib.getUrlString();
                        console.log("loading " + loc);
                        ifrm.src = tib.getUrlString();
                        break;
                    }
                }
            }
        } else {
            //printDoc(doc);
        }
    }
}