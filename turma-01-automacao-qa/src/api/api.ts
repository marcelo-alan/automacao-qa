export interface Postagem {
    id?: number;
    userId?: number;
    title: string;
    body: string;
}

const BASE_URL = "https://jsonplaceholder.typicode.com";

// GET - Buscar postagem por ID
export async function buscarPostagem(id: number): Promise<Postagem> {
    const res = await fetch(`${BASE_URL}/posts/${id}`);
    console.log("STATUS GET:", res.status);

    const resGet = (await res.json()) as Postagem;
    return resGet;
}

// POST - Criar nova postagem
export async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Minha primeira postagem",
            body: "nesta parte vamos descrever",
            userId: 1,
        }),
    });
    console.log("STATUS POST:", res.status);

    const resPost = (await res.json()) as Postagem;
    return resPost;
}

// PUT - Atualização completa
export async function atualizarPostagemCompleta(id: number): Promise<Postagem> {
    const corpoEnviado = {
        id,
        title: "Atualização da minha primeira postagem",
        body: "nesta parte vamos descrever novamente o que vai ser feito",
        userId: 2,
    };

    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(corpoEnviado),
    });

    console.log("STATUS PUT:", res.status);
    const resPut = (await res.json()) as Postagem;
    return resPut;
}

// PATCH - Atualização parcial
export async function atualizarParteDaPostagem(id: number): Promise<Postagem> {
    const corpoEnviado = {
        body: "alteração realizada com sucesso!!!",
    };

    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(corpoEnviado),
    });

    console.log("STATUS PATCH:", res.status);
    const resPatch = (await res.json()) as Postagem;
    return resPatch;
}

// DELETE - Remover postagem
export async function deletar(id: number): Promise<number> {
    const res = await fetch(`${BASE_URL}/posts/${id}`, {
        method: "DELETE",
    });

    console.log("STATUS DELETE:", res.status);
    return res.status;
}