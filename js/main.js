//GrabX
const GRABX_1= 8000; 
const GRABX_2= 7500; 
const GRABX_3= 7000; 
const GRABX_WAIT= 2000; 
//GrabsUB
const GRABSUB_1= 9000; 
const GRABSUB_2= 8500; 
const GRABSUB_3= 8000; 
const GRABSUB_WAIT= 3000; 
//GrabbLACK
const GRABBLACK_1= 10000; 
const GRABBLACK_2= 9500; 
const GRABBLACK_3= 9000; 
const GRABBLACK_WAIT= 3500; 
var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongtien = 0;
var tiencho = 0 ;

document.getElementById("btnTinhTien").onclick =function(){
    var KM = +document.getElementById("txtKM").value;
    var Time = +document.getElementById("txtTime").value;
    var LoaiXe =  layLoaiXe();
    switch (LoaiXe) {
        case "X":
            // tinh tien
            TinhTienChiTiet(KM,Time,GRABX_WAIT,GRABX_1,GRABX_2,GRABX_3);
        //    console.log(TinhTienChiTiet);
            break;
        case "S":
            // tinh tien
            TinhTienChiTiet(KM,Time,GRABSUB_WAIT,GRABSUB_1,GRABSUB_2,GRABSUB_3);

            break;
        case "B":
            // tinh tien
            TinhTienChiTiet(KM,Time,GRABBLACK_WAIT,GRABBLACK_1,GRABBLACK_2,GRABBLACK_3);

            break;
        default:
            alert("Vui long chon loai xe");
            break;
    }
  

    // if(LoaiXe ==="X"){

    // }else if(LoaiXe=="S"){

    // }else if(LoaiXe==="B"){

    // }
    document.getElementById("divThanhTien").style.display ="block";
    document.getElementById("xuatTien").innerHTML =tongtien;
};
function layLoaiXe(){
    var Grab_X = document.getElementById("grabX");
    var Grab_Sub = document.getElementById("grabSUV");
    var Grab_Black = document.getElementById("grabBlack");
    var loaiXe ="";
    if(Grab_X.checked) {
        loaiXe="X";
    }else if(Grab_Sub.checked){
        loaiXe="S";
    }else if(Grab_Black.checked){
        loaiXe="B";

    }
    return loaiXe;
}
function TinhTienCho(Time, giaCho){
    var kq =0;
    if(Time >=3){
        kq =tiencho = Math.floor( Time /3) *giaCho;
        }
        return kq;
}
function TinhKM_1(soKM,GiaKM){
    var kq = soKM *GiaKM;
    return kq;
}
function TinhKM_2(soKM,GiaKM){
    var kq = (soKM -1) * GiaKM;
    return kq;
}
function TinhKM_3(soKM,GiaKM){
    var kq = (soKM -19) * GiaKM;
    return kq;
}
function TinhTienChiTiet(KM, Time, Giacho, giaKM_1,giaKM_2,giaKM_3){
    tiencho =TinhTienCho(Time ,Giacho);
    if (0<=KM &&KM <=1) {
      tienKm_1 =TinhKM_1(KM, giaKM_1);
      tongtien =tienKm_1 +tiencho;
      
         //   if(Time >=3){
    //   tiencho = Math.floor( Time /3) *GRABX_WAIT;
    //   }
    }else if(1<= KM && KM <=19){
        tienKm_1 =TinhKM_1(1, giaKM_1);
        tienKm_2 =TinhKM_2(KM, giaKM_2);
        tongtien =tienKm_1 +tienKm_2 +tiencho;
      
    }else if(KM>19){
       
        tienKm_1 =TinhKM_1(1, giaKM_1);
        tienKm_2 =TinhKM_2(19, giaKM_2);
        tienKm_3 =TinhKM_3(KM, giaKM_3);
        tongtien= tienKm_1 +tienKm_2 +tienKm_3 +tiencho;
       
    }
}
document.getElementById("btn_in").onclick = function (){
    var content ="";
    var KM = +document.getElementById("txtKM").value;
    var Time = +document.getElementById("txtTime").value;
    if(0<= KM && KM <=1){
        content += "<tr>";
        content += "<td>Km đầu tiên </td>";
        content += "<td>" + KM +"</td>";
        content += "<td>" + GRABX_1+"</td>";
        content += "<td>" + tienKm_1+"</td>";
        content += "</tr>";

        content += "<tr>";
        content += "<td>thời gian chờ </td>";
        content += "<td>"+Time+" </td>";
        content += "<td>"+GRABX_WAIT+" </td>";
        content += "<td>"+tiencho+" </td>";
        content += "</tr>";
        content += "<tr>";
        content += "<td>tổng tiền </td>";
        content += "<td>"+tongtien+" </td>";
        content += "</tr>"


    }
    document.getElementById("tbody").innerHTML =content;
};