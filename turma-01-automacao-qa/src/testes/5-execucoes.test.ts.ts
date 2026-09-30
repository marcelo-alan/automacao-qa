import { describe, test, expect } from "vitest";
import { buscarTestePorId } from "./execucoes";

describe("Testes da atividade ", () => {
  
  // Caminho de Sucesso: Testa se encontra o item e valida propriedades
  test("deve encontrar o teste correto quando o ID for válido", async () => {
    const resultado = await buscarTestePorId(1);

    // Validando os valores individualmente com toBe
    expect(resultado.id).toBe(1);
    expect(resultado.nome).toBe("Login");
    expect(resultado.passou).toBe(true);
  });

  // Caminho de Erro: Testa o lançamento da mensagem de erro esperada
  test("deve lançar erro quando o ID não for encontrado", async () => {
    await expect(buscarTestePorId(99)).rejects.toThrow("Teste não encontrado");
  });

});