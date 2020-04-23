const moveIntoRooms = venueDom => groups => {

    groups.forEach((group, i) => {
        venueDom.appendChild(createRoom(i + 1)(group))
    })

}

export default moveIntoRooms