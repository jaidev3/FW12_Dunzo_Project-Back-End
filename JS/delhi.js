let showcitiesdelhi = [
    {namedelhi :`Amanora`},{namedelhi :`Aundh`},{namedelhi :`Balewadi`},{namedelhi :`Baner`},{namedelhi :`Bavdhan`},{namedelhi :`Bibvewadi`},
    {namedelhi :`Camp`},{namedelhi :`Dhankawadi`},{namedelhi :`Erandwane`},
    {namedelhi :`Fursungi`},{namedelhi :`Ghorpadi`},{namedelhi :`Handewadi`},
    {namedelhi :`Hinjewadi Phase 1`},{namedelhi :`Hinjewadi Phase 2`},{namedelhi :`Hinjewadi Phase 3`},{namedelhi :`Kalyani Nagar`},{namedelhi :`Karve Nagar`},{namedelhi :`Katraj`},{namedelhi :`Khadki`},{namedelhi :`Kharadi`},{namedelhi :`Kondhwa`},{namedelhi :`Koregaon Park`},{namedelhi :`Kothrud`},{namedelhi :`Magarpatta City`},{namedelhi :`Mundhwa`},{namedelhi :`Nanded City`},{namedelhi :`Parvati Paytha`},{namedelhi :`Pashan`},{namedelhi :`Pimple Gurav`},{namedelhi :`Pimple Nilakh`},
    {namedelhi :`Pimple Saudagar`},{namedelhi :`delhi Cantonment`},{namedelhi :`Range Hills`},{namedelhi :`Rasta Peth`},{namedelhi :`Sangamvadi`},{namedelhi :`Sasane Nagar`},{namedelhi :`Shivaji Nagar`},{namedelhi :`Sus`},{namedelhi :`Swargate`},{namedelhi :`Tathawade`},{namedelhi :`Vadgaon Sheri`},{namedelhi :`Viman nagar`},{namedelhi :`Wagholi`},{namedelhi :`Wagholi Extension 1`},{namedelhi :`Wakad`},{namedelhi :`Wakdeqadi`},{namedelhi :`Wanowrie`},{namedelhi :`Warje`},{namedelhi :`Yerwala`},{namedelhi :`Yewalendi`},
]

var city = document.getElementById("list_state_delhi");
function displaydelhi(){
    showcitiesdelhi.forEach(function (el){
        let div = document.createElement('div');
        div.classList.add("state_list_inner");

        let link = document.createElement('a');
        link.href = "#";

        let city_para = document.createElement('p');
        city_para.textContent = el.namedelhi;

        link.append(city_para);
        div.append(link);
        city.append(div);
    });
}
displaydelhi();