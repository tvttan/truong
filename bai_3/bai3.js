function phanLoaiHocSinh(diem) {
    let loai;
    switch (true) {
        case (diem >= 9 && diem <= 10):
            loai = "Xuất sắc";
            break;
        case (diem >= 8 && diem < 9):
            loai = "Giỏi";
            break;
        case (diem >= 7 && diem < 8):
            loai = "Khá";
            break;
        case (diem >= 5 && diem < 7):
            loai = "Trung bình";
            break;
        case (diem >= 0 && diem < 5):
            loai = "Yếu";
            break;
        default:
            loai = "Điểm không hợp lệ";
    }
    return loai;
}
const diemHocSinh = 9.5;
const loaiHocSinh = phanLoaiHocSinh(diemHocSinh);
console.log(`Điểm: ${diemHocSinh} - Loại: ${loaiHocSinh}`);

function menuSelection(option) {
    switch (option) { 
        case 1:
            console.log('Bạn đã chọn 1: Xem thông tin cá nhân');
            break;
        case 2:
            console.log('Bạn đã chọn 2: Xem điểm số');
            break;
        case 3:
            console.log('Bạn đã chọn 3: Đăng xuất');
            break;
        default:
            console.log('Lựa chọn không hợp lệ. Vui lòng chọn từ 1 đến 3.');
    }
}
menuSelection(1);
menuSelection(2);
menuSelection(3);
menuSelection(4);


// cú pháp switch case là chạy hết các câu lệnh nếu chạy vào dòng code nào mà đúng với điều kiện đó thì sẽ tự động thoát ra ngoài.
// câu lệnh 'switch' được sử dụng thay thế nhiều câu lệnh'if-else' khi kiểm tra một biểu thức vs nhiều giá trị cụ thể.
// sử dụng 'case' để xác định các giá trị cần kiểm tra và 'break' để ngăn chặn "fall- through".
