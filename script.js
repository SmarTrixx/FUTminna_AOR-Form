// Row counter for unique IDs
let teachingRowCount = 0;
let dutyRowCount = 0;
let projectRowCount = 0;
let serviceRowCount = 0;

// Initialize with one empty row in each section
document.addEventListener('DOMContentLoaded', function() {
    addTeachingRow();
    addDutyRow();
    addProjectRow();
    addServiceRow();

    // Handle form submission
    document.getElementById('aorForm').addEventListener('submit', handleFormSubmit);
});

// ========== Teaching Section ==========
function addTeachingRow() {
    const tbody = document.getElementById('teachingTableBody');
    const rowId = `teaching-${teachingRowCount++}`;
    
    const row = document.createElement('tr');
    row.id = rowId;
    row.innerHTML = `
        <td><input type="text" placeholder="Course Code" data-field="courseCode"></td>
        <td><input type="text" placeholder="Course Name / Title" data-field="courseName"></td>
        <td><input type="text" placeholder="Venue" data-field="venue"></td>
        <td><input type="text" placeholder="Days" data-field="days"></td>
        <td><input type="text" placeholder="Time" data-field="time"></td>
        <td><input type="text" placeholder="Credit Unit" data-field="creditUnit"></td>
        <td><input type="text" placeholder="Studio/Lab" data-field="studioLab"></td>
        <td><button type="button" class="btn btn-delete-row" onclick="deleteRow('${rowId}')">Delete</button></td>
    `;
    tbody.appendChild(row);
}

function deleteRow(rowId) {
    const row = document.getElementById(rowId);
    if (row) {
        row.remove();
    }
}

function removeTeachingSection() {
    const tbody = document.getElementById('teachingTableBody');
    tbody.innerHTML = '';
    teachingRowCount = 0;
}

// ========== Administrative Duties Section ==========
function addDutyRow() {
    const tbody = document.getElementById('dutiesTableBody');
    const rowId = `duty-${dutyRowCount++}`;
    
    const row = document.createElement('tr');
    row.id = rowId;
    row.innerHTML = `
        <td><select data-field="typeOfActivity1">
            <option value="">Select Type of Activity</option>
            <option value="Committee">Committee</option>
            <option value="Supervision">Supervision</option>
            <option value="Mentoring">Mentoring</option>
            <option value="Administration">Administration</option>
            <option value="Other">Other</option>
        </select></td>
        <td><select data-field="typeOfActivity2">
            <option value="">Select Type of Activity</option>
            <option value="Committee">Committee</option>
            <option value="Supervision">Supervision</option>
            <option value="Mentoring">Mentoring</option>
            <option value="Administration">Administration</option>
            <option value="Other">Other</option>
        </select></td>
        <td><button type="button" class="btn btn-delete-row" onclick="deleteRow('${rowId}')">Delete</button></td>
    `;
    tbody.appendChild(row);
}

function removeDutiesSection() {
    const tbody = document.getElementById('dutiesTableBody');
    tbody.innerHTML = '';
    dutyRowCount = 0;
}

// ========== Funded Research Section ==========
function addProjectRow() {
    const tbody = document.getElementById('researchTableBody');
    const rowId = `project-${projectRowCount++}`;
    
    const row = document.createElement('tr');
    row.id = rowId;
    row.innerHTML = `
        <td><input type="text" placeholder="Project No" data-field="projectNo"></td>
        <td><input type="text" placeholder="Title of Award" data-field="titleOfAward"></td>
        <td><input type="text" placeholder="In-kind required by" data-field="inkindRequired"></td>
        <td><input type="text" placeholder="Release Time" data-field="releaseTime"></td>
        <td><input type="text" placeholder="Total Amount" data-field="totalAmount"></td>
        <td><input type="text" placeholder="Remark" data-field="remark"></td>
        <td><button type="button" class="btn btn-delete-row" onclick="deleteRow('${rowId}')">Delete</button></td>
    `;
    tbody.appendChild(row);
}

function removeResearchSection() {
    const tbody = document.getElementById('researchTableBody');
    tbody.innerHTML = '';
    projectRowCount = 0;
}

