// Ultra-Premium Romantic Experience - For Qandeel 💗
let currentScene = 0;
let unlockedSecrets = new Set();
let holdTimer = null;
let musicPlaying = false;
let keySequence = [];
const secretCode = ['q', 'a', 'n', 'd', 'e', 'e', 'l'];

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.remove('active');
        document.getElementById('scene1').classList.add('active');
        currentScene = 1;
        initScene1();
        setTimeout(() => triggerCuteJumpscare(), 5000);
    }, 3500);
});

// Music Toggle
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const icon = document.getElementById('music-icon');
    if (musicPlaying) {
        music.pause();
        icon.textContent = '🔇';
        musicPlaying = false;
    } else {
        music.play();
        icon.textContent = '🎵';
        musicPlaying = true;
    }
}

// Scene 1: Stars and Sakura
function initScene1() {
    createStarField();
    createSakuraPetals();
}

function createStarField() {
    const canvas = document.getElementById('starsCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = [];
    for (let i = 0; i < 200; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2,
            alpha: Math.random(),
            speed: Math.random() * 0.02
        });
    }
    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) star.speed *= -1;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(animateStars);
    }
    animateStars();
}

function createSakuraPetals() {
    const container = document.querySelector('#scene1 .sakura-fall');
    if (!container) return;
    setInterval(() => {
        const petal = document.createElement('div');
        petal.textContent = '🌸';
        petal.style.position = 'absolute';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.top = '-50px';
        petal.style.fontSize = (Math.random() * 15 + 15) + 'px';
        petal.style.opacity = Math.random() * 0.6 + 0.4;
        petal.style.animation = `fall ${Math.random() * 3 + 5}s linear`;
        petal.style.pointerEvents = 'none';
        container.appendChild(petal);
        setTimeout(() => petal.remove(), 8000);
    }, 400);
}

const style = document.createElement('style');
style.textContent = `@keyframes fall { to { transform: translateY(${window.innerHeight + 100}px) rotate(360deg); } }`;
document.head.appendChild(style);

function startJourney() {
    nextScene(2);
}

function nextScene(sceneNum) {
    document.querySelectorAll('.scene').forEach(scene => scene.classList.remove('active'));
    const nextSceneEl = document.getElementById(`scene${sceneNum}`);
    if (nextSceneEl) {
        nextSceneEl.classList.add('active');
        currentScene = sceneNum;
        if (sceneNum === 2) initScene2();
        if (sceneNum === 3) initScene3();
        if (sceneNum === 5) initScene5();
        if (sceneNum === 7) initScene7();
        if (sceneNum === 8) initScene8();
        if (sceneNum === 9) initScene9();
        if (sceneNum === 10) initScene10();
    }
}

function initScene2() {
    createButterflies();
    rotateCompliments();
}

function createButterflies() {
    const canvas = document.getElementById('butterflyCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const butterflies = [];
    for (let i = 0; i < 15; i++) {
        butterflies.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 20 + 15
        });
    }
    function animateButterflies() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        butterflies.forEach(b => {
            b.x += b.vx;
            b.y += b.vy;
            if (b.x < 0 || b.x > canvas.width) b.vx *= -1;
            if (b.y < 0 || b.y > canvas.height) b.vy *= -1;
            ctx.font = `${b.size}px Arial`;
            ctx.fillText('🦋', b.x, b.y);
        });
        requestAnimationFrame(animateButterflies);
    }
    animateButterflies();
}

function rotateCompliments() {
    const compliments = document.querySelectorAll('.compliment');
    let index = 0;
    setInterval(() => {
        compliments.forEach(c => c.classList.remove('active'));
        compliments[index].classList.add('active');
        index = (index + 1) % compliments.length;
    }, 2500);
}

function initScene3() {
    createSakuraCanvas();
    animatePoem();
}

function createSakuraCanvas() {
    const canvas = document.getElementById('sakuraCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const petals = [];
    setInterval(() => {
        petals.push({
            x: Math.random() * canvas.width,
            y: -20,
            vx: (Math.random() - 0.5) * 2,
            vy: Math.random() * 2 + 1,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 5
        });
    }, 200);
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        petals.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotationSpeed;
            if (p.y > canvas.height) petals.splice(index, 1);
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation * Math.PI / 180);
            ctx.font = '20px Arial';
            ctx.fillText('🌸', -10, 10);
            ctx.restore();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function animatePoem() {
    const lines = document.querySelectorAll('.poem-line');
    lines.forEach((line, index) => {
        const delay = parseInt(line.dataset.delay) || 0;
        setTimeout(() => line.classList.add('visible'), delay);
    });
}

function stickerReact(element, type) {
    element.classList.add('reacting');
    const reactions = { 'dudu': ['😊', '💕', '☺️'], 'bubu': ['💜', '😍', '✨'], 'heart': ['💗', '💖', '💝'] };
    const reaction = document.createElement('div');
    reaction.textContent = reactions[type][Math.floor(Math.random() * reactions[type].length)];
    reaction.style.cssText = 'position:absolute;top:-50px;left:50%;transform:translateX(-50%);font-size:2rem;animation:reactionFloat 1.5s ease-out;pointer-events:none;';
    element.style.position = 'relative';
    element.appendChild(reaction);
    createEmojiRain();
    setTimeout(() => { element.classList.remove('reacting'); reaction.remove(); }, 1500);
}

const reactionStyle = document.createElement('style');
reactionStyle.textContent = `@keyframes reactionFloat { 0% { transform: translateX(-50%) translateY(0) scale(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateX(-50%) translateY(-60px) scale(1.5); opacity: 0; } }`;
document.head.appendChild(reactionStyle);

function stickerRunAway(element) {
    element.classList.add('running');
    setTimeout(() => {
        element.style.opacity = '0';
        setTimeout(() => { element.style.opacity = '1'; element.classList.remove('running'); }, 2000);
    }, 1200);
}

function createEmojiRain() {
    const container = document.querySelector('.emoji-rain');
    if (!container) return;
    const emojis = ['💕', '💗', '💖', '💝', '✨', '⭐', '🌸'];
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:-30px;font-size:${Math.random() * 15 + 20}px;animation:fall ${Math.random() * 2 + 3}s linear;pointer-events:none;`;
            container.appendChild(emoji);
            setTimeout(() => emoji.remove(), 5000);
        }, i * 100);
    }
}

function initScene5() {
    createNightSky();
    createFloatingHearts();
    typeMessage();
}

function createNightSky() {
    const canvas = document.getElementById('nightSkyCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = [];
    for (let i = 0; i < 150; i++) {
        stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 2 + 1, alpha: Math.random(), speed: Math.random() * 0.03 });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.alpha += star.speed;
            if (star.alpha > 1 || star.alpha < 0) star.speed *= -1;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts-bg');
    if (!container) return;
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = ['💗', '💕', '💖', '💝'][Math.floor(Math.random() * 4)];
        heart.style.cssText = `position:absolute;left:${Math.random() * 100}%;bottom:-50px;font-size:${Math.random() * 15 + 20}px;opacity:${Math.random() * 0.5 + 0.3};animation:floatUp ${Math.random() * 3 + 4}s ease-in;pointer-events:none;`;
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }, 600);
}

const floatUpStyle = document.createElement('style');
floatUpStyle.textContent = `@keyframes floatUp { to { transform: translateY(-${window.innerHeight + 100}px); opacity: 0; } }`;
document.head.appendChild(floatUpStyle);

function typeMessage() {
    const messageEl = document.getElementById('typedMessage');
    const message = `Qandeel, you are the most beautiful soul I have ever known.\n\nYour smile lights up my darkest days and brings warmth to my heart.\nYour kindness touches everyone around you in the most gentle way.\nYour presence brings me a peace I never knew existed.\n\nYou are unique, precious, and absolutely irreplaceable.\nYou deserve all the love, happiness, and beauty this world has to offer.\n\nEvery moment thinking of you is a treasure I hold close.\nEvery day knowing you exist makes my life more meaningful.\n\nYou are my light, my inspiration, my everything.\n\nThis entire experience was created with love,\ndedication, and devotion... just for you.\n\nYou are loved beyond words, beyond measure, beyond infinity. 💗`;
    let index = 0;
    function type() {
        if (index < message.length) {
            messageEl.textContent += message.charAt(index);
            index++;
            setTimeout(type, 40);
        }
    }
    setTimeout(type, 1000);
}

function initScene7() { createKoiPond(); }
function createKoiPond() {
    const canvas = document.getElementById('koiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ripples = [];
    canvas.addEventListener('click', (e) => {
        ripples.push({ x: e.clientX, y: e.clientY, radius: 0, maxRadius: 100, alpha: 1 });
    });
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ripples.forEach((ripple, index) => {
            ripple.radius += 2;
            ripple.alpha -= 0.02;
            if (ripple.alpha <= 0) ripples.splice(index, 1);
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(135, 206, 235, ${ripple.alpha})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function initScene8() { createNeonRain(); }
function createNeonRain() {
    const canvas = document.getElementById('neonRainCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const drops = [];
    for (let i = 0; i < 50; i++) {
        drops.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, length: Math.random() * 20 + 10, speed: Math.random() * 5 + 3, color: `rgba(255, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 150)}, 0.5)` });
    }
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drops.forEach(drop => {
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.strokeStyle = drop.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            drop.y += drop.speed;
            if (drop.y > canvas.height) { drop.y = -drop.length; drop.x = Math.random() * canvas.width; }
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function initScene9() { createClouds(); animateDreamBubbles(); }
function createClouds() {
    const canvas = document.getElementById('cloudCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const clouds = [];
    for (let i = 0; i < 5; i++) {
        clouds.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, radius: Math.random() * 50 + 30, speed: Math.random() * 0.5 + 0.2 });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        clouds.forEach(cloud => {
            cloud.x += cloud.speed;
            if (cloud.x > canvas.width + cloud.radius) cloud.x = -cloud.radius;
            ctx.beginPath();
            ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function animateDreamBubbles() {
    const bubbles = document.querySelectorAll('.dream-bubble');
    bubbles.forEach((bubble, index) => {
        const delay = parseInt(bubble.dataset.delay) * 1000 || 0;
        setTimeout(() => bubble.classList.add('visible'), delay);
    });
}

function initScene10() { createParticles(); animateConfession(); }
function createParticles() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    const particleEmojis = ['✨', '💫', '⭐', '💗', '💕', '🌸', '💖'];
    for (let i = 0; i < 30; i++) {
        particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 2, vy: (Math.random() - 0.5) * 2, emoji: particleEmojis[Math.floor(Math.random() * particleEmojis.length)], size: Math.random() * 15 + 15, alpha: Math.random() * 0.5 + 0.5 });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            ctx.globalAlpha = p.alpha;
            ctx.font = `${p.size}px Arial`;
            ctx.fillText(p.emoji, p.x, p.y);
        });
        ctx.globalAlpha = 1;
        requestAnimationFrame(animate);
    }
    animate();
}

function animateConfession() {
    const lines = document.querySelectorAll('.confession-line');
    lines.forEach((line, index) => {
        const delay = parseInt(line.dataset.delay) * 1500 || 0;
        setTimeout(() => line.classList.add('visible'), delay);
    });
}

function boopNose() {
    const boopEl = document.getElementById('boopEffect');
    boopEl.classList.add('active');
    setTimeout(() => boopEl.classList.remove('active'), 1000);
}

function unlockSecret(secretNum) {
    if (!unlockedSecrets.has(secretNum)) {
        unlockedSecrets.add(secretNum);
        const secretCard = document.getElementById(`secret${secretNum}`);
        if (secretCard) secretCard.classList.add('unlocked');
        showNotification(`Secret ${secretNum} Unlocked! 🎉`);
    }
}

function showNotification(message) {
    // Just create visual effects, no text popup
    createSparkleEffect();
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

function createSparkleEffect() {
    const sparkles = ['✨', '💫', '⭐', '🌟'];
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 15 + 20}px;pointer-events:none;z-index:9999;animation:quickSparkle 1s ease-out;`;
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 80);
    }
}

