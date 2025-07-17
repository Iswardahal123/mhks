const specialNames = [
  'Bikash Sitola','Durga Sharmah','Purna Chapagain','Raju Bajgain','Krishna Bajgain','Baburam Ram Poudel',
  'Tanka Boral','Churamoni Ojha','Bikash Koirala','Dipak Koirala','Bhuban Sharmah','Tilaram Boral',
  'Shyam Gurung','Binod Porajuli','Bhuban Sapkota','Surja Poudel','Khemraj Poudel','Prem Poudel',
  'Rupnarayan Sitola','Keshab gajurel','Kishore Dahal','Khemraj Rijal','Sagar Sapkota','Lila Timsina',
  'Ganesh Karki','Man Br Rai','Man Br Subba','Ganesh Dhungana','Hari Singh Mohora','Ram br basnet',
  'Debi Prashad Dhakal','Sekhar Sharmah','Ramlal Dhakal','Durga timsina'
];

const palsurNames = ['Name 1', 'Name 2', 'Name 3']; // Replace with real palsur names

const tableBody = document.getElementById("attendanceTable");
const groupSelect = document.getElementById("groupSelect");

let selectedPaal = null;

function loadAttendance(names) {
  tableBody.innerHTML = "";
  names.forEach((name, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${name}</td>
      <td>
        <select class="status-select" onchange="handlePaalChange(this)">
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="paal">Paal</option>
        </select>
      </td>
      <td><input type="number" min="0" class="amount-input" placeholder="₹"/></td>
    `;

    tableBody.appendChild(row);
  });
}

function handlePaalChange(selectEl) {
  if (selectEl.value === "paal") {
    if (selectedPaal && selectedPaal !== selectEl) {
      alert("Only one person can be marked as Paal.");
      selectEl.value = "present";
      return;
    }
    selectedPaal = selectEl;
  } else if (selectedPaal === selectEl) {
    selectedPaal = null;
  }
}

groupSelect.addEventListener("change", () => {
  selectedPaal = null;
  if (groupSelect.value === "special") {
    loadAttendance(specialNames);
  } else {
    loadAttendance(palsurNames);
  }
});

// Initial load
loadAttendance(specialNames);