// ========== Community Service Section ==========
function addServiceRow() {
    const tbody = document.getElementById('serviceTableBody');
    const rowId = `service-${serviceRowCount++}`;
    
    const row = document.createElement('tr');
    row.id = rowId;
    row.innerHTML = `
        <td><input type="text" placeholder="Type" data-field="serviceType"></td>
        <td><input type="text" placeholder="Beneficiary" data-field="beneficiary"></td>
        <td><input type="text" placeholder="Effect" data-field="effect"></td>
        <td><input type="date" data-field="serviceDate"></td>
        <td><button type="button" class="btn btn-delete-row" onclick="deleteRow('${rowId}')">Delete</button></td>
    `;
    tbody.appendChild(row);
}

function removeServiceSection() {
    const tbody = document.getElementById('serviceTableBody');
    tbody.innerHTML = '';
    serviceRowCount = 0;
}

// ========== Form Actions ==========
function previewSummary() {
    const formData = new FormData(document.getElementById('aorForm'));
    const summary = {
        lecturerInfo: {
            session: formData.get('session'),
            semester: formData.get('semester'),
            appointment: formData.get('appointment'),
            lastName: formData.get('lastName'),
            firstName: formData.get('firstName'),
            middleInitial: formData.get('middleInitial'),
            nameOfSchool: formData.get('nameOfSchool'),
            department: formData.get('department'),
            positionRank: formData.get('positionRank'),
            staffPhoneNo: formData.get('staffPhoneNo'),
            salaryGradeLevel: formData.get('salaryGradeLevel'),
            teachingCreditUnits: formData.get('teachingCreditUnits'),
            leaveOfAbsence: formData.get('leaveOfAbsence')
        },
        teaching: {
            noOfLecturers: formData.get('noOfLecturers'),
            totalStudentEnrol: formData.get('totalStudentEnrol')
        }
    };

    let previewHTML = `
        <h2>AOR Form Summary</h2>
        <div style="margin-bottom: 20px;">
            <h3>Lecturer Information</h3>
            <p><strong>Name:</strong> ${summary.lecturerInfo.firstName} ${summary.lecturerInfo.middleInitial} ${summary.lecturerInfo.lastName}</p>
            <p><strong>Department:</strong> ${summary.lecturerInfo.department}</p>
            <p><strong>Position:</strong> ${summary.lecturerInfo.positionRank}</p>
            <p><strong>Session:</strong> ${summary.lecturerInfo.session}</p>
            <p><strong>Semester:</strong> ${summary.lecturerInfo.semester}</p>
        </div>
        <div style="margin-bottom: 20px;">
            <h3>Teaching Summary</h3>
            <p><strong>No of Lecturers:</strong> ${summary.teaching.noOfLecturers}</p>
            <p><strong>Total Student Enrollment:</strong> ${summary.teaching.totalStudentEnrol}</p>
        </div>
    `;

    // Open in new window or alert
    const previewWindow = window.open('', 'AOR Summary', 'width=800,height=600');
    previewWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>AOR Form Summary</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h2 { color: #7b2cbf; }
                h3 { color: #7b2cbf; margin-top: 20px; }
                p { margin: 8px 0; }
                .actions { margin-top: 30px; }
                button { padding: 10px 20px; margin-right: 10px; cursor: pointer; }
                .print-btn { background-color: #009b88; color: white; border: none; }
                .close-btn { background-color: #ff3b4a; color: white; border: none; }
            </style>
        </head>
        <body>
            ${previewHTML}
            <div class="actions">
                <button class="print-btn" onclick="window.print()">Print</button>
                <button class="close-btn" onclick="window.close()">Close</button>
            </div>
        </body>
        </html>
    `);
    previewWindow.document.close();
}

function handleFormSubmit(e) {
    e.preventDefault();

    // Collect all form data
    const formData = new FormData(document.getElementById('aorForm'));

    // Collect teaching data
    const teachingRows = [];
    document.querySelectorAll('#teachingTableBody tr').forEach(row => {
        const inputs = row.querySelectorAll('input');
        if (inputs[0].value) { // Only add non-empty rows
            teachingRows.push({
                courseCode: inputs[0].value,
                courseName: inputs[1].value,
                venue: inputs[2].value,
                days: inputs[3].value,
                time: inputs[4].value,
                creditUnit: inputs[5].value,
                studioLab: inputs[6].value
            });
        }
    });

    // Collect duty data
    const dutyRows = [];
    document.querySelectorAll('#dutiesTableBody tr').forEach(row => {
        const selects = row.querySelectorAll('select');
        if (selects[0].value || selects[1].value) {
            dutyRows.push({
                typeOfActivity1: selects[0].value,
                typeOfActivity2: selects[1].value
            });
        }
    });

    // Collect project data
    const projectRows = [];
    document.querySelectorAll('#researchTableBody tr').forEach(row => {
        const inputs = row.querySelectorAll('input');
        if (inputs[0].value) {
            projectRows.push({
                projectNo: inputs[0].value,
                titleOfAward: inputs[1].value,
                inkindRequired: inputs[2].value,
                releaseTime: inputs[3].value,
                totalAmount: inputs[4].value,
                remark: inputs[5].value
            });
        }
    });

    // Collect service data
    const serviceRows = [];
    document.querySelectorAll('#serviceTableBody tr').forEach(row => {
        const inputs = row.querySelectorAll('input');
        if (inputs[0].value) {
            serviceRows.push({
                serviceType: inputs[0].value,
                beneficiary: inputs[1].value,
                effect: inputs[2].value,
                serviceDate: inputs[3].value
            });
        }
    });

    const fullData = {
        lecturerInfo: {
            session: formData.get('session'),
            semester: formData.get('semester'),
            appointment: formData.get('appointment'),
            lastName: formData.get('lastName'),
            firstName: formData.get('firstName'),
            middleInitial: formData.get('middleInitial'),
            nameOfSchool: formData.get('nameOfSchool'),
            department: formData.get('department'),
            positionRank: formData.get('positionRank'),
            staffPhoneNo: formData.get('staffPhoneNo'),
            salaryGradeLevel: formData.get('salaryGradeLevel'),
            teachingCreditUnits: formData.get('teachingCreditUnits'),
            leaveOfAbsence: formData.get('leaveOfAbsence')
        },
        teaching: {
            courses: teachingRows,
            noOfLecturers: formData.get('noOfLecturers'),
            totalStudentEnrol: formData.get('totalStudentEnrol')
        },
        administrativeDuties: dutyRows,
        fundedResearch: projectRows,
        communityService: serviceRows,
        certification: {
            lecturerSignature: formData.get('lecturerSignature'),
            hodsignature: formData.get('hodsignature'),
            deansignature: formData.get('deansignature')
        }
    };

    // Save to localStorage or send to server
    localStorage.setItem('aorFormData', JSON.stringify(fullData));
    
    // Show success message
    alert('Form saved successfully! Data has been stored locally.');
    
    // Log data for debugging
    console.log('Form Data:', fullData);
}

// Load form data if it exists
function loadFormData() {
    const savedData = localStorage.getItem('aorFormData');
    if (savedData) {
        const data = JSON.parse(savedData);
        
        // Load lecturer info
        document.getElementById('session').value = data.lecturerInfo.session || '';
        document.getElementById('semester').value = data.lecturerInfo.semester || '';
        document.getElementById('appointment').value = data.lecturerInfo.appointment || '';
        document.getElementById('lastName').value = data.lecturerInfo.lastName || '';
        document.getElementById('firstName').value = data.lecturerInfo.firstName || '';
        document.getElementById('middleInitial').value = data.lecturerInfo.middleInitial || '';
        document.getElementById('nameOfSchool').value = data.lecturerInfo.nameOfSchool || '';
        document.getElementById('department').value = data.lecturerInfo.department || '';
        document.getElementById('positionRank').value = data.lecturerInfo.positionRank || '';
        document.getElementById('staffPhoneNo').value = data.lecturerInfo.staffPhoneNo || '';
        document.getElementById('salaryGradeLevel').value = data.lecturerInfo.salaryGradeLevel || '';
        document.getElementById('teachingCreditUnits').value = data.lecturerInfo.teachingCreditUnits || '';
        document.getElementById('leaveOfAbsence').value = data.lecturerInfo.leaveOfAbsence || '';
        
        // Load teaching data
        if (data.teaching.courses.length > 0) {
            removeTeachingSection();
            data.teaching.courses.forEach(course => {
                addTeachingRow();
                const lastRow = document.getElementById('teachingTableBody').lastElementChild;
                const inputs = lastRow.querySelectorAll('input');
                inputs[0].value = course.courseCode;
                inputs[1].value = course.courseName;
                inputs[2].value = course.venue;
                inputs[3].value = course.days;
                inputs[4].value = course.time;
                inputs[5].value = course.creditUnit;
                inputs[6].value = course.studioLab;
            });
        }
    }
}

// Call loadFormData on page load if you want to restore previous data
// Uncomment the next line to enable auto-loading
// document.addEventListener('DOMContentLoaded', loadFormData);
