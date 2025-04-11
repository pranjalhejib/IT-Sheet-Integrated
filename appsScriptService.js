// appsScriptService.js
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzlrBiH8MdFbkczIhqBABB3S1DIGc9eK2gnIMMhwxEb2fcYIkYx4_W_69NwM22Jvugvjw/exec';

// Initialize sheet with headers if needed
export const initializeSheet = async () => {
  try {
    // Check if the API is working
    const response = await fetch(APPS_SCRIPT_URL);
    
    // Check if response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Get the text first to debug
    const text = await response.text();
    console.log('Response text:', text);
    
    // Try to parse as JSON
    let result;
    try {
      result = JSON.parse(text);
    } catch (parseError) {
      console.error('Failed to parse response as JSON:', parseError);
      // If it's not JSON, assume it's working if we got a response
      return true;
    }
    
    if (result && result.success) {
      console.log('Sheet initialization successful');
      return true;
    } else {
      console.error('Sheet initialization failed');
      return false;
    }
  } catch (error) {
    console.error('Error initializing sheet:', error);
    return false;
  }
};

// Function to append data to Google Sheet
export const appendToSheet = async (data) => {
  try {
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        barcode: data
      }),
    });
    
    // Check if response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Get the text first to debug
    const text = await response.text();
    console.log('Response text:', text);
    
    // Try to parse as JSON
    let result;
    try {
      result = JSON.parse(text);
    } catch (parseError) {
      console.error('Failed to parse response as JSON:', parseError);
      // If we got a response but it's not JSON, assume it worked
      console.log('Data likely appended to sheet despite JSON parse error');
      return true;
    }
    
    if (result && result.success) {
      console.log('Data successfully appended to sheet:', {
        data
      });
      return true;
    } else {
      console.error('Failed to append data to sheet:', result);
      return false;
    }
  } catch (error) {
    console.error('Error appending to sheet:', error);
    return false;
  }
}; 