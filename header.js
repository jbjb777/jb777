// 페이지 로드 후 실행
document.addEventListener('DOMContentLoaded', () => {
  const logoLink = document.getElementById('logoLink');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  // 로고 클릭 → 홈으로 이동
  logoLink.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  // 버튼 이벤트
  document.getElementById('openLinkBtn1').addEventListener('click', () => {
    window.open('https://naver.me/xAWjFEtu', '_blank');
  });

  document.getElementById('openLinkBtn2').addEventListener('click', () => {
    window.location.href = 'gifsvg.html';
  });

  document.getElementById('openLinkBtn3').addEventListener('click', () => {
    window.location.href = 'https://entrywiki.org/w/%E3%8B%A1%EA%A7%81%EC%A0%95%EB%B9%88777%EA%A7%82';
  });

  document.getElementById('imgBtn').addEventListener('click', () => {
    window.location.href = 'img.html';
  });

  document.getElementById('chatBtn').addEventListener('click', () => {
    window.location.href = 'chat.html';
  });

  // ✅ 햄버거 버튼 클릭 시 메뉴 토글
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});
  });
});
