var navBar_temp = `      
<a href="index.html" class="logo"> <i class="fas fa-shopping-cart"></i> CPM </a>

<nav class="navbar">
   
    <a href="#products">customed products</a>
    <a href="T-shirts.html">T-shirts</a>
    <a href="mtm.html">MTM</a>
    <a href="shirts.html">shirts</a>
    <a href="sample_logo.html">LOGO</a>
    <a target="_blank" href="https://pixlr.com/e">customizing editor</a>
    <a href="upload.html">Product upload</a>
    <a href="qna.html">NOTICE</a>
    <a href="qna.html">Q&A</a>
</nav>

<div class="icons">
    <a href="login.html" >LOGIN</a>
    <div id="menu-btn" class="fas fa-bars"></div>
    <div id="search-btn" class="fas fa-search"></div>
    <a href="#" class="fas fa-shopping-cart"></a>
    <a href="#" class="fas fa-heart"></a>
</div>

<form action="" class="search-form">
    <input type="search" name="" placeholder="search here..." id="search-box">
    <label for="search-box" class="fas fa-search"></label>
</form>
    `;

$("#navbar").append(navBar_temp);