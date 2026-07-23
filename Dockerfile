# ================================
# Etapa Base
# ================================
FROM node:24-alpine AS base

# Instalar Angular CLI 21 globalmente
RUN npm install -g @angular/cli@21

WORKDIR /app

# Copiar package files primero para aprovechar cache
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# ================================
# Etapa de Desarrollo
# ================================
FROM base AS development

EXPOSE 4200

# Necesario para acceso desde Docker
CMD ["ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]

# ================================
# Etapa de Build Producción
# ================================
FROM base AS build

RUN ng build --configuration production

# ================================
# Etapa Final Producción
# ================================
FROM nginx:alpine AS production

# Copiar build generado
COPY --from=build /app/dist/*/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]