import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('Abrindo a seed do BD...');

  const user = await prisma.user.create({
    data: { 
      name: 'Matheus Lav', 
      email: 'lav@exemplo.com', 
      passwordHash: '12345' 
    }
  });
  
  const artist = await prisma.artist.create({
    data: {
      name: 'sotam',
      bio: 'rapper brasileiro',
      tracks: {
        create: [
          { title: 'Domingo de Verão', duration: 272, filePath: 'musicas/sotam1.mp3' },
          { title: 'Papel e Tinta', duration: 200, filePath: 'musicas/sotam2.mp3' }
        ]
      }
    },
    include: {
      tracks: true
    }
  });

  await prisma.playlist.create({
    data: {
      title: 'Musicas curtidas',
      userId: user.id,
      PlaylistTracks: {
        create: [
          { trackId: artist.tracks[0].id }
        ]
      }
    }
  });

  console.log('Seed ta 10');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });