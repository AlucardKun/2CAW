function cadastrarTurma() {
    var cbTurno = document.querySelector('input[name=turno]:checked');
    var professor = document.getElementById('professor');
    var disciplina = document.getElementById('disciplina');

    if (validaDados() == true) {
        alert('Turma "' + disciplina.value.toUpperCase() + '" com o professor(a) "' + professor.value + '" do turno "' + cbTurno.attributes['aria-texto'].value + '" registrada com sucesso.');
    }
}

function validaDados() {

    var cbTurno = document.querySelector('input[name=turno]:checked');
    var professor = document.getElementById('professor');
    var disciplina = document.getElementById('disciplina');

    if (!cbTurno) {
        alert('Escolha um Turno!');
        return false;
    }

    if (professor.value.trim() == "") {
        alert('Entre com o nome do Professor!');
        return false;
    }

    if (disciplina.value.trim() == "") {
        alert('Entre com o nome da Turma!');
        return false;
    }

    return true;
}