const quickSparkleStyle = document.createElement('style');
quickSparkleStyle.textContent = `
    @keyframes quickSparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        100% { transform: scale(0.8) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(quickSparkleStyle);

// Notification styles removed - using only visual effects now

function startHold() {
    const button = document.querySelector('.hold-button');
    button.classList.add('holding');
    holdTimer = setTimeout(() => { unlockSecret(7); button.classList.remove('holding'); }, 2000);
}

function endHold() {
    const button = document.querySelector('.hold-button');
    button.classList.remove('holding');
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
}

function revealAllSecrets() {
    const panel = document.getElementById('secretsPanel');
    panel.classList.add('active');
    for (let i = 1; i <= 7; i++) {
        setTimeout(() => {
            const card = document.getElementById(`secret${i}`);
            if (card) card.classList.add('unlocked');
        }, i * 200);
    }
}

function closeSecrets() {
    document.getElementById('secretsPanel').classList.remove('active');
}

function triggerCuteJumpscare() {
    const jumpscare = document.getElementById('cuteJumpscare');
    jumpscare.classList.add('active');
    setTimeout(() => jumpscare.classList.remove('active'), 2500);
}

let lastX = 0, lastY = 0, lastZ = 0;
const shakeThreshold = 15;
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', (event) => {
        const acceleration = event.accelerationIncludingGravity;
        const curX = acceleration.x, curY = acceleration.y, curZ = acceleration.z;
        if (Math.abs(curX - lastX) > shakeThreshold || Math.abs(curY - lastY) > shakeThreshold || Math.abs(curZ - lastZ) > shakeThreshold) {
            if (currentScene === 6) unlockSecret(6);
        }
        lastX = curX; lastY = curY; lastZ = curZ;
    });
}

document.addEventListener('keydown', (e) => {
    keySequence.push(e.key.toLowerCase());
    if (keySequence.length > 7) keySequence.shift();
    if (keySequence.join('') === secretCode.join('')) {
        triggerSpecialEffect();
        keySequence = [];
    }
});

function triggerSpecialEffect() {
    const special = document.getElementById('specialEffect');
    if (special) {
        special.classList.add('active');
        const heartExplosion = special.querySelector('.heart-explosion');
        if (heartExplosion) {
            createHeartExplosionInContainer(heartExplosion);
        }
        setTimeout(() => special.classList.remove('active'), 4000);
    }
}

function createHeartExplosionInContainer(container) {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = ['💗', '💕', '💖', '💝'][Math.floor(Math.random() * 4)];
            heart.style.cssText = 'position:absolute;left:50%;top:50%;font-size:2.5rem;pointer-events:none;';
            const angle = (Math.PI * 2 * i) / 40;
            const velocity = 250;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            heart.style.animation = `explodeOld${i} 2s ease-out forwards`;
            const explodeStyle = document.createElement('style');
            explodeStyle.textContent = `@keyframes explodeOld${i} { 0% { transform: translate(-50%, -50%) scale(0); opacity: 1; } 100% { transform: translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5); opacity: 0; } }`;
            document.head.appendChild(explodeStyle);
            container.appendChild(heart);
            setTimeout(() => { heart.remove(); explodeStyle.remove(); }, 2000);
        }, i * 40);
    }
}

function createHeartExplosion() {
    const container = document.querySelector('.heart-explosion');
    if (!container) return;
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = ['💗', '💕', '💖', '💝'][Math.floor(Math.random() * 4)];
            heart.style.cssText = 'position:absolute;left:50%;top:50%;font-size:2.5rem;pointer-events:none;';
            const angle = (Math.PI * 2 * i) / 40;
            const velocity = 250;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            heart.style.animation = `explode${i} 2s ease-out forwards`;
            const explodeStyle = document.createElement('style');
            explodeStyle.textContent = `@keyframes explode${i} { 0% { transform: translate(-50%, -50%) scale(0); opacity: 1; } 100% { transform: translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5); opacity: 0; } }`;
            document.head.appendChild(explodeStyle);
            container.appendChild(heart);
            setTimeout(() => { heart.remove(); explodeStyle.remove(); }, 2000);
        }, i * 40);
    }
}

window.addEventListener('resize', () => {
    document.querySelectorAll('canvas').forEach(canvas => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});

document.addEventListener('contextmenu', (e) => e.preventDefault());

console.log('%c💗 This experience was created with love for Qandeel 💗', 'color: #FF6B9D; font-size: 20px; font-weight: bold;');
console.log('%c✨ Every detail, every animation, every moment... just for you ✨', 'color: #FFB6C1; font-size: 16px;');
console.log('%cSecret: Type "qandeel" to see something special! 🎁', 'color: #FF1493; font-size: 14px;');


// Mobile-specific optimizations
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Adjust canvas quality for mobile
if (isMobile()) {
    const canvases = document.querySelectorAll('canvas');
    canvases.forEach(canvas => {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            canvas.style.imageRendering = 'optimizeSpeed';
        }
    });
}

// Prevent zoom on double tap for iOS
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Handle orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
        document.querySelectorAll('canvas').forEach(canvas => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }, 100);
});

// Optimize animations for mobile
if (isMobile()) {
    // Reduce particle count on mobile
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .sakura-fall, .butterfly-trail, .floating-hearts-bg, .particle-system {
                opacity: 0.7;
            }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll for mobile
document.addEventListener('touchmove', (e) => {
    if (e.target.closest('.secrets-container') || e.target.closest('.message-card')) {
        // Allow scrolling in these containers
    } else {
        // Prevent body scroll
        if (e.target === document.body) {
            e.preventDefault();
        }
    }
}, { passive: false });

// Fix for iOS Safari bottom bar
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVH();
window.addEventListener('resize', setVH);

// Add haptic feedback for mobile (if supported)
function vibrate(duration = 10) {
    if (navigator.vibrate) {
        navigator.vibrate(duration);
    }
}

// Add vibration to interactions
const originalUnlockSecret = unlockSecret;
unlockSecret = function(secretNum) {
    vibrate(20);
    originalUnlockSecret(secretNum);
};

const originalBoopNose = boopNose;
boopNose = function() {
    vibrate(30);
    originalBoopNose();
};

// Optimize touch events
document.addEventListener('touchstart', () => {}, { passive: true });

console.log('%c📱 Mobile Optimized! Perfect for 320px+ screens', 'color: #FF6B9D; font-size: 14px; font-weight: bold;');


// ========================================
// EXTENDED KEYBOARD SECRET FEATURES
// ========================================

// Multiple secret codes
const secretCodes = {
    'shafeeq': {
        effect: 'proposalEffect',
        message: 'The most important moment of my life 💍'
    },
    'qandeel': { 
        effect: 'specialEffect',
        message: 'The most beautiful name in my world 💗'
    },
    'love': { 
        effect: 'loveExplosion',
        message: 'Love is in the air! 💕'
    },
    'beautiful': { 
        effect: 'beautifulEffect',
        message: 'Just like you! ✨'
    },
    'smile': { 
        effect: 'smileEffect',
        message: 'Your smile lights up my world! 😊'
    },
    'angel': { 
        effect: 'angelEffect',
        message: 'You are my angel! 👼'
    },
    'star': { 
        effect: 'starEffect',
        message: 'You shine brighter than any star! ⭐'
    },
    'heart': { 
        effect: 'heartRain',
        message: 'My heart beats for you! 💗'
    },
    'forever': { 
        effect: 'foreverEffect',
        message: 'Forever and always! 💕'
    },
    'princess': { 
        effect: 'princessEffect',
        message: 'My princess! 👑'
    },
    'dream': { 
        effect: 'dreamEffect',
        message: 'You are my dream come true! 💫'
    }
};

let currentKeySequence = [];

// Enhanced keyboard listener
document.addEventListener('keydown', (e) => {
    // Add key to sequence
    currentKeySequence.push(e.key.toLowerCase());
    
    // Keep only last 10 characters
    if (currentKeySequence.length > 10) {
        currentKeySequence.shift();
    }
    
    // Check all secret codes
    const typedText = currentKeySequence.join('');
    
    Object.keys(secretCodes).forEach(code => {
        if (typedText.includes(code)) {
            triggerSecretCode(code);
            currentKeySequence = []; // Reset after trigger
        }
    });
});

// Trigger secret code effects
function triggerSecretCode(code) {
    const secret = secretCodes[code];
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    switch(secret.effect) {
        case 'proposalEffect':
            triggerProposalOverlay();
            break;
        case 'specialEffect':
            triggerQandeelSpecialEffect();
            break;
        case 'loveExplosion':
            triggerLoveExplosion();
            break;
        case 'beautifulEffect':
            triggerBeautifulEffect();
            break;
        case 'smileEffect':
            triggerSmileEffect();
            break;
        case 'angelEffect':
            triggerAngelEffect();
            break;
        case 'starEffect':
            triggerStarEffect();
            break;
        case 'heartRain':
            triggerHeartRain();
            break;
        case 'foreverEffect':
            triggerForeverEffect();
            break;
        case 'princessEffect':
            triggerPrincessEffect();
            break;
        case 'dreamEffect':
            triggerDreamEffect();
            break;
    }
    
    showSecretMessage(secret.message);
}

// Qandeel Special Effect (Original)
function triggerQandeelSpecialEffect() {
    const overlay = createOverlay('linear-gradient(135deg, #667eea, #764ba2, #f093fb)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:specialAppear 1s ease;padding:20px;max-width:90%;';
    content.innerHTML = `
        <h2 class="qandeel-name-overlay">QANDEEL</h2>
        <p class="qandeel-subtitle">The most beautiful name in my world 💗</p>
        <div class="qandeel-decorations">
            <span class="deco-emoji">✨</span>
            <span class="deco-emoji">💖</span>
            <span class="deco-emoji">✨</span>
        </div>
    `;
    overlay.appendChild(content);
    
    // Add responsive styles
    const responsiveStyle = document.createElement('style');
    responsiveStyle.textContent = `
        .qandeel-name-overlay {
            font-size: clamp(2.5rem, 10vw, 6rem);
            font-family: Pacifico, cursive;
            color: white;
            text-shadow: 0 0 20px #FF1493, 0 0 40px #FF1493;
            margin-bottom: 20px;
            animation: neonPulse 2s ease-in-out infinite;
            word-wrap: break-word;
        }
        .qandeel-subtitle {
            font-size: clamp(1rem, 4vw, 2rem);
            color: white;
            margin-top: 20px;
            padding: 0 15px;
            line-height: 1.5;
        }
        .qandeel-decorations {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .deco-emoji {
            font-size: clamp(2rem, 6vw, 3rem);
            animation: decoFloat 2s ease-in-out infinite;
        }
        .deco-emoji:nth-child(1) { animation-delay: 0s; }
        .deco-emoji:nth-child(2) { animation-delay: 0.3s; }
        .deco-emoji:nth-child(3) { animation-delay: 0.6s; }
        @keyframes decoFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }
    `;
    document.head.appendChild(responsiveStyle);
    overlay.appendChild(content);
    
    // Create heart explosion
    const heartExplosionContainer = document.createElement('div');
    heartExplosionContainer.style.cssText = 'position:absolute;width:100%;height:100%;pointer-events:none;';
    overlay.appendChild(heartExplosionContainer);
    
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = ['💗', '💕', '💖', '💝'][Math.floor(Math.random() * 4)];
            heart.style.cssText = `position:absolute;left:50%;top:50%;font-size:2.5rem;pointer-events:none;`;
            const angle = (Math.PI * 2 * i) / 40;
            const velocity = 250;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;
            heart.style.animation = `explodeHeart${i} 2s ease-out forwards`;
            const style = document.createElement('style');
            style.textContent = `@keyframes explodeHeart${i} { 0% { transform: translate(-50%, -50%) scale(0); opacity: 1; } 100% { transform: translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5); opacity: 0; } }`;
            document.head.appendChild(style);
            heartExplosionContainer.appendChild(heart);
            setTimeout(() => { heart.remove(); style.remove(); }, 2000);
        }, i * 40);
    }
    
    setTimeout(() => overlay.remove(), 4000);
}

// Love Explosion Effect
function triggerLoveExplosion() {
    const overlay = createOverlay('linear-gradient(135deg, #FF1493, #FF69B4, #FFB6C1)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:zoomIn 0.8s ease;';
    content.innerHTML = `
        <div style="font-size:6rem;margin-bottom:20px;">💕</div>
        <h2 style="font-size:3rem;color:white;margin-bottom:20px;">LOVE!</h2>
        <p style="font-size:1.5rem;color:white;">Love is in the air! 💗</p>
    `;
    overlay.appendChild(content);
    
    // Create love particles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.textContent = ['💕', '💗', '💖', '💝', '❤️'][Math.floor(Math.random() * 5)];
            particle.style.cssText = `position:absolute;left:50%;top:50%;font-size:2rem;pointer-events:none;`;
            const angle = (Math.PI * 2 * i) / 50;
            const distance = 300;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            particle.style.animation = `explodeParticle${i} 2s ease-out forwards`;
            const style = document.createElement('style');
            style.textContent = `@keyframes explodeParticle${i} { 0% { transform: translate(-50%, -50%) scale(0); opacity: 1; } 100% { transform: translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5); opacity: 0; } }`;
            document.head.appendChild(style);
            overlay.appendChild(particle);
            setTimeout(() => { particle.remove(); style.remove(); }, 2000);
        }, i * 20);
    }
    
    setTimeout(() => overlay.remove(), 3000);
}

// Beautiful Effect
function triggerBeautifulEffect() {
    const overlay = createOverlay('linear-gradient(135deg, #fbc2eb, #a6c1ee)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:fadeInUp 1s ease;';
    content.innerHTML = `
        <div style="font-size:5rem;margin-bottom:20px;">✨</div>
        <h2 style="font-size:2.5rem;color:#FF69B4;margin-bottom:20px;text-shadow:2px 2px 4px rgba(0,0,0,0.3);">Beautiful!</h2>
        <p style="font-size:1.3rem;color:#C71585;">Just like you! 💖</p>
    `;
    overlay.appendChild(content);
    createFloatingEmojis(overlay, ['✨', '💫', '⭐', '🌟'], 30);
    setTimeout(() => overlay.remove(), 3000);
}

// Smile Effect
function triggerSmileEffect() {
    const overlay = createOverlay('linear-gradient(135deg, #FFD700, #FFA500)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:bounceIn 0.8s ease;';
    content.innerHTML = `
        <div style="font-size:6rem;margin-bottom:20px;animation:rotate 2s linear infinite;">😊</div>
        <h2 style="font-size:2.5rem;color:white;margin-bottom:20px;">Your Smile!</h2>
        <p style="font-size:1.3rem;color:white;">Lights up my world! ☀️</p>
    `;
    overlay.appendChild(content);
    createFloatingEmojis(overlay, ['😊', '😄', '🥰', '😍'], 25);
    setTimeout(() => overlay.remove(), 3000);
}

// Angel Effect
function triggerAngelEffect() {
    const overlay = createOverlay('linear-gradient(135deg, #E0F7FA, #B2EBF2)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:floatDown 1s ease;';
    content.innerHTML = `
        <div style="font-size:6rem;margin-bottom:20px;">👼</div>
        <h2 style="font-size:2.5rem;color:#4FC3F7;margin-bottom:20px;">My Angel!</h2>
        <p style="font-size:1.3rem;color:#0288D1;">Heaven sent! 💙</p>
    `;
    overlay.appendChild(content);
    createFloatingEmojis(overlay, ['👼', '🕊️', '☁️', '✨'], 20);
    setTimeout(() => overlay.remove(), 3000);
}

// Star Effect
function triggerStarEffect() {
    const overlay = createOverlay('linear-gradient(135deg, #1a1a2e, #16213e)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:twinkle 1s ease;';
    content.innerHTML = `
        <div style="font-size:6rem;margin-bottom:20px;">⭐</div>
        <h2 style="font-size:2.5rem;color:#FFD700;margin-bottom:20px;text-shadow:0 0 20px #FFD700;">Shining Star!</h2>
        <p style="font-size:1.3rem;color:#FFF;">You outshine them all! ✨</p>
    `;
    overlay.appendChild(content);
    createStarField(overlay);
    setTimeout(() => overlay.remove(), 3000);
}

// Heart Rain Effect
function triggerHeartRain() {
    const overlay = createOverlay('linear-gradient(135deg, #FF6B9D, #C71585)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:heartbeat 1s ease infinite;';
    content.innerHTML = `
        <div style="font-size:6rem;margin-bottom:20px;">💗</div>
        <h2 style="font-size:2.5rem;color:white;margin-bottom:20px;">My Heart!</h2>
        <p style="font-size:1.3rem;color:#FFE4E1;">Beats only for you! 💓</p>
    `;
    overlay.appendChild(content);
    
    // Create heart rain
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = ['💗', '💕', '💖', '💝'][Math.floor(Math.random() * 4)];
            heart.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:-50px;font-size:${Math.random() * 20 + 20}px;animation:fallDown ${Math.random() * 2 + 3}s linear;pointer-events:none;`;
            overlay.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, i * 100);
    }
    
    setTimeout(() => overlay.remove(), 4000);
}

