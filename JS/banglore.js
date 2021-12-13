// banglore
let showcitiesbanglore = [
    {namebanglore :`Amanora`},{namebanglore :`Aundh`},{namebanglore :`Balewadi`},{namebanglore :`Baner`},{namebanglore :`Bavdhan`},{namebanglore :`Bibvewadi`},
    {namebanglore :`Camp`},{namebanglore :`Dhankawadi`},{namebanglore :`Erandwane`},
    {namebanglore :`Fursungi`},{namebanglore :`Ghorpadi`},{namebanglore :`Handewadi`},
    {namebanglore :`Hinjewadi Phase 1`},{namebanglore :`Hinjewadi Phase 2`},{namebanglore :`Hinjewadi Phase 3`},{namebanglore :`Kalyani Nagar`},{namebanglore :`Karve Nagar`},{namebanglore :`Katraj`},{namebanglore :`Khadki`},{namebanglore :`Kharadi`},{namebanglore :`Kondhwa`},{namebanglore :`Koregaon Park`},{namebanglore :`Kothrud`},{namebanglore :`Magarpatta City`},{namebanglore :`Mundhwa`},{namebanglore :`Nanded City`},{namebanglore :`Parvati Paytha`},{namebanglore :`Pashan`},{namebanglore :`Pimple Gurav`},{namebanglore :`Pimple Nilakh`},
    {namebanglore :`Pimple Saudagar`},{namebanglore :`banglore Cantonment`},{namebanglore :`Range Hills`},{namebanglore :`Rasta Peth`},{namebanglore :`Sangamvadi`},{namebanglore :`Sasane Nagar`},{namebanglore :`Shivaji Nagar`},{namebanglore :`Sus`},{namebanglore :`Swargate`},{namebanglore :`Tathawade`},{namebanglore :`Vadgaon Sheri`},{namebanglore :`Viman nagar`},{namebanglore :`Wagholi`},{namebanglore :`Wagholi Extension 1`},{namebanglore :`Wakad`},{namebanglore :`Wakdeqadi`},{namebanglore :`Wanowrie`},{namebanglore :`Warje`},{namebanglore :`Yerwala`},{namebanglore :`Yewalendi`},
]

var city = document.getElementById("list_state_banglore");
function displaybanglore(){
    showcitiesbanglore.forEach(function (el){
        let div = document.createElement('div');
        div.classList.add("state_list_inner");

        let link = document.createElement('a');
        link.href = "#";

        let city_para = document.createElement('p');
        city_para.textContent = el.namebanglore;

        link.append(city_para);
        div.append(link);
        city.append(div);
    });
}
displaybanglore();