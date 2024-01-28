function add_to_do_item() {

    let input = document.getElementById("to-do-item").value

    if (input.trim() == "") {

    }
    else {

        var new_item = document.createElement("li")

        new_item.id = `${input}`

        new_item.addEventListener("click", removal => {
            let delete_item = document.getElementById(`${input}`)
            delete_item.remove()
        })

        new_item.innerHTML = input

        document.getElementById("list").appendChild(new_item)
    }
}


