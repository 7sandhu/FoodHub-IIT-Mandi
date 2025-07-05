#!/usr/bin/env node

const axios = require('axios');
const { performance } = require('perf_hooks');

// Configuration
const BASE_URL = process.env.BACKEND_URL || 'http://localhost:8080';
const TEST_ENDPOINTS = [
    '/ping',
    '/products',
    '/auth/login',
];

// Performance testing function
async function testEndpointPerformance(endpoint) {
    const url = `${BASE_URL}${endpoint}`;
    const results = [];
    const iterations = 5;

    console.log(`\nTesting: ${url}`);
    console.log('-'.repeat(50));

    for (let i = 0; i < iterations; i++) {
        try {
            const startTime = performance.now();
            
            const response = await axios.get(url, {
                timeout: 10000,
                validateStatus: () => true // Accept any status code
            });
            
            const endTime = performance.now();
            const duration = endTime - startTime;
            
            results.push({
                iteration: i + 1,
                duration: Math.round(duration),
                status: response.status,
                size: JSON.stringify(response.data).length
            });
            
            console.log(`  ${i + 1}. ${Math.round(duration)}ms - Status: ${response.status} - Size: ${JSON.stringify(response.data).length} bytes`);
            
        } catch (error) {
            console.log(`  ${i + 1}. ERROR: ${error.message}`);
            results.push({
                iteration: i + 1,
                duration: null,
                status: 'ERROR',
                error: error.message
            });
        }
        
        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Calculate statistics
    const successfulRequests = results.filter(r => r.duration !== null);
    if (successfulRequests.length > 0) {
        const durations = successfulRequests.map(r => r.duration);
        const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
        const minDuration = Math.min(...durations);
        const maxDuration = Math.max(...durations);
        
        console.log(`\n  Summary:`);
        console.log(`    Average: ${Math.round(avgDuration)}ms`);
        console.log(`    Min: ${minDuration}ms`);
        console.log(`    Max: ${maxDuration}ms`);
        console.log(`    Success Rate: ${successfulRequests.length}/${iterations} (${Math.round(successfulRequests.length/iterations*100)}%)`);
    }

    return results;
}

// Main execution
async function runPerformanceTests() {
    console.log('🚀 FoodHub Performance Testing Tool');
    console.log('='.repeat(50));
    console.log(`Testing backend at: ${BASE_URL}`);
    
    const allResults = {};
    
    for (const endpoint of TEST_ENDPOINTS) {
        allResults[endpoint] = await testEndpointPerformance(endpoint);
    }
    
    console.log('\n📊 Performance Test Complete!');
    console.log('='.repeat(50));
    
    // Overall summary
    let totalSuccessful = 0;
    let totalRequests = 0;
    let totalDuration = 0;
    
    for (const [endpoint, results] of Object.entries(allResults)) {
        const successful = results.filter(r => r.duration !== null);
        totalSuccessful += successful.length;
        totalRequests += results.length;
        
        if (successful.length > 0) {
            const avgDuration = successful.reduce((a, b) => a + b.duration, 0) / successful.length;
            totalDuration += avgDuration;
            console.log(`${endpoint}: ${Math.round(avgDuration)}ms avg`);
        }
    }
    
    console.log(`\nOverall Success Rate: ${Math.round(totalSuccessful/totalRequests*100)}%`);
    console.log(`Average Response Time: ${Math.round(totalDuration/TEST_ENDPOINTS.length)}ms`);
}

// Run if called directly
if (require.main === module) {
    runPerformanceTests().catch(console.error);
}

module.exports = { runPerformanceTests, testEndpointPerformance };
