const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn'); 
const loveText = document.getElementById('loveText');
const message = document.querySelector('.message');
const heart = document.querySelector('.heart');
const title = document.querySelector('.title');
const heartImage = document.getElementById('heartImage');
const loveAudio = document.getElementById('loveAudio');
// khi nhấn đồng ý
yesBtn.onclick = () => {
    title.style.display = 'none';
    heart.classList.add('show');
    loveText.textContent = 'Chị cũng yêu em nhiều lắm đó!';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    heartImage.classList.add('show');
     // Play audio
     loveAudio.loop= true; // Lặp lại âm thanh
    loveAudio.play().catch(error => {
        console.log("Audio playback failed:", error);
    });


};

// Xử lý cho cả hover chuột và chạm màn hình
const moveNoButton = () => {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    // Lấy vị trí của nút "Không"
    noBtn.style.position = 'absolute';
    noBtn.style.transition = 'left 0.5s, top 0.5s';
    // Lấy kích thước của nút "Không" và vùng chứa
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    // Tính toán vị trí ngẫu nhiên trong vùng chứa
    const padding = 20;
    const maxX = containerRect.width - btnWidth - padding;
    const maxY = containerRect.height - btnHeight - padding;
    // Tạo vị trí ngẫu nhiên cho nút "Không"
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    // Cập nhật vị trí của nút "Không"
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
};

// Sự kiện cho hover chuột
noBtn.onmouseover = moveNoButton;

// Sự kiện cho màn hình cảm ứng
noBtn.ontouchstart = (e) => {
    e.preventDefault(); // Ngăn chặn các sự kiện mặc định
    moveNoButton();
};