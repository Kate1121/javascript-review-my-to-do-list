function add_to_do_item() {

    let input = document.getElementById("to-do-item").value

    var new_item = document.createElement("li")

    new_item.id = `${input}`

    new_item.innerHTML = input

    document.getElementById("list").appendChild(new_item)

}


