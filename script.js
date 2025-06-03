const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn'); 
const loveText = document.getElementById('loveText');
const message = document.querySelector('.message');
const heart = document.querySelector('.heart');
const title = document.querySelector('.title');
const heartImage = document.getElementById('heartImage');
// khi nhấn đồng ý
yesBtn.onclick = () => {
    title.style.display = 'none';
    heart.classList.add('show');
    loveText.textContent = 'Chị cũng yêu em nhiều lắm đó!';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    heartImage.classList.add('show');

};

// khi nhấn không đồng ý
noBtn.onmouseover = () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
  // Đặt position absolute khi hover
    noBtn.style.position = 'absolute';
    noBtn.style.transition = 'left 0.5s, top 0.5s'; // thêm hiệu ứng chuyển động
    // kích thước nút
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // giới hạn vùng di chuyển ( tránh ra ngoài màn hình)
    const padding = 20;
    const maxX = containerRect.width - btnWidth - padding;
    const maxY = containerRect.height - btnHeight - padding;

    // tạo vị trí ngẫu nhiên
    const randomX = Math.random() * maxX ;
    const randomY = Math.random() * maxY ;

    // di chuyển nút đến vị trí ngẫu nhiên
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
};