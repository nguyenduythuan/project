const body = document.getElementsByTagName("tbody");
const temp = document.createElement('tr');
const str = "<td colspan='2'>Ban da dang ky thanh cong !!! </td>";

function validateForm() {
    temp.innerHTML = str;
    temp.style.color = "red";
    temp.style.textAlign = "center";
    body[0].appendChild(temp);
    return false;
}