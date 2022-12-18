const c = Number.parseFloat(prompt('Введите температуру градусов Цельсия'));
const f = (9/5) * c + 32;


alert(`Цельсий: ${c}, Фаренгейт: ${f.toFixed(1)}`);