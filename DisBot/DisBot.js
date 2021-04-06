function cadastrarTurma() {
    var cbTurno = document.querySelector('input[name=turno]:checked');
    var professor = document.getElementById('professor');
    var disciplina = document.getElementById('disciplina');

    if (!cbTurno) {
        alert('Escolha um Turno!');
        exit;
    }

    if (professor.value.trim() == "") {
        alert('Entre com o nome do Professor!');
        exit;
    }

    if (disciplina.value.trim() == "") {
        alert('Entre com o nome da Turma!');
        exit;
    }

    alert('Turma ' + disciplina.value.toUpperCase() + ' com o professor(a) ' + professor.value + ' do Turno ' + cbTurno.value + ' registrada.');
}