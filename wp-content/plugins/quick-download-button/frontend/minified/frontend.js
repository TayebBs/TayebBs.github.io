document.addEventListener("DOMContentLoaded",(function(){"use strict";let e=document.querySelector(".g-btn.f-l");null!==e&&""!==e&&document.querySelectorAll(".g-btn.f-l").forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault();let n,l=e.getAttribute("data-attachment-id"),a=e.getAttribute("data-page-id"),i=e.getAttribute("data-have-external"),o=e.getAttribute("data-target-blank"),d=(e.getAttribute("data-id"),e.getAttribute("data-spinner")),r=e.getAttribute("data-msg"),s=e.getAttribute("data-validate"),u=e.getAttribute("data-validate-msg"),c=e.getAttribute("data-member");var b={},g=!1;if("false"==i&&null==l&&(g=!0,b["no-link"]="No link found in button"),""==e.getAttribute("data-external-url")&&null==l&&(g=!0,b["no-link"]="No link found for external URL"),null!=quick_download_object){let e=quick_download_object.qdbn_user_roles;null!=c&&null==s&&(e.includes(c)?s="1":(u=c+" account required.",s="0"),document.body.classList.contains("logged-in")&&"loggedin"==c?s="1":"loggedin"==c&&(u="You must be logged in to download.",s="0"),"0"==c&&(s="1"))}if(null!=s&&"0"==s&&(g=!0,b["no-link"]=u),g){let e=document.createElement("p");e.setAttribute("class","qdb-info qdb-error"),e.innerHTML=b["no-link"];let t=this.parentNode.parentNode;return t.classList.contains("qdbn")&&(t.nextElementSibling.classList.contains("qdb-btn-info")?t.nextElementSibling.append(e):t.after(e)),this.disabled=!0,!1}let p=document.createElement("div");p.setAttribute("class","download-loading-container");let f=document.createElement("div");f.setAttribute("class","counterContainer");let m=document.createElement("div");m.setAttribute("class","qdbu-loader");let A=null,w=null;A=this.getAttribute("style");if(A&&(w=A.match(/#(?:[0-9a-fA-F]{3}){1,2}/g),null!==w&&(m.style.borderTopColor=w[0])),f.append(m),p.append(f),""!==r&&null!==r){let e=document.createElement("div");e.setAttribute("class","loading-msg"),e.innerHTML=`<span class="msg">${r}</span>`,p.classList.add("have-waiting-message"),p.append(e)}let v=e.parentNode,k=parseInt(d+"00");switch(d){case"10":n=1e3;break;case"20":n=2e3;break;case"30":n=3e3;break;default:n=k}l=parseInt(l)-parseInt(a);let _=e.getAttribute("data-external-url");function q(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=!0;if(isNaN(parseInt(d))&&(a=!1),0!==parseInt(d)&&a){v.prepend(p);let e=document.createElement("span");e.setAttribute("class","countdownMsg"),(""==n?document.querySelector(".counterContainer"):n).append(e),i(parseInt(d),e)}else h(e,t);function i(n){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=!1;""!=a&&(a.innerHTML=`${n}`);let o=1*n,d=setInterval((function(){let r=o%(n+1);if(r>-1){let e=`${r}`;""!=a&&(a.innerHTML=`${e}`),o--}else clearInterval(d),i=!0,(""==l?document.querySelector(".download-loading-container"):l).remove(),h(e,t);return i}),1e3)}}function h(e,t){var n=quick_download_object.security;if(n){let l=`${quick_download_object.redirecturl}?${e}=${t}&_wpnonce=${n}`;"false"==o?window.open(l,"_self"):window.open(l,"_blank")}}null!==_&""!==_?"false"!==i&&""!==_?q("external_link",_,f,p):(-1===_.indexOf("?")&&(_+="?download"),"false"==o?window.open(_,"_self"):window.open(_,"_blank")):q("aid",l,f,p)}))}))}));