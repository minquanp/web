
let toan = 9;
let van = 9;
let anh = 9;
let diemtrungbinh = (toan + van + anh) / 3;
if (diemtrungbinh >= 9) {
    console.log(`xep loai gioi`);
} else if (diemtrungbinh >= 7) {
    console.log(`xep loai kha`);
} else if (diemtrungbinh >= 5) {
    console.log(`xep loai trung binh`);
} else {
    console.log(`xep loai yeu`);
}