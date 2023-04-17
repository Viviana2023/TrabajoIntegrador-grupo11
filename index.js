
const contacto = {
    nombre: '',
    apellido: '',
    telefono: '',
    consulta: '',
    correo: ''
}

function generarPDF(event) {
    event.preventDefault();
    const nom = document.getElementById('nombre').value;
    const ape = document.getElementById('apellido').value;
    const tel = document.getElementById('telefono').value;
    const con = document.getElementById('consulta').value;
    const corr = document.getElementById('correo').value;
    
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(nom, 10, 30);
    doc.setFont("helvetica", "normal");
    doc.text(ape, 20, 42);
    doc.setFont("helvetica", "italic");
    doc.text(tel, 10, 80);
    doc.setFont("helvetica", "bold");
    doc.text(con, 50, 90);
    doc.setFont("helvetica", "normal");
    doc.text(corr, 30, 50);
    doc.save('formulario.pdf');
    }
    function enviar(event){
        event.preventDefault();
        alert("Su consulta se ha enviado...");
        let formulario = document.getElementById('formulario');
        formulario.reset();
        }
    
       
