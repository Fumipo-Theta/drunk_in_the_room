const removeMemberField = containerDom => e => {
    const target = e.target
    const field = target.parentElement
    containerDom.removeChild(field)
}

export default removeMemberField
