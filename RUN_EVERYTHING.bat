@echo off
color 0B
echo.
echo ========================================
echo   INFOCERA FULL STACK LAUNCHER
echo ========================================
echo.

echo This will start:
echo   1. Backend Server (Port 5000)
echo   2. Frontend Server (Port 3000)
echo.

echo Checking MongoDB configuration...
findstr /C:"YOUR_PASSWORD_HERE" "backend\.env" >nul
if not errorlevel 1 (
    color 0C
    echo.
    echo ========================================
    echo   ERROR: MongoDB Not Configured!
    echo ========================================
    echo.
    echo Please update backend\.env file first:
    echo   1. Open: backend\.env
    echo   2. Replace: YOUR_PASSWORD_HERE
    echo   3. With: Your actual MongoDB password
    echo.
    echo Get password from: https://cloud.mongodb.com
    echo.
    pause
    exit /b 1
)

echo ✓ MongoDB configured
echo.

echo Starting Backend Server...
start "Infocera Backend" cmd /k "cd backend && npm run dev"

echo Waiting for backend to start...
timeout /t 5 /nobreak >nul

echo.
echo Starting Frontend Server...
start "Infocera Frontend" cmd /k "npx serve ."

echo.
echo ========================================
echo   SERVERS STARTING...
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Two terminal windows will open:
echo   1. Backend Server (keep running)
echo   2. Frontend Server (keep running)
echo.
echo Your browser will open automatically...
echo.

timeout /t 3 /nobreak >nul

echo Opening browser...
start http://localhost:3000

echo.
echo ========================================
echo   ALL SYSTEMS RUNNING!
echo ========================================
echo.
echo To stop servers:
echo   - Press Ctrl+C in each terminal window
echo.
echo To test backend:
echo   - Open: test-backend.html
echo.
pause
