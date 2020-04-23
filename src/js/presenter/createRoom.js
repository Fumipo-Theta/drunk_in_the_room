const createRoom = roomId => members => {
    const roomContainer = document.createElement("div")
    roomContainer.classList.add("wrapper", "room")
    const roomName = document.createElement("p")
    roomName.innerHTML = `Room ${roomId}`

    roomContainer.appendChild(roomName)

    const room = document.createElement("ul")
    room.classList.add("room")

    for (let member of members) {
        const li = document.createElement("li")
        li.innerHTML = `${member.name}`
        room.appendChild(li)
    }

    roomContainer.appendChild(room)
    return roomContainer
}

export default createRoom