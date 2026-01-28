#!/bin/bash

# DevProfile Deployment Script
set -e

echo "🚀 DevProfile Deployment Script"
echo "================================"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
BACKEND_DIR="$PROJECT_ROOT/DevProfile.Api"
FRONTEND_DIR="$PROJECT_ROOT/devprofile-frontend"

echo -e "${YELLOW}Step 1: Cleaning previous builds...${NC}"
rm -rf "$BACKEND_DIR/bin/Release"
rm -rf "$FRONTEND_DIR/dist"
echo -e "${GREEN}✓ Clean complete${NC}\n"

echo -e "${YELLOW}Step 2: Building backend...${NC}"
cd "$PROJECT_ROOT"
dotnet build DevProfile.sln -c Release
echo -e "${GREEN}✓ Backend build complete${NC}\n"

echo -e "${YELLOW}Step 3: Building frontend...${NC}"
cd "$FRONTEND_DIR"
npm ci
npm run build
echo -e "${GREEN}✓ Frontend build complete${NC}\n"

echo -e "${YELLOW}Step 4: Building Docker images...${NC}"
cd "$PROJECT_ROOT"
docker-compose build
echo -e "${GREEN}✓ Docker images built${NC}\n"

echo -e "${YELLOW}Step 5: Starting containers...${NC}"
docker-compose down 2>/dev/null || true
docker-compose up -d
echo -e "${GREEN}✓ Containers started${NC}\n"

echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}✓ Deployment Complete!${NC}"
echo -e "${GREEN}================================${NC}"
echo ""
echo "📍 Access your application:"
echo "   Frontend: http://localhost"
echo "   Backend API: http://localhost:5017"
echo "   API Docs: http://localhost:5017/swagger"
echo ""
echo "📊 Check container status:"
echo "   docker-compose ps"
echo ""
echo "📋 View logs:"
echo "   docker-compose logs -f"
echo ""
echo "🛑 Stop application:"
echo "   docker-compose down"
echo ""
