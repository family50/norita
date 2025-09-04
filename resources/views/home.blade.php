<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
    @vite([ 'resources/css/output.css','resources/css/home.css', 'resources/js/home.js'])
    <title>norita</title>
</head>
<body>
    <div class="home">
        <div class="background">
    </div>
    
     <header>
        <!-- القسم اليسار: اللوجو -->
        <div class="header-left">
            <img src="{{ asset('home-images/_9AA7C6C5-CE25-4C42-B972-2B32E0B8861E_-removebg-preview.png') }}" alt="Norita Logo">

        </div>
        

        <!-- القسم الأوسط: روابط التنقل -->
        <nav class="header-center">
            <a href="#" class="nav-link">Home</a>
            <a href="#" class="nav-link">Best Sellers</a>
            <a href="#" class="nav-link">Categories</a>
            <a href="#" class="nav-link">Why Us</a>
            <a href="#" class="nav-link">About Us</a>
        </nav>

        <!-- القسم اليمين: الأيقونات -->
        <div class="header-right">
            <div class="icon-btn"><i class="fa-solid fa-user"></i></div>
            <div class="icon-btn"><i class="fa-solid fa-cart-shopping"></i></div>
            <div class="icon-btn"><i class="fa-solid fa-language"></i></div>
        </div>
    </header>

    <div class="home-1">   <!-- الكونتينر الأساسي للقسم (Hero Section) -->
      <div id="lift">
  <div class="Norita">  
    <h1>Norita — All Your Office Supplies in One Place</h1>  <!-- العنوان الرئيسي الكبير -->
  </div> 
  <div class="text"> 
    <p>From daily essentials to the latest school supplies.</p>  <!-- السطر الأول: وصف قصير -->
    <p>Shop with ease and get it delivered to your doorstep.</p> <!-- السطر الثاني: وصف إضافي -->
  </div> 
  <div> 
    <button class="shop-btn">Shop Now</button>  <!-- زر الدعوة لاتخاذ إجراء (CTA) -->
  </div>  
  </div><!-- نهاية  اليمين-->
  <div id="right">
   <div id="canvas"></div>  
  </div>


</div>   <!-- نهاية القسم -->



    
   






</body>
</html>