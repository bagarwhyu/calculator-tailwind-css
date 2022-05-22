
// Nav

function toggleNav() {
    var bttn = document.getElementById("bgn-dtr");
    if (bttn.style.right === "-240%") {
    bttn.style.right = "-4%";
    } else {
    bttn.style.right = "-240%";
    }
}

function removeNav() {
    var bttn = document.getElementById("bgn-dtr");
    if (bttn.style.right === "-4%") {
        bttn.style.right = "-240%"
    }
}

// Nav end

// Calculator

function insert(num) {
    document.form.textView.value = document.form.textView.value += num;
}

function clr() {
    document.form.textView.value = "";
}

function equal() {
    const screen = document.form.textView.value
    if (screen == "") {
        document.form.textView.value = "";
    } else {
        document.form.textView.value = eval(screen);
    }
}

// Calculator end

// Bangun Datar

// ===Luas-Keliling Persegi===

function luasPersegi() {
    var panjangPersegi = parseInt (document.getElementById('panjangPersegi').value);
    var lebarPersegi = parseInt (document.getElementById('lebarPersegi').value);
    
    var luasPersegi = panjangPersegi * lebarPersegi;
    
    console.log(luasPersegi);
    document.getElementById('hasilPersegi').innerHTML = luasPersegi;
}

function kelilingPersegi() {
    var panjangPersegi = parseInt (document.getElementById('panjangPersegi').value);
    var lebarPersegi = parseInt (document.getElementById('lebarPersegi').value);

    var kelilingPersegi = 2 * (panjangPersegi + lebarPersegi);

    console.log(kelilingPersegi);
    document.getElementById('hasilPersegi').innerHTML = kelilingPersegi;
}

// ===Luas-Keliling Persegi end===

// ===Luas-Keliling Segitiga===

function luasSegitiga() {
    var alasSegitiga = parseInt (document.getElementById('alasSegitiga').value);
    var tinggiSegitiga = parseInt (document.getElementById('tinggiSegitiga').value);
    
    var luasSegitiga = alasSegitiga * tinggiSegitiga / 2;
    
    console.log(luasSegitiga);
    document.getElementById('hasilLuasSegitiga').innerHTML = luasSegitiga;
}

function kelilingSegitiga() {
    var sisiSegitigaA = parseInt (document.getElementById('sisiSegitigaA').value);
    var sisiSegitigaB = parseInt (document.getElementById('sisiSegitigaB').value);
    var sisiSegitigaC = parseInt (document.getElementById('sisiSegitigaC').value);
    
    var kelilingSegitiga = sisiSegitigaA + sisiSegitigaB + sisiSegitigaC;
    
    console.log(kelilingSegitiga);
    document.getElementById('hasilKelilingSegitiga').innerHTML = kelilingSegitiga;
}

// ===Luas-Keliling Segitiga end===

// ===Luas-Keliling Lingkaran===

function luasLingkaran() {
    var jariJari = parseInt (document.getElementById('jariJari').value);

    var luasLingkaran = 22 / 7 * jariJari * jariJari;

    console.log(luasLingkaran);
    document.getElementById('hasilLingkaran').innerHTML = luasLingkaran;
}

function kelilingLingkaran() {
    var jariJari = parseInt (document.getElementById('jariJari').value);
    
    var kelilingLingkaran = 22 / 7 * 2 * jariJari;

    console.log(kelilingLingkaran);
    document.getElementById('hasilLingkaran').innerHTML = kelilingLingkaran;
}

// ===Luas-Keliling Lingkaran end===

// Bangun Datar End

// Konversi Suhu

function conTemp() {
    var type = (document.getElementById('temp-type').value);
    var tempValue = (document.getElementById('input-Temp').value);

    if (type == "Celcius") {
        var C = Number (document.getElementById('input-Temp').value);
        document.getElementById('C').innerHTML = C;

        var F = (9 / 5 * C + 32);
        document.getElementById('F').innerHTML = F;

        var R = (4 / 5) * C;
        document.getElementById('R').innerHTML = R;

        var K = C + 273;
        document.getElementById('K').innerHTML = K;

    } else if (type == "Farenheit") {
        var F = Number (document.getElementById('input-Temp').value);
        document.getElementById('F').innerHTML = F;

        var C = 5 / 9 * (F-32);
        document.getElementById('C').innerHTML = C;

        var R = 4 /9 * (F-32);
        document.getElementById('R').innerHTML = R;

        var K = 5 / 9 *(F-32) + 273;
        document.getElementById('K').innerHTML = K;

    } else if (type == "Reamur") {
        var R = Number (document.getElementById('input-Temp').value);
        document.getElementById('R').innerHTML = R;

        var C = (5 / 4 ) * R;
        document.getElementById('C').innerHTML = C;

        var K = (5 / 4) * R + 273;
        document.getElementById('K').innerHTML = K;

        var F = (9 / 4) * R + 32;
        document.getElementById('F').innerHTML = F;
    } else if (type == "Kelvin") {
        var K = Number (document.getElementById('input-Temp').value);
        document.getElementById('K').innerHTML = K;

        var C = K - 273;
        document.getElementById('C').innerHTML = C;

        var R = 4 / 5 * (K - 273);
        document.getElementById('R').innerHTML = R;

        var F = 9 / 5 * (K - 273) + 32;
        document.getElementById('F').innerHTML = F;
    }
}

// Konversi Suhu end