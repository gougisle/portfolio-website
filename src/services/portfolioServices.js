import toastr from "toastr";

//#region response hanlders
const handleSheetsPOSTResponse = (resp) => {
  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-center",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "slideDown",
    hideMethod: "fadeOut",
  };
  if (resp.created) {
    toastr.success(
      "Thank you for submitting a message! I will respond as soon as I can.",
      "Message Sent!"
    );
  }
  if (resp.error) {
    toastr.error(
      "Sorry we were unable to send you message, please try again in a few minutes.",
      "Oops"
    );
  }
};
//#endregion

const addNewContactToSheet = (contactData) => {
  fetch(process.env.REACT_APP_SHEETS_DB_PRIVATE_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      datas: contactData,
    }),
  })
    .then((response) => response.json())
    .then(handleSheetsPOSTResponse);
};

export { addNewContactToSheet };
