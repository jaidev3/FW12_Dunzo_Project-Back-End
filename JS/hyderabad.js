let showcitieshyderabad = [
    {namehyderabad :`Amanora`},{namehyderabad :`Aundh`},{namehyderabad :`Balewadi`},{namehyderabad :`Baner`},{namehyderabad :`Bavdhan`},{namehyderabad :`Bibvewadi`},
    {namehyderabad :`Camp`},{namehyderabad :`Dhankawadi`},{namehyderabad :`Erandwane`},
    {namehyderabad :`Fursungi`},{namehyderabad :`Ghorpadi`},{namehyderabad :`Handewadi`},
    {namehyderabad :`Hinjewadi Phase 1`},{namehyderabad :`Hinjewadi Phase 2`},{namehyderabad :`Hinjewadi Phase 3`},{namehyderabad :`Kalyani Nagar`},{namehyderabad :`Karve Nagar`},{namehyderabad :`Katraj`},{namehyderabad :`Khadki`},{namehyderabad :`Kharadi`},{namehyderabad :`Kondhwa`},{namehyderabad :`Koregaon Park`},{namehyderabad :`Kothrud`},{namehyderabad :`Magarpatta City`},{namehyderabad :`Mundhwa`},{namehyderabad :`Nanded City`},{namehyderabad :`Parvati Paytha`},{namehyderabad :`Pashan`},{namehyderabad :`Pimple Gurav`},{namehyderabad :`Pimple Nilakh`},
    {namehyderabad :`Pimple Saudagar`},{namehyderabad :`hyderabad Cantonment`},{namehyderabad :`Range Hills`},{namehyderabad :`Rasta Peth`},{namehyderabad :`Sangamvadi`},{namehyderabad :`Sasane Nagar`},{namehyderabad :`Shivaji Nagar`},{namehyderabad :`Sus`},{namehyderabad :`Swargate`},{namehyderabad :`Tathawade`},{namehyderabad :`Vadgaon Sheri`},{namehyderabad :`Viman nagar`},{namehyderabad :`Wagholi`},{namehyderabad :`Wagholi Extension 1`},{namehyderabad :`Wakad`},{namehyderabad :`Wakdeqadi`},{namehyderabad :`Wanowrie`},{namehyderabad :`Warje`},{namehyderabad :`Yerwala`},{namehyderabad :`Yewalendi`},
]

var city = document.getElementById("list_state_hyderabad");
function displayhyderabad(){
    showcitieshyderabad.forEach(function (el){
        let div = document.createElement('div');
        div.classList.add("state_list_inner");

        let link = document.createElement('a');
        link.href = "#";

        let city_para = document.createElement('p');
        city_para.textContent = el.namehyderabad;

        link.append(city_para);
        div.append(link);
        city.append(div);
    });
}
displayhyderabad();