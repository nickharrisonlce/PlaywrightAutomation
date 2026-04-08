// Author: Nicholas H
const { request } = require('@playwright/test');

async function makeGetRequest() {
    const apiRequestContext = await request.newContext();
    
    try {
        const response = await apiRequestContext.get('https://api.example.com/data');
        const status = response.status();
        const data = await response.json();
        
        console.log('Status:', status);
        console.log('Response:', data);
        
        return data;
    } catch (error) {
        console.error('Request failed:', error);
    } finally {
        await apiRequestContext.dispose();
    }
}

makeGetRequest();