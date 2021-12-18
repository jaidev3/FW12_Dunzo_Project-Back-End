// Pune
let showcitiespune = [
  { namepune: `Amanora` },
  { namepune: `Aundh` },
  { namepune: `Balewadi` },
  { namepune: `Baner` },
  { namepune: `Bavdhan` },
  { namepune: `Bibvewadi` },
  { namepune: `Camp` },
  { namepune: `Dhankawadi` },
  { namepune: `Erandwane` },
  { namepune: `Fursungi` },
  { namepune: `Ghorpadi` },
  { namepune: `Handewadi` },
  { namepune: `Hinjewadi Phase 1` },
  { namepune: `Hinjewadi Phase 2` },
  { namepune: `Hinjewadi Phase 3` },
  { namepune: `Kalyani Nagar` },
  { namepune: `Karve Nagar` },
  { namepune: `Katraj` },
  { namepune: `Khadki` },
  { namepune: `Kharadi` },
  { namepune: `Kondhwa` },
  { namepune: `Koregaon Park` },
  { namepune: `Kothrud` },
  { namepune: `Magarpatta City` },
  { namepune: `Mundhwa` },
  { namepune: `Nanded City` },
  { namepune: `Parvati Paytha` },
  { namepune: `Pashan` },
  { namepune: `Pimple Gurav` },
  { namepune: `Pimple Nilakh` },
  { namepune: `Pimple Saudagar` },
  { namepune: `Pune Cantonment` },
  { namepune: `Range Hills` },
  { namepune: `Rasta Peth` },
  { namepune: `Sangamvadi` },
  { namepune: `Sasane Nagar` },
  { namepune: `Shivaji Nagar` },
  { namepune: `Sus` },
  { namepune: `Swargate` },
  { namepune: `Tathawade` },
  { namepune: `Vadgaon Sheri` },
  { namepune: `Viman nagar` },
  { namepune: `Wagholi` },
  { namepune: `Wagholi Extension 1` },
  { namepune: `Wakad` },
  { namepune: `Wakdeqadi` },
  { namepune: `Wanowrie` },
  { namepune: `Warje` },
  { namepune: `Yerwala` },
  { namepune: `Yewalendi` },
];

var city = document.getElementById("list_state_pune");
function displaypune() {
  showcitiespune.forEach(function (el) {
    let div = document.createElement("div");
    div.classList.add("state_list_inner");

    let link = document.createElement("a");
    link.href = "#";

    let city_para = document.createElement("p");
    city_para.textContent = el.namepune;

    link.append(city_para);
    div.append(link);
    city.append(div);
  });
}
displaypune();

// mumbai

// // Banglore

// // Gurgaon

// // Hyderabad

// // New Delhi

// // Chennai