// Forever Effect
function triggerForeverEffect() {
    const overlay = createOverlay('linear-gradient(135deg, #667eea, #764ba2)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:fadeIn 1s ease;';
    content.innerHTML = `
        <div style="font-size:6rem;margin-bottom:20px;">♾️</div>
        <h2 style="font-size:2.5rem;color:white;margin-bottom:20px;">Forever & Always!</h2>
        <p style="font-size:1.3rem;color:#E1BEE7;">Eternally yours! 💕</p>
    `;
    overlay.appendChild(content);
    createFloatingEmojis(overlay, ['♾️', '💕', '💗', '✨'], 25);
    setTimeout(() => overlay.remove(), 3000);
}

// Princess Effect
function triggerPrincessEffect() {
    const overlay = createOverlay('linear-gradient(135deg, #FFE4E1, #FFB6C1)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:royalEntrance 1s ease;';
    content.innerHTML = `
        <div style="font-size:6rem;margin-bottom:20px;">👑</div>
        <h2 style="font-size:2.5rem;color:#FF1493;margin-bottom:20px;">My Princess!</h2>
        <p style="font-size:1.3rem;color:#C71585;">Royalty in my heart! 💖</p>
    `;
    overlay.appendChild(content);
    createFloatingEmojis(overlay, ['👑', '💎', '✨', '🌟'], 20);
    setTimeout(() => overlay.remove(), 3000);
}

// Dream Effect
function triggerDreamEffect() {
    const overlay = createOverlay('linear-gradient(135deg, #a8edea, #fed6e3)');
    const content = document.createElement('div');
    content.style.cssText = 'text-align:center;animation:dreamFloat 1s ease;';
    content.innerHTML = `
        <div style="font-size:6rem;margin-bottom:20px;">💫</div>
        <h2 style="font-size:2.5rem;color:#9C27B0;margin-bottom:20px;">Dream Come True!</h2>
        <p style="font-size:1.3rem;color:#7B1FA2;">You are my dream! 🌙</p>
    `;
    overlay.appendChild(content);
    createFloatingEmojis(overlay, ['💫', '🌙', '⭐', '✨'], 30);
    setTimeout(() => overlay.remove(), 3000);
}

// Helper: Create Overlay
function createOverlay(background) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `position:fixed;top:0;left:0;width:100vw;height:100vh;background:${background};z-index:10000;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.3s ease;`;
    if (document.body) {
        document.body.appendChild(overlay);
    }
    return overlay;
}

// Helper: Create Floating Emojis
function createFloatingEmojis(container, emojis, count) {
    if (!container) return;
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 30 + 20}px;animation:floatAround ${Math.random() * 3 + 2}s ease-in-out infinite;pointer-events:none;opacity:0.7;`;
            if (container) container.appendChild(emoji);
        }, i * 50);
    }
}

// Helper: Create Star Field
function createStarField(container) {
    if (!container) return;
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:2px;height:2px;background:white;border-radius:50%;animation:twinkle ${Math.random() * 2 + 1}s ease-in-out infinite;`;
        if (container) container.appendChild(star);
    }
}

// Helper: Show Secret Message with Emoji Effect
function showSecretMessage(message) {
    // Create floating emojis instead of notification
    const emojis = ['✨', '💫', '⭐', '🌟', '💖', '💗', '💕'];
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:-30px;font-size:${Math.random() * 20 + 25}px;pointer-events:none;z-index:11000;animation:secretFloat ${Math.random() * 2 + 2}s ease-out;opacity:${Math.random() * 0.5 + 0.5};`;
            if (document.body) {
                document.body.appendChild(emoji);
                setTimeout(() => emoji.remove(), 4000);
            }
        }, i * 80);
    }
    
    // Vibrate if supported
    if (navigator.vibrate) {
        navigator.vibrate([30, 50, 30]);
    }
}

const secretFloatStyle = document.createElement('style');
secretFloatStyle.textContent = `
    @keyframes secretFloat {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(${window.innerHeight + 50}px) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(secretFloatStyle);

// Add new animations
const newAnimations = document.createElement('style');
newAnimations.textContent = `
    @keyframes specialAppear {
        from { transform: scale(0.5) rotate(-180deg); opacity: 0; }
        to { transform: scale(1) rotate(0deg); opacity: 1; }
    }
    @keyframes neonPulse {
        0%, 100% { 
            text-shadow: 0 0 20px #FF1493, 0 0 40px #FF1493;
        }
        50% { 
            text-shadow: 0 0 30px #FF1493, 0 0 60px #FF1493, 0 0 90px #FF69B4;
        }
    }
    @keyframes zoomIn {
        from { transform: scale(0); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    @keyframes bounceIn {
        0% { transform: scale(0); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
    @keyframes floatDown {
        from { transform: translateY(-100px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes royalEntrance {
        from { transform: translateY(-50px) scale(0.8); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
    }
    @keyframes dreamFloat {
        from { transform: translateY(50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    @keyframes floatAround {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(20px, -20px); }
        50% { transform: translate(-20px, 20px); }
        75% { transform: translate(20px, 20px); }
    }
    @keyframes fallDown {
        to { transform: translateY(${window.innerHeight + 100}px); opacity: 0; }
    }
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(newAnimations);

console.log('%c🎁 SECRET CODES ACTIVATED! 🎁', 'color: #FF6B9D; font-size: 16px; font-weight: bold;');
console.log('%cTry typing these words:', 'color: #FFB6C1; font-size: 14px;');
console.log('%c- qandeel, love, beautiful, smile, angel, star, heart, forever, princess, dream', 'color: #FF69B4; font-size: 12px;');


// ========================================
// CLICKABLE CODE BADGES
// ========================================

// Make code badges clickable
document.addEventListener('DOMContentLoaded', () => {
    const codeBadges = document.querySelectorAll('.code-badge');
    codeBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            const code = this.textContent.trim();
            triggerSecretCodeDirectly(code);
            
            // Visual feedback
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});

// Trigger secret code directly (for clicking badges)
function triggerSecretCodeDirectly(code) {
    if (secretCodes[code]) {
        triggerSecretCode(code);
    }
}

// Add keyboard hint animation
function showKeyboardHint() {
    const hint = document.querySelector('.secret-codes-hint');
    if (hint) {
        hint.style.animation = 'hintPulse 1s ease-in-out 3';
    }
}

// Show hint after 10 seconds on final scene
setTimeout(() => {
    if (currentScene === 10) {
        showKeyboardHint();
    }
}, 10000);


// ========================================
// ADDITIONAL INTERACTIVE FEATURES
// ========================================

// Double click anywhere for surprise
let clickCount = 0;
let clickTimer = null;

document.addEventListener('click', (e) => {
    // Ignore clicks on buttons and interactive elements
    if (e.target.closest('button') || e.target.closest('.interactive-sticker') || e.target.closest('.hidden-element')) {
        return;
    }

    clickCount++;
    
    if (clickCount === 1) {
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 300);
    } else if (clickCount === 2) {
        clearTimeout(clickTimer);
        clickCount = 0;
        createClickEffect(e.clientX, e.clientY);
    }
});

// Create click effect
function createClickEffect(x, y) {
    const effects = ['💗', '💕', '✨', '⭐', '💖', '🌸'];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    
    const el = document.createElement('div');
    el.textContent = effect;
    el.style.cssText = `position:fixed;left:${x}px;top:${y}px;font-size:2rem;pointer-events:none;z-index:9999;animation:clickPop 1s ease-out forwards;`;
    document.body.appendChild(el);
    
    setTimeout(() => el.remove(), 1000);
}

const clickPopStyle = document.createElement('style');
clickPopStyle.textContent = `
    @keyframes clickPop {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1) translateY(-50px); opacity: 0; }
    }
`;
document.head.appendChild(clickPopStyle);

// Long press anywhere (mobile) for surprise
let longPressTimer = null;
let longPressStarted = false;

document.addEventListener('touchstart', (e) => {
    if (e.target.closest('button') || e.target.closest('.interactive-sticker')) {
        return;
    }
    
    longPressStarted = true;
    const touch = e.touches[0];
    
    longPressTimer = setTimeout(() => {
        if (longPressStarted) {
            createLongPressEffect(touch.clientX, touch.clientY);
        }
    }, 1000);
}, { passive: true });

document.addEventListener('touchend', () => {
    longPressStarted = false;
    if (longPressTimer) {
        clearTimeout(longPressTimer);
    }
}, { passive: true });

document.addEventListener('touchmove', () => {
    longPressStarted = false;
    if (longPressTimer) {
        clearTimeout(longPressTimer);
    }
}, { passive: true });

// Create long press effect
function createLongPressEffect(x, y) {
    if (navigator.vibrate) {
        navigator.vibrate([50, 100, 50]);
    }
    
    // Create ripple effect
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:20px;height:20px;border:3px solid rgba(255,107,157,0.8);border-radius:50%;pointer-events:none;z-index:9999;animation:rippleOut 1s ease-out forwards;`;
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 1000);
        }, i * 100);
    }
    
    // Just visual effect, no notification
    createSparkleEffect();
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleOut {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(10); opacity: 0; }
    }
`;
document.head.appendChild(rippleStyle);

// Shake device counter (for fun)
let shakeCount = 0;
let lastShakeTime = 0;

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', (event) => {
        const acceleration = event.accelerationIncludingGravity;
        const curX = acceleration.x;
        const curY = acceleration.y;
        const curZ = acceleration.z;
        
        const now = Date.now();
        
        if (Math.abs(curX - lastX) > 20 || Math.abs(curY - lastY) > 20 || Math.abs(curZ - lastZ) > 20) {
            if (now - lastShakeTime > 1000) {
                shakeCount++;
                lastShakeTime = now;
                
                if (shakeCount === 5) {
                    createShakeReward();
                    createSparkleEffect();
                    shakeCount = 0;
                }
            }
        }
    });
}

// Shake reward
function createShakeReward() {
    const emojis = ['🎉', '🎊', '✨', '💫', '⭐', '🌟'];
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:-50px;font-size:2rem;pointer-events:none;z-index:9999;animation:fallDown ${Math.random() * 2 + 2}s linear;`;
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 4000);
        }, i * 100);
    }
}

// Easter egg: Type "iloveyou" (hidden code)
const hiddenCodes = {
    'iloveyou': 'I love you too! 💗',
    'cute': 'You are the cutest! 🥰',
    'mine': 'Forever mine! 💕',
    'baby': 'My baby! 👶💗',
    'sweetheart': 'My sweetheart! 💝'
};

document.addEventListener('keydown', (e) => {
    const typedText = currentKeySequence.join('');
    
    Object.keys(hiddenCodes).forEach(code => {
        if (typedText.includes(code)) {
            createHeartBurst();
            createSparkleEffect();
            currentKeySequence = [];
        }
    });
});

// Heart burst effect
function createHeartBurst() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = '💗';
            heart.style.cssText = `position:fixed;left:50%;top:50%;font-size:1.5rem;pointer-events:none;z-index:9999;`;
            const angle = (Math.PI * 2 * i) / 15;
            const distance = 150;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            heart.style.animation = `burstOut${i} 1s ease-out forwards`;
            const style = document.createElement('style');
            style.textContent = `@keyframes burstOut${i} { 0% { transform: translate(-50%, -50%) scale(0); opacity: 1; } 100% { transform: translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1); opacity: 0; } }`;
            document.head.appendChild(style);
            document.body.appendChild(heart);
            setTimeout(() => { heart.remove(); style.remove(); }, 1000);
        }, i * 50);
    }
}

console.log('%c🎮 EXTRA FEATURES ACTIVATED! 🎮', 'color: #FF6B9D; font-size: 16px; font-weight: bold;');
console.log('%c- Double click anywhere for effects', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Long press on mobile for ripples', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Shake device 5 times for reward', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Hidden codes: iloveyou, cute, mine, baby, sweetheart', 'color: #FF69B4; font-size: 12px;');


// ========================================
// CREATIVE NEW FEATURES
// ========================================

// 1. Cursor Trail Effect (Desktop)
if (!isMobile()) {
    let cursorTrail = [];
    const maxTrail = 15;
    
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:8px;height:8px;background:radial-gradient(circle,rgba(255,107,157,0.8),transparent);border-radius:50%;pointer-events:none;z-index:9998;animation:trailFade 0.8s ease-out forwards;`;
        document.body.appendChild(trail);
        
        cursorTrail.push(trail);
        if (cursorTrail.length > maxTrail) {
            const old = cursorTrail.shift();
            old.remove();
        }
        
        setTimeout(() => trail.remove(), 800);
    });
    
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes trailFade {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(trailStyle);
}

// 2. Random Heart Effects (No text popups)

function showRandomCompliment() {
    // Just create heart burst, no text popup
    const hearts = ['💗', '💕', '💖', '💝'];
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 20 + 25}px;pointer-events:none;z-index:9999;animation:heartPulse 2s ease-out;opacity:0.8;`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }, i * 150);
    }
}

