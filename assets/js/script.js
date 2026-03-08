function goBack() {

    var modal2 = bootstrap.Modal.getInstance(document.getElementById("modalStep2"));
    modal2.hide();

    new bootstrap.Modal(document.getElementById("modalStep1")).show();

}
document.getElementById("confirmStep1").onclick = function() {

    var form = document.getElementById("step1Form");

    if (form.checkValidity()) {

        var modal1 = bootstrap.Modal.getInstance(document.getElementById("modalStep1"));
        modal1.hide();

        new bootstrap.Modal(document.getElementById("modalStep2")).show();

    } else {
        form.classList.add("was-validated");
    }

};
document.getElementById("confirmStep2").onclick = function() {

    var form = document.getElementById("step2Form");

    if (form.checkValidity()) {

        var modal2 = bootstrap.Modal.getInstance(document.getElementById("modalStep2"));
        modal2.hide();

        new bootstrap.Modal(document.getElementById("modalStep3")).show();

    } else {
        form.classList.add("was-validated");
    }

};