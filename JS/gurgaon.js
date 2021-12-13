let showcitiesgurgaon = [
    {namegurgaon :`Amanora`},{namegurgaon :`Aundh`},{namegurgaon :`Balewadi`},{namegurgaon :`Baner`},{namegurgaon :`Bavdhan`},{namegurgaon :`Bibvewadi`},
    {namegurgaon :`Camp`},{namegurgaon :`Dhankawadi`},{namegurgaon :`Erandwane`},
    {namegurgaon :`Fursungi`},{namegurgaon :`Ghorpadi`},{namegurgaon :`Handewadi`},
    {namegurgaon :`Hinjewadi Phase 1`},{namegurgaon :`Hinjewadi Phase 2`},{namegurgaon :`Hinjewadi Phase 3`},{namegurgaon :`Kalyani Nagar`},{namegurgaon :`Karve Nagar`},{namegurgaon :`Katraj`},{namegurgaon :`Khadki`},{namegurgaon :`Kharadi`},{namegurgaon :`Kondhwa`},{namegurgaon :`Koregaon Park`},{namegurgaon :`Kothrud`},{namegurgaon :`Magarpatta City`},{namegurgaon :`Mundhwa`},{namegurgaon :`Nanded City`},{namegurgaon :`Parvati Paytha`},{namegurgaon :`Pashan`},{namegurgaon :`Pimple Gurav`},{namegurgaon :`Pimple Nilakh`},
    {namegurgaon :`Pimple Saudagar`},{namegurgaon :`gurgaon Cantonment`},{namegurgaon :`Range Hills`},{namegurgaon :`Rasta Peth`},{namegurgaon :`Sangamvadi`},{namegurgaon :`Sasane Nagar`},{namegurgaon :`Shivaji Nagar`},{namegurgaon :`Sus`},{namegurgaon :`Swargate`},{namegurgaon :`Tathawade`},{namegurgaon :`Vadgaon Sheri`},{namegurgaon :`Viman nagar`},{namegurgaon :`Wagholi`},{namegurgaon :`Wagholi Extension 1`},{namegurgaon :`Wakad`},{namegurgaon :`Wakdeqadi`},{namegurgaon :`Wanowrie`},{namegurgaon :`Warje`},{namegurgaon :`Yerwala`},{namegurgaon :`Yewalendi`},
]

var city = document.getElementById("list_state_gurgaon");
function displaygurgaon(){
    showcitiesgurgaon.forEach(function (el){
        let div = document.createElement('div');
        div.classList.add("state_list_inner");

        let link = document.createElement('a');
        link.href = "#";

        let city_para = document.createElement('p');
        city_para.textContent = el.namegurgaon;

        link.append(city_para);
        div.append(link);
        city.append(div);
    });
}
displaygurgaon();