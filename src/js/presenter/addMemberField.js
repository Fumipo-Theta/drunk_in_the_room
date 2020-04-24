import removeMemberField from "./removeMemberField.js"

const addMemberField = containerDom => e => {
    const li = document.createElement("li")
    li.classList.add("field-member_input")
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete")
    deleteButton.innerHTML = "Bye :)"
    deleteButton.tabIndex = -1
    deleteButton.addEventListener(
        "click",
        removeMemberField(containerDom),
        false
    )
    const listItemTemplate = `<input type="text" autofocus tabindex=0 placeholder="name">`
    li.innerHTML = listItemTemplate
    li.appendChild(deleteButton)
    containerDom.insertBefore(li)
}

export default addMemberField