// mumbai
let showcitiesmumbai = [
    {namemumbai :`Amanora`},{namemumbai :`Aundh`},{namemumbai :`Balewadi`},{namemumbai :`Baner`},{namemumbai :`Bavdhan`},{namemumbai :`Bibvewadi`},
    {namemumbai :`Camp`},{namemumbai :`Dhankawadi`},{namemumbai :`Erandwane`},
    {namemumbai :`Fursungi`},{namemumbai :`Ghorpadi`},{namemumbai :`Handewadi`},
    {namemumbai :`Hinjewadi Phase 1`},{namemumbai :`Hinjewadi Phase 2`},{namemumbai :`Hinjewadi Phase 3`},{namemumbai :`Kalyani Nagar`},{namemumbai :`Karve Nagar`},{namemumbai :`Katraj`},{namemumbai :`Khadki`},{namemumbai :`Kharadi`},{namemumbai :`Kondhwa`},{namemumbai :`Koregaon Park`},{namemumbai :`Kothrud`},{namemumbai :`Magarpatta City`},{namemumbai :`Mundhwa`},{namemumbai :`Nanded City`},{namemumbai :`Parvati Paytha`},{namemumbai :`Pashan`},{namemumbai :`Pimple Gurav`},{namemumbai :`Pimple Nilakh`},
    {namemumbai :`Pimple Saudagar`},{namemumbai :`mumbai Cantonment`},{namemumbai :`Range Hills`},{namemumbai :`Rasta Peth`},{namemumbai :`Sangamvadi`},{namemumbai :`Sasane Nagar`},{namemumbai :`Shivaji Nagar`},{namemumbai :`Sus`},{namemumbai :`Swargate`},{namemumbai :`Tathawade`},{namemumbai :`Vadgaon Sheri`},{namemumbai :`Viman nagar`},{namemumbai :`Wagholi`},{namemumbai :`Wagholi Extension 1`},{namemumbai :`Wakad`},{namemumbai :`Wakdeqadi`},{namemumbai :`Wanowrie`},{namemumbai :`Warje`},{namemumbai :`Yerwala`},{namemumbai :`Yewalendi`},
]

var city = document.getElementById("list_state_mumbai");
function displaymumbai(){
    showcitiesmumbai.forEach(function (el){
        let div = document.createElement('div');
        div.classList.add("state_list_inner");

        let link = document.createElement('a');
        link.href = "#";

        let city_para = document.createElement('p');
        city_para.textContent = el.namemumbai;

        link.append(city_para);
        div.append(link);
        city.append(div);
    });
}
displaymumbai();

// // Mumbai



// // Banglore

// // Gurgaon

// // Hyderabad

// // New Delhi

// // Chennai
