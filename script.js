	
	let username = prompt("Введите имя:")
    let count=0

	let myMenu = document.getElementById("menu")
	let myAdd = document.getElementById("add")
	let myInput = document.getElementById("input")
	let myList = document.getElementById("list")
	let myContainer = document.getElementById("container")

	if (username) {
		myMenu.innerHTML = "Ваш список дел, " + username + ":" 
	} else {
		myMenu.innerHTML = "Список дел анонимного пользователя:"
	}

	function add () {
		count += 1
		if (count>5) {
			myContainer.innerHTML  =  "Можно ввести до 5 дел"
			return
	}
	let value = myInput.value

	myList.innerHTML = myList.innerHTML + "<li>" + value + "</li>" 

 }
	
	
			