const heartPulseStyle = document.createElement('style');
heartPulseStyle.textContent = `
    @keyframes heartPulse {
        0%, 100% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1.3); opacity: 0.8; }
    }
`;
document.head.appendChild(heartPulseStyle);

// Compliment popup removed - using heart effects instead

// Show random heart effects every 30 seconds
setInterval(showRandomCompliment, 30000);

// 3. Floating Hearts Background (Subtle)
function createFloatingHeartsBackground() {
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance
            const heart = document.createElement('div');
            heart.textContent = ['💗', '💕', '💖'][Math.floor(Math.random() * 3)];
            heart.style.cssText = `position:fixed;left:${Math.random() * 100}%;bottom:-30px;font-size:${Math.random() * 15 + 15}px;opacity:${Math.random() * 0.3 + 0.2};pointer-events:none;z-index:1;animation:bgHeartFloat ${Math.random() * 10 + 15}s linear;`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 25000);
        }
    }, 2000);
}

const bgHeartStyle = document.createElement('style');
bgHeartStyle.textContent = `
    @keyframes bgHeartFloat {
        0% { transform: translateY(0) translateX(0); }
        50% { transform: translateY(-50vh) translateX(${Math.random() * 100 - 50}px); }
        100% { transform: translateY(-100vh) translateX(0); }
    }
`;
document.head.appendChild(bgHeartStyle);

createFloatingHeartsBackground();

// 4. Scene Transition Effects
let previousScene = 0;

const originalNextScene = nextScene;
nextScene = function(sceneNum) {
    // Create transition effect
    const transition = document.createElement('div');
    transition.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:radial-gradient(circle,rgba(255,107,157,0.3),transparent);z-index:9997;pointer-events:none;animation:transitionPulse 0.8s ease-out;';
    document.body.appendChild(transition);
    
    setTimeout(() => transition.remove(), 800);
    
    // Create sparkles during transition
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = '✨';
            sparkle.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 20 + 15}px;pointer-events:none;z-index:9998;animation:sparkleFade 1s ease-out;`;
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 1000);
        }, i * 30);
    }
    
    previousScene = currentScene;
    originalNextScene(sceneNum);
};

const transitionStyles = document.createElement('style');
transitionStyles.textContent = `
    @keyframes transitionPulse {
        0%, 100% { opacity: 0; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
    }
    @keyframes sparkleFade {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
    }
`;
document.head.appendChild(transitionStyles);

// 5. Idle Animation - Show hint after 20 seconds of no activity
let idleTimer = null;
let idleShown = false;

function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
        if (!idleShown && currentScene > 1) {
            showIdleHint();
            idleShown = true;
        }
    }, 20000);
}

function showIdleHint() {
    // Just create subtle sparkle effect, no text
    const sparkles = ['✨', '�'];
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.cssText = `position:fixed;left:${Math.random() * 100}%;bottom:${Math.random() * 30 + 10}%;font-size:${Math.random() * 10 + 15}px;pointer-events:none;z-index:9999;animation:subtleSparkle 2s ease-out;opacity:0.6;`;
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 2000);
        }, i * 100);
    }
}

const subtleSparkleStyle = document.createElement('style');
subtleSparkleStyle.textContent = `
    @keyframes subtleSparkle {
        0% { transform: translateY(0) scale(0); opacity: 0; }
        50% { transform: translateY(-20px) scale(1); opacity: 0.6; }
        100% { transform: translateY(-40px) scale(0.5); opacity: 0; }
    }
`;
document.head.appendChild(subtleSparkleStyle);

// Hint popup removed - using sparkle effects instead

// Reset idle timer on any activity
['click', 'touchstart', 'keydown', 'mousemove'].forEach(event => {
    document.addEventListener(event, resetIdleTimer, { passive: true });
});

resetIdleTimer();

// 6. Confetti on Secret Unlock
function createConfetti() {
    const colors = ['#FF6B9D', '#FFB6C1', '#FF69B4', '#FFD700', '#FFA500'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:-20px;width:${Math.random() * 10 + 5}px;height:${Math.random() * 10 + 5}px;background:${colors[Math.floor(Math.random() * colors.length)]};pointer-events:none;z-index:9999;animation:confettiFall ${Math.random() * 3 + 2}s linear;transform:rotate(${Math.random() * 360}deg);`;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}

const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(${window.innerHeight + 50}px) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(confettiStyle);

// Trigger confetti on certain secret codes
const originalTriggerSecretCode = triggerSecretCode;
triggerSecretCode = function(code) {
    if (['qandeel', 'love', 'princess'].includes(code)) {
        createConfetti();
    }
    originalTriggerSecretCode(code);
};

// 7. Progress Tracker (How many secrets found)
let secretsFound = 0;
const totalSecrets = 7;

function updateSecretProgress() {
    secretsFound = unlockedSecrets.size;
    if (secretsFound === totalSecrets) {
        showAllSecretsFoundCelebration();
    }
}

function showAllSecretsFoundCelebration() {
    // Big confetti + emoji explosion, no text popup
    createConfetti();
    
    // Create emoji explosion
    const celebEmojis = ['🎉', '🎊', '✨', '💫', '⭐', '🌟', '💖', '💗'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = celebEmojis[Math.floor(Math.random() * celebEmojis.length)];
            emoji.style.cssText = `position:fixed;left:50%;top:50%;font-size:${Math.random() * 30 + 30}px;pointer-events:none;z-index:10000;`;
            const angle = (Math.PI * 2 * i) / 30;
            const distance = 200;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance;
            emoji.style.animation = `celebBurst${i} 2s ease-out forwards`;
            const style = document.createElement('style');
            style.textContent = `@keyframes celebBurst${i} { 0% { transform: translate(-50%, -50%) scale(0); opacity: 1; } 100% { transform: translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.5); opacity: 0; } }`;
            document.head.appendChild(style);
            document.body.appendChild(emoji);
            setTimeout(() => { emoji.remove(); style.remove(); }, 2000);
        }, i * 50);
    }
    
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 100]);
    }
}

// Celebration popup removed - using confetti and emoji burst instead

// Note: unlockSecret is already wrapped above with vibration
// Just add progress tracking to existing wrapper
const originalUnlockSecretWithProgress = unlockSecret;
unlockSecret = function(secretNum) {
    originalUnlockSecretWithProgress(secretNum);
    updateSecretProgress();
};

console.log('%c🎨 CREATIVE FEATURES LOADED! 🎨', 'color: #FF6B9D; font-size: 16px; font-weight: bold;');
console.log('%c- Cursor trail effect (desktop)', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Random compliments every 30s', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Floating hearts background', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Scene transition sparkles', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Idle hints after 20s', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Confetti celebrations', 'color: #FFB6C1; font-size: 12px;');
console.log('%c- Secret progress tracker', 'color: #FFB6C1; font-size: 12px;');


// ========================================
// ADDITIONAL CREATIVE FEATURES (NEW)
// ========================================

// 1. Parallax Effect on Mouse Move (Desktop)
if (!isMobile()) {
    let parallaxElements = [];
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Move background elements slightly
        document.querySelectorAll('.sakura-fall, .butterfly-trail, .floating-hearts-bg').forEach((el, index) => {
            if (el) {
                const speed = (index + 1) * 5;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                el.style.transform = `translate(${x}px, ${y}px)`;
            }
        });
    });
}

// 2. Typing Sound Effect (Visual)
let typingIndicator = null;

document.addEventListener('keydown', (e) => {
    // Create typing ripple effect
    if (!typingIndicator) {
        typingIndicator = document.createElement('div');
        typingIndicator.style.cssText = 'position:fixed;bottom:20px;right:20px;width:40px;height:40px;border:3px solid rgba(255,107,157,0.6);border-radius:50%;pointer-events:none;z-index:9999;animation:typingRipple 0.5s ease-out;';
        document.body.appendChild(typingIndicator);
        
        setTimeout(() => {
            if (typingIndicator) {
                typingIndicator.remove();
                typingIndicator = null;
            }
        }, 500);
    }
});

const typingRippleStyle = document.createElement('style');
typingRippleStyle.textContent = `
    @keyframes typingRipple {
        0% { transform: scale(0.5); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
`;
document.head.appendChild(typingRippleStyle);

// 3. Scene-Specific Ambient Effects
function addSceneAmbience(sceneNum) {
    const scene = document.getElementById(`scene${sceneNum}`);
    if (!scene) return;
    
    switch(sceneNum) {
        case 1: // Stars twinkle more
            createExtraStars(scene);
            break;
        case 2: // More butterflies
            createAmbientButterflies(scene);
            break;
        case 3: // Sunset glow
            createSunsetGlow(scene);
            break;
        case 5: // Shooting stars
            createShootingStars(scene);
            break;
        case 10: // Aurora effect
            createAuroraWaves(scene);
            break;
    }
}

function createExtraStars(scene) {
    setInterval(() => {
        if (!scene.classList.contains('active')) return;
        const star = document.createElement('div');
        star.textContent = '⭐';
        star.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 10 + 8}px;pointer-events:none;animation:starTwinkle ${Math.random() * 2 + 2}s ease-in-out;opacity:0;`;
        scene.appendChild(star);
        setTimeout(() => star.remove(), 4000);
    }, 3000);
}

function createAmbientButterflies(scene) {
    setInterval(() => {
        if (!scene.classList.contains('active')) return;
        const butterfly = document.createElement('div');
        butterfly.textContent = '🦋';
        butterfly.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 15 + 12}px;pointer-events:none;animation:butterflyDrift ${Math.random() * 5 + 5}s ease-in-out;opacity:0.6;`;
        scene.appendChild(butterfly);
        setTimeout(() => butterfly.remove(), 10000);
    }, 4000);
}

function createSunsetGlow(scene) {
    const glow = document.createElement('div');
    glow.style.cssText = 'position:absolute;top:20%;left:50%;transform:translateX(-50%);width:300px;height:300px;background:radial-gradient(circle,rgba(255,215,0,0.3),transparent);border-radius:50%;pointer-events:none;animation:glowPulse 4s ease-in-out infinite;';
    scene.appendChild(glow);
}

function createShootingStars(scene) {
    setInterval(() => {
        if (!scene.classList.contains('active')) return;
        const star = document.createElement('div');
        star.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 30}%;width:2px;height:2px;background:white;box-shadow:0 0 10px white;pointer-events:none;animation:shootingStar 1.5s linear;`;
        scene.appendChild(star);
        setTimeout(() => star.remove(), 1500);
    }, 8000);
}

function createAuroraWaves(scene) {
    const aurora = document.createElement('div');
    aurora.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(147,112,219,0.2),rgba(255,107,157,0.2),transparent);pointer-events:none;animation:auroraMove 10s ease-in-out infinite;';
    scene.appendChild(aurora);
}

const sceneAmbientStyles = document.createElement('style');
sceneAmbientStyles.textContent = `
    @keyframes starTwinkle {
        0%, 100% { opacity: 0; transform: scale(0); }
        50% { opacity: 1; transform: scale(1.5); }
    }
    @keyframes butterflyDrift {
        0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
        10% { opacity: 0.6; }
        90% { opacity: 0.6; }
        100% { transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(360deg); opacity: 0; }
    }
    @keyframes glowPulse {
        0%, 100% { opacity: 0.3; transform: translateX(-50%) scale(1); }
        50% { opacity: 0.6; transform: translateX(-50%) scale(1.2); }
    }
    @keyframes shootingStar {
        0% { transform: translate(0, 0); opacity: 1; }
        100% { transform: translate(-200px, 200px); opacity: 0; }
    }
    @keyframes auroraMove {
        0%, 100% { transform: translateX(-50%); }
        50% { transform: translateX(50%); }
    }
`;
document.head.appendChild(sceneAmbientStyles);

// Add ambience to scenes
[1, 2, 3, 5, 10].forEach(num => addSceneAmbience(num));

// 4. Interactive Sticker Reactions (Enhanced)
document.addEventListener('DOMContentLoaded', () => {
    const stickers = document.querySelectorAll('.interactive-sticker, .sticker-char, .final-couple-sticker');
    
    stickers.forEach(sticker => {
        sticker.addEventListener('mouseenter', function() {
            // Create hover glow
            const glow = document.createElement('div');
            glow.className = 'sticker-glow';
            glow.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:120%;height:120%;background:radial-gradient(circle,rgba(255,107,157,0.4),transparent);border-radius:50%;pointer-events:none;animation:glowExpand 0.5s ease-out;z-index:-1;';
            this.style.position = 'relative';
            this.appendChild(glow);
            
            setTimeout(() => glow.remove(), 500);
        });
    });
});

const stickerGlowStyle = document.createElement('style');
stickerGlowStyle.textContent = `
    @keyframes glowExpand {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    }
`;
document.head.appendChild(stickerGlowStyle);

// 5. Memory Card Flip Sound (Visual)
document.addEventListener('DOMContentLoaded', () => {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        card.addEventListener('click', function() {
            // Create flip sparkles
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.textContent = '✨';
                    sparkle.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:15px;pointer-events:none;animation:flipSparkle 0.8s ease-out;`;
                    this.appendChild(sparkle);
                    setTimeout(() => sparkle.remove(), 800);
                }, i * 50);
            }
        });
    });
});

const flipSparkleStyle = document.createElement('style');
flipSparkleStyle.textContent = `
    @keyframes flipSparkle {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(1.5) rotate(180deg); opacity: 0; }
    }
`;
document.head.appendChild(flipSparkleStyle);

