const myEmojis = ["🎮", "👨‍💻", "🍆"]

let emojiBank = document.getElementById("emoji-element")


for (i=0; i<myEmojis.length; i++) {
	const emoji = document.createElement('span')
	emoji.textContent = myEmojis[i]
	emojiBank.append(emoji)
}



// for (item in myEmojis) {
// 	console.log(item)
// }