const productsData = [
    // === PROCESSORS ===
    {
        id: "2500P-J750",
        name: "2500P-J750 Janus PAC",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v1.24",
        description: "Next-generation Programmable Automation Controller providing 3MB of project memory, native MQTT, and direct integration into existing 2500 Series and legacy Simatic 505 racks.",
        specs: ["Project Memory: 3MB", "Protocols: MQTT, TCP/IP, Profibus", "Speed: 10x legacy execution"]
    },
    {
        id: "2500C-J750",
        name: "2500C-J750 Compact Janus PAC",
        category: "Processor",
        line: "2500 Compact",
        status: "Active",
        firmware: "v1.24",
        description: "Compact form-factor Janus PAC designed for space-conscious installations while maintaining full Janus processing power and IIoT capabilities.",
        specs: ["Project Memory: 3MB", "Form Factor: Compact", "Native IIoT Protocols"]
    },
    {
        id: "2500-C300",
        name: "2500-C300 Classic CPU",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v9.21",
        description: "Mid-range plug-and-play classic CPU replacement featuring 512K of user memory, designed for standard automation tasks within existing 2500 Series/Simatic 505 footprints.",
        specs: ["User Memory: 512K", "Execution Speed: 0.1ms/K", "RBC Support: Up to 7 bases"]
    },
    {
        id: "2500-C200",
        name: "2500-C200 Classic CPU",
        category: "Processor",
        line: "2500 Classic",
        status: "Mature",
        firmware: "v9.21",
        description: "Compact classic CPU replacement featuring 256K of user memory. This module provides direct mechanical and functional compatibility for legacy system maintenance.",
        specs: ["User Memory: 256K", "Execution Speed: 0.1ms/K", "Lifecycle Status: Mature Support"]
    },
    {
        id: "2500-C400",
        name: "2500-C400 Classic CPU",
        category: "Processor",
        line: "2500 Classic",
        status: "Active",
        firmware: "v9.21",
        description: "High-performance classic plug-and-play CPU replacement featuring 3072K of user memory.",
        specs: ["User Memory: 3072K", "Execution Speed: 0.1ms/K", "RBC Support: Up to 7 bases"]
    },

    // === COMMUNICATIONS ===
    {
        id: "2573-MOD",
        name: "2573-MOD Modbus Adapter",
        category: "Communications",
        line: "2500 Classic",
        status: "Active",
        firmware: "v4.06",
        description: "Serial and Ethernet Modbus network adapter, enabling seamless Modbus RTU and Modbus TCP/IP communication for legacy and modern networks.",
        specs: ["Ports: RS-232, RS-485, Ethernet", "Modes: Master and Slave", "Isolation: 1500V RMS"]
    },
    {
        id: "2572-A",
        name: "2572-A Ethernet Adapter",
        category: "Communications",
        line: "2500 Classic",
        status: "Active",
        firmware: "v2.32",
        description: "Fast Ethernet communications adapter providing TCP/IP network access to the 2500 Series backplane.",
        specs: ["Speed: 10/100 Base-T", "Sockets: Up to 8 concurrent", "DHCP/Static Config"]
    },

    // === SPECIALTY & DIGITAL I/O ===
    {
        id: "2550-A",
        name: "2550-A Analog Input Module",
        category: "Analog I/O",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "8-Channel high-density analog input card designed for precision industrial instrumentation loops.",
        specs: ["Channels: 8 Isolated", "Input Ranges: 0-5V, 0-10V, 4-20mA", "Resolution: 16-bit"]
    },
    {
        id: "2580",
        name: "2580 Isolated AC Input",
        category: "Digital Input",
        line: "2500 Classic",
        status: "Active",
        firmware: "N/A",
        description: "16-Point isolated AC input module for sensing field operations safely across high-voltage variances.",
        specs: ["Points: 16 Isolated", "Voltage: 95-132 VAC", "Delay: 4.5ms"]
    }
];
