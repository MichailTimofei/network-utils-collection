# Network Utilities Collection

A collection of lightweight network diagnostic tools and utilities for system administrators and cybersecurity students. This repository includes an ARP table scanner, MAC address formatter, and network log parser for educational and professional use.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/net-tools-dev/network-utils-collection)](https://github.com/net-tools-dev/network-utils-collection/issues)
[![GitHub stars](https://img.shields.io/github/stars/net-tools-dev/network-utils-collection)](https://github.com/net-tools-dev/network-utils-collection/stargazers)
[![Version](https://img.shields.io/badge/version-1.2.0-blue)](https://github.com/net-tools-dev/network-utils-collection/releases)

## Features

- 🖥️ **ARP Table Scanner**: Simulates network ARP scanning to identify connected devices on local networks
- 📋 **MAC Address Formatter**: Validates and formats MAC addresses in multiple standards (IEEE, EUI-48, EUI-64)
- 📊 **Network Log Parser**: Parses common network log formats for analysis and troubleshooting
- 🎯 **Vendor Lookup**: Identifies device manufacturers from MAC OUI (Organizationally Unique Identifier) prefixes
- 📁 **Sample Data**: Includes sample ARP logs and OUI database for testing and learning

## Quick Start

### Web Interface

Simply open `index.html` in any modern web browser to access the interactive tools:

```bash
# Clone the repository
git clone https://github.com/net-tools-dev/network-utils-collection.git

# Navigate to the project directory
cd network-utils-collection

# Open in default browser (Linux/macOS)
open index.html

# Open in default browser (Windows)
start index.html

# Or serve with a local web server
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

### Using Sample Data

The repository includes sample network data files for testing:

```bash
# View sample ARP log
cat assets/data/sample_arp_log.txt

# Check vendor OUI database
cat assets/data/vendor_oui.csv
```

## Tools Overview

### ARP Table Scanner

The ARP scanner tool simulates network discovery by generating realistic ARP table entries. Useful for:

- Learning how ARP protocol works
- Testing network monitoring tools
- Demonstrating network enumeration techniques

**Input**: Network range in CIDR notation (e.g., `192.168.1.0/24`)

**Output**: Formatted ARP table with IP addresses, MAC addresses, and vendor names

### MAC Address Formatter

Convert MAC addresses between different formats:

| Format | Example |
|--------|---------|
| Colon-separated | `00:1A:2B:3C:4D:5E` |
| Hyphen-separated | `00-1A-2B-3C-4D-5E` |
| Cisco format | `001a.2b3c.4d5e` |
| Raw (no separator) | `001A2B3C4D5E` |

### Vendor Lookup

Uses the IEEE OUI database to identify manufacturers from MAC addresses:

```
00:1A:2B → Cisco Systems
3C:5A:B4 → Apple Inc
F0:18:98 → Dell Inc
```

## Project Structure

```
network-utils-collection/
├── index.html              # Main web interface
├── assets/
│   ├── css/
│   │   └── style.css       # Styling for web tools
│   ├── js/
│   │   └── arp-scanner.js  # ARP scanner logic
│   └── data/
│       ├── sample_arp_log.txt    # Sample ARP log data
│       └── vendor_oui.csv        # IEEE OUI vendor database
├── _config.yml             # Jekyll configuration
├── .nojekyll              # Disable Jekyll processing
├── README.md              # This file
├── LICENSE                # MIT License
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment
```

## Browser Compatibility

| Browser | Minimum Version |
|---------|-----------------|
| Chrome | 80+ |
| Firefox | 75+ |
| Safari | 13+ |
| Edge | 80+ |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- IEEE OUI database for vendor identification
- Network administrator community for feature suggestions
- Open source contributors

## Disclaimer

This tool is provided for educational and legitimate network administration purposes only. The authors are not responsible for any misuse or damage caused by this software.

---

**Note**: This project is actively maintained. For issues and feature requests, please visit our [GitHub Issues](https://github.com/net-tools-dev/network-utils-collection/issues) page.
