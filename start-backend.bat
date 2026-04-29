@echo off
echo ========================================
echo   Infocera Backend Server Starter
echo ========================================
echo.

cd backend

echo Checking if dependencies are installed...
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
) else (
    echo Dependencies already installed ✓
)

echo.
echo Starting backend server...
echo.
echo Backend will run on: http://localhost:5000
echo API endpoints: http://localhost:5000/api
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
