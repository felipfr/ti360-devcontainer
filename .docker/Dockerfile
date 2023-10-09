# Usa a imagem do Node 18 da Microsoft como base
FROM mcr.microsoft.com/devcontainers/typescript-node:1-20-bullseye

# Defina o diretório de trabalho para /workspace
WORKDIR /workspace

# Atualiza os pacotes da imagem
RUN apt-get update -y && apt-get upgrade -y

# Copia os arquivos do seu host para o contêiner
COPY .. ./

# Da permissão para qualquer usuário nos arquivos copiados
RUN chmod -R a+rw ./

# Expõe a porta que o seu aplicativo Nest estará ouvindo
EXPOSE 4015