// 6. Scroll Progress Indicator (Subtle)
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'scrollIndicator';
    indicator.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,var(--pink-primary),var(--neon-pink));z-index:10001;width:0;transition:width 0.3s ease;pointer-events:none;';
    document.body.appendChild(indicator);
    
    document.querySelectorAll('.scene').forEach(scene => {
        scene.addEventListener('scroll', function() {
            const scrollPercent = (this.scrollTop / (this.scrollHeight - this.clientHeight)) * 100;
            indicator.style.width = scrollPercent + '%';
        });
    });
}

createScrollIndicator();

// 7. Button Hover Effects (Enhanced)
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button, .magical-btn, .start-btn, .next-btn, .reveal-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Create button aura
            const aura = document.createElement('div');
            aura.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;background:radial-gradient(circle,rgba(255,255,255,0.3),transparent);border-radius:inherit;pointer-events:none;animation:auraExpand 0.6s ease-out;z-index:-1;';
            this.style.position = 'relative';
            this.appendChild(aura);
            
            setTimeout(() => aura.remove(), 600);
        });
    });
});

const auraExpandStyle = document.createElement('style');
auraExpandStyle.textContent = `
    @keyframes auraExpand {
        0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
    }
`;
document.head.appendChild(auraExpandStyle);

// 8. Scene Entry Animation
const originalNextSceneEnhanced = nextScene;
nextScene = function(sceneNum) {
    originalNextSceneEnhanced(sceneNum);
    
    // Add entry animation to new scene
    setTimeout(() => {
        const newScene = document.getElementById(`scene${sceneNum}`);
        if (newScene) {
            // Create welcome sparkles
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.textContent = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
                    sparkle.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 15 + 15}px;pointer-events:none;animation:welcomeSparkle 2s ease-out;z-index:100;`;
                    newScene.appendChild(sparkle);
                    setTimeout(() => sparkle.remove(), 2000);
                }, i * 80);
            }
        }
    }, 500);
};

const welcomeSparkleStyle = document.createElement('style');
welcomeSparkleStyle.textContent = `
    @keyframes welcomeSparkle {
        0% { transform: scale(0) translateY(0); opacity: 0; }
        20% { opacity: 1; }
        100% { transform: scale(1) translateY(-50px); opacity: 0; }
    }
`;
document.head.appendChild(welcomeSparkleStyle);

// 9. Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    if (konamiCode.length > 10) konamiCode.shift();
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        triggerKonamiReward();
        konamiCode = [];
    }
});

function triggerKonamiReward() {
    // Epic rainbow effect
    const rainbow = document.createElement('div');
    rainbow.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:linear-gradient(45deg,red,orange,yellow,green,blue,indigo,violet);opacity:0.3;z-index:9999;pointer-events:none;animation:rainbowPulse 2s ease-in-out;';
    document.body.appendChild(rainbow);
    
    // Massive emoji explosion
    const emojis = ['🎮', '🎯', '🏆', '👾', '🎪', '🎨', '🎭', '🎪'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 40 + 30}px;pointer-events:none;z-index:10000;animation:konamiExplode 3s ease-out;`;
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 3000);
        }, i * 40);
    }
    
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }
    
    setTimeout(() => rainbow.remove(), 2000);
}

const konamiStyles = document.createElement('style');
konamiStyles.textContent = `
    @keyframes rainbowPulse {
        0%, 100% { opacity: 0; }
        50% { opacity: 0.3; }
    }
    @keyframes konamiExplode {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(2) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(konamiStyles);

// 10. Time-Based Greetings (Visual only)
function getTimeBasedEffect() {
    const hour = new Date().getHours();
    let effect = null;
    
    if (hour >= 5 && hour < 12) {
        // Morning - Sun rays
        effect = { emoji: '☀️', color: '#FFD700' };
    } else if (hour >= 12 && hour < 17) {
        // Afternoon - Bright
        effect = { emoji: '🌤️', color: '#FFA500' };
    } else if (hour >= 17 && hour < 20) {
        // Evening - Sunset
        effect = { emoji: '🌅', color: '#FF6B9D' };
    } else {
        // Night - Moon and stars
        effect = { emoji: '🌙', color: '#9370DB' };
    }
    
    return effect;
}

// Add time-based ambient effect
setTimeout(() => {
    const timeEffect = getTimeBasedEffect();
    const ambient = document.createElement('div');
    ambient.textContent = timeEffect.emoji;
    ambient.style.cssText = `position:fixed;top:20px;left:20px;font-size:30px;opacity:0.4;pointer-events:none;z-index:9998;animation:timeAmbient 3s ease-in-out infinite;filter:drop-shadow(0 0 10px ${timeEffect.color});`;
    document.body.appendChild(ambient);
}, 2000);

const timeAmbientStyle = document.createElement('style');
timeAmbientStyle.textContent = `
    @keyframes timeAmbient {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
        50% { transform: translateY(-10px) scale(1.1); opacity: 0.6; }
    }
`;
document.head.appendChild(timeAmbientStyle);

console.log('%c🎨 10 NEW CREATIVE FEATURES ADDED! 🎨', 'color: #FF6B9D; font-size: 16px; font-weight: bold;');
console.log('%c1. Parallax mouse effect', 'color: #FFB6C1; font-size: 12px;');
console.log('%c2. Typing ripple indicator', 'color: #FFB6C1; font-size: 12px;');
console.log('%c3. Scene-specific ambience', 'color: #FFB6C1; font-size: 12px;');
console.log('%c4. Enhanced sticker reactions', 'color: #FFB6C1; font-size: 12px;');
console.log('%c5. Memory card flip sparkles', 'color: #FFB6C1; font-size: 12px;');
console.log('%c6. Scroll progress indicator', 'color: #FFB6C1; font-size: 12px;');
console.log('%c7. Button hover auras', 'color: #FFB6C1; font-size: 12px;');
console.log('%c8. Scene entry sparkles', 'color: #FFB6C1; font-size: 12px;');
console.log('%c9. Konami code easter egg', 'color: #FFB6C1; font-size: 12px;');
console.log('%c10. Time-based ambient effects', 'color: #FFB6C1; font-size: 12px;');
console.log('%c💡 Try: ↑↑↓↓←→←→BA for secret!', 'color: #FF69B4; font-size: 12px;');


// ========================================
// WORLD-CLASS ROMANTIC FEATURES
// Inspired by: Korean dramas, Japanese anime, TikTok trends, 
// Instagram aesthetics, Pinterest boards, Global love stories
// ========================================

// 1. KOREAN DRAMA STYLE: Falling Petals on Click
document.addEventListener('click', (e) => {
    if (Math.random() > 0.7) { // 30% chance
        const petals = ['🌸', '🌺', '🌼', '🌻', '🌷'];
        const petal = document.createElement('div');
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        petal.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;font-size:${Math.random() * 15 + 20}px;pointer-events:none;z-index:9999;animation:petalFall ${Math.random() * 2 + 3}s ease-in;`;
        document.body.appendChild(petal);
        setTimeout(() => petal.remove(), 5000);
    }
});

const petalFallStyle = document.createElement('style');
petalFallStyle.textContent = `
    @keyframes petalFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(${window.innerHeight}px) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(petalFallStyle);

// 2. ANIME STYLE: Sparkle Trail on Touch/Drag (Mobile)
let touchTrail = [];
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const sparkle = document.createElement('div');
    sparkle.textContent = ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)];
    sparkle.style.cssText = `position:fixed;left:${touch.clientX}px;top:${touch.clientY}px;font-size:${Math.random() * 10 + 15}px;pointer-events:none;z-index:9999;animation:sparkleTrail 0.8s ease-out;`;
    document.body.appendChild(sparkle);
    
    touchTrail.push(sparkle);
    if (touchTrail.length > 20) {
        const old = touchTrail.shift();
        old.remove();
    }
    
    setTimeout(() => sparkle.remove(), 800);
}, { passive: true });

const sparkleTrailStyle = document.createElement('style');
sparkleTrailStyle.textContent = `
    @keyframes sparkleTrail {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
    }
`;
document.head.appendChild(sparkleTrailStyle);

// 3. TIKTOK TREND: Screen Flash on Special Moments
function createScreenFlash(color = 'rgba(255,107,157,0.3)') {
    const flash = document.createElement('div');
    flash.style.cssText = `position:fixed;top:0;left:0;width:100vw;height:100vh;background:${color};z-index:9999;pointer-events:none;animation:screenFlash 0.5s ease-out;`;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 500);
}

const screenFlashStyle = document.createElement('style');
screenFlashStyle.textContent = `
    @keyframes screenFlash {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(screenFlashStyle);

// Trigger flash on special codes
const originalTriggerSecretCodeFlash = triggerSecretCode;
triggerSecretCode = function(code) {
    if (['qandeel', 'love', 'princess'].includes(code)) {
        createScreenFlash();
    }
    originalTriggerSecretCodeFlash(code);
};

// 4. INSTAGRAM AESTHETIC: Polaroid Photo Effect
function createPolaroidMoment() {
    const polaroid = document.createElement('div');
    polaroid.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) rotate(-5deg);width:250px;height:300px;background:white;padding:15px;box-shadow:0 20px 60px rgba(0,0,0,0.3);z-index:10000;animation:polaroidDrop 1s ease-out;';
    
    const photo = document.createElement('div');
    photo.style.cssText = 'width:100%;height:220px;background:linear-gradient(135deg,#fbc2eb,#a6c1ee);display:flex;align-items:center;justify-content:center;font-size:3rem;';
    photo.textContent = '💗';
    
    const caption = document.createElement('div');
    caption.style.cssText = 'margin-top:10px;text-align:center;font-family:Pacifico,cursive;color:#333;font-size:1.2rem;';
    caption.textContent = 'With Love 💕';
    
    polaroid.appendChild(photo);
    polaroid.appendChild(caption);
    document.body.appendChild(polaroid);
    
    setTimeout(() => {
        polaroid.style.animation = 'polaroidFlyAway 1s ease-in forwards';
        setTimeout(() => polaroid.remove(), 1000);
    }, 3000);
}

const polaroidStyles = document.createElement('style');
polaroidStyles.textContent = `
    @keyframes polaroidDrop {
        0% { transform: translate(-50%, -150%) rotate(-5deg); opacity: 0; }
        60% { transform: translate(-50%, -45%) rotate(-5deg); }
        100% { transform: translate(-50%, -50%) rotate(-5deg); opacity: 1; }
    }
    @keyframes polaroidFlyAway {
        0% { transform: translate(-50%, -50%) rotate(-5deg); opacity: 1; }
        100% { transform: translate(-50%, -200%) rotate(20deg); opacity: 0; }
    }
`;
document.head.appendChild(polaroidStyles);

// Trigger polaroid randomly
setInterval(() => {
    if (Math.random() > 0.95 && currentScene > 3) { // 5% chance after scene 3
        createPolaroidMoment();
    }
}, 60000); // Check every minute

// 5. PINTEREST AESTHETIC: Mood Board Collage
function createMoodBoardMoment() {
    const moodBoard = document.createElement('div');
    moodBoard.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;max-width:600px;height:400px;background:rgba(255,255,255,0.95);border-radius:20px;padding:20px;z-index:10000;box-shadow:0 30px 80px rgba(0,0,0,0.4);animation:moodBoardAppear 0.8s ease-out;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;';
    
    const items = [
        { emoji: '💗', text: 'Love' },
        { emoji: '✨', text: 'Magic' },
        { emoji: '🌸', text: 'Beauty' },
        { emoji: '💫', text: 'Dreams' },
        { emoji: '🌙', text: 'Night' },
        { emoji: '⭐', text: 'Stars' },
        { emoji: '💕', text: 'Forever' },
        { emoji: '🦋', text: 'Free' },
        { emoji: '🌹', text: 'Romance' }
    ];
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.style.cssText = 'background:linear-gradient(135deg,#ffecd2,#fcb69f);border-radius:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:15px;transition:transform 0.3s ease;cursor:pointer;';
        card.innerHTML = `<div style="font-size:2.5rem;margin-bottom:5px;">${item.emoji}</div><div style="font-size:0.9rem;color:#8B4513;">${item.text}</div>`;
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
        
        moodBoard.appendChild(card);
    });
    
    document.body.appendChild(moodBoard);
    
    setTimeout(() => {
        moodBoard.style.animation = 'moodBoardDisappear 0.8s ease-in forwards';
        setTimeout(() => moodBoard.remove(), 800);
    }, 5000);
}

const moodBoardStyles = document.createElement('style');
moodBoardStyles.textContent = `
    @keyframes moodBoardAppear {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    @keyframes moodBoardDisappear {
        0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    }
`;
document.head.appendChild(moodBoardStyles);

// 6. JAPANESE AESTHETIC: Origami Crane Flying
function createOrigamiCrane() {
    const crane = document.createElement('div');
    crane.textContent = '🕊️';
    crane.style.cssText = `position:fixed;left:-50px;top:${Math.random() * 50 + 25}%;font-size:${Math.random() * 20 + 30}px;pointer-events:none;z-index:9999;animation:craneFly ${Math.random() * 5 + 8}s linear;`;
    document.body.appendChild(crane);
    setTimeout(() => crane.remove(), 13000);
}

const craneFlyStyle = document.createElement('style');
craneFlyStyle.textContent = `
    @keyframes craneFly {
        0% { transform: translateX(0) translateY(0) rotate(0deg); }
        25% { transform: translateX(${window.innerWidth * 0.3}px) translateY(-30px) rotate(10deg); }
        50% { transform: translateX(${window.innerWidth * 0.6}px) translateY(0) rotate(-10deg); }
        75% { transform: translateX(${window.innerWidth * 0.8}px) translateY(-20px) rotate(5deg); }
        100% { transform: translateX(${window.innerWidth + 50}px) translateY(-50px) rotate(0deg); }
    }
`;
document.head.appendChild(craneFlyStyle);

