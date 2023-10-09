import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  const users = [
    {
      name: 'Alice Johnson',
      email: 'alice.j@example.com',
      password: 'password123'
    },
    {
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      password: 'securepwd456'
    },
    {
      name: 'Charlie Brown',
      email: 'charlie.b@example.com',
      password: 'mysecret789'
    },
    {
      name: 'David Williams',
      email: 'david.w@example.com',
      password: 'davids123'
    },
    {
      name: 'Eva Davis',
      email: 'eva.d@example.com',
      password: 'evapass567'
    },
    {
      name: 'Fiona Miller',
      email: 'fiona.m@example.com',
      password: 'fiona2023'
    },
    {
      name: 'Grace Mitchell',
      email: 'grace.m@example.com',
      password: 'grac3P@ss'
    },
    {
      name: 'Henry Turner',
      email: 'henry.t@example.com',
      password: 'H3nryP@$$'
    },
    {
      name: 'Isabel Clark',
      email: 'isabel.c@example.com',
      password: '1s@b3lP@ss'
    },
    {
      name: 'Jackie Collins',
      email: 'jackie.c@example.com',
      password: 'J@cki3P@ss'
    },
    {
      name: 'Katherine White',
      email: 'katherine.w@example.com',
      password: 'K@th3r1n3P@ss'
    },
    {
      name: 'Leo Adams',
      email: 'leo.a@example.com',
      password: 'L30P@ss'
    },
    {
      name: 'Mia Garcia',
      email: 'mia.g@example.com',
      password: 'MiaP@$$w0rd'
    },
    {
      name: 'Noah Taylor',
      email: 'noah.t@example.com',
      password: 'N04hP@ss'
    },
    {
      name: 'Olivia Parker',
      email: 'olivia.p@example.com',
      password: '0l1v1@P@ss'
    },
    {
      name: 'Patrick Wilson',
      email: 'patrick.w@example.com',
      password: 'P@tr1ckP@ss'
    },
    {
      name: 'Quincy Roberts',
      email: 'quincy.r@example.com',
      password: 'Qu1ncyP@ss'
    },
    {
      name: 'Rachel Young',
      email: 'rachel.y@example.com',
      password: 'R@ch3lP@ss'
    },
    {
      name: 'Samuel Adams',
      email: 'samuel.a@example.com',
      password: 'SamuelP@ss'
    },
    {
      name: 'Tina Green',
      email: 'tina.g@example.com',
      password: 'T1naP@ss'
    },
    {
      name: 'Ulysses Harris',
      email: 'ulysses.h@example.com',
      password: 'U1yss3sP@ss'
    },
    {
      name: 'Victoria Brown',
      email: 'victoria.b@example.com',
      password: 'V1ctor1aP@ss'
    },
    {
      name: 'William White',
      email: 'william.w@example.com',
      password: 'W1ll1amP@ss'
    },
    {
      name: 'Xander Lewis',
      email: 'xander.l@example.com',
      password: 'X@nd3rP@ss'
    },
    {
      name: 'Yara Martinez',
      email: 'yara.m@example.com',
      password: 'YaraP@ss'
    },
    {
      name: 'Zane Taylor',
      email: 'zane.t@example.com',
      password: 'Z@n3P@ss'
    }
  ]

  for (const user of users) {
    await prisma.user.create({
      data: user
    })
  }

  console.log('Dados de seed inseridos com sucesso no banco de dados')
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect()
  })
