FROM node:18 AS build
WORKDIR /app
# This helps if your files are one folder deep
COPY . .
# Check if we are in a subfolder and move files up if needed
RUN if [ -d "hertza" ]; then cd hertza && cp -r . ..; fi
RUN npm install
RUN npm run build

FROM node:18-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