// Random crane every 2 minutes
setInterval(() => {
    if (Math.random() > 0.5) {
        createOrigamiCrane();
    }
}, 120000);

// 7. DUDU BUBU STYLE: Cute Character Peek
function createCharacterPeek() {
    const positions = ['left', 'right', 'bottom'];
    const position = positions[Math.floor(Math.random() * positions.length)];
    
    const character = document.createElement('div');
    character.style.cssText = `position:fixed;${position}:-100px;${position === 'bottom' ? 'left:50%;transform:translateX(-50%);' : 'top:50%;transform:translateY(-50%);'}font-size:80px;z-index:9999;animation:characterPeek${position} 3s ease-in-out;pointer-events:none;`;
    character.textContent = ['🐻', '🐰', '🐱', '🐼'][Math.floor(Math.random() * 4)];
    
    document.body.appendChild(character);
    setTimeout(() => character.remove(), 3000);
}

const characterPeekStyles = document.createElement('style');
characterPeekStyles.textContent = `
    @keyframes characterPeekleft {
        0%, 100% { left: -100px; }
        50% { left: 50px; }
    }
    @keyframes characterPeekright {
        0%, 100% { right: -100px; }
        50% { right: 50px; }
    }
    @keyframes characterPeekbottom {
        0%, 100% { bottom: -100px; }
        50% { bottom: 50px; }
    }
`;
document.head.appendChild(characterPeekStyles);

// Random peek every 90 seconds
setInterval(() => {
    if (Math.random() > 0.6) {
        createCharacterPeek();
    }
}, 90000);

// 8. LOFI AESTHETIC: Vinyl Record Spin
function createVinylRecord() {
    const vinyl = document.createElement('div');
    vinyl.style.cssText = 'position:fixed;bottom:30px;right:30px;width:60px;height:60px;background:radial-gradient(circle,#1a1a1a 30%,#8B4513 31%,#8B4513 70%,#1a1a1a 71%);border-radius:50%;z-index:9999;animation:vinylSpin 3s linear infinite;box-shadow:0 5px 20px rgba(0,0,0,0.3);';
    
    const center = document.createElement('div');
    center.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:15px;height:15px;background:#FFD700;border-radius:50%;';
    
    vinyl.appendChild(center);
    document.body.appendChild(vinyl);
    
    setTimeout(() => {
        vinyl.style.animation = 'vinylFadeOut 1s ease-out forwards';
        setTimeout(() => vinyl.remove(), 1000);
    }, 10000);
}

const vinylStyles = document.createElement('style');
vinylStyles.textContent = `
    @keyframes vinylSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    @keyframes vinylFadeOut {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0.5); }
    }
`;
document.head.appendChild(vinylStyles);

// Show vinyl occasionally
setInterval(() => {
    if (Math.random() > 0.8 && currentScene > 2) {
        createVinylRecord();
    }
}, 150000);

// 9. MILK & MOCHA STYLE: Bubble Chat
function createBubbleChat() {
    const messages = [
        '💕', '✨', '🥰', '😊', '💖',
        '💗', '🌸', '⭐', '💫', '🌟'
    ];
    
    const bubble = document.createElement('div');
    bubble.style.cssText = 'position:fixed;bottom:100px;right:50px;background:white;padding:15px 20px;border-radius:20px 20px 5px 20px;box-shadow:0 10px 30px rgba(0,0,0,0.2);z-index:9999;animation:bubblePop 0.5s ease-out;font-size:2rem;';
    bubble.textContent = messages[Math.floor(Math.random() * messages.length)];
    
    document.body.appendChild(bubble);
    
    setTimeout(() => {
        bubble.style.animation = 'bubbleFloat 1s ease-in forwards';
        setTimeout(() => bubble.remove(), 1000);
    }, 2000);
}

const bubbleChatStyles = document.createElement('style');
bubbleChatStyles.textContent = `
    @keyframes bubblePop {
        0% { transform: scale(0); opacity: 0; }
        60% { transform: scale(1.1); }
        100% { transform: scale(1); opacity: 1; }
    }
    @keyframes bubbleFloat {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-100px); opacity: 0; }
    }
`;
document.head.appendChild(bubbleChatStyles);

// Random bubble chat
setInterval(() => {
    if (Math.random() > 0.85) {
        createBubbleChat();
    }
}, 45000);

// 10. SURPRISE: Weather-Based Effects
function getWeatherEffect() {
    // Simulate weather (in real app, use weather API)
    const weather = ['sunny', 'rainy', 'snowy', 'cloudy'][Math.floor(Math.random() * 4)];
    
    switch(weather) {
        case 'rainy':
            createRainEffect();
            break;
        case 'snowy':
            createSnowEffect();
            break;
        case 'sunny':
            createSunRays();
            break;
    }
}

function createRainEffect() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:-20px;width:2px;height:20px;background:linear-gradient(transparent,rgba(173,216,230,0.8));pointer-events:none;z-index:9998;animation:rainFall ${Math.random() * 1 + 1}s linear;`;
            document.body.appendChild(drop);
            setTimeout(() => drop.remove(), 2000);
        }, i * 100);
    }
}

function createSnowEffect() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const flake = document.createElement('div');
            flake.textContent = '❄️';
            flake.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:-30px;font-size:${Math.random() * 15 + 15}px;pointer-events:none;z-index:9998;animation:snowFall ${Math.random() * 3 + 4}s linear;opacity:0.8;`;
            document.body.appendChild(flake);
            setTimeout(() => flake.remove(), 7000);
        }, i * 150);
    }
}

function createSunRays() {
    const rays = document.createElement('div');
    rays.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 80% 20%,rgba(255,215,0,0.2),transparent 50%);pointer-events:none;z-index:9998;animation:raysPulse 3s ease-in-out;';
    document.body.appendChild(rays);
    setTimeout(() => rays.remove(), 3000);
}

const weatherStyles = document.createElement('style');
weatherStyles.textContent = `
    @keyframes rainFall {
        0% { transform: translateY(0); }
        100% { transform: translateY(${window.innerHeight}px); }
    }
    @keyframes snowFall {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(${window.innerHeight}px) rotate(360deg); }
    }
    @keyframes raysPulse {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(weatherStyles);

// Random weather effect every 3 minutes
setInterval(() => {
    if (Math.random() > 0.7) {
        getWeatherEffect();
    }
}, 180000);

// 11. SURPRISE: Fireworks on Special Moments
function createFireworks() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight * 0.5);
            
            for (let j = 0; j < 20; j++) {
                const particle = document.createElement('div');
                particle.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:4px;height:4px;background:${['#FF6B9D', '#FFD700', '#FF69B4', '#FFA500'][Math.floor(Math.random() * 4)]};border-radius:50%;pointer-events:none;z-index:10000;`;
                
                const angle = (Math.PI * 2 * j) / 20;
                const velocity = Math.random() * 100 + 50;
                const tx = Math.cos(angle) * velocity;
                const ty = Math.sin(angle) * velocity;
                
                particle.style.animation = `firework${i}${j} 1.5s ease-out forwards`;
                
                const style = document.createElement('style');
                style.textContent = `@keyframes firework${i}${j} { 0% { transform: translate(0,0); opacity: 1; } 100% { transform: translate(${tx}px,${ty}px); opacity: 0; } }`;
                document.head.appendChild(style);
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                    style.remove();
                }, 1500);
            }
        }, i * 300);
    }
}

// Trigger fireworks on finding all secrets
const originalUpdateSecretProgress = updateSecretProgress;
updateSecretProgress = function() {
    originalUpdateSecretProgress();
    if (unlockedSecrets.size === 7) {
        setTimeout(() => createFireworks(), 1000);
    }
};

console.log('%c🌍 WORLD-CLASS FEATURES LOADED! 🌍', 'color: #FF6B9D; font-size: 16px; font-weight: bold;');
console.log('%c✨ Korean Drama: Falling petals', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Anime: Touch sparkle trail', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ TikTok: Screen flash effects', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Instagram: Polaroid moments', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Pinterest: Mood board collage', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Japanese: Origami crane flying', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Dudu Bubu: Character peek', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Lofi: Vinyl record spin', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Milk & Mocha: Bubble chat', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Weather: Rain/Snow/Sun effects', 'color: #FFB6C1; font-size: 12px;');
console.log('%c✨ Surprise: Fireworks celebration', 'color: #FFB6C1; font-size: 12px;');


// ========================================
// 5 MORE UNIQUE SURPRISE FEATURES
// Inspired by: Global romantic trends, Gaming aesthetics, 
// Social media viral moments, Emotional storytelling
// ========================================

// 1. SURPRISE: Love Letter Envelope Drop
function createLoveLetterDrop() {
    const envelope = document.createElement('div');
    envelope.style.cssText = 'position:fixed;top:-100px;left:50%;transform:translateX(-50%);width:80px;height:60px;background:linear-gradient(135deg,#FFB6C1,#FF69B4);border-radius:5px;z-index:10000;box-shadow:0 10px 30px rgba(255,107,157,0.4);animation:envelopeDrop 2s ease-out forwards;cursor:pointer;';
    
    // Add envelope flap
    const flap = document.createElement('div');
    flap.style.cssText = 'position:absolute;top:0;left:0;width:0;height:0;border-left:40px solid transparent;border-right:40px solid transparent;border-top:30px solid #FF1493;';
    envelope.appendChild(flap);
    
    // Add heart seal
    const seal = document.createElement('div');
    seal.textContent = '💗';
    seal.style.cssText = 'position:absolute;top:15px;left:50%;transform:translateX(-50%);font-size:20px;';
    envelope.appendChild(seal);
    
    document.body.appendChild(envelope);
    
    // Click to open
    envelope.addEventListener('click', function() {
        this.style.animation = 'envelopeOpen 0.8s ease-out forwards';
        
        setTimeout(() => {
            // Show letter content
            const letter = document.createElement('div');
            letter.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:300px;padding:30px;background:rgba(255,255,255,0.98);border-radius:15px;box-shadow:0 20px 60px rgba(0,0,0,0.3);z-index:10001;font-family:cursive;color:#8B4513;text-align:center;animation:letterUnfold 0.8s ease-out;';
            letter.innerHTML = `
                <div style="font-size:2rem;margin-bottom:15px;">💌</div>
                <p style="font-size:1.1rem;line-height:1.6;margin-bottom:15px;">You are loved more than words can express 💗</p>
                <p style="font-size:0.9rem;font-style:italic;color:#C71585;">- Always & Forever</p>
            `;
            document.body.appendChild(letter);
            
            // Close letter after 5 seconds
            setTimeout(() => {
                letter.style.animation = 'letterFold 0.8s ease-in forwards';
                setTimeout(() => {
                    letter.remove();
                    envelope.remove();
                }, 800);
            }, 5000);
        }, 800);
    });
    
    // Auto remove if not clicked
    setTimeout(() => {
        if (envelope.parentElement) {
            envelope.style.animation = 'envelopeFlyAway 1s ease-in forwards';
            setTimeout(() => envelope.remove(), 1000);
        }
    }, 8000);
}

const loveLetterStyles = document.createElement('style');
loveLetterStyles.textContent = `
    @keyframes envelopeDrop {
        0% { top: -100px; transform: translateX(-50%) rotate(-10deg); }
        60% { top: 45%; transform: translateX(-50%) rotate(5deg); }
        100% { top: 40%; transform: translateX(-50%) rotate(0deg); }
    }
    @keyframes envelopeOpen {
        0% { transform: translateX(-50%) scale(1); }
        100% { transform: translateX(-50%) scale(0.5); opacity: 0; }
    }
    @keyframes envelopeFlyAway {
        0% { top: 40%; opacity: 1; }
        100% { top: -100px; opacity: 0; }
    }
    @keyframes letterUnfold {
        0% { transform: translate(-50%,-50%) scale(0.5) rotateX(90deg); opacity: 0; }
        100% { transform: translate(-50%,-50%) scale(1) rotateX(0deg); opacity: 1; }
    }
    @keyframes letterFold {
        0% { transform: translate(-50%,-50%) scale(1) rotateX(0deg); opacity: 1; }
        100% { transform: translate(-50%,-50%) scale(0.5) rotateX(90deg); opacity: 0; }
    }
`;
document.head.appendChild(loveLetterStyles);

// Random love letter every 4 minutes
setInterval(() => {
    if (Math.random() > 0.6 && currentScene > 2) {
        createLoveLetterDrop();
    }
}, 240000);

// 2. SURPRISE: Shooting Star Wish System
function createShootingStarWish() {
    const star = document.createElement('div');
    star.textContent = '⭐';
    star.style.cssText = `position:fixed;left:${Math.random() * 50 + 50}%;top:${Math.random() * 30}%;font-size:30px;z-index:10000;cursor:pointer;animation:shootingStarPath 3s linear;filter:drop-shadow(0 0 10px gold);`;
    
    let clicked = false;
    
    star.addEventListener('click', function() {
        if (!clicked) {
            clicked = true;
            this.style.animation = 'none';
            
            // Show wish granted message
            const wish = document.createElement('div');
            wish.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:linear-gradient(135deg,#FFD700,#FFA500);color:white;padding:25px 40px;border-radius:30px;font-size:1.3rem;z-index:10001;box-shadow:0 20px 60px rgba(255,215,0,0.5);animation:wishGranted 1s ease-out;text-align:center;';
            wish.innerHTML = `
                <div style="font-size:3rem;margin-bottom:10px;">✨</div>
                <div>Wish Granted!</div>
                <div style="font-size:0.9rem;margin-top:10px;opacity:0.9;">May all your dreams come true 💫</div>
            `;
            document.body.appendChild(wish);
            
            // Create wish sparkles
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const sparkle = document.createElement('div');
                    sparkle.textContent = '✨';
                    sparkle.style.cssText = `position:fixed;left:50%;top:50%;font-size:${Math.random() * 20 + 15}px;pointer-events:none;z-index:10002;`;
                    const angle = (Math.PI * 2 * i) / 20;
                    const distance = 150;
                    const tx = Math.cos(angle) * distance;
                    const ty = Math.sin(angle) * distance;
                    sparkle.style.animation = `wishSparkle${i} 1.5s ease-out forwards`;
                    const style = document.createElement('style');
                    style.textContent = `@keyframes wishSparkle${i} { 0% { transform: translate(-50%,-50%) scale(0); opacity: 1; } 100% { transform: translate(calc(-50% + ${tx}px),calc(-50% + ${ty}px)) scale(1); opacity: 0; } }`;
                    document.head.appendChild(style);
                    document.body.appendChild(sparkle);
                    setTimeout(() => { sparkle.remove(); style.remove(); }, 1500);
                }, i * 50);
            }
            
            if (navigator.vibrate) {
                navigator.vibrate([50, 100, 50, 100, 50]);
            }
            
            setTimeout(() => {
                wish.style.animation = 'wishFadeOut 0.8s ease-in forwards';
                setTimeout(() => wish.remove(), 800);
            }, 3000);
            
            this.remove();
        }
    });
    
    document.body.appendChild(star);
    
    setTimeout(() => {
        if (star.parentElement && !clicked) {
            star.remove();
        }
    }, 3000);
}

