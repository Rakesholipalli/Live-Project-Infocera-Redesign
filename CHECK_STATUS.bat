@echo off
color 0A
echo.
echo ========================================
echo   INFOCERA BACKEND STATUS CHECK
echo ========================================
echo.

echo [1] Checking if backend folder exists...
if exist "backend\" (
    echo     ✓ Backend folder found
) else (
    echo     ✗ Backend folder not found
    goto :end
)

echo.
echo [2] Checking if dependencies are installed...
if exist "backend\node_modules\" (
    echo     ✓ Dependencies installed
) else (
    echo     ✗ Dependencies not installed
    echo     Run: cd backend ^&^& npm install
)

echo.
echo [3] Checking .env configuration...
if exist "backend\.env" (
    echo     ✓ .env file exists
    findstr /C:"YOUR_PASSWORD_HERE" "backend\.env" >nul
    if errorlevel 1 (
        echo     ✓ MongoDB password configured
    ) else (
        echo     ⚠ MongoDB password NOT configured
        echo     Action: Update backend\.env with your MongoDB password
    )
) else (
    echo     ✗ .env file not found
)

echo.
echo [4] Checking if backend is running...
curl -s http://localhost:5000/api/health >nul 2>&1
if errorlevel 1 (
    echo     ✗ Backend is NOT running
    echo     Action: Run start-backend.bat
) else (
    echo     ✓ Backend is RUNNING on port 5000
)

echo.
echo [5] Checking test page...
if exist "test-backend.html" (
    echo     ✓ Test page available
    echo     Open: test-backend.html in browser
) else (
    echo     ✗ Test page not found
)

echo.
echo ========================================
echo   QUICK ACTIONS
echo ========================================
echo.
echo   1. Start backend:     start-backend.bat
echo   2. Test backend:      Open test-backend.html
echo   3. View docs:         QUICK_START.md
echo   4. Next steps:        NEXT_STEPS.md
echo.

:end
pause
