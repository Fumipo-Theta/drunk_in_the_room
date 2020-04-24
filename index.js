
import { memberAddButton, memberNamesList, shuffleButton, roomNumInput, venue } from "./src/js/DI/dom.js"
import addMemberField from "./src/js/presenter/addMemberField.js"
import collectMembers from "./src/js/controller/collectMembersFromFields.js"
import groupMembers from "./src/js/controller/groupingMembers.js"
import shuffleMembers from "./src/js/controller/shuffleMembers.js"
import cleanUpVenue from "./src/js/presenter/cleanUpVenue.js"
import moveIntoRooms from "./src/js/presenter/moveIntoRooms.js"
import shuffle from "./src/js/util/naiveShuffle.js"

function main() {


    memberAddButton.addEventListener(
        "click",
        addMemberField(memberNamesList),
        false
    )
    memberAddButton.click()

    shuffleButton.addEventListener(
        "click",
        e => {
            const members = collectMembers(memberNamesList.children)
            const shuffled = shuffleMembers(shuffle)(members)
            const roomNum = parseInt(roomNumInput.value)
            const groups = groupMembers(roomNum)(shuffled)
            cleanUpVenue(venue)
            moveIntoRooms(venue)(groups)
        }
    )

    window.onload = e => main()
}

