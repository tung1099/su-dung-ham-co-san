let vietnamese = ["xin chào", "cảm ơn", "xin lỗi", "tạm biệt"];
let english = ["hello", "thank you", "sorry", "good bye"];
function timkiem() {
    let keyword = document.getElementById("key").value;
    let index = -1;
    for (let i = 0; i < vietnamese.length; i++) {
        if (keyword===vietnamese[i]){
            index = i;
            break;
        }

    }
    let result;
    if (index === -1){
        result = "Không tìm thấy"
    }
    else {
        result = "Nghĩa của từ " + keyword + " là " + english[index]
    }
    document.getElementById("result").innerText= result

}
