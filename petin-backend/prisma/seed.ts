import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    
    // Limpando banco
    await prisma.usuario.deleteMany({});
    await prisma.estabelecimento.deleteMany({});
    await prisma.cliente.deleteMany({});
    await prisma.categoria.deleteMany({});

    // Clientes
    await prisma.cliente.createMany({
        data: [
            {id: "56d71d6b-502b-480f-9100-668fb0fc5f89", cpf: "50425029042", nome: "André"},
            {id: "c6f3a245-1785-43a6-8a9e-f630c860959b", cpf: "31658189086", nome: "Raí"},
            {id: "6ceb786a-3c39-4634-80c1-11480b59538b", cpf: "99545486023", nome: "Matheus"},
            {id: "d7d57db3-ab95-4236-9886-fbc5ace2234d", cpf: "05072666093", nome: "Vanessa"},
            {id: "f813d6ad-4b7b-4c1c-8952-89deadf598fe", cpf: "99445356055", nome: "Jéssica"},
            {id: "8b5155e0-81e4-4046-8776-944d9b665e12", cpf: "21316641090", nome: "Orlando"},
            {id: "1053a2b4-14e8-4dfc-a36a-40c577d8f209", cpf: "71466692030", nome: "Paula"},
            {id: "c91c9078-e6e1-4854-a9ec-4ee7b29f8289", cpf: "70138513023", nome: "Breno"},
            {id: "bc0b10d6-c4d2-4473-b807-e3303696bf91", cpf: "66583703033", nome: "Pedro"},
            {id: "de163209-b482-4f33-a64f-84aa61b3fbdc", cpf: "24012874004", nome: "Larissa"},
            {id: "cb128062-1277-489c-a0b6-3e1badf7b5aa", cpf: "78214007003", nome: "Admin"}
        ]
    })

    // Usuários
    const senhaCriptografadaAdmin = await hash("admin", 8);
    const senhaCriptografadaUser = await hash("12345", 8);
    await prisma.usuario.createMany({
        data: [
            {id: "4e8eb437-57f3-4299-9fe0-27f06fd9fc82", cpf: "78214007003", senha: senhaCriptografadaAdmin, id_cliente: "cb128062-1277-489c-a0b6-3e1badf7b5aa", isCliente: false },
            {id: "81e739bf-6bbb-42c4-a095-ddf2613d358d", cpf: "50425029042", senha: senhaCriptografadaUser, id_cliente: "56d71d6b-502b-480f-9100-668fb0fc5f89", isCliente: true }
        ]
    })

    // Categorias
    await prisma.categoria.createMany({
        data: [
            {id: "7aee8977-af73-439b-836d-3109c82a9b77", nome: "Restaurante"},
            {id: "fe021c9c-454a-400c-adac-557ab484f9fb", nome: "Shopping Center"},
            {id: "2633e106-07c7-4391-a136-fb9fb4f6d28c", nome: "Super mercado"},
            {id: "1c425655-39b1-4f59-95b9-1fb3f2043888", nome: "Parque Público"},
            {id: "d1402db4-8177-4a03-9794-012ee6af08fa", nome: "Farmácia"},
            {id: "62963143-b9e4-4479-9f86-0b5bad37373b", nome: "Clínica Médica"},
            {id: "58bb0710-deb8-4238-abf3-ce42c8d8b17d", nome: "Cafeteria"},
            {id: "84c14492-5b45-4746-aad9-e234019e3df0", nome: "Salão de Beleza"},
            {id: "f1aa5f48-5f32-48bf-808d-74330c8504a7", nome: "Lanchonete"},
        ]
    })

    // Estabelecimentos
    await prisma.estabelecimento.createMany({
        data: [
            {id: "b00f5d5d-7cd5-4316-bca3-377117e646e4", nome: "Shopping Recife", cnpj: "79233547000197", descricao: "O Shopping Recife permite a circulação de cães e gatos desde que o transporte seja feito em carrinhos apropriados que estão disponíveis na loja Cão Q Ri para aluguel. Custa R$15 por dia e comporta animais de até 10kg. Em ambientes lotados como shoppings, é aconselhável manter o pet na coleira e se manter distante das áreas de alimentação.", endereco: "R. Padre Carapuceiro, 777 - Boa Viagem, Recife - PE, 51020-900", telefone: "81-32660000", email: "shoppingrecife@sr.com", imagem: "https://revistadigitalsecurity.com.br/wp-content/uploads/2020/10/Shopping-Recife-Monitoramento.jpg", id_categoria: "fe021c9c-454a-400c-adac-557ab484f9fb", id_cliente: "56d71d6b-502b-480f-9100-668fb0fc5f89"},
            {id: "dbf813f8-453b-4aa0-b8b4-75cc0230d672", nome: "Shopping Plaza", cnpj: "85785958000198", descricao: "O Shopping Plaza permite a circulação de cães e gatos desde que o transporte seja feito em carrinhos apropriados que estão disponíveis na loja Cão Q Ri para aluguel. Custa R$15 por dia e comporta animais de até 10kg. Em ambientes lotados como shoppings, é aconselhável manter o pet na coleira e se manter distante das áreas de alimentação.", endereco: "R. Dr. João Santos Filho, 255 - Parnamirim, Recife - PE, 52060-615", telefone: "81-32658100", email: "shoppingplaza@sr.com", imagem: "https://www.plazacasaforte.com.br/files/institutional/15488730556268-fachada_site2.jpg", id_categoria: "fe021c9c-454a-400c-adac-557ab484f9fb", id_cliente: "c6f3a245-1785-43a6-8a9e-f630c860959b"},
            {id: "0f62a2ac-e7dd-42df-bcd7-ccc8511c0b5f", nome: "Ferreira Costa (Tamarineira)", cnpj: "48816727000178", descricao: "As lojas de construção da rede permitem a entrada de pets de pequeno e médio porte e disponibilizam até um suporte que pode ser acoplado ao carrinho de compras. Esse aparelho não tem custo nenhum para os clientes e pode ser usado durante a permanência na loja.", endereco: "R. Cônego Barata, 275 - Tamarineira, Recife - PE, 52051-020", telefone: "81-32671010", email: "ferreiracosta_tamarineira@ferreiracosta.com", imagem: "https://fastly.4sqi.net/img/general/200x200/33132665_6ltc-w7mho-EQxClXXBMHgPzoK1Pqxzs3FNH1vKi6jY.jpg", id_categoria: "2633e106-07c7-4391-a136-fb9fb4f6d28c", id_cliente: "6ceb786a-3c39-4634-80c1-11480b59538b"},
            {id: "e71fe08e-e065-4282-9070-44e668cf1799", nome: "Lalá Café (Espinheiro)", cnpj: "94197801000132", descricao: "Os pets são bem-vindos na parte externa da cafeteria, que tem capacidade para 20 pessoas. Lá, os bichinhos, de qualquer porte, devem estar usando a guia e ainda recebem uma tigela de água.", endereco: "R. Amélia, 470 - Graças, Recife - PE, 52011-050", telefone: "81-997502001", email: "lalacafe@cafe.com", imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a1/76/54/ambiente.jpg?w=1000&h=-1&s=1", id_categoria: "58bb0710-deb8-4238-abf3-ce42c8d8b17d", id_cliente: "d7d57db3-ab95-4236-9886-fbc5ace2234d"},
            {id: "a05359a7-8e1b-46b7-9189-cc73ca46c23d", nome: "Dorinha Studio de Beleza (Boa Viagem)", cnpj: "85454834000120", descricao: "O badalado salão de beleza, localizado em Boa Viagem, permite apenas a entrada de animais de pequeno porte. Os pets devem ficar no colo ou nos braços do dono durante toda a espera e atendimento. O estabelecimento não possui nenhum serviço para os bichinhos e só recomendam que eles estejam com coleira.", endereco: "Av. República do Líbano, 251 - Loja 2006 - Pina, Recife - PE, 51110-160", telefone: "81-33271501", email: "dorinhastudio@beleza.com", imagem: "https://vivariomarrecife.com.br/wp-content/uploads/2018/09/fcd08f78033e18cacbd38b0453a8b96d_dorinha.jpg", id_categoria: "84c14492-5b45-4746-aad9-e234019e3df0", id_cliente: "f813d6ad-4b7b-4c1c-8952-89deadf598fe"},
            {id: "91b7c434-03d2-40d9-9798-c8e1ce24cc82", nome: "Shopping Rio Mar", cnpj: "32111464000161", descricao: "Os clientes do mall podem alugar um carrinho no Pet Shop para circular com o seu animal. A entrada deles também é permitida, desde que estejam no colo/braço e sejam de pequeno porte,  com uso de coleira. O aluguel do carrinho custa R$15 por dia. ", endereco: "Avenida República do Líbano 251, Recife, PE, 51110-900 ", telefone: "81-30220239", email: "atendimento@patteo.com", imagem: "https://vivariomarrecife.com.br/wp-content/uploads/2018/09/53d3390de3e3e1aa3d46395e0c0a99f5_RioMarRecife_vlubambo-9958_AltaRes.jpg", id_categoria: "fe021c9c-454a-400c-adac-557ab484f9fb", id_cliente: "8b5155e0-81e4-4046-8776-944d9b665e12"},
            {id: "a01a8e6b-2956-417c-b137-df3906b9aa7b", nome: "Malakoff Café", cnpj: "97229385000103", descricao: "O café também reserva uma área para os pets. Trata-se de um espaço externo com capacidade para 20 lugares, que recebe cães de pequeno e médio porte.", endereco: "Av. Eng. Abdias de Carvalho, 1142 - Prado, Recife - PE, 50720-190", telefone: "81-30225566", email: "atendimento@malakoff.com", imagem: "https://revistaespresso.com.br/wordpress/wp-content/uploads/2015/09/e48_IMG_2649-e1444135899612.jpg", id_categoria: "58bb0710-deb8-4238-abf3-ce42c8d8b17d", id_cliente: "1053a2b4-14e8-4dfc-a36a-40c577d8f209"},
            {id: "c3538766-b795-4291-a9ea-1e0306ef4927", nome: "Dear Donuts (Boa Viagem e Rosarinho)", cnpj: "71068597000154", descricao: "O café também reserva uma área para os pets. Trata-se de um espaço externo com capacidade para 20 lugares, que recebe cães de pequeno e médio porte.", endereco: "Condomínio do Edifício Galeria João de Deus - R. Regueira Costa, Loja 04 - Rosarinho, Recife - PE, 52041-065", telefone: "81-999969967", email: "atendimento@deardonuts.com", imagem: "https://static.wixstatic.com/media/59222e_b91c791424114126b0ee735e5fc74a3d~mv2.jpg/v1/fill/w_1194,h_796,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/59222e_b91c791424114126b0ee735e5fc74a3d~mv2.jpg", id_categoria: "7aee8977-af73-439b-836d-3109c82a9b77", id_cliente: "c91c9078-e6e1-4854-a9ec-4ee7b29f8289"},
            {id: "bd8e6709-55e9-4dd6-905d-f4593680e563", nome: "DeGusta Paleteria (Pina)", cnpj: "71236540000117", descricao: "Além de permitir a entrada, o pet poderá provar uma paleta especial na matriz da rede, no Pina. Disponível para cães com guia e de todos os portes, a loja oferece opções de picolé para os peludos. Existem paletas com vários sabores, entre elas Melancia com Hortelã, Água de Coco, Banana com Aveia e Cenoura com Beterraba.", endereco: "Av. Herculano Bandeira, 160 - Pina, Recife - PE, 51110-130", telefone: "81-31041515", email: "delicia@degusta.com", imagem: "https://10619-2.s.cdn12.com/rests/original/502_69191490.jpg", id_categoria: "7aee8977-af73-439b-836d-3109c82a9b77", id_cliente: "bc0b10d6-c4d2-4473-b807-e3303696bf91"},
            {id: "31f27219-a359-4f7d-bb8c-52a6b60dac47", nome: "Haus Lajetop e Beergarden", cnpj: "53542268000111", descricao: "O restaurante/bar aceita entrada de cachorros de pequeno e médio porte com coleira na aérea externa ou no espaço que definem como laje. No local, não é oferecido nenhum serviço especial para pets.", endereco: "Av. Herculano Bandeira, 513 - Pina, Recife - PE, 51110-131", telefone: "81-3105523", email: "contato@hauslajetop.com", imagem: "https://janelasabertas.com/wp-content/uploads/2015/03/IMG_0621.jpg", id_categoria: "7aee8977-af73-439b-836d-3109c82a9b77", id_cliente: "de163209-b482-4f33-a64f-84aa61b3fbdc"},
            {id: "78748454-7e09-4841-8838-9522464687bf", nome: "Empório HD", cnpj: "69829799000120", descricao: "O empresário Heracliton Diniz, nome à frente da Emporio HD, permite a entrada de cachorro de pequeno porte e recebe a visita dos peludos frequentemente. A única exigência é que o animal esteja de coleira.  Na loja, as atendentes chegam a servir água para os peludos.", endereco: "Av. Conselheiro Aguiar, 1076 - Pina, Recife - PE, 51011-030", telefone: "81-34669150", email: "contato@emphd.com", imagem: "https://www.joaoalberto.com/wp-content/uploads/2015/04/06/emporio-hd2.jpg", id_categoria: "2633e106-07c7-4391-a136-fb9fb4f6d28c", id_cliente: "56d71d6b-502b-480f-9100-668fb0fc5f89"},
            {id: "c65f009d-aa2f-46da-b532-ab9188384614", nome: "My Burguer", cnpj: "13553993000170", descricao: "No My Burguer de Casa Forte existe uma mesa  na área externa com uma paquinha “Pet Friendly” e normalmente está sempre ocupada. Na maioria das vezes, são cachorros de pequeno porte que ficam ao lado do dono fazendo companhia durante o passeio.", endereco: "Rua do Chacon, 64 - Poço da Panela, Recife - PE, 52061-400", telefone: "81-30717378", email: "contato@mbrecife.com", imagem: "https://media-cdn.tripadvisor.com/media/photo-s/09/1b/26/29/my-burger.jpg", id_categoria: "f1aa5f48-5f32-48bf-808d-74330c8504a7", id_cliente: "c6f3a245-1785-43a6-8a9e-f630c860959b"},
            
        ]
    })

}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })