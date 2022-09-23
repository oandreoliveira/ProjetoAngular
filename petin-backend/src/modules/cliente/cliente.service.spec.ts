import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let clienteService: ClienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteService,
      ],
    }).compile();

    clienteService = module.get<ClienteService>(ClienteService);
  });

  it('should be defined', () => {
    expect(clienteService).toBeDefined();
  });

  describe('listarTodosClientes', () => {
    it ('deve retornar uma lista de clientes com sucesso', async () => {

    })
  })
});
