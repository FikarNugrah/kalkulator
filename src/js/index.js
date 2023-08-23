// HANDLEVALUE akan mengambil value dari input yang di klik
//   ( IF ) jika kondisi valueInput nya 0 dan value nya bukan operator maka valueInput yang ada di textarea yaitu 0 akan diubah/di Replace menjadi value(number/angka)
//   ( ELSE ) jika bukan 0 maka value yang di input akan ditambah/digabungkan

function handleValue(value) {
  let valueInput = document.form.textarea.value;
  if (
    valueInput === "0" &&
    value != "*" &&
    value != "/" &&
    value != "+" &&
    value != "-"
  ) {
    document.form.textarea.value = value;
  } else {
    document.form.textarea.value += value;
  }
}

// EQUAL => textarea ditangkap kedalam let valueinput
// lalu pada let hasil terdapat fungsi eval yaitu untuk mengubah value yang diinput berjalan sesuai fungsinya masing2
function equal() {
  let valueInput = document.form.textarea.value;
  let hasil = eval(valueInput);
  document.form.textarea.value = hasil;
}

// fungsi ini untuk menghapus value terakhir dari panjang value
function back() {
  let value = document.form.textarea.value;
  document.form.textarea.value = value.substring(0, value.length - 1);
  // if (value < 10) {
  //   document.form.textarea.value = "0";
  // } else {
  //   document.form.textarea.value = value.substring(0, value.length - 1);
  // }
}

// membersihkan / menghapus semua value yang diinput
function clean() {
  document.form.textarea.value = "0";
}
