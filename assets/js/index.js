// Move the updateAttendanceCounts function outside the DOMContentLoaded event listener
const updateAttendanceCounts = () => {
    const attendanceCells = document.querySelectorAll('.attendance');
    let presentCount = 0;
    let absentCount = 0;

    attendanceCells.forEach(cell => {
        const status = cell.textContent;
        if (status === 'Present') {
            presentCount++;
        } else if (status === 'Absent') {
            absentCount++;
        }
    });

    const presentCountElement = document.getElementById('presentCount');
    const absentCountElement = document.getElementById('absentCount');
    const totalCountElement = document.getElementById('totalCount');

    const male = parseInt(document.getElementById('male').value) || 0;
    const female = parseInt(document.getElementById('female').value) || 0;
    const contract = parseInt(document.getElementById('contract').value) || 0;

    const totalMaleFemaleContract = male + female + contract;
    const totalAttendance = presentCount + absentCount;

    presentCountElement.textContent = presentCount;
    absentCountElement.textContent = absentCount;
    totalCountElement.textContent = totalMaleFemaleContract + totalAttendance;
};

    const markAttendance = (cell, status) => {
    cell.textContent = status;
    updateAttendanceCounts();
    
    // Corrected attribute name in querySelector
    const workerId = cell.parentElement.querySelector('.w_id').dataset.workerId;

    // Log the workerId and status to check if they are correct
    console.log('Worker ID:', workerId);
    console.log('Status:', status);

    // Send a POST request to update attendance status on the server
    fetch('http://localhost:3000/contract/markAttendance', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ workerId, status })
    })
    .then(response => {
        if (response.ok) {
        console.log('Attendance updated on the server.');
        } else {
        console.error('Error updating attendance on the server.');
        }
    })
    .catch(error => console.error('Error updating attendance:', error));
    };

        // Add event listeners to the "Present" and "Absent" buttons
        const attendanceCells = document.querySelectorAll('.attendance');
        attendanceCells.forEach(cell => {
            const presentButton = cell.querySelector('.prs');
            const absentButton = cell.querySelector('.abs');
    
            presentButton.addEventListener('click', () => markAttendance(cell, 'Present'));
            absentButton.addEventListener('click', () => markAttendance(cell, 'Absent'));
        });

document.addEventListener('DOMContentLoaded', () => {
    /* Attendance */
    document.querySelector('.add').addEventListener('click', function () {
        document.querySelector('.popup-container').style.display = 'block';
    });

    document.querySelector('.cancel').addEventListener('click', function () {
        document.querySelector('.popup-container').style.display = 'none';
    });

    document.querySelector('.add_wr').addEventListener('click', function () {
        document.querySelector('.popup-container').style.display = 'none';
    });

    let date_n = document.querySelector('.item-14-Laa');
    let day_n = document.querySelector('.wed-TfC');
    let date_p = document.querySelector('.item-13-1en');
    let day_p = document.querySelector('.tue-8UW');
    let date_a = document.querySelector('.item-15-hpS');
    let day_a = document.querySelector('.thu-pu4');
    let mon_n = document.querySelector('.jun-amL');
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
    date_n.textContent = `${date}`;
    day_n.textContent = `${day_f}`;
    date_p.textContent = `${date - 1}`;
    day_p.textContent = `${dayp}`;
    date_a.textContent = `${date + 1}`;
    day_a.textContent = `${daya}`;
    mon_n.textContent = `${mon_f}`;

    /* Master Node */
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

    /* Client Form */
    const save = document.querySelector('.cli_s');
    const clear = document.querySelector('.cli_c');

    save.addEventListener('click', function () {
        window.history.back();
    });

    clear.addEventListener('click', function () {
        document.getElementById('form_c').reset();
    });

    /* Product Form */
    const saveP = document.querySelector('.pro_s');
    const clearP = document.querySelector('.pro_c');

    saveP.addEventListener('click', function () {
        window.history.back();
    });

    clearP.addEventListener('click', function () {
        document.getElementById('form_p').reset();
    });

    /* Labour Form */
    const saveL = document.querySelector('.lab_s');
    const clearL = document.querySelector('.lab_c');

    saveL.addEventListener('click', function () {
        window.history.back();
    });

    clearL.addEventListener('click', function () {
        document.getElementById('form_l').reset();
    });

    /* Vendor Form */
    const saveV = document.querySelector('.ven_s');
    const clearV = document.querySelector('.ven_c');

    saveV.addEventListener('click', function () {
        window.history.back();
    });

    clearV.addEventListener('click', function () {
        document.getElementById('form_v').reset();
    });

    /* Vendor Management */
    const pent = document.querySelector('.pent');
    const pout = document.querySelector('.pout');

    pent.addEventListener('click', function () {
        window.location.href = "pentrym.html";
    });

    pout.addEventListener('click', function () {
        window.location.href = "pordm.html";
    });

    // Add event listener to the "Mark Attendance" button
    const markButton = document.querySelector('.work_but');
    markButton.addEventListener('click', () => {
        // ... (existing code for marking attendance)
    });

    // Fetch and display tasks
    const tasksTableBody = document.querySelector('#table tbody');
    const fetchAndDisplayTasks = () => {
        fetch('http://localhost:3000/contract/det')
            .then(response => response.json())
            .then(tasks => {
                tasksTableBody.innerHTML = ''; // Clear existing table rows

                tasks.forEach(task => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${task.w_name}</td>
                        <td>${task.w_type}</td>
                        <td>${task.shift}</td>
                        <td class="attendance">
                            <div class="p_a">
                                <button class="prs" style="margin-right: 10px; background-color: green;">Present</button>
                                <button class="abs" style="margin-left: 10px; background-color: red;">Absent</button>
                            </div>
                        </td>
                    `;
                    tasksTableBody.appendChild(row);
                });

                // Add event listeners to the "Present" and "Absent" buttons
                const attendanceCells = document.querySelectorAll('.attendance');
                attendanceCells.forEach(cell => {
                    const presentButton = cell.querySelector('.prs');
                    const absentButton = cell.querySelector('.abs');

                    presentButton.addEventListener('click', () => markAttendance(cell, 'Present'));
                    absentButton.addEventListener('click', () => markAttendance(cell, 'Absent'));
                });

                // Update attendance counts
                updateAttendanceCounts();
            })
            .catch(error => console.error('Error retrieving tasks:', error));
    };

    // Initial fetch and display tasks
    fetchAndDisplayTasks();
});