const shootingStarStyles = document.createElement('style');
shootingStarStyles.textContent = `
    @keyframes shootingStarPath {
        0% { transform: translate(0,0) rotate(45deg); opacity: 1; }
        100% { transform: translate(-300px,300px) rotate(45deg); opacity: 0; }
    }
    @keyframes wishGranted {
        0% { transform: translate(-50%,-50%) scale(0) rotate(-180deg); opacity: 0; }
        60% { transform: translate(-50%,-50%) scale(1.1) rotate(10deg); }
        100% { transform: translate(-50%,-50%) scale(1) rotate(0deg); opacity: 1; }
    }
    @keyframes wishFadeOut {
        0% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%,-50%) scale(0.5); opacity: 0; }
    }
`;
document.head.appendChild(shootingStarStyles);

// Random shooting star every 3 minutes
setInterval(() => {
    if (Math.random() > 0.5 && currentScene > 1) {
        createShootingStarWish();
    }
}, 180000);

// 3. SURPRISE: Fortune Cookie Message
function createFortuneCookie() {
    const cookie = document.createElement('div');
    cookie.style.cssText = 'position:fixed;bottom:50px;left:50%;transform:translateX(-50%);width:100px;height:60px;background:linear-gradient(135deg,#F4A460,#D2691E);border-radius:50% 50% 40% 40%;z-index:10000;cursor:pointer;box-shadow:0 10px 30px rgba(210,105,30,0.4);animation:cookieBounce 2s ease-in-out infinite;';
    
    const crack = document.createElement('div');
    crack.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:2px;height:40px;background:#8B4513;';
    cookie.appendChild(crack);
    
    cookie.addEventListener('click', function() {
        this.style.animation = 'cookieCrack 0.5s ease-out forwards';
        
        setTimeout(() => {
            const fortunes = [
                'Love will find you when you least expect it 💕',
                'Your heart knows the way, follow it ✨',
                'Someone thinks of you every day 💗',
                'Happiness is just around the corner 🌟',
                'Your smile brightens someone\'s world 😊',
                'True love never fades 💖',
                'You are someone\'s reason to smile 🥰',
                'Magic happens when you believe ✨'
            ];
            
            const fortune = document.createElement('div');
            fortune.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:280px;padding:25px;background:rgba(255,255,255,0.98);border-radius:15px;box-shadow:0 20px 60px rgba(0,0,0,0.3);z-index:10001;text-align:center;animation:fortuneUnfold 0.8s ease-out;';
            fortune.innerHTML = `
                <div style="font-size:2.5rem;margin-bottom:15px;">🥠</div>
                <p style="font-size:1.1rem;color:#8B4513;line-height:1.6;font-style:italic;">${fortunes[Math.floor(Math.random() * fortunes.length)]}</p>
            `;
            document.body.appendChild(fortune);
            
            setTimeout(() => {
                fortune.style.animation = 'fortuneFold 0.8s ease-in forwards';
                setTimeout(() => fortune.remove(), 800);
            }, 5000);
            
            this.remove();
        }, 500);
    });
    
    document.body.appendChild(cookie);
    
    setTimeout(() => {
        if (cookie.parentElement) {
            cookie.style.animation = 'cookieSlideOut 1s ease-in forwards';
            setTimeout(() => cookie.remove(), 1000);
        }
    }, 10000);
}

const fortuneCookieStyles = document.createElement('style');
fortuneCookieStyles.textContent = `
    @keyframes cookieBounce {
        0%, 100% { transform: translateX(-50%) translateY(0); }
        50% { transform: translateX(-50%) translateY(-15px); }
    }
    @keyframes cookieCrack {
        0% { transform: translateX(-50%) scale(1); }
        50% { transform: translateX(-50%) scale(1.2); }
        100% { transform: translateX(-50%) scale(0); opacity: 0; }
    }
    @keyframes cookieSlideOut {
        0% { bottom: 50px; opacity: 1; }
        100% { bottom: -100px; opacity: 0; }
    }
    @keyframes fortuneUnfold {
        0% { transform: translate(-50%,-50%) scale(0.3); opacity: 0; }
        100% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
    }
    @keyframes fortuneFold {
        0% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
        100% { transform: translate(-50%,-50%) scale(0.3); opacity: 0; }
    }
`;
document.head.appendChild(fortuneCookieStyles);

// Random fortune cookie every 5 minutes
setInterval(() => {
    if (Math.random() > 0.7 && currentScene > 3) {
        createFortuneCookie();
    }
}, 300000);

// 4. SURPRISE: Floating Lantern Release
function createFloatingLantern() {
    const lantern = document.createElement('div');
    lantern.style.cssText = `position:fixed;bottom:-100px;left:${Math.random() * 80 + 10}%;width:60px;height:80px;background:linear-gradient(135deg,#FFD700,#FFA500);border-radius:10px 10px 30% 30%;z-index:10000;box-shadow:0 0 30px rgba(255,215,0,0.6);animation:lanternFloat ${Math.random() * 10 + 15}s linear forwards;cursor:pointer;`;
    // Add flame
    const flame = document.createElement('div');
    flame.style.cssText = 'position:absolute;bottom:10px;left:50%;transform:translateX(-50%);width:20px;height:25px;background:radial-gradient(circle,#FF6347,#FF4500);border-radius:50% 50% 50% 50% / 60% 60% 40% 40%;animation:flameFlicker 0.5s ease-in-out infinite;';
    lantern.appendChild(flame);
    
    // Add wish text
    const wish = document.createElement('div');
    wish.textContent = '💫';
    wish.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:25px;';
    lantern.appendChild(wish);
    
    lantern.addEventListener('click', function() {
        // Make wish
        const wishText = document.createElement('div');
        wishText.textContent = 'Wish sent to the stars! ✨';
        wishText.style.cssText = 'position:fixed;top:30%;left:50%;transform:translateX(-50%);background:rgba(255,215,0,0.95);color:white;padding:15px 30px;border-radius:25px;font-size:1.1rem;z-index:10001;box-shadow:0 10px 30px rgba(255,215,0,0.5);animation:wishTextFloat 2s ease-out forwards;';
        document.body.appendChild(wishText);
        
        setTimeout(() => wishText.remove(), 2000);
        
        // Speed up lantern
        this.style.animation = 'lanternFastFloat 3s linear forwards';
    });
    
    document.body.appendChild(lantern);
    
    setTimeout(() => {
        if (lantern.parentElement) {
            lantern.remove();
        }
    }, 25000);
}

const lanternStyles = document.createElement('style');
lanternStyles.textContent = `
    @keyframes lanternFloat {
        0% { bottom: -100px; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { bottom: ${window.innerHeight + 100}px; opacity: 0; }
    }
    @keyframes lanternFastFloat {
        0% { opacity: 1; }
        100% { bottom: ${window.innerHeight + 100}px; opacity: 0; }
    }
    @keyframes flameFlicker {
        0%, 100% { transform: translateX(-50%) scale(1); }
        50% { transform: translateX(-50%) scale(1.1); }
    }
    @keyframes wishTextFloat {
        0% { transform: translateX(-50%) translateY(0); opacity: 1; }
        100% { transform: translateX(-50%) translateY(-100px); opacity: 0; }
    }
`;
document.head.appendChild(lanternStyles);

// Random lantern every 2 minutes
setInterval(() => {
    if (Math.random() > 0.6) {
        createFloatingLantern();
    }
}, 120000);

