
let showcitieschennai = [
    {namechennai :`Amanora`},{namechennai :`Aundh`},{namechennai :`Balewadi`},{namechennai :`Baner`},{namechennai :`Bavdhan`},{namechennai :`Bibvewadi`},
    {namechennai :`Camp`},{namechennai :`Dhankawadi`},{namechennai :`Erandwane`},
    {namechennai :`Fursungi`},{namechennai :`Ghorpadi`},{namechennai :`Handewadi`},
    {namechennai :`Hinjewadi Phase 1`},{namechennai :`Hinjewadi Phase 2`},{namechennai :`Hinjewadi Phase 3`},{namechennai :`Kalyani Nagar`},{namechennai :`Karve Nagar`},{namechennai :`Katraj`},{namechennai :`Khadki`},{namechennai :`Kharadi`},{namechennai :`Kondhwa`},{namechennai :`Koregaon Park`},{namechennai :`Kothrud`},{namechennai :`Magarpatta City`},{namechennai :`Mundhwa`},{namechennai :`Nanded City`},{namechennai :`Parvati Paytha`},{namechennai :`Pashan`},{namechennai :`Pimple Gurav`},{namechennai :`Pimple Nilakh`},
    {namechennai :`Pimple Saudagar`},{namechennai :`chennai Cantonment`},{namechennai :`Range Hills`},{namechennai :`Rasta Peth`},{namechennai :`Sangamvadi`},{namechennai :`Sasane Nagar`},{namechennai :`Shivaji Nagar`},{namechennai :`Sus`},{namechennai :`Swargate`},{namechennai :`Tathawade`},{namechennai :`Vadgaon Sheri`},{namechennai :`Viman nagar`},{namechennai :`Wagholi`},{namechennai :`Wagholi Extension 1`},{namechennai :`Wakad`},{namechennai :`Wakdeqadi`},{namechennai :`Wanowrie`},{namechennai :`Warje`},{namechennai :`Yerwala`},{namechennai :`Yewalendi`},
]

var city = document.getElementById("list_state_chennai");
function displaychennai(){
    showcitieschennai.forEach(function (el){
        let div = document.createElement('div');
        div.classList.add("state_list_inner");

        let link = document.createElement('a');
        link.href = "#";

        let city_para = document.createElement('p');
        city_para.textContent = el.namechennai;

        link.append(city_para);
        div.append(link);
        city.append(div);
    });
}
displaychennai();