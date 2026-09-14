type Cachorro = {
    nome: string;
    idade: number;
    raca: string;
    peso: number;
    tutor: string;
};

const doguinho: Cachorro = {
    nome: "Rex",
    idade: 3,
    raca: "Labrador",
    peso: 25,
    tutor: "João",
};

function cachorro(veterinario: Cachorro): void {
    console.log(veterinario.nome);
    console.log(veterinario.idade);
    console.log(veterinario.raca);
    console.log(veterinario.peso);
    console.log(veterinario.tutor);
}
console.log("informações do cachorro");
cachorro(doguinho);
