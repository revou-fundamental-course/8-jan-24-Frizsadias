function calculateLuas() {
  const sisi = document.getElementById("sisi").value;
  const luas = sisi * sisi;

  // Tampilkan hasil di dalam elemen resultContainer
  document.getElementById(
    "resultContainer"
  ).innerHTML = `<p>Luas Persegi: ${luas}</p>`;
}

function calculateKeliling() {
  const sisi = document.getElementById("sisi").value;
  const keliling = 4 * sisi;

  // Tampilkan hasil di dalam elemen resultContainer
  document.getElementById(
    "resultContainer"
  ).innerHTML = `<p>Keliling Persegi: ${keliling}</p>`;
}

function resetInput() {
  // Reset input
  document.getElementById("sisi").value = "";

  // Hapus hasil di dalam elemen resultContainer
  document.getElementById("resultContainer").innerHTML = "";
}

function persegi() {
  // Menampilkan container untuk perhitungan persegi
  document.querySelector(".containerpersegi").style.display = "block";
  // Menyembunyikan container untuk perhitungan persegi panjang
  document.querySelector(".containerpersegipanjang").style.display = "none";
}

function persegipanjang() {
  // Menampilkan container untuk perhitungan persegi panjang
  document.querySelector(".containerpersegipanjang").style.display = "block";
  // Menyembunyikan container untuk perhitungan persegi
  document.querySelector(".containerpersegi").style.display = "none";
}

// Fungsi-fungsi perhitungan dan resetInput untuk persegi (sesuai dengan kode sebelumnya)
function calculateLuas() {
  const sisi = document.getElementById("sisi").value;
  const luas = sisi * sisi;

  if (sisi.trim() === "") {
    alert("Masukkan nilai sisi terlebih dahulu");
    return;
  }

  const resultMessage = `
    <p>Luas Persegi : sisi x sisi</p>
    <p>Luas Persegi : ${sisi} x ${sisi}</p>
    <p><strong>Luas Persegi : ${luas}</strong></p>
  `;

  document.getElementById("resultContainerPersegi").innerHTML = resultMessage;
}


function calculateKeliling() {
  const sisi = document.getElementById("sisi").value;
  const keliling = 4 * sisi;

  if (sisi.trim() === "") {
    alert("Masukkan nilai sisi terlebih dahulu");
    return;
  }

  const resultMessage = `
    <p>Keliling Persegi : 4 x sisi</p>
    <p>Keliling Persegi : 4 x ${sisi}</p>
    <p><strong>Keliling Persegi : ${keliling}</strong></p>
  `;

  document.getElementById("resultContainerPersegi").innerHTML = resultMessage;
}

function resetInput() {
  document.getElementById("sisi").value = "";
  document.getElementById("resultContainerPersegi").innerHTML = "";
}

// Fungsi-fungsi perhitungan dan resetInput untuk persegi panjang
function calculateLuasPersegiPanjang() {
  const panjang = document.getElementById("panjang").value;
  const lebar = document.getElementById("lebar").value;
  const luas = panjang * lebar;

  if (panjang.trim() === "") {
    alert("Masukkan nilai panjang terlebih dahulu");
    return;
  }

  if (lebar.trim() === "") {
    alert("Masukkan nilai lebar terlebih dahulu");
    return;
  }

  const resultMessage = `
    <p>Luas Persegi Panjang: panjang x lebar</p>
    <p>Luas Persegi Panjang: ${panjang} x ${lebar}</p>
    <p>Luas Persegi Panjang: ${luas}</p>
  `;

  document.getElementById("resultContainerPersegiPanjang").innerHTML = resultMessage;
}

function calculateKelilingPersegiPanjang() {
  const panjang = document.getElementById("panjang").value;
  const lebar = document.getElementById("lebar").value;
  const keliling = 2 * (parseInt(panjang) + parseInt(lebar));

  if (panjang.trim() === "") {
    alert("Masukkan nilai panjang terlebih dahulu");
    return;
  }

  if (lebar.trim() === "") {
    alert("Masukkan nilai lebar terlebih dahulu");
    return;
  }

  const resultMessage = `
    <p>Keliling Persegi Panjang: 2 x (panjang + lebar)</p>
    <p>Keliling Persegi Panjang: 2 x (${panjang} x ${lebar})</p>
    <p>Keliling Persegi Panjang: ${keliling}</p>
  `;

  document.getElementById("resultContainerPersegiPanjang").innerHTML =
    resultMessage;
}

function resetInputPersegiPanjang() {
  document.getElementById("panjang").value = "";
  document.getElementById("lebar").value = "";
  document.getElementById("resultContainerPersegiPanjang").innerHTML = "";
}
