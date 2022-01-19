const CONTACT_ITEM_SELECTOR = '.contactItem';
const DELETE_BTN_CLASS = 'deleteBtn';

const contactForm = document.querySelector('#contactForm');
const inputs = document.querySelectorAll('.formInput');
const contactList = document.querySelector('#contactList');
const contactItemTemplate = document.querySelector('#contactItemTemplate').innerHTML;

contactForm.addEventListener('submit', onContactBtnSubmit);
contactList.addEventListener('click', onContactListClick);

function onContactBtnSubmit(e) {
  e.preventDefault();

  const contact = getContact();

  if(!isContactValid(contact)) {
    alert('Error');
    return;
  }

  addNewContact(contact);
  clearContact();
}

function onContactListClick(e) {
  if(e.target.classList.contains(DELETE_BTN_CLASS)) {
    const contactItem = getContactItem(e.target);

    removeContact(contactItem);
  }
}

function getContact() {
  const contact = {};

  inputs.forEach(input => {
    contact[input.name] = input.value;
  })

  return contact;
}

function isContactValid(contact) {
  return !isEmpty(contact.name)
  && !isEmpty(contact.surname)
  && isPhone(contact.phone)
}

function isPhone(phone) {
  return !isEmpty(phone) && !isNaN(phone);
}

function isEmpty(str) {
  return typeof str === 'string' && str.trim() === '';
}

function addNewContact(contact) {
  let contactItemHTML = contactItemTemplate;

  for(let prop in contact) {
    contactItemHTML = contactItemHTML.replace(`{{${prop}}}`, contact[prop]);
  }

  contactList.insertAdjacentHTML('beforeend', contactItemHTML);
}

function clearContact () {
  inputs.forEach(input => {
    input.value = '';
  })
}

function getContactItem(el) {
  return el.closest(CONTACT_ITEM_SELECTOR)
}

function removeContact(contactItem) {
  contactItem.remove();
}