const name = document.getElementById("name");
const body = document.getElementsByTagName("tbody");
const temp = document.createElement('tr');

function getName() {
    const str = `<td colspan="2">${name.value}</td>`;
    temp.innerHTML = str;
    body[0].appendChild(temp);
    return false;
}