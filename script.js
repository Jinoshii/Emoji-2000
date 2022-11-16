const myEmojis = ["🎮", "👨‍💻", "🍆"]

let emojiBank = document.getElementById("emoji-element")

function displayEmojis(){
	for (i=0; i<myEmojis.length; i++) {
		const emoji = document.createElement('span')
		emoji.textContent = myEmojis[i]
		emojiBank.append(emoji)
	}
}

displayEmojis()


const pushButton = document.getElementById("push-btn")
pushButton.addEventListener("click", function(){
	const emojiInput = document.getElementById("emoji-input")
	
	if (emojiInput.value) {
		myEmojis.push(emojiInput.value)
		emojiInput.value = ""
		emojiBank.innerHTML = ""
		displayEmojis()
	}
})



// for (item in myEmojis) {
// 	console.log(item)
// }