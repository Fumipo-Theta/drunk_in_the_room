const groupingMembers = roomNum => members => {
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

export default groupingMembers