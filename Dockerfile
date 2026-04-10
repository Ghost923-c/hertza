# Step 1: Build the React app using Node.js
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve the built files using a lightweight server
FROM node:18-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 8080
# This tells Google Cloud to run the app on port 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
