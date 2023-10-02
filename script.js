// $("h1").text("Hello World");
// var name = $("#Name").val();
$(document).ready(function() {
    $("#invoiceForm").click(function(e){
        e.preventDefault();
        const companyName = $("#CompanyName").val();
        const clientName = $("#Name").val();
        const clintPhone = $("#Phone").val();
        const InvoiceNo = $("#InvoiceNo").val();
        const Date = $("#Date").val();
        const itemName = $("#ItemName").val();
        const Quantity = $("#Quantity").val();
        const Price = $("#Price").val();
        const Advance = $("#Advance").val();
        const subTotal = Quantity * Price;
        var due = subTotal - Advance;
        if (Advance > subTotal) {
            var total = Advance - subTotal;
        }
        else{
            var total = subTotal - Advance;
        };
        if (due < Advance) {
           var due = 0;
        };
        $("#abc").addClass("d-none");
        $("#companyName").text(`${companyName}`);
        $("#coustomerName").text(`${clientName}`);
        $("#coustomerPhone").text(`${clintPhone}`);
        $("#invoiceNumber").text(`${InvoiceNo}`);
        $("#invoiceDate").text(`${Date}`);
        $("#item").text(`${itemName}`);
        $("#itemQuantity").text(`${Quantity}`);
        $("#itemPrice").text(`₹ ${Price}`);
        $("#itemTotal").text(`₹ ${subTotal}`);
        $("#subTotal").text(`₹ ${subTotal}`);
        $("#advance").text(`₹ ${Advance}`);
        $("#total").text(`₹ ${total}`);
        $("#due").text(`₹ ${due}`);
        $("#Invoice").removeClass("d-none");
    });
$("#printBtn").click(function (){
      $("#printBtn").addClass("d-none");
      window.print();
      return false;
});
});
// $(document).ready(function() {
//     $("#invoiceForm").submit(function(event) {
//         event.preventDefault();

//         // Get user input
//         var clientName = $("#clientName").val();
//         var itemName = $("#itemName").val();
//         var quantity = $("#quantity").val();
//         var price = $("#price").val();

//         // Calculate total
//         var total = quantity * price;

//         // Generate invoice HTML
//         var invoiceHTML = `
//             <h3>Invoice</h3>
//             <p><strong>Client Name:</strong> ${clientName}</p>
//             <p><strong>Item Name:</strong> ${itemName}</p>
//             <p><strong>Quantity:</strong> ${quantity}</p>
//             <p><strong>Price per Item:</strong> $${price}</p>
//             <p><strong>Total:</strong> $${total}</p>
//         `;

//         // Display the generated invoice
//         $("#invoiceDisplay").html(invoiceHTML);
//     });

//     $("#downloadInvoice").click(function() {
//         // Get the invoice HTML
//         var invoiceHTML = $("#invoiceDisplay").html();

//         // Create a new jsPDF instance
//         var pdf = new jsPDF();

//         // Add the invoice HTML to the PDF
//         pdf.fromHTML(invoiceHTML, 15, 15);

//         // Save the PDF as a downloadable file
//         pdf.save("invoice.pdf");
//     });
// });