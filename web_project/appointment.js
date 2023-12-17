function showAlert() {
  alert('Appointment submitted!');
}

const reservedSlots = {
  'Onur': { '2023-12-20': ['10:00', '14:00','15:00'], '2023-12-21': ['09:00', '15:00'] },
  'Burak': { '2023-12-20': ['11:00', '16:00'], '2023-12-21': ['10:00', '14:00'] },
  'Atakan': { '2023-12-20': ['13:00', '15:00'], '2023-12-21': ['12:00', '17:00'] }
};

function updateAvailableDates() {
  const doctorSelect = document.getElementById('doctorSelect');
  const datePicker = document.getElementById('datePicker');
  const timePicker = document.getElementById('timePicker');

  const selectedDoctor = doctorSelect.value;
  const reservedDates = Object.keys(reservedSlots[selectedDoctor] || {});

  datePicker._flatpickr.set('disable', reservedDates);

  timePicker.innerHTML = '<option value="" disabled selected>Select a time</option>';
}

flatpickr("#datePicker", {
  enableTime: false,
  dateFormat: "Y-m-d",
  minDate: "today",
  disable: [
    function(date) {

      return date < new Date();
    }
  ],
  onChange: function (selectedDates, dateStr) {
    generateTimeOptions();
  }
});

function generateTimeOptions() {
  const timePicker = document.getElementById('timePicker');
  timePicker.innerHTML = '<option value="" disabled selected>Select a time</option>';

  const selectedDoctor = document.getElementById('doctorSelect').value;
  const selectedDate = document.getElementById('datePicker').value;
  const reservedTimes = reservedSlots[selectedDoctor][selectedDate] || [];

  for (let i = 9; i <= 17; i++) {
    const hour = i.toString().padStart(2, '0');
    const disabled = reservedTimes.includes(`${hour}:00`) ? 'disabled' : '';
    timePicker.innerHTML += `<option value="${hour}:00" ${disabled}>${hour}:00</option>`;
  }
}
