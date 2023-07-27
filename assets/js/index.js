    document.addEventListener('DOMContentLoaded', function () {

        /*Attendance*/
        document.querySelector('.add').addEventListener('click', function () {
        document.querySelector('.popup-container').style.display = 'block';
        });
    
        document.querySelector('.cancel').addEventListener('click', function () {
        document.querySelector('.popup-container').style.display = 'none';
        });
    
        document.querySelector('.add_wr').addEventListener('click', function () {
        document.querySelector('.popup-container').style.display = 'none';
        });
    
        let date_n = document.querySelector(".item-14-Laa");
        let day_n = document.querySelector(".wed-TfC");
        let date_p = document.querySelector(".item-13-1en");
        let day_p = document.querySelector(".tue-8UW");
        let date_a = document.querySelector(".item-15-hpS");
        let day_a = document.querySelector(".thu-pu4");
        let mon_n = document.querySelector(".jun-amL");
        let crtdte = new Date();
        let date = crtdte.getDate();
        let day = crtdte.getDay();
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
        let day_f = days[day];
        let dayp = days[day - 1];
        let daya = days[day + 1];
        let mon = crtdte.getMonth();
        let mons = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let mon_f = mons[mon];
        let yr = crtdte.getFullYear();
        console.log(mon);
        date_n.textContent = `${date}`;
        day_n.textContent = `${day_f}`;
        date_p.textContent = `${date - 1}`;
        day_p.textContent = `${dayp}`;
        date_a.textContent = `${date + 1}`;
        day_a.textContent = `${daya}`;
        mon_n.textContent = `${mon_f}`
    
        const mark = document.querySelector('.work_but');
    
        mark.addEventListener('click', function () {
        let male = parseInt(document.getElementById('male').value);
        let fmale = parseInt(document.getElementById('female').value);
        let cont = parseInt(document.getElementById('contract').value);
    
        if (isNaN(male)) {
            male = 0;
        }
        if (isNaN(fmale)) {
            fmale = 0;
        }
        if (isNaN(cont)) {
            cont = 0;
        }
    
        const ct_t = male + fmale + cont;
        const ct_p = male + fmale + cont;
        const tot = document.querySelector('.count table tbody tr .tot');
        tot.textContent = ct_t;
        const prs = document.querySelector('.count table tbody tr .prs');
        prs.textContent = ct_p;
        const abs = document.querySelector('.count table tbody tr .abs');
        abs.textContent = "0";
    
        document.querySelector('.workers form').reset();
        });
    
        const present = document.getElementById('present');
        const absent = document.getElementById('absent');
    
        present.addEventListener('click', function () {
        document.getElementById('present').style.display = 'none';
        document.getElementById('absent').style.display = 'none';
        const dis = document.getElementById('dis');
        dis.textContent = "Present"
        });
    
        absent.addEventListener('click', function () {
        document.getElementById('present').style.display = 'none';
        document.getElementById('absent').style.display = 'none';
        const dis = document.getElementById('dis');
        dis.textContent = "absent"
        });
    
        /*Master Node*/
        const ven = document.querySelector('.ven');
        const wor = document.querySelector('.wor');
        const cli = document.querySelector('.cli');
        const pro = document.querySelector('.pro');
    
        ven.addEventListener('click', function () {
        window.location.href = "ven_f.html";
        });
        wor.addEventListener('click', function () {
        window.location.href = "lab_f.html";
        });
        cli.addEventListener('click', function () {
        window.location.href = "cli_f.html";
        });
        pro.addEventListener('click', function () {
        window.location.href = "prod_f.html";
        });
    
        /*Client Form*/
        const save = document.querySelector('.cli_s');
        const clear = document.querySelector('.cli_c');
    
        save.addEventListener('click', function () {
        window.history.back();
        });
    
        clear.addEventListener('click', function () {
        document.getElementById('form_c').reset();
        });
    
        /*Product Form*/
        const saveP = document.querySelector('.pro_s');
        const clearP = document.querySelector('.pro_c');
    
        saveP.addEventListener('click', function () {
        window.history.back();
        });
    
        clearP.addEventListener('click', function () {
        document.getElementById('form_p').reset();
        });
    
        /*Labour Form*/
        const saveL = document.querySelector('.lab_s');
        const clearL = document.querySelector('.lab_c');
    
        saveL.addEventListener('click', function () {
        window.history.back();
        });
    
        clearL.addEventListener('click', function () {
        document.getElementById('form_l').reset();
        });
    
        /*Vendor Form*/
        const saveV = document.querySelector('.ven_s');
        const clearV = document.querySelector('.ven_c');
    
        saveV.addEventListener('click', function () {
        window.history.back();
        });
    
        clearV.addEventListener('click', function () {
        document.getElementById('form_v').reset();
        });
    
        /*Vendor Management*/
        const pent = document.querySelector('.pent');
        const pout = document.querySelector('.pout');
    
        pent.addEventListener('click', function () {
        window.location.href = "pentrym.html";
        });
    
        pout.addEventListener('click', function () {
        window.location.href = "pordm.html";
        });
    });
    