# QR Code Scanner with Google Sheets Integration

A React Native mobile application that scans QR codes and automatically logs the data to a Google Sheet. Built with Expo and integrated with Google Apps Script for seamless data storage.

## Features

- 📱 QR Code scanning using device camera
- 📊 Real-time data logging to Google Sheets
- ⏰ Automatic timestamp recording in IST
- 🔄 Debounced scanning to prevent duplicates
- 📱 Cross-platform (iOS & Android)
- 🔒 Secure data storage through Google's infrastructure

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Google account
- Google Sheet for data storage

## Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd qr-code-scanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Google Apps Script**
   - Create a new Google Sheet
   - Go to Extensions > Apps Script
   - Copy the Apps Script code from `appsScriptService.js`
   - Deploy as a web app
   - Copy the deployment URL

4. **Update Apps Script URL**
   - Open `appsScriptService.js`
   - Replace `APPS_SCRIPT_URL` with your deployment URL

5. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

6. **Run on device**
   - Scan the QR code with Expo Go app (Android)
   - Press 'i' for iOS simulator
   - Press 'a' for Android emulator

## Project Structure

```
qr-code-scanner/
├── App.js                 # Main application entry point
├── QRScanner.js           # QR code scanning component
├── appsScriptService.js   # Google Apps Script integration
├── package.json           # Project dependencies
└── README.md             # Project documentation
```

### File Descriptions

#### App.js
- Main application component
- Sets up navigation
- Configures app structure

#### QRScanner.js
- Handles camera permissions
- Implements QR code scanning
- Manages scan debouncing
- Communicates with Apps Script

#### appsScriptService.js
- Manages Google Sheets integration
- Handles data formatting
- Manages API communication
- Handles error cases

## How It Works

1. **Scanning Process**
   - User opens app and grants camera permission
   - Camera view shows QR code scanning interface
   - When QR code is detected, data is captured

2. **Data Storage**
   - Scanned data is sent to Google Apps Script
   - Apps Script adds timestamp in IST
   - Data is appended to Google Sheet
   - Success/failure message shown to user

3. **Google Sheet Structure**
   ```
   | Timestamp (IST)     | Barcode       |
   |--------------------|---------------|
   | 2024-04-11 10:23:45| 8907661010084 |
   ```

## Dependencies

- expo: Mobile app framework
- expo-camera: Camera access
- expo-barcode-scanner: QR code scanning
- @react-navigation: Navigation
- axios: HTTP requests
- expo-permissions: Permission handling

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository. 