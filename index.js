const removeMemberField = containerDom => e => {
    const target = e.target
    const field = target.parentElement
    containerDom.removeChild(field)
}

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
    containerDom.appendChild(li)
}

function collectMembers(listItems) {
    const membersMap = new Map()
    Array.from(listItems).forEach((li, i) => {
        membersMap.set(i, new Member(li.children[0].value, i))
    })
    return membersMap
}

function naiveShuffle(_map) {
    const l = _map.size
    const randomPair = [...(Array(l).fill(0).map((_, i) => [Math.random(), i]).sort((a, b) => a[0] - b[0]))]
    return randomPair.map(([_, i]) => _map.get(i))
}

const grouping = roomNum => members => {
    const _members = [...members]
    const l = _members.length
    const population = parseInt((l + 1) / roomNum)
    const rooms = []
    for (let iRoom = 0; iRoom < roomNum - 1; iRoom++) {
        rooms[iRoom] = []
        for (let i = 0; i < population; i++) {
            rooms[iRoom].push(_members.pop())
        }
    }

    rooms.push([..._members])

    return rooms

}

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

const moveIntoRooms = venueDom => groups => {

    groups.forEach((group, i) => {
        venueDom.appendChild(createRoom(i + 1)(group))
    })

}

function cleanUpVenue(venueDom) {
    venueDom.innerHTML = ""
}

class Member {
    constructor(name, id) {
        this.name = name
        this.id = id
    }
}

function main() {
    const memberNameInputWrapper = document.getElementById("wrapper-member_input")
    const memberAddButton = document.getElementById("button-add_member")
    const naiveShuffleButton = document.getElementById("button-naive_shuffle")
    const roomNumInput = document.getElementById("input-room_num")
    const venue = document.getElementById("venue")

    memberAddButton.addEventListener(
        "click",
        addMemberField(memberNameInputWrapper),
        false
    )
    memberAddButton.click()

    naiveShuffleButton.addEventListener(
        "click",
        e => {
            const membersMap = collectMembers(memberNameInputWrapper.children)
            const shuffled = naiveShuffle(membersMap)
            const roomNum = parseInt(roomNumInput.value)
            const groups = grouping(roomNum)(shuffled)
            cleanUpVenue(venue)
            moveIntoRooms(venue)(groups)
        }
    )


}

window.onload = e => main()