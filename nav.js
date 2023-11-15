// ==UserScript==
// @name         Chapter Navigation with Advanced Prefetch
// @namespace    http://your-namespace.com
// @version      1.5
// @description  Navigate to the next/previous chapter with arrow keys, advanced prefetch chapters, and auto-scroll to top
// @author       Vergenter
// @match        https://daotranslate.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle('.postbody { width: 100% !important; }');
GM_addStyle(`.darkmode{background:#16151d;color:#CCC}
.darkmode #thememode .xt{color:#fff}
.darkmode .bixbox.episodedl .epwrapper .epcontent{color:#FFF}
.darkmode td,.darkmode th{border-color:#444}
.darkmode tr:nth-child(even){background-color:#333}
.darkmode .listupd .utao .uta{border-color:#383838}
.darkmode .listupd .utao.styletree .uta ul li a{background:#333;color:#b6b6b6}
.darkmode .listupd .utao.styletree .uta ul li a:hover{color:#FFF}
.darkmode #live-search_results{background:#1a1920;-webkit-box-shadow:0 4px 20px #000;-khtml-box-shadow:0 4px 20px #000;-moz-box-shadow:0 4px 20px #000;-ms-box-shadow:0 4px 20px #000;-o-box-shadow:0 4px 20px #000;box-shadow:0 4px 20px #000}
.darkmode .live-search_result_container li{border-bottom:1px solid #262432}
.darkmode .live-search_result_container .post-thumbnail{background:none}
.darkmode .live-search_result_container .over span{color:#777}
.darkmode .live-search_result_container li a{color:#c2c2c2}
.darkmode .live-search_result_container li:hover{background:#1f1d26}
.darkmode #top-menu.topmobshow{background:#222;box-shadow:1px 3px 8px rgba(0,0,0,0.65)}
.darkmode #sidebar .section{background:#222;-webkit-box-shadow:0 2px 3px rgba(0,0,0,.1);-khtml-box-shadow:0 2px 3px rgba(0,0,0,.1);-moz-box-shadow:0 2px 3px rgba(0,0,0,.1);-ms-box-shadow:0 2px 3px rgba(0,0,0,.1);-o-box-shadow:0 2px 3px rgba(0,0,0,.1);box-shadow:0 2px 3px rgba(0,0,0,.1)}
.darkmode .releases h1,.darkmode .releases h2,.darkmode .releases h3,.darkmode #sidebar .section h3{color:#FFF}
.darkmode .releases{border-bottom:1px solid #312f40}
.darkmode .rating-prc .rtp .rtb:before{color:#555}
.darkmode #gallery.owl-loaded .owl-dots span{background:#555}
.darkmode .serieslist ul li{border-bottom:1px solid #383838}
.darkmode .serieslist ul li .ctr{color:#888;border:.5px solid #888}
.darkmode .serieslist ul li .imgseries{background:none}
.darkmode a,.darkmode .meta h1,.darkmode .single-info.bixbox .infox .infolimit h2{color:#FFF}
.darkmode .meta .epx{color:#999}
.darkmode #sidebar .section ul.genre:before,.darkmode #sidebar .section ul.genre:after{background:#262432}
.darkmode .bixbox{background:#222 !important;-webkit-box-shadow:0 2px 3px rgba(0,0,0,.1);-khtml-box-shadow:0 2px 3px rgba(0,0,0,.1);-moz-box-shadow:0 2px 3px rgba(0,0,0,.1);-ms-box-shadow:0 2px 3px rgba(0,0,0,.1);-o-box-shadow:0 2px 3px rgba(0,0,0,.1);box-shadow:0 2px 3px rgba(0,0,0,.1);color:#CCC}
.darkmode .hpage a{color:#FFF}
.darkmode .advancedsearch .lbx{padding:10px 0;background:none;border:0}
.darkmode .advancedsearch tr .inputx{background:#16151d;color:#fff;border:1px solid #16151d}
.darkmode .checkmarkx{background-color:#282635}
.darkmode .checkmark{background-color:#282635}
.darkmode .pagination a{background:#333}
.darkmode .surprise{color:#FFF}
.darkmode .surprise:hover{color:#333;background:#FFF}
.darkmode .nav_apb a{background:#333}
.darkmode .nav_apb a:hover{background:#111;color:#FFF}
.darkmode .soralist span{border-bottom:1px solid #312f40}
.darkmode .soralist ul{color:#223a65}
.darkmode .animefull .bigcover a.gp{border:0}
.darkmode .bigcontent .rt .rating,.darkmode .single-info.bixbox .infox .rating{background:#111}
.darkmode .bigcontent .thumb{border:4px solid #141219}
.darkmode .animefull .bottom{border-top:1px solid #312f40}
.darkmode .bottom.tags a{background:#111;border-color:#333}
.darkmode .bxcl ul::-webkit-scrollbar-track{background:#111}
.darkmode .bxcl ul li{border-bottom:1px solid #262432}
.darkmode .bxcl ul li span.dt a{background:#223a65;color:#FFF}
.darkmode .bxcl ul li span.dt a .dashicons{color:#FFF}
.darkmode .megavid{box-shadow:0 3px 0 0 #0f0f0f}
.darkmode .item{background:#222}
.darkmode .naveps .nvs a, .darkmode .bottomnav a{background:#333;color:#FFF}
.darkmode .naveps .nvsc a{background:#0c70de}
.darkmode .iconx a{color:#f05252}
.darkmode .iconx a:hover{color:#FFF}
.darkmode .naveps.bignav .nvs a{background:#222;color:#CCC;box-shadow:0 3px 0 0 #0f0f0f}
.darkmode .naveps.bignav .nvs a:hover{color:#FFF;background:#333}
.darkmode .naveps.bignav .nvs .nolink{background:#0d0d0d;color:#666;cursor:default}
.darkmode .meta{box-shadow:0 3px 0 0 #0f0f0f}
.darkmode .meta .epx .lg{background:#474747;color:#DDD}
.darkmode select.mirror{border:1px solid #303030;color:#DDD;background:#333}
.darkmode .lista{background:none;border-bottom:0}
.darkmode .lista a{border:1px solid #0c70de;background:#0c70de;color:#FFF}
.darkmode .lista a:hover{background:none}
.darkmode .listo .bx .imgx{background:none}
.darkmode .listo{color:#999}
.darkmode .listo .bx{border-bottom:1px solid #262432}
.darkmode .commentx h3{color:#919191}
.darkmode .commentx .commentlist li{border-bottom:1px solid #262432}
.darkmode .commentx textarea,.darkmode .commentx #respond input[type="text"]{border: 1px solid #16151d;color:#FFF;background: #16151d;box-shadow: none;}
.darkmode .comment-list>li,.darkmode .comment-list .children{border-color:#312f40}
.darkmode .comment-list>li:hover{box-shadow:0 0 8px 0 rgba(0,0,0,0.42)}
.darkmode .page{color:#DDD}
.darkmode blockquote,.darkmode q{background: #303030;border-left: 3px solid #4f4f4f;}
.darkmode #sidebar .section>ul>li{border-bottom:1px solid #262432}
.darkmode .gov-multipart>div{border-bottom:1px solid #262432}
.darkmode .gov-multipart .gov-mr-host{color:#c2c2c2}
.darkmode .gov-multipart .gov-the-embed{background-color:#2d2a3a;color:#c2c2c2;border-bottom:3px solid #100f15}
.darkmode .gov-multipart .gov-the-embed:hover{background-color:#3f3b51;border-bottom:3px solid #100f15}
.darkmode .bixbox.infx.singleinfo .navepsx{background:#1d1b26;border-bottom:1px solid #343243}
.darkmode .bixbox.infx.singleinfo .navepsx .nvs.nvsc a{border-color:#343243}
.darkmode .bixbox.infx.singleinfo{color:inherit}
.darkmode .bixbox.infx.singleinfo .navepsx .nvs a:hover{background:#181720}
.darkmode .bixbox.infx.singleinfo ul li{background-color:#2b2936}
.darkmode .dlbox ul li{border-color:#2b2936;color:#FFF}
.darkmode .dlbox ul li:nth-child(even){background:#191919}
.darkmode .dlbox ul li span a:hover{color:#FFF}
.darkmode .single-info.bixbox .infox .desc.mindes .colap{background:#333;color:#999;border:1px solid #444}
.darkmode .sebox .msebox{border-color:#333}
.darkmode .sebox .msebox .headsebox .minsebox{background:#2f2b3a}
.darkmode .sebox .msebox .headsebox .minsebox span{border-color:#494949}
.darkmode .sebox .msebox .headsebox .gesebox{border-color:#333;background:#201d2a}
.darkmode .sebox .msebox .headsebox .gesebox a{background:#363345;border-color:#363345;color:#999}
.darkmode .sebox .msebox .footsebox{border-color:#333;background:#2f2b3a;color:#999}
.darkmode .naveps.bignav .nvs.nvsc a{background:#0c70de;color:#FFF}
.darkmode .ntf{background:#333;color:#CCC}
.darkmode .soraddlx .soraurlx{background:#333}
.darkmode .soraddlx a:after{color:#555}
.darkmode .series-gen .nav-tabs{background:#333}
.darkmode .bloglist .blogbox .innerblog .infoblog .entry-content{color:#999}
.darkmode #sidebar .section ul.season::-webkit-scrollbar-track{background:#0e0e0e}
.darkmode #sidebar .section .ongoingseries ul li{border-bottom:1px solid #262432}
.darkmode #sidebar .section .ongoingseries ul li:hover{background:#333}
.darkmode #sidebar .section .ongoingseries ul li a .l .dashicons{color:#1d1b26}
.darkmode #sidebar .section .ts-wpop-series-gen .ts-wpop-nav-tabs{background:#333}
.darkmode .bigcontent .infox a,.darkmode .animefull .bottom a,.darkmode .single-info.bixbox .infox .genxed a{color:#CCC}
.darkmode .bigcontent .infox a:hover,.darkmode .animefull .bottom a:hover,.darkmode .single-info.bixbox .infox .genxed a:hover, .darkmode .bigcontent .infox .spe span a:hover{color:#FFF}
.darkmode .bigcontent .infox h1{color:#FFF}
.darkmode .stylefiv .bsx .inf span{color:#999}
.darkmode #footer{background:#222;color:#CCC}
.darkmode a:hover{color:#0c70de}
.darkmode .footer-az span.ftaz{border-right:1px solid rgba(255,255,255,0.3)}
.darkmode .quickfilter .filters .filter button{background-color:#333;border-color:#333;color:#CCC}
.darkmode .quickfilter .filters .filter ul{background:#333}
.darkmode .quickfilter .filters .filter ul li input+label:before,.darkmode .quickfilter .filters .filter ul li input:not(:checked)+label:before{background-color:#5d5d5d}
.darkmode .quickfilter .filters .filter ul label{color:#CCC}
.darkmode .quickfilter .filters .filter.submit button{background:#0c70de;color:#FFF}
.darkmode .releases.latesthome .vl{background:#222;color:#FFF}
.darkmode .stylesix{border-bottom:1px solid #383838}
.darkmode .seventh .main-seven .tt .sosev span{color:#999}
.darkmode .seventh .main-seven .tt .sosev span a{color:#999}
.darkmode .bixbox.episodedl .epwrapper .epheader h1{color:#FFF}
.darkmode .bixbox.episodedl .epwrapper .epheader .entry-info{color:#CCC}
.darkmode .bixbox.episodedl .epwrapper .epheader{border-bottom:1px solid #333}
.darkmode .bixbox.episodedl .notice{background:#333;color:#999}
.darkmode .bigcontent .infox .alter{color:#CCC}
.darkmode .bigcontent .infox .desc{color:#CCC}
.darkmode .epcheck .ephead{color:#FFF;border-bottom:1px solid #262432}
.darkmode .bxcl ul li:nth-child(odd){background:#191919}
.darkmode .bxcl ul li:hover{background:#0c70de}
.darkmode hr{border-color:#535353}
.darkmode .bixbox.episodedl .epwrapper .navimedia{background:#222 !important}
.darkmode .bixbox.episodedl .epwrapper .navimedia .left .fontSize a{background:#333;color:#FFF}
.darkmode #sidebar #ts-hs-history li{border-bottom:1px solid #383838}
.darkmode .optread{color:#FFF;background:#333}
.darkmode .option-over{background:rgba(0,0,0,0.57)}
.darkmode .option-over .main-option{background:#222;-webkit-box-shadow:0 2px 3px rgba(0,0,0,.1);-khtml-box-shadow:0 2px 3px rgba(0,0,0,.1);-moz-box-shadow:0 2px 3px rgba(0,0,0,.1);-ms-box-shadow:0 2px 3px rgba(0,0,0,.1);-o-box-shadow:0 2px 3px rgba(0,0,0,.1);box-shadow:0 2px 3px rgba(0,0,0,.1)}
.darkmode .option-over .main-option .optx-title{border-bottom:1px solid #312f40;color:#FFF}
.darkmode .option-over .main-option .optx-content .optx-group .optx-select select{background:#333;color:#b6b6b6}
.darkmode .option-over .main-option .optx-content .opt-reset .rst{background:#333}
.darkmode .bloglist .blogbox.blogstwo .innerblog {border-color:#333}
.darkmode .trendarea .trendlist{background:#222}
.darkmode .trendarea .trendlist .trendscore{color:#FFF;background:#ec5811;box-shadow:0 3px 7px #000}
.darkmode .trendarea .trendlist .trendinf .cusinfo .cusi.gentop a{background:#333}
.darkmode .homehot .hotstack .hotoday .inhotoday{background:#222}
.darkmode .stylefor,.darkmode .stylefor .med-info>div>div{border-color:#3d3d3d}
.darkmode .stylefor .med-info .col-title .fortitle a{color:#FFF}
.darkmode .maindet .inmain .mdinfo .contexcerpt{color:#9d9d9d}
.darkmode .maindet .inmain .mdinfo .mdinfodet{color:#888}
.darkmode .seriestwo .sertobig{background:#040305}
.darkmode .seriestwo .sertobig .insertobig .sertoinfo h1{color:#FFF}
.darkmode .seriestwo .sertobig .insertobig .sertoinfo .sertostat span{background:#FFF;color:#212121}
.darkmode .seriestwo .sertobig .insertobig .sertoinfo .alter,.darkmode .seriestwo .sertobig .insertobig .sertoinfo .sertoauth .serl .sername{color:#999}
.darkmode .seriestwo .sertobig .insertobig .sertothumb img{box-shadow:0 5px 24px 0 #000}
.darkmode .seriestwo .sertobig .insertobig .sertoinfo .sertogenre a{background:#262626;border-color:#494949}
.darkmode .sertags a{background:#222;color:#999}
.darkmode ul.taxindex li a{background:#333;font-weight:500;color:#999}
.darkmode ul.taxindex li a:hover{color:#FFF}
.darkmode .bxcl .series-history-pool ul li{background:none;border:none}
.darkmode .bxcl .series-history-pool ul li .chbox{background:#333}
.darkmode .bxcl .series-history-pool ul li .chbox:hover{background:#366ad3}
.darkmode .bxcl .series-history-pool ul li .chbox:hover .chapterdate{color:rgba(255,255,255,0.5)}
@media only screen and (max-width:800px) {
.darkmode .th{background:#0c70de}
}`);
(function() {
    'use strict';

    document.body.className = 'darkmode';

    let prevChapterURL = '';
    let nextChapterURL = '';
    let prevChapterContent = '';
    let nextChapterContent = '';

    function updateChapterURLs() {
        const currentURL = window.location.href;
        const chapterRegex = /-chapter-(\d+)/;
        const match = currentURL.match(chapterRegex);

        if (match) {
            const currentChapterNumber = parseInt(match[1], 10);
            prevChapterURL = currentURL.replace(chapterRegex, `-chapter-${currentChapterNumber - 1}`);
            nextChapterURL = currentURL.replace(chapterRegex, `-chapter-${currentChapterNumber + 1}`);
        }
    }

    document.addEventListener('keydown', (event) => {
    // Check if the page is at the bottom
    const isAtBottom = (window.innerHeight + window.scrollY) +5 >= document.body.offsetHeight;

    // Check if the page is at the top
    const isAtTop = window.scrollY === 0;

    if (event.shiftKey && event.key === 'ArrowRight') {
        // Shift + Right Arrow: Next chapter
        if (nextChapterContent) {
            displayChapterContent(nextChapterContent, nextChapterURL);
        }
    } else if (event.shiftKey && event.key === 'ArrowLeft') {
        // Shift + Left Arrow: Previous chapter
        if (prevChapterContent) {
            displayChapterContent(prevChapterContent, prevChapterURL);
        }
    } else if (event.key === 'ArrowRight') {
        if (isAtBottom) {
            // If at the bottom, go to the next chapter
            if (nextChapterContent) {
                displayChapterContent(nextChapterContent, nextChapterURL);
            }
        } else {
            // If not at the bottom, page down
          window.scrollBy({top:window.innerHeight-50,behavior:'smooth'});
        }
    } else if (event.key === 'ArrowLeft') {
        if (isAtTop) {
            // If at the top, go to the previous chapter
            if (prevChapterContent) {
                displayChapterContent(prevChapterContent, prevChapterURL);
            }
        } else {
            // If not at the top, page up
            window.scrollBy({top:-window.innerHeight+50,behavior:'smooth'});
        }
    }
});

    function displayChapterContent(content, url) {
        const currentContent = document.querySelector('.bixbox.episodedl');
        if (currentContent) {
            currentContent.innerHTML = content;

            // Update the URL in the address bar
            history.pushState({}, '', url);

            // Scroll to the top of the page
            window.scrollTo(0, 0);

            // Update the chapter URLs and prefetch again
            updateChapterURLs();
            prefetchChapters();
        }
    }

    function prefetchChapters() {
        if (prevChapterURL) {
            fetchChapterContent(prevChapterURL).then(content => {
                prevChapterContent = content;
            });
        }

        if (nextChapterURL) {
            fetchChapterContent(nextChapterURL).then(content => {
                nextChapterContent = content;
            });
        }
    }

    function fetchChapterContent(url) {
        return fetch(url)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const nextPageDocument = parser.parseFromString(data, 'text/html');
                const content = nextPageDocument.querySelector('.bixbox.episodedl');

                if (content) {
                    return content.innerHTML;
                } else {
                    console.error('Could not find content for the chapter.');
                    return '';
                }
            })
            .catch(error => {
                console.error('Error prefetching chapter:', error);
                return '';
            });
    }

    // Initial actions
    updateChapterURLs();
    prefetchChapters();
})();
