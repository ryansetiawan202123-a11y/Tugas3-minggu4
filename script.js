// ==============================
// DARK MODE
// ==============================

const darkToggleBtn = document.querySelector('#dark-toggle');
const body = document.body;

darkToggleBtn.addEventListener('click', function(){

body.classList.toggle('dark-mode');

const isDark = body.classList.contains('dark-mode');

if(isDark){
darkToggleBtn.textContent = "☀️ Light Mode";
}else{
darkToggleBtn.textContent = "🌙 Dark Mode";
}

});


// ==============================
// COUNTER
// ==============================

let count = 0;

const angkaDisplay = document.querySelector('#angka-counter');
const pesanDisplay = document.querySelector('#counter-pesan');

const btnTambah = document.querySelector('#btn-tambah');
const btnKurang = document.querySelector('#btn-kurang');

function updatePesan(n){

if(n === 0)
pesanDisplay.textContent = "Silakan mulai menghitung aktivitas.";

else if(n < 5)
pesanDisplay.textContent = "Aktivitas mulai bertambah.";

else if(n < 10)
pesanDisplay.textContent = "Bagus, terus lanjutkan!";

else
pesanDisplay.textContent = "Hebat! Aktivitas sudah banyak.";

}

btnTambah.addEventListener('click', function(){

count++;
angkaDisplay.textContent = count;
updatePesan(count);

});

btnKurang.addEventListener('click', function(){

if(count > 0){

count--;
angkaDisplay.textContent = count;
updatePesan(count);

}

});


// ==============================
// VALIDASI FORM
// ==============================

const btnKirim = document.querySelector('#btn-kirim');

const inputNama = document.querySelector('#input-nama');
const inputEmail = document.querySelector('#input-email');
const inputPesan = document.querySelector('#input-pesan');

const formFeedback = document.querySelector('#form-feedback');

function tampilkanPesan(teks, tipe){

formFeedback.textContent = teks;
formFeedback.className = "feedback " + tipe;

}

function isEmailValid(email){

return email.includes('@') && email.includes('.');

}

btnKirim.addEventListener('click', function(){

const nama = inputNama.value.trim();
const email = inputEmail.value.trim();
const pesan = inputPesan.value.trim();

if(nama === "" || email === "" || pesan === ""){

tampilkanPesan("Semua field harus diisi!", "error");
return;

}

if(!isEmailValid(email)){

tampilkanPesan("Format email tidak valid!", "error");
return;

}

tampilkanPesan("Pesan berhasil dikirim! Terima kasih " + nama, "success");

inputNama.value = "";
inputEmail.value = "";
inputPesan.value = "";

});
