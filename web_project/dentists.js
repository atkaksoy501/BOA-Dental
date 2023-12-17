function openProfileModal(dentistId) {
  var modalContent = document.getElementById(dentistId + '-description').innerHTML;
  var photoSrc = document.getElementById(dentistId + '-photo').src;

  // Create a modal element
  var modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
      <div class="modal-content">
          <span class="close" onclick="closeProfileModal()">&times;</span>
          <img src="${photoSrc}" alt="Dr. Photo" class="dentist-photo-modal">
          ${modalContent}
      </div>
  `;

  // Append the modal to the body
  document.body.appendChild(modal);

  // Display the modal
  modal.style.display = 'flex';

  // Add class for sliding effect
  setTimeout(function () {
    modal.querySelector('.modal-content').classList.add('slide-in');
  }, 10); // Delay to ensure the modal is rendered before adding the class
}

function closeProfileModal() {
  var modal = document.querySelector('.modal');
  if (modal) {
    // Add class for sliding effect
    modal.querySelector('.modal-content').classList.remove('slide-in');
    modal.querySelector('.modal-content').classList.add('slide-out');

    // Remove the modal from the DOM after the sliding effect
    setTimeout(function () {
      modal.parentNode.removeChild(modal);
    }, 300); // Adjust the timeout to match the transition duration
  }
}

$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    var mainContent = $('#main-content');
    var navHeight = $('.navbar').outerHeight();

    if (mainContent.hasClass('menu-open')) {
      mainContent.removeClass('menu-open').css('margin-top', 0);
    } else {
      mainContent.addClass('menu-open').css('margin-top', 125);
    }
  });
});