// 5. SURPRISE: Magic Wand Sparkle Trail (Desktop)
if (!isMobile()) {
    let wandActive = false;
    let wandTimeout = null;
    
    // Triple click to activate wand
    let clickTimes = [];
    document.addEventListener('click', (e) => {
        clickTimes.push(Date.now());
        if (clickTimes.length > 3) clickTimes.shift();
        
        if (clickTimes.length === 3) {
            const timeDiff = clickTimes[2] - clickTimes[0];
            if (timeDiff < 1000) { // Triple click within 1 second
                activateMagicWand();
                clickTimes = [];
            }
        }
    });
    
    function activateMagicWand() {
        wandActive = true;
        
        // Show wand cursor
        document.body.style.cursor = 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\'%3E%3Ctext y=\'24\' font-size=\'24\'%3E🪄%3C/text%3E%3C/svg%3E"), auto';
        
        // Show activation message
        const msg = document.createElement('div');
        msg.textContent = '✨ Magic Wand Activated! ✨';
        msg.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:linear-gradient(135deg,#9370DB,#BA55D3);color:white;padding:20px 40px;border-radius:30px;font-size:1.3rem;z-index:10001;box-shadow:0 20px 60px rgba(147,112,219,0.5);animation:wandActivate 1s ease-out;';
        document.body.appendChild(msg);
        
        setTimeout(() => {
            msg.style.animation = 'wandDeactivate 0.5s ease-in forwards';
            setTimeout(() => msg.remove(), 500);
        }, 2000);
        
        // Deactivate after 15 seconds
        wandTimeout = setTimeout(() => {
            deactivateMagicWand();
        }, 15000);
    }
    
    function deactivateMagicWand() {
        wandActive = false;
        document.body.style.cursor = '';
        if (wandTimeout) clearTimeout(wandTimeout);
    }
    
    // Create magic trail when wand is active
    document.addEventListener('mousemove', (e) => {
        if (wandActive) {
            const sparkle = document.createElement('div');
            sparkle.textContent = ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)];
            sparkle.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;font-size:${Math.random() * 15 + 20}px;pointer-events:none;z-index:9999;animation:wandSparkle 1s ease-out;`;
            document.body.appendChild(sparkle);
            
            setTimeout(() => sparkle.remove(), 1000);
        }
    });
    
    const wandStyles = document.createElement('style');
    wandStyles.textContent = `
        @keyframes wandActivate {
            0% { transform: translate(-50%,-50%) scale(0) rotate(-180deg); opacity: 0; }
            60% { transform: translate(-50%,-50%) scale(1.1) rotate(10deg); }
            100% { transform: translate(-50%,-50%) scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes wandDeactivate {
            0% { transform: translate(-50%,-50%) scale(1); opacity: 1; }
            100% { transform: translate(-50%,-50%) scale(0); opacity: 0; }
        }
        @keyframes wandSparkle {
            0% { transform: scale(0) rotate(0deg); opacity: 1; }
            50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
            100% { transform: scale(0.8) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(wandStyles);
}

console.log('%c🎁 5 MORE SURPRISE FEATURES ADDED! 🎁', 'color: #FF6B9D; font-size: 16px; font-weight: bold;');
console.log('%c1. 💌 Love Letter Drop - Click to open!', 'color: #FFB6C1; font-size: 12px;');
console.log('%c2. ⭐ Shooting Star Wish - Click to make a wish!', 'color: #FFB6C1; font-size: 12px;');
console.log('%c3. 🥠 Fortune Cookie - Click for your fortune!', 'color: #FFB6C1; font-size: 12px;');
console.log('%c4. 🏮 Floating Lantern - Click to send wish!', 'color: #FFB6C1; font-size: 12px;');
console.log('%c5. 🪄 Magic Wand - Triple click to activate!', 'color: #FFB6C1; font-size: 12px;');
console.log('%c💡 Total Features: 66+', 'color: #FF69B4; font-size: 14px; font-weight: bold;');


// ========================================
// SPECIAL PROPOSAL OVERLAY - SECRET CODE
// The most important moment ❤️
// ========================================

function triggerProposalOverlay() {
    // Create full-screen overlay
    const overlay = document.createElement('div');
    overlay.id = 'proposalOverlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:linear-gradient(135deg,#1a1a2e,#16213e,#0f3460);z-index:20000;display:flex;align-items:center;justify-content:center;animation:proposalFadeIn 1.5s ease-out;overflow-y:auto;';
    
    // Create stars background
    const starsContainer = document.createElement('div');
    starsContainer.style.cssText = 'position:absolute;width:100%;height:100%;overflow:hidden;';
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.cssText = `position:absolute;left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:2px;height:2px;background:white;border-radius:50%;animation:starTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite;`;
        starsContainer.appendChild(star);
    }
    overlay.appendChild(starsContainer);
    
    // Create content container
    const content = document.createElement('div');
    content.style.cssText = 'position:relative;max-width:600px;width:90%;background:rgba(255,255,255,0.98);border-radius:30px;padding:50px 40px;box-shadow:0 30px 100px rgba(255,107,157,0.6);z-index:1;animation:proposalSlideUp 1.5s ease-out 0.5s backwards;text-align:center;';
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = 'position:absolute;top:20px;right:20px;background:rgba(255,107,157,0.2);border:none;width:40px;height:40px;border-radius:50%;color:#C71585;font-size:1.5rem;cursor:pointer;transition:all 0.3s ease;z-index:2;';
    closeBtn.onmouseover = function() { this.style.background = 'rgba(255,107,157,0.4)'; this.style.transform = 'rotate(90deg) scale(1.1)'; };
    closeBtn.onmouseout = function() { this.style.background = 'rgba(255,107,157,0.2)'; this.style.transform = 'rotate(0deg) scale(1)'; };
    closeBtn.onclick = function() {
        overlay.style.animation = 'proposalFadeOut 1s ease-in forwards';
        setTimeout(() => overlay.remove(), 1000);
    };
    content.appendChild(closeBtn);
    
    // Proposal content
    const proposalHTML = `
        <div style="animation:heartBeatProposal 2s ease-in-out infinite;">
            <div style="font-size:5rem;margin-bottom:20px;">💍</div>
        </div>
        
        <h1 style="font-size:clamp(2rem,5vw,3rem);color:#FF1493;margin-bottom:30px;font-family:Pacifico,cursive;animation:proposalTextAppear 1s ease-out 1s backwards;">
            Qandeel
        </h1>
        
        <div style="font-size:clamp(1rem,3vw,1.3rem);color:#8B4513;line-height:1.8;margin-bottom:30px;animation:proposalTextAppear 1s ease-out 1.5s backwards;">
            <p style="margin-bottom:20px;">
                Jis ko main sab se zyada feel karta hoon...
            </p>
            <p style="margin-bottom:20px;">
                Tumhare liye ek zindagi ki khoobsurat baat hai jo kehne se main darta hoon.
            </p>
            <p style="margin-bottom:20px;">
                Shayad mujhe dar hai tum door na ho jao...
            </p>
        </div>
        
        <div style="width:80%;height:2px;background:linear-gradient(90deg,transparent,#FF69B4,transparent);margin:30px auto;animation:proposalTextAppear 1s ease-out 2s backwards;"></div>
        
        <div style="font-size:clamp(1.1rem,3.5vw,1.5rem);color:#C71585;line-height:1.9;margin:30px 0;animation:proposalTextAppear 1s ease-out 2.5s backwards;">
            <p style="margin-bottom:25px;font-weight:600;">
                Main apni saari zindagi tumhare saath guzarna chahta hoon 💗
            </p>
            <p style="margin-bottom:25px;">
                Har subah tumhare saath, har shaam tumhare saath...
            </p>
            <p style="margin-bottom:25px;">
                Tumhari hansi meri khushi hai, tumhara dard mera dard hai.
            </p>
            <p style="margin-bottom:25px;">
                Tum mere dil ki dharkan ho, meri rooh ka sukoon ho.
            </p>
            <p style="margin-bottom:25px;">
                Main tumhare bina adhoora hoon, tum mere saath poora hoon.
            </p>
        </div>
        
        <div style="width:80%;height:2px;background:linear-gradient(90deg,transparent,#FF69B4,transparent);margin:30px auto;animation:proposalTextAppear 1s ease-out 3s backwards;"></div>
        
        <div style="margin:40px 0;animation:proposalTextAppear 1s ease-out 3.5s backwards;">
            <div style="font-size:clamp(1.8rem,5vw,2.5rem);color:#FF1493;margin-bottom:20px;font-weight:700;text-shadow:2px 2px 4px rgba(255,20,147,0.3);">
                I LOVE YOU ❤️
            </div>
            <div style="font-size:clamp(1rem,3vw,1.2rem);color:#8B4513;font-style:italic;">
                Aur hamesha pyaar karunga...
            </div>
        </div>
        
        <div style="margin-top:40px;animation:proposalTextAppear 1s ease-out 4s backwards;">
            <div style="font-size:clamp(1.3rem,4vw,1.8rem);color:#C71585;margin-bottom:15px;font-weight:600;">
                Kya tum meri zindagi banogi? 💕
            </div>
            <div style="font-size:clamp(0.9rem,2.5vw,1.1rem);color:#8B4513;font-style:italic;">
                Will you be mine forever?
            </div>
        </div>
        
        <div style="margin-top:50px;display:flex;gap:20px;justify-content:center;flex-wrap:wrap;animation:proposalTextAppear 1s ease-out 4.5s backwards;">
            <button id="yesBtn" style="background:linear-gradient(135deg,#FF1493,#FF69B4);border:none;padding:18px 45px;font-size:clamp(1rem,3vw,1.3rem);color:white;border-radius:50px;cursor:pointer;font-weight:600;box-shadow:0 10px 30px rgba(255,20,147,0.4);transition:all 0.3s ease;">
                Yes! 💗
            </button>
            <button id="alsoYesBtn" style="background:linear-gradient(135deg,#9370DB,#BA55D3);border:none;padding:18px 45px;font-size:clamp(1rem,3vw,1.3rem);color:white;border-radius:50px;cursor:pointer;font-weight:600;box-shadow:0 10px 30px rgba(147,112,219,0.4);transition:all 0.3s ease;">
                Of Course! 💕
            </button>
        </div>
        
        <div style="margin-top:30px;font-size:clamp(0.8rem,2vw,0.9rem);color:#999;font-style:italic;animation:proposalTextAppear 1s ease-out 5s backwards;">
            (There's only one right answer 😊)
        </div>
    `;
    
    content.innerHTML += proposalHTML;
    overlay.appendChild(content);
    
    // Add to body
    document.body.appendChild(overlay);
    
    // Create floating hearts around overlay
    const heartsInterval = setInterval(() => {
        if (!document.getElementById('proposalOverlay')) {
            clearInterval(heartsInterval);
            return;
        }
        
        const heart = document.createElement('div');
        heart.textContent = ['💗', '💕', '💖', '💝', '❤️'][Math.floor(Math.random() * 5)];
        heart.style.cssText = `position:fixed;left:${Math.random() * 100}%;bottom:-30px;font-size:${Math.random() * 20 + 25}px;pointer-events:none;z-index:19999;animation:proposalHeartFloat ${Math.random() * 4 + 6}s linear;opacity:${Math.random() * 0.5 + 0.5};`;
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }, 500);
    
    // Button handlers
    setTimeout(() => {
        const yesBtn = document.getElementById('yesBtn');
        const alsoYesBtn = document.getElementById('alsoYesBtn');
        
        if (yesBtn) {
            yesBtn.onmouseover = function() { this.style.transform = 'translateY(-5px) scale(1.05)'; };
            yesBtn.onmouseout = function() { this.style.transform = 'translateY(0) scale(1)'; };
            yesBtn.onclick = function() { showAcceptedResponse(); };
        }
        
        if (alsoYesBtn) {
            alsoYesBtn.onmouseover = function() { this.style.transform = 'translateY(-5px) scale(1.05)'; };
            alsoYesBtn.onmouseout = function() { this.style.transform = 'translateY(0) scale(1)'; };
            alsoYesBtn.onclick = function() { showAcceptedResponse(); };
        }
    }, 5500);
    
    // Vibration pattern
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 200, 100, 400]);
    }
    
    // Create rose petals falling
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.textContent = '🌹';
            petal.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:-50px;font-size:${Math.random() * 20 + 25}px;pointer-events:none;z-index:19999;animation:proposalPetalFall ${Math.random() * 3 + 4}s linear;opacity:0.8;`;
            document.body.appendChild(petal);
            setTimeout(() => petal.remove(), 7000);
        }, i * 200);
    }
}

function showAcceptedResponse() {
    const overlay = document.getElementById('proposalOverlay');
    if (!overlay) return;
    
    // Create acceptance screen
    const acceptance = document.createElement('div');
    acceptance.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:linear-gradient(135deg,#FF1493,#FF69B4,#FFB6C1);z-index:20001;display:flex;align-items:center;justify-content:center;animation:acceptanceFadeIn 1s ease-out;';
    
    acceptance.innerHTML = `
        <div style="text-align:center;animation:acceptanceZoomIn 1s ease-out;">
            <div style="font-size:clamp(4rem,15vw,8rem);margin-bottom:30px;animation:heartBeatAcceptance 1s ease-in-out infinite;">💑</div>
            <h1 style="font-size:clamp(2rem,8vw,4rem);color:white;margin-bottom:30px;font-family:Pacifico,cursive;text-shadow:3px 3px 6px rgba(0,0,0,0.3);">
                She Said Yes! 🎉
            </h1>
            <p style="font-size:clamp(1.2rem,4vw,2rem);color:white;margin-bottom:40px;text-shadow:2px 2px 4px rgba(0,0,0,0.3);">
                Forever starts now... 💍
            </p>
            <div style="font-size:clamp(1rem,3vw,1.5rem);color:white;opacity:0.9;">
                I promise to love you every single day ❤️
            </div>
        </div>
    `;
    
    document.body.appendChild(acceptance);
    
    // Epic fireworks
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * (window.innerHeight * 0.6);
                
                for (let j = 0; j < 30; j++) {
                    const particle = document.createElement('div');
                    particle.style.cssText = `position:fixed;left:${x}px;top:${y}px;width:6px;height:6px;background:${['#FFD700', '#FFA500', '#FF69B4', '#FF1493', '#FFF'][Math.floor(Math.random() * 5)]};border-radius:50%;pointer-events:none;z-index:20002;`;
                    
                    const angle = (Math.PI * 2 * j) / 30;
                    const velocity = Math.random() * 150 + 100;
                    const tx = Math.cos(angle) * velocity;
                    const ty = Math.sin(angle) * velocity;
                    
                    particle.style.animation = `acceptanceFirework${i}${j} 2s ease-out forwards`;
                    
                    const style = document.createElement('style');
                    style.textContent = `@keyframes acceptanceFirework${i}${j} { 0% { transform: translate(0,0); opacity: 1; } 100% { transform: translate(${tx}px,${ty}px); opacity: 0; } }`;
                    document.head.appendChild(style);
                    
                    document.body.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                        style.remove();
                    }, 2000);
                }
            }, i * 400);
        }
    }, 1000);
    
    // Massive heart explosion
    setTimeout(() => {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = ['💗', '💕', '💖', '💝', '❤️', '💍'][Math.floor(Math.random() * 6)];
                heart.style.cssText = `position:fixed;left:${Math.random() * 100}%;top:${Math.random() * 100}%;font-size:${Math.random() * 30 + 30}px;pointer-events:none;z-index:20002;animation:acceptanceHeartBurst 3s ease-out;`;
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 3000);
            }, i * 60);
        }
    }, 2000);
    
    // Vibration celebration
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100, 50, 100, 50, 100, 50, 100, 50, 200]);
    }
    
    // Remove after 8 seconds
    setTimeout(() => {
        acceptance.style.animation = 'acceptanceFadeOut 1.5s ease-in forwards';
        setTimeout(() => {
            acceptance.remove();
            overlay.remove();
        }, 1500);
    }, 8000);
}

// Proposal styles
const proposalStyles = document.createElement('style');
proposalStyles.textContent = `
    @keyframes proposalFadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes proposalFadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    @keyframes proposalSlideUp {
        0% { transform: translateY(100px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes proposalTextAppear {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes heartBeatProposal {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    @keyframes proposalHeartFloat {
        0% { bottom: -30px; opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { bottom: ${window.innerHeight + 50}px; opacity: 0; }
    }
    @keyframes proposalPetalFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
        100% { transform: translateY(${window.innerHeight + 100}px) rotate(360deg); opacity: 0; }
    }
    @keyframes acceptanceFadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    @keyframes acceptanceFadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }
    @keyframes acceptanceZoomIn {
        0% { transform: scale(0.5); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
    }
    @keyframes heartBeatAcceptance {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.15); }
    }
    @keyframes acceptanceHeartBurst {
        0% { transform: scale(0) rotate(0deg); opacity: 1; }
        100% { transform: scale(2) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(proposalStyles);

console.log('%c💍 SPECIAL PROPOSAL FEATURE ADDED! 💍', 'color: #FF1493; font-size: 16px; font-weight: bold;');
console.log('%c🤫 Secret code activated... Good luck! 💗', 'color: #FF69B4; font-size: 14px;');


// ========================================
// BACKGROUND MUSIC - AUTO PLAY
// YouTube: https://youtu.be/njmrj2X0fJQ
// ========================================

// Load YouTube IFrame API
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let musicReady = false;

// YouTube API Ready
window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'njmrj2X0fJQ', // Video ID from URL
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'njmrj2X0fJQ', // Required for loop
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            rel: 0
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
};

function onPlayerReady(event) {
    musicReady = true;
    // Try to play (may be blocked by browser)
    event.target.playVideo();
    event.target.setVolume(30); // Set volume to 30%
}

function onPlayerStateChange(event) {
    // If video ends, replay (backup for loop)
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}

// Update music toggle to work with YouTube player
const originalToggleMusic = toggleMusic;
toggleMusic = function() {
    if (player && musicReady) {
        if (musicPlaying) {
            player.pauseVideo();
            document.getElementById('music-icon').textContent = '🔇';
            musicPlaying = false;
        } else {
            player.playVideo();
            document.getElementById('music-icon').textContent = '🎵';
            musicPlaying = true;
        }
    }
};

// Auto-play on first user interaction (browser requirement)
let firstInteraction = false;
const enableMusic = () => {
    if (!firstInteraction && player && musicReady) {
        player.playVideo();
        musicPlaying = true;
        document.getElementById('music-icon').textContent = '🎵';
        firstInteraction = true;
    }
};

// Listen for first interaction
['click', 'touchstart', 'keydown'].forEach(event => {
    document.addEventListener(event, enableMusic, { once: true });
});

console.log('%c🎵 BACKGROUND MUSIC LOADED! 🎵', 'color: #FF6B9D; font-size: 16px; font-weight: bold;');
console.log('%cSong: https://youtu.be/njmrj2X0fJQ', 'color: #FFB6C1; font-size: 12px;');
console.log('%cClick music icon (🎵) to toggle', 'color: #FFB6C1; font-size: 12px;');
