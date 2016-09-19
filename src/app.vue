<template>
  <header id="hd">
        <a class="navload clearfix ma-no" href="http://m.maoyan.com/app?_v_=yes&amp;pageId=100051&amp;actionId=download" data-evt="topdownload">
            <img src="http://ms0.meituan.net/canary/img/avatar.png" alt="猫眼电影">
            <div class="load-title">
                <h3>猫眼电影</h3>
                <div>
                   在线选座，热门影讯，爱上看电影
                </div>
            </div>
            <button class="load-btn">立即打开</button>
        </a>
        <div class="top mj-hp cf" style="display: block;">
                    <h1><a href="?tmp=hp" data-evt="hd/logo">猫眼电影</a></h1>
            <a data-evt="hd/changeCity/武汉" id="change_city" class="change-city ma-no" href="/city?_v_=yes">武汉</a>
                <a data-evt="hd/myUnlogin" class="my ma-no" href="/account/login?backurl=%2Forder%3F_v_%3Dyes">我的</a>
                <a data-evt="hd/my" class="avatar ma-no" href="/order?_v_=yes" style="display: block;"></a>
        </div>

        <div class="navbar" style="display: none;">
            <div class="nav-wrap-left">
                <a data-evt="hd/back" class="back J_Back ma-dis" href="/">返回</a>
            </div>
            <h2 class="page-title"> 猫眼电影</h2>

            <div class="nav-wrap-right">
            <a data-evt="hd/dropdown" class="thr-line" id="dropdown" href="javascript:;">≋</a>
            </div>
            <div id="nav-dropdown" class="nav-dropdown">
               <ul>
                   <li>
                       <a data-evt="hd/index" href="?tmp=hp"> <i class="home"></i> 首页</a>
                   </li>
                   <li>
                       <a class="last ma-no" data-evt="hd/my" href="/order?_v_=yes"> <i class="avatar"> </i> 我的</a>
                   </li>
               </ul>
            </div>
        </div>

</header>
</template>

<script>
export default {
  components: {

  }
}
</script>

<style></style>
