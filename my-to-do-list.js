let count = 0

document.getElementById("counter").innerHTML = count

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
            count -= 1
            document.getElementById("counter").innerHTML = count

        })

        new_item.innerHTML = input

        document.getElementById("list").appendChild(new_item)

        count += 1

        document.getElementById("counter").innerHTML = count

    }
}


