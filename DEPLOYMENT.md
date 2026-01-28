# DevProfile - Deployment Guide

## Overview
DevProfile is a full-stack portfolio application with:
- **Backend**: ASP.NET Core 9 API
- **Frontend**: Angular 18 SPA
- **Database**: In-memory (for now)

## Prerequisites

### Local Development
- .NET 9 SDK
- Node.js 20+
- npm 10+

### Production Deployment
- Docker & Docker Compose (recommended)
- Or manual deployment to your hosting provider

---

## Local Development Setup

### Backend
```bash
cd DevProfile.Api
dotnet run --urls "http://localhost:5017"
```

### Frontend
```bash
cd devprofile-frontend
npm install
npm start
```

Then visit `http://localhost:4200`

---

## Docker Deployment

### Build Docker Images
```bash
# Build both images
docker-compose build

# Or build individually
docker build -f Dockerfile.backend -t devprofile-api:latest .
docker build -f Dockerfile.frontend -t devprofile-web:latest .
```

### Run with Docker Compose
```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

The application will be available at:
- Frontend: `http://localhost`
- Backend API: `http://localhost/api` (proxied through nginx)

---

## Cloud Deployment Options

### Option 1: Azure Container Registry + App Service

```bash
# Login to Azure
az login

# Create resource group
az group create --name devprofile --location eastus

# Create container registry
az acr create --resource-group devprofile --name devprofileacr --sku Basic

# Build and push images
az acr build --registry devprofileacr --image devprofile-api:latest -f Dockerfile.backend .
az acr build --registry devprofileacr --image devprofile-web:latest -f Dockerfile.frontend .

# Deploy to App Service
# (Create App Service manually in Azure Portal and configure with container images)
```

### Option 2: Docker Hub

```bash
# Login to Docker Hub
docker login

# Tag images
docker tag devprofile-api:latest yourname/devprofile-api:latest
docker tag devprofile-web:latest yourname/devprofile-web:latest

# Push to Docker Hub
docker push yourname/devprofile-api:latest
docker push yourname/devprofile-web:latest
```

### Option 3: Vercel (Frontend Only)

```bash
npm install -g vercel
cd devprofile-frontend
vercel
```

Update environment variables in Vercel dashboard to point to your backend API.

---

## Environment Configuration

### Backend (appsettings.json)
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information"
    }
  },
  "AllowedHosts": "*"
}
```

### Frontend (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5017'
};
```

Update `apiUrl` in production environment file.

---

## Production Checklist

- [ ] Environment variables configured
- [ ] CORS settings updated for frontend domain
- [ ] SSL/TLS certificate configured
- [ ] Database persistence implemented (replace in-memory storage)
- [ ] Error logging and monitoring setup
- [ ] Backups configured
- [ ] Health checks verified
- [ ] Performance testing completed
- [ ] Security audit completed

---

## Monitoring & Logs

### Docker Compose
```bash
# View all logs
docker-compose logs -f

# View specific service
docker-compose logs -f backend
docker-compose logs -f frontend
```

### Health Checks
```bash
# Backend health
curl http://localhost:5017/health

# Frontend health
curl http://localhost
```

---

## Troubleshooting

### Backend not responding
```bash
# Check backend container logs
docker-compose logs backend

# Verify API connectivity
curl http://localhost:5017/api/profiles
```

### Frontend showing blank page
```bash
# Check frontend container logs
docker-compose logs frontend

# Clear browser cache and hard refresh (Ctrl+Shift+R)
```

### CORS errors
- Update backend CORS policy in Program.cs
- Ensure frontend origin is whitelisted

---

## Rollback

```bash
# Stop current deployment
docker-compose down

# Remove images (optional)
docker rmi devprofile-api:latest devprofile-web:latest

# Redeploy previous version
docker-compose up -d
```

---

## Support & Updates

For updates or issues:
1. Check GitHub repository
2. Review container logs
3. Update images: `docker-compose pull && docker-compose up -d`

