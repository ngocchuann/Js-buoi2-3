/**
 * ?Tính lương nhân viên
 * Khối 1: Input:
 * Lương 1 ngày 
 * Số ngày làm
 * 
 * Khối 2:
 * Tạo biến: number ( số ngày làm)
 * luongNgay
 * => Công thức: 
 * ví dụ: number = 30
 * tongLuong = luongNgay*number
 * Thông báo kết quả
 * 
 * Khối 3: Output
 * 
 */
function tienLuong(){
    var soNgay =  document.getElementById("soNgay").value;
    console.log(soNgay);
    luongNgay = 100000;

    var tienLuong = (Number(soNgay) * Number(luongNgay));
    console.log("Tổng lương:", tienLuong);
    document.getElementById("txtResultbai1").innerHTML = tienLuong;

}
document.getElementById("btnTinh").onclick= tienLuong;

/**
 * ?Tính giá trị trung bình
 * Khối 1:Input:
 * 5 số thực
 * 
 * Khối 2:
 *  B1: Tạo biến:
 * soThuc1, soThuc2, soThuc3, soThuc4, soThuc5 ( 5 số thực)
 * B2: Lập công thức:
 * trungBinh = (a + b + c + d + e )/5
 * B3: Thông báo kết quả
 * 
 * Khối 3: Output
 * 
 */

 function tbc(){
   
    var soThuc1 = document.getElementById("number1").value;
    var soThuc2 = document.getElementById("number2").value;
    var soThuc3 = document.getElementById("number3").value;
    var soThuc4 = document.getElementById("number4").value;
    var soThuc5 = document.getElementById("number5").value;
    console.log(soThuc1,soThuc2,soThuc3,soThuc4,soThuc5);
   

    var giaTriTrungBinh = ( Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4)+ Number(soThuc5))/5;
    console.log(giaTriTrungBinh);
    document.getElementById("txtResultbai2").innerHTML =giaTriTrungBinh;
}

document.getElementById("btnTinhTB").onclick = tbc;

/**  Quy đổi tiền:
 * Khối 1: Input: ( 1USD=23500VNĐ)
 * 
 * 
 * Khối 2:
 * B1: Tạo biến
 * ví dụ: 3 USD
 * soUSD 
 * USD
 * giaTri
 * 
 * Công thức: 
 * tienQuyDoi = soUSD*USD
 * 
 * Khối 3:Output
 * 
 * 
 */
 function tienQuyDoi(){
    var soUSD= document.getElementById("soUSD").value;
    console.log(soUSD);
    var giaTri = 23500;

    var tienQuyDoi = (Number(soUSD) * Number(giaTri));
    console.log("Số tiền quy đổi được là:", tienQuyDoi + "VND");
    document.getElementById("txtResultbai3").innerHTML = tienQuyDoi + "VND";

}
document.getElementById("btndoi").onclick= tienQuyDoi;

/**
 * ?Diện tích, chu vi hình chữ nhậT
 * Khối 1: Input:
 * Chiều dài và chiều rộng hình chữ nhật
 * Khối 2:
 * B1: Tạo biến
 * chieuDai
 * chieuRong
 * chuVi
 * dienTich
 * B2: Lập công thức:
 * dienTich =chieuDai*chieuRong
 * chuVi = (chieuDai+chieuRong)*2
 * B3: Thông báo kết qua
 *Khối 3: Output:

 */
 function dienTichHCN(){
    var chieuDai = document.getElementById("chieudai").value;
    var chieuRong = document.getElementById("chieurong").value;
    console.log(chieuDai,chieuRong);


    var dienTich = (Number(chieuDai) * Number(chieuRong));
    console.log("diện tích hình chữ nhật:",dienTich);
    document.getElementById("txtResults").innerHTML = dienTich;
    var chuVi = ((Number(chieuDai) + Number(chieuRong))) *2;
    console.log("chu vi hinh chữ nhật:", chuVi);
    document.getElementById("txtResultc").innerHTML = chuVi;


}
document.getElementById("btndientich").onclick = dienTichHCN;
document.getElementById("btnchuvi").onclick = dienTichHCN;

/**
 * Tính tổng 2 ký số
 * Khối 1: Input( 1 số có 2 chữ số)
 * ví dụ: 12, 45, 56,...
 * Khối 2: 
 *?Toạ biến:
 *number ( số có 2 chữ số)
 *soHangChuc, soDonvi
 *?Lập công thức:
 *ví dụ: number=21
 *soHangChuc = Math.floor(number/10) =>20
 *soDonVi = Math.floor(number%10) =>1
 *tinhTong = soHangChuc+soDonvi
 *?Thông báo kết quả:
 * Khối 3: Output
 */

 function tinhTong(){
    var so = document.getElementById("so").value;
    console.log(so);
   

    var tinhTong = (Number(Math.floor(so/10) ) + Number( (so%10)));
    console.log("tổng là:", tinhTong);
    document.getElementById("txtResultbai5").innerHTML = tinhTong;

}
document.getElementById("btnso2chuso").onclick = tinhTong;


