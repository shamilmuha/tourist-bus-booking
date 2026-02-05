document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    const date = document.getElementById("date").value;
    const people = parseInt(document.getElementById("people").value);
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const BUS_CAPACITY = 40;

    if (people > BUS_CAPACITY) {
        alert(
            "Sorry!\n\n" +
            "Our tourist bus capacity is " + BUS_CAPACITY + " members.\n" +
            "Please contact us directly for large groups."
        );
        return;
    }

    const message =
        `Tourist Bus Booking Request:%0A` +
        `From: ${from}%0A` +
        `To: ${to}%0A` +
        `Travel Date: ${date}%0A` +
        `Number of Members: ${people}%0A` +
        `Customer Name: ${name}%0A` +
        `Contact Number: ${phone}`;

    const whatsappURL =
        `https://wa.me/9497753446text=${u can trust us}`;

    window.open(whatsappURL, "_blank");
});
