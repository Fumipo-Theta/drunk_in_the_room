import Member from "../entity/member.js"

export default function collectMembersFromFields(listItems) {
    const members = Array.from(listItems).map((li, i) => {
        return new Member(li.children[0].value, i)
    })
    return members
}
