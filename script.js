document.addEventListener("DOMContentLoaded", function () {
  const khodamHewan = [
    "Harimau Putih",
    "Harimau Sumatra",
    "Garuda",
    "Kuda Sembrani",
    "Naga Cina",
    "Naga Merah",
    "Elang Jawa",
    "Airavata (Gajah)",
    "Ganesha (Gajah)",
    "Macan Tutul Jawa",
    "Singa",
    "Kucing Hitam",
    "Burung Hantu",
    "Serigala",
    "Rubah",
    "Kupu-Kupu",
    "Gagak",
    "Buaya",
    "Ikan Koi",
    "Naga Air",
    "Paus",
    "Dolphin (Lumba-Lumba)",
    "Merak",
    "Kura-Kura",
    "Gajah Afrika",
    "Banteng",
    "Kijang",
    "Lebah",
    "Singa Putih",
    "Burung Phoenix",
    "Kuda Laut",
    "Hiu",
    "Kelelawar",
    "Jaguar",
    "Merpati",
    "Beruang",
    "Ular",
    "Rajawali",
    "Panda",
    "Koala",
    "Laba-Laba",
    "Cheetah",
    "Orca (Paus Pembunuh)",
    "Flamingo",
    "Kucing Siam",
    "Antelope",
    "Anjing Laut",
    "Hamster",
    "Penguin",
    "Zebra",
    "Kuda Nil",
    "Penyu",
    "Gorila",
    "Babi Hutan",
    "Rusa",
    "Burung Kenari",
    "Burung Elang",
    "Katak",
    "Komodo",
    "Anjing Siberian Husky",
    "Buaya Nil",
    "Gagak Hitam",
    "Ikan Pari",
    "Beruang Kutub",
    "Kelinci",
    "Jangkrik",
    "Burung Cendrawasih",
    "Bunglon",
    "Banteng Liar",
    "Kuda Liar",
    "Kucing Persia",
    "Sapi",
    "Ayam Jantan",
    "Itik",
    "Gajah India",
    "Gus Penceng",
  ];

  const inputField = document.getElementById("khodamInput");

  function checkKhodam() {
    const inputName = inputField.value.trim();
    if (inputName) {
      const randomKhodam =
        khodamHewan[Math.floor(Math.random() * khodamHewan.length)];
      Swal.fire({
        title: "Khodam Ditemukan!",
        html: `<b>${inputName}</b> memiliki khodam: <b>${randomKhodam}</b>`,
        confirmButtonText: "Selesai Cek Khodam",
        confirmButtonColor: "#202020",
      });

      inputField.value = "";
    } else {
      Swal.fire({
        title: "Kesalahan",
        text: "Harap masukkan nama.",
        confirmButtonText: "Done",
        confirmButtonColor: "#202020",
      });
    }
  }

  document.getElementById("checkButton").addEventListener("click", checkKhodam);

  inputField.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkKhodam();
    }
  });
});
