function find_edit() {
    const new_node = document.getElementById('name')
    new_node.innerHTML = 'Olya Krivorol 2006'
}
const node_for_click = document.getElementById('for_click')
node_for_click.addEventListener('click',find_edit)
