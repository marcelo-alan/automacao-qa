import { expect, test } from 'vitest';

interface User{
    nome: string,
    idade: number
}

function createUser(nome: string, idade: number): User {
    return {nome,idade}
}

test('Criar um usuário com nome e idade', ()=>{
    const user = createUser("marcelo", 25);
    
    expect(user).toEqual({nome: "marcelo", idade: 25})
    expect(user.nome).toBe("marcelo")
})