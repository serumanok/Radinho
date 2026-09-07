Atividade 1 - Estrutura da API (Clone do Spotify)

1. Quais tabelas você definiu inicialmente?

• users: Armazena os dados cadastrais dos usuários (nome, senha criptografada).
• artists: Registro dos artistas e bandas presentes na plataforma.
• tracks: Faixas de áudio com detalhes como título, duração, URL do arquivo.
• playlists: Listas de reprodução criadas pelos usuários.
• playlist_tracks: relacionamento N:N pra vincular músicas às playlists e manter a ordem de reprodução.

2. Você utilizou migrations? Se sim, quantas migrations? Descreva em uma frase o que cada uma faz.

1. 001_create_users: Cria a tabela de usuários para permitir o registro e controle de perfis.
2. 002_create_artists: Estrutura as tabelas de artistas e álbuns com seus relacionamentos de chave estrangeira.
3. 003_create_tracks: Instancia a tabela de músicas vinculada aos álbuns e artistas correspondentes.
4. 004_create_playlists_and_relations: Define as tabelas de playlists e a tabela intermediária playlist_tracks.

3. Qual o caminho do arquivo que gera a seed do seu banco?
prisma/seed.ts

4. Quais os endpoints que você irá implementar inicialmente?
• GET /tracks — Lista as músicas disponíveis no catálogo.
• GET /tracks/:id — Retorna os detalhes e o recurso de áudio de uma música específica.
• POST /playlists — Cria uma nova playlist para o usuário.
• POST /playlists/:id/tracks — Adiciona uma música a uma playlist existente.
• GET /playlists/:id — Retorna os dados de uma playlist com a lista completa das suas músicas.

5. Você está usando algum framework para escrever os endpoints da sua API? Se sim, qual?
Sim, o Express.js (Node.js). É um framework minimalista, flexível pra criar rotas RESTful e ajuda na integração com ORMs.


