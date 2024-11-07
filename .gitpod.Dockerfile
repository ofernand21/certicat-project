FROM gitpod/workspace-full:latest

# Installer Node.js 16 (ou autre version spécifique si nécessaire)
RUN bash -c ". /home/gitpod/.nvm/nvm.sh && nvm install 20 && nvm use 20"

# Installez d'autres dépendances globales si nécessaire
RUN npm install -g typescript

# Copier le code dans le répertoire de travail
COPY . /workspace/