import React, { useState } from "react";

function Header() {
  // ⬇️ state لإدارة العنصر الفعّال (active)
  const [activeIcon, setActiveIcon] = useState(null); // مبدئياً مفيش أيقونة فعالة
  const [activeLink, setActiveLink] = useState(null); // مبدئياً مفيش رابط فعال

  // ⬇️ أسماء الروابط (بدل ما نكتبهم يدوي)
  const links = ["Home", "Best Sellers", "Categories", "Why Us", "About Us"];

  // ⬇️ لما اضغط على أيقونة
  const handleIconClick = (iconName) => {
    if (iconName === "language") {
      // لو الأيقونة هي اللغة → غير حالتها بين تفعيل وإلغاء
      setActiveIcon(activeIcon === "language" ? null : "language");
    } else {
      // أي أيقونة تانية → فعّلها وشيل التفعيل من الروابط
      setActiveIcon(iconName);
      setActiveLink(null);
    }
  };

  // ⬇️ لما اضغط على رابط
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // فعّل الرابط المضغوط
    setActiveIcon(null); // شيل التفعيل من الأيقونات
  };

  return (
    <header id="app-header">
      {/* ⬅️ شعار الموقع */}
      <div className="header-left">
        <img
          src="/home-images/_9AA7C6C5-CE25-4C42-B972-2B32E0B8861E_-removebg-preview.png"
          alt="Norita Logo"
        />
      </div>

      {/* ⬅️ روابط الناف */}
      <nav className="header-center">
        {links.map((link) => (
          <a
            key={link} // مفتاح لكل عنصر
            href="#"
            className={`nav-link ${activeLink === link ? "active" : ""}`} // لو هو الرابط الفعّال → ضيف كلاس active
            onClick={(e) => {
              e.preventDefault(); // امنع الانتقال للرابط
              handleLinkClick(link); // نادِ الفنكشن اللي بتفعل الرابط
            }}
          >
            {link}
          </a>
        ))}
      </nav>

      {/* ⬅️ أيقونات الناف */}
      <div className="header-right">
        <div
          className={`icon-btn ${activeIcon === "user" ? "active" : ""}`} // لو الأيقونة دي مفعلة ضيف active
          onClick={() => handleIconClick("user")}
        >
          <i className="fa-solid fa-user"></i>
        </div>

        <div
          className={`icon-btn ${activeIcon === "cart" ? "active" : ""}`} // نفس الفكرة لعربة التسوق
          onClick={() => handleIconClick("cart")}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </div>

        <div
          className={`icon-btn ${activeIcon === "language" ? "active" : ""}`} // أيقونة اللغة بتشتغل toggle
          onClick={() => handleIconClick("language")}
        >
          <i className="fa-solid fa-language"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;

