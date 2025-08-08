function spawnFruit() {
    if (isGameOver) return;

    const x = Math.random() * width * 0.8 + width * 0.1, y = height + 20;
    const vx = Math.random() * 8 - 4, vy = -(Math.random() * 9 + 15);
    const t = ['bomb', 'heart', 'gift', 'fruit'];

    const mensajes = [
        "🎂 Feliz cumpleaños, mi amor Katherin ❤️",
        "✨ Eres el mejor regalo que la vida me dio 💕",
        "😍 Hoy celebro a la mujer más especial del mundo 💖",
        "💋 Te amo más que nunca, feliz cumpleaños mi vida 💝",
        "🥳 Katherin, eres mi sueño hecho realidad 💓"
    ];
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];

    fruits.push(new Fruit(x, y, vx, vy, t));
    console.log(mensaje);
}
