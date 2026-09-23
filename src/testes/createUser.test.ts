import { expect, test } from 'vitest';

interface User{
    nome: string,
    idade: number
}

function createUser(nome: string, idade: number): User {
    return {nome,idade}
}

test('Criar um usuário com nome e idade', ()=>{
    const user = createUser("marcelo", 43);
    
    expect(user).toEqual({nome: "marcelo", idade: 43})
    expect(user.nome).toBe("marcelo")
})