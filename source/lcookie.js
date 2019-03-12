let lcookie = function( Config ){

    console.log('\n %c 🍪lcookie %c https://github.com/LF112/lcookie %c BY%c LF112  \n\n', 'color: #ffffff; background: rgb(0, 145, 228); padding:5px 0;', 'background:rgba(197, 197, 197, 0.89); padding:5px 0;', 'color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;', 'color: rgb(0, 145, 228); background: rgba(49, 49, 49, 0.85); padding:5px 0;');

    return new Promise( function() {

        // Main
        let defaultOption = [
            ['Cookie 同意横幅'],
            ['请不要同意该横幅。'],
            ['同意'],
            ['忽略'],
            ['lcookie'],
        ];

        let lcoolkieMainCss = '#lcookie{position:fixed;bottom:3em;z-index:100000;display:flex;width:100%}.lcookie_Main{position:relative;left:50%;padding:0 10px 6px;width:52em;min-width:52em;min-height:70px;border-radius:4px;background-color:#fff;box-shadow:0 0 8px 0 hsla(0,0%,96%,.6),0 2px 4px 0 hsla(0,0%,82%,.5);transform:translate(-50%,-50%)}.lcookie_Main ::selection{border-radius:3px;background:#cecece;color:#515151}.lcookie_Main .lcookie-decoration{display:flex;margin:0 auto 1px;width:46em;height:5px;border-radius:0 0 4px 4px;background:#555;justify-content:center}.lcookie_Main .lcookie-logo{position:absolute;display:block;min-width:20em!important;letter-spacing:.02em;line-height:1}.lcookie_Main .lcookie-logo .lcookie_svg{position:absolute;padding:8px 0;width:45px;height:45px}.lcookie_Main .lcookie-logo .lcookie_title{position:absolute;margin-top:7px;padding:0 0 0 50px;color:#515151;text-align:center;font-size:14px}.lcookie_Main .lcookie-content{position:absolute;overflow:auto;margin-top:24px;margin-right:185px;padding:0 0 0 50px;height:2pc;max-width:628px;min-width:628px;font-size:14px}.lcookie_Main .lcookie-check{padding:15px 0 15px 41.5em!important}.lcookie_Main .lcookie-check a{display:inline-block;margin:0 15px 0 25px;padding:6px 15px;border:1px solid #a5a5a5;border-radius:4px;background-color:transparent;color:#515151;text-decoration:none;font-weight:400;font-size:9pt;line-height:1.5;transition:color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;user-select:none}.lcookie_Main .lcookie-check a:hover{border:1px solid transparent!important;background-color:#555!important;color:#fff!important}.lcookie_Main ::-webkit-scrollbar{width:3px}.lcookie_Main ::-webkit-scrollbar-thumb{background-color:#515151}';

        let lcookieMainHtml = '<div class="lcookie_Main"><div class="lcookie-decoration"></div><div class="lcookie-logo"><div class="lcookie_svg"><svg viewBox="0 0 1024 1024"><path d="M32 512c0 265.088 214.912 480 480 480s480-214.912 480-480S777.088 32 512 32 32 246.912 32 512z" fill="#515151" p-id="6429" data-spm-anchor-id="a313x.7781069.0.i1" class=""></path><path d="M364.32 493.536a92.32 92.32 0 1 0 184.64 0 92.32 92.32 0 0 0-184.64 0zM475.072 235.072a55.36 55.36 0 1 0 110.784 0 55.36 55.36 0 0 0-110.784 0zM585.856 696.64a73.856 73.856 0 1 0 147.744 0 73.856 73.856 0 0 0-147.744 0zM179.68 567.36a55.36 55.36 0 1 0 110.72 0 55.36 55.36 0 0 0-110.72 0zM696.672 456.576a55.36 55.36 0 1 0 110.72 0.064 55.36 55.36 0 0 0-110.72-0.064zM364.32 770.464a36.896 36.896 0 1 0 73.792 0 36.896 36.896 0 0 0-73.792 0zM271.296 318.304a36.928 36.928 0 1 0 73.888 0 36.928 36.928 0 0 0-73.888 0z" fill="#ffffff"></path></svg></div><span class="lcookie_title">'+defaultOption[0][0]+'</span></div><div class="lcookie-content">'+defaultOption[1][0]+'</div><div class="lcookie-check"><a id="lcookie_Accept">'+defaultOption[2][0]+'</a><a id="lcookie_Refuse" style="margin-left:0">'+defaultOption[3][0]+'</a></div></div>';

        if (lcookieGetCookie('lcookie') !== 'Accept') {

            // Import CSS
            var lcookieCSS = document.createElement('style');
            lcookieCSS.innerHTML = lcoolkieMainCss;
            document.body.insertBefore(lcookieCSS, document.body.firstChild);

            var heads = document.getElementsByTagName('head');
            if (heads.length)
                heads[0].appendChild(lcookieCSS);
            else
                document.documentElement.appendChild(lcookieCSS);

            // Import Main
            var lcookieMain = document.createElement('div');
            lcookieMain.setAttribute('id', 'lcookie');
            lcookieMain.innerHTML = lcookieMainHtml;
            document.body.insertBefore(lcookieMain, document.body.firstChild);
            document.getElementById('lcookie_Accept').addEventListener('click',lcookieCount(150),true);
            document.getElementById('lcookie_Accept').addEventListener('click',function () {
                var Days=30,exp=new Date;exp.setTime(exp.getTime()+864E5*Days);document.cookie="lcookie="+escape("Accept")+";expires="+exp.toGMTString();
            },true);
            document.getElementById('lcookie_Refuse').addEventListener('click',lcookieCount(150),true);

        }

        function lcookieGetCookie(name)
        {
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        }

        function lcookieCount() {
            function b(c) {
                if (a !== 100) a++;
                document.getElementById('lcookie').style.opacity = 1 - a / 100;
                if (a === c) return clearTimeout(d), !1;
                d = setTimeout(function() {
                    b(c)
                }, 5)
            }
            var d, a = 0;
            return b
        }

    });
};