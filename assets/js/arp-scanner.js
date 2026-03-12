// Simulated ARP scanner for educational purposes
document.addEventListener('DOMContentLoaded', function() {
    const scanBtn = document.getElementById('scan-btn');
    const resultsDiv = document.getElementById('results');
    
    // Sample MAC addresses (simulated)
    const sampleMacs = [
        'a6:7f:7d:ba:c7:d9',
        'bc:70:7a:9a:c0:87', 
        '3d:60:7a:96:c0:87',
        '4e:71:7b:97:c1:86',
        '5f:82:8c:a8:d2:97',
        '60:93:9d:b9:e3:a8',
        '71:a4:ae:ca:f4:b9',
        '82:b5:bf:db:g5:ca'
    ];
    
    const vendors = ['Router', 'Dell Inc', 'HP Inc', 'Unknown', 'Apple Inc', 'Samsung', 'Cisco', 'Microsoft'];
    
    scanBtn.addEventListener('click', function() {
        const networkRange = document.getElementById('network-range').value;
        let resultText = `# ARP Scan Results - ${new Date().toISOString().split('T')[0]}\n`;
        resultText += `# Network: ${networkRange}\n\n`;
        resultText += 'IP Address        MAC Address         Vendor\n';
        resultText += '---------------------------------------------\n';
        
        // Generate random IPs in the range
        const baseIp = networkRange.split('/')[0];
        const [a, b, c] = baseIp.split('.');
        
        for (let i = 1; i <= 8; i++) {
            const ip = `${a}.${b}.${c}.${i}`;
            const mac = sampleMacs[i-1] || '00:00:00:00:00:00';
            const vendor = vendors[i-1] || 'Unknown';
            resultText += `${ip.padEnd(17)} ${mac.padEnd(19)} ${vendor}\n`;
        }
        
        resultsDiv.textContent = resultText;
    });
});