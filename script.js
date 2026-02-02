// Lấy phần tử đèn
const den = document.getElementById('den');
// Sự kiện 1: Rê chuột vào (MouseEnter hoặc MouseOver) -> Dừng xoay
den.addEventListener('mouseenter', function() {
    den.style.animationPlayState = 'paused';
});
// Sự kiện 2: Rê chuột ra (MouseLeave hoặc MouseOut) -> Tiếp tục xoay
den.addEventListener('mouseleave', function() {
    den.style.animationPlayState = 'running';
});
