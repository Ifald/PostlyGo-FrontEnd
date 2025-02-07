@echo off
netstat -ano | findstr :3000
echo Kill process...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :3000') do taskkill /PID %%a /F
echo Port 3000 OK!

echo Starting Frontend Server...
start cmd /k "npm run dev"

pause

