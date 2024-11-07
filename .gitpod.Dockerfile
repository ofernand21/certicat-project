FROM gitpod/workspace-full:latest

# Installer Node.js (ex. v16) et npm
RUN bash -c ". /home/gitpod/.nvm/nvm.sh && nvm install 16 && nvm use 16 && npm install -g npm"