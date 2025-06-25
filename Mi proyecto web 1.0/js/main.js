// Añadir dos elementos `<li>` a un `<ul>` (Desde JS), y unirlos al DOM de tu página HTML

document.addEventListener('DOMContentLoaded', function () {
    // 1.- ul
    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    // 2.- li
    const li1 = document.createElement('li');
    const texto1 = document.createTextNode('hola 1');
    li1.appendChild(texto1);
    ul.appendChild(li1);

    // 3.- li
    const li2 = document.createElement('li');
    li2.innerHTML = 'hola 2';
    const attr = document.createAttribute('class');
    attr.value = 'elemento-lista';
    li2.setAttributeNode(attr);
    ul.appendChild(li2);
});


document.addEventListener('DOMContentLoaded', function () {
// Array
    const tareas = [
        'barrer',
        'comprar',
        'alimentar al gato',
        'colada'
    ];

// Crear el ul
    const ul = document.createElement('ul');
    
    document.body.appendChild(ul);
        tareas.forEach(function(tarea, index) {
            const li = document.createElement('li');
                li.appendChild(document.createTextNode(tarea));
                    if (index === 0) {
            const attr = document.createAttribute('class');
            attr.value = 'tareas';
            li.setAttributeNode(attr);
        }
        ul.appendChild(li);
    });
});

// Formulario

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const result = document.getElementById('form-result');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                result.textContent = 'Completa todos los campos.';
                result.style.color = 'red';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                result.textContent = 'El correo electrónico no es válido.';
                result.style.color = 'red';
                return;
            }

            result.textContent = 'Enviado.';
            result.style.color = 'orange';
        });
    }
});

