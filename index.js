const alunos = [
    {
        nome: 'João',
        nota: 5.0,
        idade: 45
    },
    {
        nome: 'Alfredo',
        nota: 8.0,
        idade: 17
    }
    ,
    {
        nome: 'Rafael',
        nota: 6.0,
        idade: 20
    },
    {
        nome: 'Leonardo',
        nota: 9.9,
        idade: 22
    }
    ,
    {
        nome: 'Jean',
        nota: 4.0,
        idade: 26
    },
    {
        nome: 'Beto',
        nota: 7.0,
        idade: 55
    },
    {
        nome: 'Luciana',
        nota: 9.0,
        idade: 56
    },
    {
        nome: 'Victor',
        nota: 2.0,
        idade: 33
    },
    {
        nome: 'Maria',
        nota: 4.0,
        idade: 18
    },
    {
        nome: 'Otávio',
        nota: 9.6,
        idade: 47
    },
    {
        nome: 'Priscila',
        nota: 2.0,
        idade: 23
    },
    {
        nome: 'Steves',
        nota: 6.9,
        idade: 89
    },
    {
        nome: 'Victorina',
        nota: 8.1,
        idade: 37
    },
    {
        nome: 'Gumerlinda',
        nota: 1.9,
        idade: 10
    },
    {
        nome: 'Samuel',
        nota: 7.1,
        idade: 56
    }]

//QUESTÃO 1

async function mediaAlunos(alunos) {
    return Math.trunc(alunos.reduce((notas, aluno) => notas += aluno.nota, 0) / alunos.length);
}

// QUESTÃO 2

async function medianaAlunos(alunos) {
    let notas;
    let metade;

    notas = alunos.map(aluno => aluno.nota);
    notas.sort();

    metade = Math.trunc(notas.length / 2)

    if (notas.length % 2 === 0)
        return (notas[metade] + notas[metade - 1]) / 2

    return notas[metade];
}

async function modaAlunos(alunos) {
    let quantidadeNotas = {}
    let maiorRepeticao = -1
    let moda

    alunos.forEach(aluno => {
        aluno.nota in quantidadeNotas ? quantidadeNotas[aluno.nota]++ : quantidadeNotas[aluno.nota] = 1

        if (quantidadeNotas[aluno.nota] >= maiorRepeticao) {
            maiorRepeticao = quantidadeNotas[aluno.nota]
            moda = aluno.nota
        }
    });

    return moda
}

// QUESTÃO 3

async function atribuiMedias(alunos) {
    const media = await mediaAlunos(alunos);
    const mediana = await medianaAlunos(alunos);
    const moda = await modaAlunos(alunos);

    alunos.forEach(aluno => {
        aluno.media = media
        aluno.mediana = mediana
        aluno.moda = moda

        aluno.status = aluno.nota < media ? "Reprovado" : "Aprovado"
        aluno.comentario = aluno.nota <= moda ? "Precisa melhorar!" : "Sua nota está acima da moda"
        aluno.mensagem = (aluno.nota >= mediana && aluno.nota < media) ? "quase lá, tenta mais um pouco!" : "..."
    });

    return alunos;
}

atribuiMedias(alunos).then(x => {
    console.log(x)
})
