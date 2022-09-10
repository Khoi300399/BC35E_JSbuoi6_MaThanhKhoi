function btnBai_1() {
    var ketQua = "";
    //input:
    var sum = 0;
    var i = 0;
    // progress:
    while (sum < 10000) {
        // bước nhảy của vòng lặp i++
        i++;
        //cứ sau mỗi vòng lặp sum được cộng lên i cho đến khi sum < 10000
        sum += i;
    }
    // output:
    ketQua += "số nguyên dương nhỏ nhất để tổng > 10000 là: " + i;
    hienThi(ketQua, "showSoNN");
}


function btnBai_2() {
    var ketQua = "";
    // input: lấy thông tin người dùng nhập vào
    var n = +document.getElementById("nhapN").value;
    var x = +document.getElementById("nhapX").value;
    var sum = 0;
    // progress:
    for (var i = 1; i <= n; i++) {
        sum += x ** i;
    }
    // output:
    ketQua += "Tổng là: " + sum;
    hienThi(ketQua, "showTinhTong");
}


function btnBai_3() {
    var ketQua = "";
    // input: lấy thông tin người dùng nhập vào
    var n = +document.getElementById("inputN").value;
    var sum = 1;
    // progress:
    for (var i = 1; i <= n; i++) {
        sum *= i;
    }
    // output:
    ketQua += "Tích là: " + sum;
    hienThi(ketQua, "showTinhGiaiThua");
}


function btnBai_4() {

    // input: lấy thông tin người dùng nhập vào
    for (var i = 1; i <= 10; i++) {
        var ketQua = document.createElement("div");
        document.getElementById("showTaoTheDiv").appendChild(ketQua);
        if (i % 2 === 0) {
            ketQua.style.background = "red";
            ketQua.innerHTML = "Div chẵn";
        }
        else {
            ketQua.style.background = "blue";
            ketQua.innerHTML = "Div lẻ";
        }
    }
    // output:
}


function btnBai_5() {
    var ketQua = " ";
    // input: lấy thông tin người dùng nhập vào
    var n = +document.getElementById("nhapSNT").value;

    // progress:
    for (var i = 2; i <= n; i++) {
        var checkSNT = kiemTraSNT(i);
        if (checkSNT == 2) {
            ketQua += i + " ";
        }
    }
    // output:
    hienThi(ketQua, "showSNT");
}

function kiemTraSNT(n) {
    var dem = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            dem++;
        }
    }
    return dem;
}


function hienThi(ketQua, a) {
    document.getElementById(a).innerHTML = ketQua;
    document.getElementById(a).style.display = "block";
}



