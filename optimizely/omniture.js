function omnigetCookie(c_name) {
    if(document.cookie.length>0) {c_start=document.cookie.indexOf(c_name+"=");if(c_start!=-1){c_start=c_start+c_name.length+1;c_end=document.cookie.indexOf(";",c_start);
        if(c_end==-1)c_end=document.cookie.length;return unescape(document.cookie.substring(c_start,c_end));}}return "";};
function removepluses(mynewg){mynewg=mynewg.replace(/\+/g,'%20');mynewg=mynewg.toLowerCase();mynewg=unescape(mynewg);return mynewg;}


var persistantCookies,sessionCookies = "";
if(omnigetCookie("s_pers")){persistantCookies=omnigetCookie('s_pers');}
if(omnigetCookie("s_sess")){sessionCookies=omnigetCookie('s_sess');}

function s_gi(a, b, c) {
    var d = "s._c='s_c';s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s.wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.wd.s_c_in++;s.an=s_an;s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3)return encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}return y}else{x=s.rep(escape(''+x),'+','%2B');if(c&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}}return x};s.epa=function(x){var s=this;if(x){x=''+x;return s.em==3?decodeURIComponent(x):unescape(s.rep(x,'+',' '))}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)=='string')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,0,r.t,r.u)}};s.br=function(id,rs){var s=this;if(s.disableBufferedRequests||!s.c_w('s_br',rs))s.brl=rs};s.flushBufferedRequests=function(){this.fbr(0)};s.fbr=function(id){var s=this,br=s.c_r('s_br');if(!br)br=s.brl;if(br){if(!s.disableBufferedRequests)s.c_w('s_br','');s.mr(0,0,br)}s.brl=0};s.mr=function(sess,q,rs,id,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/H.22.1/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047);if(id){s.br(id,rs);return}}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,l,a,b='',c='',t;if(x){y=''+x;i=y.indexOf('?');if(i>0){a=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();i=0;if(h.substring(0,7)=='http://')i+=7;else if(h.substring(0,8)=='https://')i+=8;h=h.substring(i);i=h.indexOf(\"/\");if(i>0){h=h.substring(0,i);if(h.indexOf('google')>=0){a=s.sp(a,'&');if(a.length>1){l=',q,ie,start,search_key,word,kw,cd,';for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c){y+='?'+b+'&'+c;if(''+x!=y)x=y}}}}}}return x};s.hav=function(){var s=this,qs='',fv=s.linkTrackVars,fe=s.linkTrackEvents,mn,i;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}fv=fv?fv+','+s.vl_l+','+s.vl_l2:'';for(i=0;i<s.va_t.length;i++){var k=s.va_t[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(v&&k!='linkName'&&k!='linkType'){if(s.pe||s.lnk||s.eo){if(fv&&(','+fv+',').indexOf(','+k+',')<0)v='';if(k=='events'&&fe)v=s.fs(v,fe)}if(v){if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+q+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");tcf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.vo1=function(t,a){if(a[t]||a['!'+t])this[t]=a[t]};s.vo2=function(t,a){if(!a[t]){a[t]=this[t];if(!a[t])a['!'+t]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.pt(s.vl_g,',','vo2',vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.t=function(vo,id){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.pt(s.vl_g,',','vo2',vb);s.pt(s.vl_g,',','vo1',vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)return ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,id,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=''}s.sq(qs);}else{s.dl(vo);}if(vo)s.pt(s.vl_g,',','vo1',vb);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';if(!id&&!s.tc){s.tc=1;s.flushBufferedRequests()}return code};s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};if(pg){s.wd.s_co=function(o){var s=s_gi(\"_\",1,1);return s.co(o)};s.wd.s_gs=function(un){var s=s_gi(un,1,1);return s.t()};s.wd.s_dc=function(un){var s=s_gi(un,1);return s.t()}}s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,contentID,campaign,state,zip,events,products,linkName,linkType';for(var n=1;n<76;n++)s.vl_t+=',prop'+n+',eVar'+n+',hier'+n+',list'+n;s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,_1_referrer';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);if(!ss)s.wds()",
        e = window,
        f = e.s_c_il,
        g = navigator,
        h = g.userAgent,
        i = g.appVersion,
        j = i.indexOf("MSIE "),
        k = h.indexOf("Netscape6/"),
        l,
        m,
        n;
    if (a) {
        a = a.toLowerCase();
        if (f) {
            for (m = 0; m < f.length; m++) {
                n = f[m];
                if (!n._c || n._c == "s_c") {
                    if (n.oun == a) {
                        return n
                    } else {
                        if (n.fs && n.sa && n.fs(n.oun, a)) {
                            n.sa(a);
                            return n
                        }
                    }
                }
            }
        }
    }
    e.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    e.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    e.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    e.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    e.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    e.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    e.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a");
    e.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    d = s_d(d);
    if (j > 0) {
        l = parseInt(m = i.substring(j + 5));
        if (l > 3) {
            l = parseFloat(m)
        }
    } else {
        if (k > 0) {
            l = parseFloat(h.substring(k + 10))
        } else {
            l = parseFloat(i)
        }
    }
    if (l >= 5 && i.indexOf("Opera") < 0 && h.indexOf("Opera") < 0) {
        e.s_c = new Function("un", "pg", "ss", "var s=this;" + d);
        return new s_c(a, b, c)
    } else {
        n = new Function("un", "pg", "ss", "var s=new Object;" + s_ft(d) + ";return s")
    }
    return n(a, b, c)
}
var sky = sky ? sky: {};
sky.tracking = {
    vmap: {
        searchType: ["prop12", "eVar31"],
        searchTerms: ["prop1", "eVar1"],
        searchResults: ["prop34"],
        searchEngineExt: ["prop16", "eVar8"],
        searchTermsExt: ["prop17", "eVar3"],
        headline: ["prop3", "eVar13"],
        errors: ["prop2", "eVar2"],
        loginFrom: ["prop5", "eVar5"],
        url: ["prop9", "eVar9"],
        refDomain: ["prop36", "eVar36"],
        contentType: ["prop20", "eVar20"],
        contentId: ["prop21", "eVar15"],
        site: ["prop23", "eVar14"],
        browseMethod: ["prop24"],
        section0: ["prop25", "eVar26"],
        section1: ["prop27", "eVar29"],
        section2: ["prop31", "eVar30"],
        videoTitle: ["prop26", "eVar28"],
        channel: ["channel", "eVar24", "hier1"],
        partTime: ["prop35", "eVar35"],
        samId: ["prop39", "eVar39"],
        loginStatus: ["eVar11"],
        _loginFrom: ["prop5", "eVar5"],
        ageGender: ["eVar12"],
        skyPackage: ["eVar16"],
        newRepeat: ["prop70", "eVar70"],
        optimizely: ["prop80"],
        getVisitNo: ["prop69", "eVar69"],
        contentID: ["eVar21"],
        customerType: ["eVar23"],
        optIn: ["eVar38"],
        autoReloadedContent: ["prop52"],
        showName: ["eVar51"],
        galleryName: ["eVar53", "prop51"],
        galleryPagination: ["eVar54"],
        linkDetails: ["eVar7", "prop15"],
        systemChecker: ["prop40","prop41"],
        byline: ["prop53"],
        pagination: ["prop54"],
        QScmpId: [],
        QScmpIdInt: [],
        account: [],
        section: [""],
        events: []
    },
    eventMap: {
        scrollLeft: "event12",
        scrollRight: "event13",
        loginStart: "event17",
        loginComplete: "event16",
        regStart: "event19",
        regComplete: "event18",
        optIn: "event25",
        enterComments: "event12",
        enterRating: "event13",
        commentScore: "event14",
        placeBet: "event27",
        betValue: "event28",
        betSlip: "event29",
        BetPlacedSuccessfully: "event30",
        AddsNewSelection: "event31",
        RemoteRecordSuccess: "event71",
        NeverMissSuccess: "event73",
        NeverMissStart: "event74",
        RemoteRecordStart: "event75",
        passwordStart: "event76",
        passwordComplete: "event77",
        activateStart: "event78",
        activateComplete: "event79"
    },
    launch: function(a) {
        var b = {
            trackingServer: "metrics.sky.com",
            trackingServerSecure: "smetrics.sky.com",
            visitorNamespace: "bskyb",
            charSet: "UTF-8",
            trackDownloadLinks: true,
            trackExternalLinks: true,
            trackInlineStats: true,
            linkDownloadFileTypes: "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,air,wma",
            linkInternalFilters: "javascript:,skyintranet,sky.com,skysports.co.uk,skyarts.co.uk,skybet.com,skypoker.com,skybingo.com,skyvegas.com,teamtalk.com,football365.com,sportinglife.com,sportal.com,bettingzone.co.uk,fixtures365.com,teamsky.com,oddschecker.com,sport365.com,skysports.com,sky.zoopla.co.uk,skyoneonline.co.uk,bskybpensionplan.com,skymobileiphone.com,skymovies.com,skyone.co.uk,sky1.co.uk,skyoneonline.co.uk,m.skynews.com,skyrainforestrescueschoolschallenge.org,skybroadband.com,skyartsonline.co.uk,skymoviesactive.com,skyhub.bskyb.com,skyone.co.uk,sky.co.uk,skybet.mobi,socceram.com,teamtalk.co.za,football365.co.uk,jointhebiggerpicture.com,skysportsnewsradio.com," + window.location.host,
            linkLeaveQueryString: false,
            linkTrackVars: "None",
            linkTrackEvents: "None",
            url: String(window.location.href).indexOf("?") > 0 ? String(window.location.href).split("?")[0] : window.location.href,
            server: window.location.hostname,
            partTime: "Day_Hour_Quarter",
            QScmpId: "cmpid,aff",
            QScmpIdInt: "cmpid_int",
            setObjectIDs: true,
            track: true
        };
        var c = ["event1"];
        var d = [];
        if (!a.site || !a.section) {
            return
        }
        if (a.site) {
            a.site = a.site.toLowerCase()
        }
        if (a.section) {
            a.section = a.section.toLowerCase()
        }
        if (a.contentType) {
            a.contentType = a.contentType.toLowerCase()
        }
        if (a.headline) {
            a.headline = a.headline.toLowerCase()
        }
        if (a.contentID) {
            a.contentID = a.contentID.toLowerCase()
        }
        if (a.search) {
            a.search = a.search.toLowerCase()
        }
        if (a.browseMethod) {
            a.browseMethod = a.browseMethod.toLowerCase()
        }
        if (a.searchTerms) {
            a.searchTerms = a.searchTerms.toLowerCase()
        }
        if (a.searchType) {
            a.searchType = a.searchType.toLowerCase()
        }
        if (a.videoTitle) {
            a.videoTitle = a.videoTitle.toLowerCase()
        }
        if (a.loginFrom) {
            a.loginFrom = a.loginFrom.toLowerCase()
        }
        if (a.errors) {
            a.errors = a.errors.toLowerCase()
        }

        if(SKY_TRACKING.optimizely) {
            if(SKY_TRACKING.optimizely.eVar50) {
                b.eVar50 = SKY_TRACKING.optimizely.eVar50;
            }

        }

        if (a.section.indexOf("/") == 0) {
            a.section = a.section.substring(1)
        }
        if (a.section[a.section.length - 1] == "/") {
            a.section = a.section.substring(0, a.section.length - 1)
        }
        if (a.site.indexOf("/") == 0) {
            a.site = a.site.substring(1)
        }
        if (a.site[a.site.length - 1] == "/") {
            a.site = a.site.substring(0, a.site.length - 1)
        }
        var e = a.section.split("/");
        var f = [];
        b.pageName = "";
        if (a.site && a.site !== undefined) {
            f.push(a.site.toString() + "/");
            if (a.section && a.section !== undefined) {
                f.push(a.section.toString());
                if (a.headLine && a.headLine !== undefined) {
                    f.push("/" + a.headLine.toString())
                }
            }
        }
        for (var g = 0, h = f.length; g < h;++g) {
            b.pageName += f[g]
        }
        b.channel = a.site + "/" + a.section;
        for (var i = 0; i < 3;++i) {
            b["section" + i] = a.site + "/" + e.slice(0, i + 1).join("/")
        }
        if (a.searchResults !== undefined) {
            c.push(a.searchResults == 0 ? ["event15", "event26"] : ["event15"])
        }
        if (a.events) {
            var j = a.events.split(",");
            var g = evTmp = "";
            var l = omtrEv = [];
            for (i = 0; i < j.length;++i) {
                if (String(j[i]).indexOf("|") > 0) {
                    l = j[i].split("|");
                    g = l[0];
                    for (var h = 1; h < l.length; h++) {
                        evTmp = this.eventMap[l[h++]] ? this.eventMap[l[h - 1]] : l[h - 1];
                        d.push(";" + g + ";;;" + evTmp + "=" + l[h]);
                        c.push(evTmp)
                    }
                } else {
                    c.push(this.eventMap[j[i]] ? this.eventMap[j[i]] : j[i])
                }
                g = evTmp = "";
                l = omtrEv = []
            }
        }
        if (a.errors) {
            c.push("event3")
        }
        if(SKY_TRACKING.section == "pin_entry"){
            b.eVar21 = SKY_TRACKING.orderId;
        }
        b.account = "bskybglobal,bskyb" + a.site.split("/")[1];
        for (k in a) {
            b[k] = a[k]
        }
        var m = "";
        if (m.length) {
            c.push("event9");
            for (i = 0; i < m.length;++i) {
                d.push(";" + m[i] + ";;;;event9=1")
            }
        }
        var n = s_gi(b.account);
        this.loadPlugins(n);
        window.s_bskyb = this.s = n;

        if(SKY_TRACKING.optimizely.prop80) {
            console.log('flying badgers of death', SKY_TRACKING.optimizely);

            n.prop80 = SKY_TRACKING.optimizely.prop80;
//            b.eVar80 = "D=c80"

            console.log('la b', b);
            console.log('la n', n);
        }

        if (n.getNewRepeat(365) == "Repeat") {
            c.push("event20")
        }
        n.currentYear = (new Date).getFullYear();
        var o = new Date(n.currentYear, 2, 31);
        n.dstStart = "03/" + (31 - o.getDay()) + "/" + n.currentYear;
        o = new Date(n.currentYear, 9, 31);
        n.dstEnd = "10/" + (31 - o.getDay()) + "/" + n.currentYear;
        if (a.LoggedIn == undefined) {
            this.setLoginVars(b, c)
        } else {
            if (a.LoggedIn == false) {
                b.loginStatus = "not logged-in"
            }
            if (a.LoggedIn == true) {
                b.loginStatus = "logged-in"
            }
        }
        var p = n.getQueryParam(b.QScmpId);
        if (p) {
            n.campaign = n.getValOnce(p, "s_campaign", 30);
            n.prop45 = p;
            n.eVar45 = "D=c45"
        } else {
            if (p = n.getQueryParam(b.QScmpIdInt)) {
                n.prop45 = p;
                n.eVar45 = "D=c45"
            }
        }
        if (p == "") {
            n.linkInternalFilters = b.linkInternalFilters;
            n.channelManager('attr,dcmp','','s_campaign','0');
            var camps=chan=part=term=ref=ommid_deeplink=dcmp_deeplink=irct_deeplink=cmp_cookie_value_session=cmp_cookie_value_month=irct_deeplink_cookie=cm_cmp_cookie="";
            if(omnigetCookie("cmp_cookie_session")){cmp_cookie_value_session = omnigetCookie("cmp_cookie_session");}
            if(omnigetCookie("cmp_cookie")){cmp_cookie_value_month = omnigetCookie("cmp_cookie");}
            if(omnigetCookie("irct_deeplink_cookie")){irct_deeplink_cookie = omnigetCookie("irct");}
            if(omnigetCookie('cmp_cookie')){cm_cmp_cookie = omnigetCookie('cmp_cookie');}
            if(sessionCookies && sessionCookies != ""){
                var mycookievalueCM = sessionCookies.split(";");
                for(var x=0;x<mycookievalueCM.length;x++){
                    var splitcookieCM = mycookievalueCM[x].split("=");
                    if(splitcookieCM[0] == " cmp_cookie_session"){
                        cmp_cookie_value_session = splitcookieCM[1];
                    }
                    if(splitcookieCM[0] == " irct"){
                        irct_deeplink_cookie = splitcookieCM[1];
                    }
                    if(splitcookieCM[0] == " cmp_cookie"){
                        cm_cmp_cookie = splitcookieCM[1];
                    }
                }
            }
            if(persistantCookies && persistantCookies != ""){
                var mycookievalueCM2 = persistantCookies.split(";");
                for(var x=0;x<mycookievalueCM2.length;x++){
                    var splitcookieCM2 = mycookievalueCM2[x].split("=");
                    if(splitcookieCM2[0] == " cmp_cookie"){
                        cmp_cookie_value_month = splitcookieCM2[1];
                    }
                }
            }

            /*This is used for ajax or deeplinks where we need to remove the irct / dcmp value.  pass the values in
             irct_deeplink and dcmp_deeplink respectively.  we may need to add a ommid_deeplink for cheetahmail*/
            if ('function' == typeof trackDCMPPage){
                trackDCMPPage();
            }

            if (n.getQueryParam('irct').length > 0 || irct_deeplink != "") {
                var insight_tracking = "";
                if(irct_deeplink){insight_tracking = irct_deeplink;}else{insight_tracking = n.getQueryParam('irct');}
                if (insight_tracking.toLowerCase() != irct_deeplink_cookie) {
                    n.eVar46 = n.getValOnce(insight_tracking.toLowerCase(), 'irct', 0);
                }}
            if(n._campaignID){n._campaignID=n._campaignID.toLowerCase();}
            /*if there is no dcmp value in the url and we have a value in dcmp_deeplink, use dcmp_deeplink
             This must be pased into the campaignID or the function will not work*/
            if(!n._campaignID && dcmp_deeplink) {
                if (dcmp_deeplink.toLowerCase() != cm_cmp_cookie) {
                    n._campaignID = n.getValOnce(dcmp_deeplink, 'cmp_cookie', 0);
                }}
            /*see if this is coming from cheetahmail.  cheetahmail will take precendence over normal emc
             I am prefixing the cheetahmail campaign with cht to show these values in channel stacking and
             distinguish between cheetmail integrated emails from others.*/
            if (n.getQueryParam('om_mid').length > 0 || ommid_deeplink != "") {
                var cheetahmail_variable = "";
                if(ommid_deeplink){cheetahmail_variable = ommid_deeplink;}else{cheetahmail_variable = n.getQueryParam('om_mid');}
                if(n._campaignID){n._campaignID = "cht-" + cheetahmail_variable + ":links__" + n._campaignID.replace("emc-","");}
                else{n._campaignID = "cht-" + cheetahmail_variable;}
            }
            if(n._campaignID){camps=n._campaignID.toLowerCase();}
            if(n._channel){chan=n._channel.toLowerCase();}
            if(n._keywords){term=n._keywords.toLowerCase();}
            if(n._partner){part = n._partner.toLowerCase();}
            if(n._referringDomain){ref = n._referringDomain.toLowerCase();}
            if (camps !== "" && camps.indexOf('knc-') !== 0
                && camps.indexOf('okc-') !== 0){
                n.eVar45=camps;
            }
            else if (camps.indexOf('knc-') === 0) {
                if(camps == "knc-"){
                    n.eVar45 = camps + part + ":" + term;
                }
                else{
                    n.eVar45 = camps;
                }
                n.eVar3 = part;
                n.eVar8 = term;
            }
            if(chan == "natural search"){
                n.eVar45 = "okc-natural search";
                n.eVar3 = part;
                n.eVar8 = term;
            }
            if (n._campaignID=="" && chan != "natural search") {
                if (chan=="direct load"){
                    n.eVar45="direct load";
                }
                else if(chan != "direct load" && ref){
                    var checkNaturalSearch = n.httpsSearch(ref);
                    if(checkNaturalSearch == "na"){
                        n.eVar45 = "oth-" + ref;
                    }else{n.eVar45 = "okc-secured natural search";
                        n.eVar3 = checkNaturalSearch;
                        n.eVar8 = "secured search term";
                    }
                }
            }
            if(n._channel || n._campaignID){
                if(n.eVar45){
                    n.eVar45 = n.eVar45.toLowerCase();
                    n.prop45 = "D=v45";
                }
                if(n.eVar3){
                    n.eVar3 = n.eVar3.toLowerCase();
                    n.prop16 = "D=v3";
                }
                if(n.eVar8){
                    n.eVar8 = n.eVar8.toLowerCase();
                    n.prop17 = "D=v8";
                }
                if(n.eVar45){
                    if(n.eVar45.indexOf('ilc-') !== 0){
                        if((n.eVar45.toLowerCase()=="direct load" || n.eVar45.indexOf("oth-") === 0 ) && cmp_cookie_value_session != "undefined/undefined"
                            && cmp_cookie_value_session != "undefined/undefined" && cmp_cookie_value_session != ""){
                            n.eVar45 = n.prop45 = "";
                        }
                        if(!cmp_cookie_value_session || cmp_cookie_value_session == "undefined/undefined"){
                            cmp_cookie_value_session = n.eVar45;
                            n.eVar47 = n.getValOnce(cmp_cookie_value_session, 'cmp_cookie_session', 0);
                        }
                        if(!cmp_cookie_value_month || cmp_cookie_value_month == "undefined/undefined"){
                            cmp_cookie_value_month = n.eVar45;
                            n.campaign = n.getValOnce(cmp_cookie_value_month, 'cmp_cookie', 30);
                        }
                    }
                }
            }
            var omni_current_location = document.location.toString();
            n.getAndPersistValue(omni_current_location.toLowerCase(),'omni_prev_URL',0);
            var c_pastEv = n.clickThruQuality(n.eVar47,'event7','event8','s_ctq');
            if(c_pastEv)n.events=n.apl(n.events,c_pastEv,',',1);
            n.eVar17 = n.getFullReferringDomains();

            if (b.setObjectIDs) {
                n.setupDynamicObjectIDs()
            }
            b.partTime = n.getTimePartingJH("h", "0");
            var w = document.referrer;
            if (w != "") {
                var x = w.indexOf("?") > -1 ? w.indexOf("?") : w.length;
                var y = w.indexOf("//") > -1 ? w.indexOf("//") + 2: 0;
                var z = w.indexOf("/", y) > -1 ? w.indexOf("/", y) : x;
                b.refDomain = w.substring(y, z)
            }
            n.eVar19 = b.pageName;
            if (d.length) {
                n.products = d.join(",")
            }
            if (c.length) {
                n.events = c.join(",")
            }
            for (k in b) {
                this.setVar(n, k, b[k])
            }
            n.pageURL = "D=Referer";
            if (n.prop12) {
                n.eVar31 = "D=c12"
            }
            if (n.prop1) {
                n.eVar1 = "D=c1"
            }

            if (n.prop3) {
                n.eVar13 = "D=c3"
            }
            if (n.prop2) {
                n.eVar2 = "D=c2"
            }
            if (n.prop5) {
                n.eVar5 = "D=c5"
            }
            if (n.prop9) {
                n.eVar9 = "Ã‹â€ D=c9"
            }
            if (n.prop36) {
                n.eVar36 = "D=c36"
            }
            if (n.prop20) {
                n.eVar20 = "D=c20"
            }
            if (n.prop21) {
                n.eVar15 = "D=c21"
            }
            if (n.prop23) {
                n.eVar14 = "D=c23"
            }
            if (n.prop25) {
                n.eVar26 = "D=c25"
            }
            if (n.prop27) {
                n.eVar29 = "D=c27"
            }
            if (n.prop31) {
                n.eVar30 = "D=c31"
            }
            if (n.prop26) {
                n.eVar28 = "D=c26"
            }
            if (n.channel) {
                n.eVar24 = n.hier1 = "D=ch"
            }
            if (n.prop35) {
                n.eVar35 = "D=c35"
            }
            if (n.prop5) {
                n.eVar5 = "D=c5"
            }
            if (n.prop70) {
                n.eVar70 = "D=c70"
            }
            if (n.prop69) {
                n.eVar69 = "D=c69"
            }
            if (b.track) {
                console.log('tracking mctrackersons', b.track, n.t);
                n.t()
            }
        }
    },
    loadCookies: function() {
        var a = document.cookie.split(";");
        var b = {};
        for (var c = 0; c < a.length; c++) {
            var d = a[c].split("=");
            b[d[0].replace(/^\s*((?:[\S\s]*\S)?)\s*$/, "$1")] = unescape(d[1])
        }
        return b
    },
    setVar: function(a, b, c) {
        var d = this.vmap[b];
        d = d ? d: [b];
        for (var e = 0; e < d.length;++e) {
            a[d[e]] = c
        }
    },
    setLoginVars: function(a, b) {
        var c = this.loadCookies();
        if (c.skySSO) {
            a.loginStatus = "logged-in";
            if (c.skySSOLast != c.skySSO) {
                this.s.c_w("skySSOLast", c.skySSO);
                var d = c.skyLoginFrom ? c.skyLoginFrom.split(",") : ["generic", "l"];
                b.push(d[1] == "l" ? this.eventMap.loginComplete: this.eventMap.regComplete);
                a._loginFrom = d[0]
            }
        } else {
            a.loginStatus = "not logged-in"
        }
        if (a.loginFrom) {
            var e = a.loginFrom.split(",");
            this.s.c_w("skyLoginFrom", a.loginFrom);
            b.push(e[1] == "l" ? this.eventMap.loginStart: this.eventMap.regStart)
        }
        a.samId = c.just;
        if (c.apd) {
            a.ageGender = c.apd + "|" + c.gpd
        }
        if (c.sid_tvp) {
            a.skyPackage = c.sid_tvp + "|" + c.sid_hd
        }
        a.customerType = c.custype;
        if (c.sid_bb) {
            a.loginStatus = c.sid_bb + "|" + a.loginStatus
        }
        if (c.ust) {
            a.optIn = c.ust + "|" + c.sid_tsaoptin
        }
    },
    loadPlugins: function(a) {
        a.getValOnce = new Function("v", "c", "e", "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
        a.clickThruQuality = function(a, b, c, d) {
            var e = this,
                a,
                b,
                c,
                d,
                f,
                g;
            if (e.p_fo(b) == 1) {
                if (!d) {
                    d = "s_cpc"
                }
                f = e.events ? e.events + ",": "";
                if (a) {
                    e.c_w(d, 1, 0);
                    return b
                } else {
                    if (e.c_r(d) >= 1) {
                        e.c_w(d, 0, 0);
                        return c
                    }
                }
            }
        };
        a.apl = new Function("L", "v", "d", "u", "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)L=L?L+d+v:v;return L");
        a.repl = new Function("x", "o", "n", "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o,i+l)}return x");
        a.p_fo = new Function("n", "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=new Object;return 1;}else {return 0;}");
        a.getQueryParam = new Function("p", "d", "u", "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v");
        a.p_gpv = new Function("k", "u", "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=decodeURIComponent(u.substring(i+1));v=s.pt(q,'&','p_gvf',k)}return v");
        a.p_gvf = new Function("t", "k", "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s.epa(v)}return ''");
        a.c_rr = a.c_r;
        a.c_r = new Function("k", "" + "var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret" + "urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i=" + "c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'" + ",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:" + "m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get" + "Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret" + "urn v;");
        a.c_wr = a.c_w;
        a.c_w = new Function("k", "v", "e", "" + "var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv," + "c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s" + ".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr" + "ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv" + ".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i" + "ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())" + "{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'" + "='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t" + ".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i" + "ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set" + "Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");
        a.getObjectID = function(a) {
            var b = a.href;
            return b
        };
        a.setupDynamicObjectIDs = new Function("var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,false);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semaphore=1}");
        a.setOIDs = new Function("e", "var s=s_c_il[" + a._in + "],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i,a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links){for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.repl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0)x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this.s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");
        a.split = new Function("l", "d", "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
        a.getPreviousValue = new Function("v", "c", "el", "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
        a.channelManager=new Function("a","b","c","V",""
            +"var s=this,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z,A,B,C,D,E,F,"
            +"G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y,newg;g=s.referrer?s.referrer:documen"
            +"t.referrer;g=g.toLowerCase();if(!g){h='1'}i=g.indexOf('?')>-1?g.ind"
            +"exOf('?'):g.length;j=g.substring(0,i);k=s.linkInternalFilters.toLow"
            +"erCase();k=s.split(k,',');l=k.length;for(m=0;m<l;m++){n=j.indexOf(k"
            +"[m])==-1?'':g;if(n)o=n}if(!o&&!h){p=g;q=g.indexOf('//')>-1?g.indexO"
            +"f('//')+2:0;r=g.indexOf('/',q)>-1?g.indexOf('/',q):i;t=g.substring("
            +"q,r);t=t.toLowerCase();u=t;P='Referrers';v=s.seList+'>'+s._extraSea"
            +"rchEngines;if(V=='1'){j=s.repl(j,'oogle','%');j=s.repl(j,'ahoo','^'"
            +");j=s.repl(j,'as_q','*');}A=s.split(v,'>');B=A.length;for(C=0;C<B;C"
            +"++){D=A[C];D=s.split(D,'|');E=s.split(D[0],',');F=E.length;for(G=0;"
            +"G<F;G++){H=j.indexOf(E[G]);if(H>-1){I=s.split(D[1],',');J=I.length;n"
            +"ewg=g;newg=removepluses(newg);for(K=0;K<J;K++){L=s.getQueryParam(I[K]"
            +",'',newg);if(L){L=L.toLowerCase();M=L;if(D[2]){u=D[2];N=D[2]}else{N=t}"
            +"if(V=='1'){N=s.repl(N,'#',' - ');N=s.repl(N,'*','as_q');N=s.repl(N,'^'"
            +",'ahoo');N=s.repl(N,'%','oogle');}}}}}}}O=s.getQueryParam(a,b);if(O){u"
            +"=O;if(M){P='Paid Search'}else{P='Paid Non-Search';}}if(!O&&M){u=N;P='N"
            +"atural Search'}f=s._channelDomain;if(f){k=s.split(f,'>');l=k.length;fo"
            +"r(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length;for("
            +"T=0;T<S;T++){W=j.indexOf(R[T]);if(W>-1)P=Q[0]}}}d=s._channelParameter;"
            +"if(d){k=s.split(d,'>');l=k.length;for(m=0;m<l;m++){Q=s.split(k[m],'|')"
            +";R=s.split(Q[1],',');S=R.length;for(T=0;T<S;T++){U=s.getQueryParam(R[T]"
            +");if(U)P=Q[0]}}}e=s._channelPattern;if(e){k=s.split(e,'>');l=k.length;"
            +"for(m=0;m<l;m++){Q=s.split(k[m],'|');R=s.split(Q[1],',');S=R.length"
            +";for(T=0;T<S;T++){X=O.indexOf(R[T]);if(X==0)P=Q[0]}}}if(h=='1'&&!O)"
            +"{u=P=t=p='Direct Load'}T=M+u+t;U=c?'c':'c_m';if(c!='0'){T=s.getValO"
            +"nce(T,U,0);}if(T)M=M?M:'n/a';s._referrer=T&&p?p:'';s._referringDoma"
            +"in=T&&t?t:'';s._partner=T&&N?N:'';s._campaignID=T&&O?O:'';s._campai"
            +"gn=T&&u?u:'';s._keywords=T&&M?M:'';s._channel=T&&P?P:'';");

        a.seList="altavista.co,altavista.de|q,r|AltaVista>.aol.,suche.aolsvc"
            +".de|q,query|AOL>ask.jp,ask.co|q,ask|Ask>www.baidu.com|wd|Baidu>daum"
            +".net,search.daum.net|q|Daum>google.,googlesyndication.com|q,as_q|Go"
            +"ogle>icqit.com|q|icq>bing.com|q|Microsoft Bing>myway.com|searchfor|"
            +"MyWay.com>naver.com,search.naver.com|query|Naver>netscape.com|query"
            +",search|Netscape Search>reference.com|q|Reference.com>seznam|w|Sezn"
            +"am.cz>abcsok.no|q|Startsiden>tiscali.it,www.tiscali.co.uk|key,query"
            +"|Tiscali>virgilio.it|qs|Virgilio>yahoo.com,yahoo.co.jp|p,va|Yahoo!>"
            +"yandex|text|Yandex.ru>search.cnn.com|query|CNN Web Search>search.ea"
            +"rthlink.net|q|Earthlink Search>search.comcast.net|q|Comcast Search>"
            +"search.rr.com|qs|RoadRunner Search>optimum.net|q|Optimum Search";
        a.getAndPersistValue=new Function("v","c","e",""
            +"var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
            +"v)s.c_w(c,v,e?a:0);return s.c_r(c);");
        a.httpsSearch = function(A){var pp = "";if(A.indexOf("www.google.") != -1){;if(document.referrer.indexOf("q=&")!=-1){pp = "google";}}if(pp == ""){pp = "na";}return pp;}
        a.getFullReferringDomains=new Function(""
            +"var s=this,dr=window.document.referrer,n=s.linkInternalFilters.spli"
            +"t(',');if(dr){var r=dr.split('/')[2],l=n.length;for(i=0;i<=l;i++){i"
            +"f(r.indexOf(n[i])!=-1){r='';i=l+1;}}return r}");
        a.getNewRepeat = new Function("d", "cn", "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
        a.getTimePartingJH = function(a, b) {
            var c = this,
                d;
            dc = new Date("1/1/2000");
            if (dc.getDay() != 6 || dc.getMonth() != 0) {
                return "Data Not Available"
            } else {
                b = parseFloat(b);
                var e = new Date(c.dstStart);
                var f = new Date(c.dstEnd);
                fl = f;
                cd = new Date;
                if (cd > e && cd < fl) {
                    b = b + 1
                } else {
                    b = b
                }
                utc = cd.getTime() + cd.getTimezoneOffset() * 6e4;
                tz = new Date(utc + 36e5 * b);
                thisy = tz.getFullYear();
                var g = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                if (thisy != c.currentYear) {
                    return "Data Not Available"
                } else {
                    thish = tz.getHours();
                    thismin = tz.getMinutes();
                    thisd = tz.getDay();
                    var h = g[thisd];
                    var i = "00";
                    if (thismin > 15) {
                        i = "15"
                    }
                    if (thismin > 30) {
                        i = "30"
                    }
                    if (thismin > 45) {
                        i = "45"
                    }
                    var j = h + "_" + thish + "_" + i;
                    if (a == "h") {
                        return j
                    }
                    if (a == "d") {
                        return h
                    }
                }
            }
        };
        a.getVisitNum = new Function("var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}");
        a.prop70 = a.getNewRepeat(30, "s_getNewRepeat");
        a.prop69 = a.getVisitNum();
        if (SKY_TRACKING.contentType === "404page") {
            a.pageName = "404 Error Page";
            a.pageType = "errorPage";
            var b = document.location.href.split("?");
            a.eVar9 = b[0];
            a.prop9 = "D=v9";
            if (document.referrer !== "") {
                var c = document.referrer;
                a.eVar36 = c;
                a.prop36 = "D=v36"
            }
        }
    },
    loadMediaModule: function(a) {
        a.m_Media_c = "var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){var m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b,v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x==1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.ape(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts;i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m.e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i.e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.pe=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)";
        a.m_i("Media")
    }
};
var s_code = "",
    s_objectID;

window.optimizely = window.optimizely || [];
SKY_TRACKING.optimizely = { eVar50: 'chris', prop80: 'łukasz' };
window.optimizely.push(['activateSiteCatalyst', {"sVariable": SKY_TRACKING.optimizely }]);

if (typeof SKY_TRACKING != "undefined") {
    sky.tracking.launch(SKY_TRACKING)
}